<template>
   <section>
      <div class="flex-items gap-x-10 my-6">
         <p class="text-black font-medium text-lg md:text-xl">Items</p>
         <span class="bg-grey-10 h-[1px] w-full" />
      </div>

      <div class="overflow-x-auto scrollbar-hide xl:overflow-visible">
         <div
            v-for="(item, index) in invoiceItems"
            :key="index"
            class="gap-10 grid grid-cols-[270px_auto_auto_auto] mb-12"
         >
            <div>
               <p class="text-black">{{ item.service }}</p>
               <p class="text-[13px] text-grey-15">
                  {{ item.description }}
               </p>
            </div>

            <p class="text-black">{{ item.quantity }}</p>
            <p class="text-black">{{ formatToDollar(item.unitPrice) }}</p>
            <p class="text-black text-end">{{ formatToDollar(item.total) }}</p>
         </div>

         <div class="w-[440px] ml-auto">
            <div class="flex items-start justify-between">
               <p class="text-sm text-grey-17">SUBTOTAL</p>
               <p class="text-lg text-end">$6,697,200.00</p>
            </div>
            <div class="flex items-start justify-between mt-[18px]">
               <p class="text-sm text-grey-17">DISCOUNT (2.5%)</p>
               <p class="text-lg text-end">$167,430.00</p>
            </div>

            <div class="text-dark-grey mt-10 flex items-start justify-between">
               <p class="font-medium text-lg">TOTAL AMOUNT DUE</p>
               <p class="font-bold text-xl md:text-2xl">$6,529,770.00</p>
            </div>
         </div>
      </div>
   </section>

   <!--********PAYMENT INFORMATION********------>

   <section class="p-4 sm:px-6 sm:py-4 grey-border !rounded-3xl mt-16">
      <p class="text-xs font-medium text-grey-11 mb-4 tracking-widest">
         PAYMENT INFORMATION
      </p>

      <div class="flex flex-wrap gap-x-14 gap-y-5">
         <div v-for="(item, index) in paymentInformation" :key="index">
            <p class="text-grey-15 text-[10px] tracking-widest">
               {{ item.text }}
            </p>
            <p class="text-xs text-black font-medium mt-1">{{ item.value }}</p>
         </div>
      </div>
   </section>

   <div class="bg-light-grey-10 px-6 py-4 rounded-3xl mt-6 pb-10">
      <p class="text-sm text-grey-17">NOTE</p>
      <p class="mt-1 text-grey-15">Thank you for your patronage</p>
   </div>
</template>

<script setup>
import { formatToDollar } from '@/utils';

const invoiceItems = [
   {
      service: 'Email Marketing',
      description:
         'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
      quantity: 10,
      unitPrice: 1500,
      total: 15000.0,
   },
   {
      service: 'Video looping effect',
      description: '',
      quantity: 6,
      unitPrice: 1110500,
      total: 666300.0,
   },
   {
      service: 'Graphic design for emails',
      description: 'Tet voluptatem accusantium',
      quantity: 7,
      unitPrice: 2750,
      total: 19250.0,
   },
   {
      service: 'Video looping effect',
      description: '',
      quantity: 6,
      unitPrice: 1110500,
      total: 666300.0,
   },
];

const paymentInformation = [
   { text: 'ACCOUNT NAME', value: '1023902390' },
   { text: 'ACCOUNT OPENING DATE', value: 'March 30th, 2023' },
   { text: 'ACH ROUTING NO', value: 'May 19th, 2023' },
   { text: 'BANK NAME', value: 'USD ($)' },
   { text: 'BANK ADDRESS', value: '1023902390' },
   { text: 'ACCOUNT NUMBER', value: 'March 30th, 2023' },
];
</script>
