<template>
   <div class="text-input w-full relative" :class="{ 'has-error': !!error }">
      <label v-if="label" :for="id" class="text-sm mb-1 text-dark-grey block">
         {{ label }}
      </label>

      <input
         :id="id"
         :type="computedType"
         :placeholder="placeholder"
         :value="modelValue"
         @input="onInput"
         @blur="onBlur"
         :class="{ 'border-red-500': error }"
      />

      <span v-if="error" class="error-msg">
         {{ error }}
      </span>

      <div v-if="type === 'password'" class="absolute right-6 top-[2.7rem]">
         <button type="button" @click="togglePassword">
            <img
               :src="`/assets/icons/${showPassword ? 'eye-open.svg' : 'eye-open.svg'}`"
               class="w-5"
            />
         </button>
      </div>
   </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
   modelValue: {
      type: [String, Number],
      default: '',
   },
   label: String,
   placeholder: String,
   type: {
      type: String,
      default: 'text',
   },
   id: String,
   error: String,
   blur: Function,
});

const emit = defineEmits(['update:modelValue']);

const showPassword = ref(false);

const computedType = computed(() =>
   props.type === 'password'
      ? showPassword.value
         ? 'text'
         : 'password'
      : props.type
);

const togglePassword = () => {
   showPassword.value = !showPassword.value;
};

const onInput = e => {
   emit('update:modelValue', e.target.value);
};

const onBlur = () => {
   props.blur?.();
};
</script>

<style scoped>
.text-input input {
   @apply w-full px-5 h-14 border rounded-xl;
   outline: none;
   transition:
      border-color 0.3s ease-in-out,
      color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
}
.text-input input::placeholder {
   @apply text-grey-11 font-normal text-sm;
}
.text-input input:focus {
   @apply border border-blue-10;
}

.text-input.has-error input {
   @apply border border-red-500;
}

.error-msg {
   @apply text-red-500 absolute right-0 text-xs pt-[2px] -bottom-5;
}
</style>
