<template>
   <div class="bg-grey-12 min-h-screen flex-center px-4">
      <div class="sm:w-[500px] bg-white p-6 md:p-10 rounded-3xl shadow w-full">
         <img src="/assets/icons/logo.svg" alt="" class="mx-auto" />

         <h1
            class="font-medium text-lg text-center sm:text-[28px] text-dark-grey tracking-widest my-5"
         >
            INVOICE
         </h1>

         <div
            class="text-input w-full relative"
            :class="{ 'has-error': !!emailError }"
         >
            <label for="name" class="text-sm mb-1 text-dark-grey block"
               >Email</label
            >
            <input
               id="email"
               v-model="email"
               type="email"
               placeholder="Email"
               @blur="emailBlur"
               :class="{ 'border-red-500': emailError }"
            />
            <span v-if="emailError" class="error-msg">{{ emailError }}</span>
         </div>

         <div
            class="text-input w-full relative mt-6 mb-10"
            :class="{ 'has-error': !!passwordError }"
         >
            <label for="password" class="text-sm mb-1 text-dark-grey block">
               Password</label
            >
            <input
               id="password"
               v-model="password"
               placeholder="Password"
               :type="isPasswordVisible ? 'text' : 'password'"
               @blur="passwordBlur"
               :class="{ 'border-red-500': passwordError }"
            />
            <span v-if="passwordError" class="error-msg">{{
               passwordError
            }}</span>
            <div className="absolute right-6 top-[2.7rem]">
               <button type="button" @click="togglePassword">
                  <img
                     :src="`/assets/icons/${isPasswordVisible ? 'eye-open.svg' : 'eye-open.svg'}`"
                     alt="show/hide password"
                     class="w-5"
                  />
               </button>
            </div>
         </div>

         <div class="flex-col flex gap-y-3 mt-10">
            <TheButton
               text="Login"
               class="btn blue w-full"
               :is-loading="isSignInLoading"
               @action="handleLogin"
            />
            <TheButton
               text="Sign Up"
               class="btn blue-outline w-full"
               :is-loading="isSignUpLoading"
               @action="handleSignup"
            />
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref } from 'vue';
import {
   signInWithEmailAndPassword,
   createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '@/api';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import TheButton from '@/components/shared/TheButton.vue';

const router = useRouter();
const isSignInLoading = ref(false);
const isSignUpLoading = ref(false);

const validationSchema = yup.object({
   email: yup
      .string()
      .required('Email is required')
      .email('Must be a valid email'),
   password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
});

const { validate } = useForm({ validationSchema });

const {
   value: email,
   errorMessage: emailError,
   handleBlur: emailBlur,
} = useField('email');

const {
   value: password,
   errorMessage: passwordError,
   handleBlur: passwordBlur,
} = useField('password');

const isPasswordVisible = ref(false);
function togglePassword() {
   isPasswordVisible.value = !isPasswordVisible.value;
}

const handleLogin = async () => {
   const { valid } = await validate();
   if (!valid) return;

   isSignInLoading.value = true;
   try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      router.push('/');
   } catch (err) {
      toast.error(err.message);
   } finally {
      isSignInLoading.value = false;
   }
};

const handleSignup = async () => {
   const { valid } = await validate();
   if (!valid) return;

   isSignUpLoading.value = true;
   try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      router.push('/');
   } catch (err) {
      console.log(err, err.message);
      toast.error(err.message);
   } finally {
      isSignUpLoading.value = false;
   }
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

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
   -webkit-appearance: none;
   margin: 0;
}

/* Firefox */
input[type='number'] {
   -moz-appearance: textfield;
}
</style>
