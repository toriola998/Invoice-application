<template>
   <div class="flex-center py-10 max-w-[300px] mx-auto">
      <div>
         <p class="text-center text-lg font-medium mt-3">{{ title }}</p>
         <p class="text-center mt-1 mb-3">{{ subTitle }}</p>
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
