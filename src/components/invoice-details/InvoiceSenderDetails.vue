<template>
   <div class="bg-fushia rounded-[40px] p-8">
      <div class="flex flex-col gap-10 md:flex-row md:justify-between">
         <div>
            <p class="text-xs font-medium text-grey-11 mb-4 tracking-widest">
               SENDER
            </p>

            <div
               class="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4"
            >
               <img
                  src="/assets/icons/sender-photo.svg"
                  alt=""
                  class="h-16 w-16"
               />
               <div>
                  <p class="font-medium text-black">Fabulous Enterprise</p>
                  <div class="text-grey-11 mt-2 text-xs">
                     <a href="">+386 989 271 3115</a>
                     <address class="not-italic my-2">
                        1331 Hart Ridge Road 48436 Gaines, MI
                     </address>
                     <a href="">info@fabulousenterise.co</a>
                  </div>
               </div>
            </div>
         </div>

         <div>
            <p class="text-xs font-medium text-grey-11 mb-4 tracking-widest">
               CUSTOMER
            </p>

            <p class="font-medium text-black">Olaniyi Ojo Adewale</p>
            <div class="text-grey-11 mt-2 text-xs">
               <a href="" class="block mb-2">+386 989 271 3115</a>

               <a href="">info@fabulousenterise.co</a>
            </div>
         </div>
      </div>

      <p class="text-xs font-medium text-grey-11 mb-4 tracking-widest mt-8">
         INVOICE DETAILS
      </p>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
         <div v-for="(item, index) in invoiceDetails" :key="index">
            <p class="text-[10px] text-grey-15 tracking-widest">
               {{ item.text }}
            </p>
            <p class="text-black font-medium text-xs mt-1">
               {{ item.value }}
            </p>
         </div>
      </div>
   </div>
</template>

<script setup>
const invoiceDetails = [
   {
      text: 'INVOICE NO',
      value: 1023902390,
   },
   {
      text: 'ISSUE DATE',
      value: 'March 30th, 2023',
   },
   {
      text: 'DUE DATE',
      value: 'May 19th, 2023',
   },
   {
      text: 'BILLING CURRENCY',
      value: 'USD ($)',
   },
];
</script>
