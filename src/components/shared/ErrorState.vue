<template>
   <div class="flex-center py-10 max-w-[300px] mx-auto">
      <div>
         <div class="flex-center bg-green-11 rounded-full h-28 w-28 m-auto">
            <img v-if="icon" :src="icon" alt="" height="70" width="70" />
         </div>
         <p class="text-center text-xl font-medium my-3">{{ title }}</p>
         <p class="text-center my-3">{{ subTitle }}</p>
         <div class="flex-center">
            <slot />
         </div>
      </div>
   </div>
</template>

<script setup>
defineProps({
   title: String,
   subTitle: String,
   icon: String,
});
</script>
