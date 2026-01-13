<template>
   <div class="flex-items gap-x-10 my-6">
      <p class="text-black font-medium text-lg md:text-xl">Items</p>
      <span class="bg-grey-10 h-[1px] w-full" />
   </div>

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
      <p class="text-black">{{ formatToDollar(item.total) }}</p>
   </div>

   <div class="max-w-[440px] ml-auto">
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
</script>
