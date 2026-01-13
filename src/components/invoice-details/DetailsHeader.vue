<template>
   <div
      class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between"
   >
      <div>
         <h1 class="text-black font-bold text-2xl lg:text-3xl">
            Invoice - 1023494 - 2304
         </h1>
         <p class="text-sm md:text-base mt-2 text-grey-11">
            View the details and activity of this invoice
         </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-2 md:gap-6">
         <button class="btn blue-outline w-full sm:w-60">
            Download as pdf
         </button>

         <div class="flex gap-4 md:gap-x-6">
            <button class="btn blue w-full sm:w-48">Send Invoice</button>
            <div class="relative">
               <button
                  class="btn white-outline px-6"
                  @click="toggleMore = !toggleMore"
               >
                  More
               </button>
               <ul class="more-options" v-if="toggleMore">
                  <li>DUPLICATE INVOICE</li>
                  <li>GET SHARABLE LINK</li>
               </ul>
            </div>
         </div>
      </div>
   </div>

   <p
      class="btn text-blue-10 border border-blue-12 bg-blue-11 text-[9px] sm:text-[10px] w-36 !h-10 mt-6"
   >
      Partial payment
   </p>
</template>

<script setup>
import { ref } from 'vue';

const toggleMore = ref(false);
</script>

<style scoped>
.more-options {
   @apply text-grey-11 text-sm font-medium border border-grey-10 absolute
   rounded-3xl p-7 flex flex-col gap-y-7 w-[262px] mt-3 bg-white right-0;
}
</style>
