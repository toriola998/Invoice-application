<template>
   <section class="flex flex-col gap-y-4 sm:grid grid-cols-2 xl:grid-cols-4 sm:gap-8">
      <div
         class="card py-8 px-10 w-full"
         v-for="(item, index) in analytics"
         :key="index"
      >
         <img src="/assets/icons/category.svg" />

         <div class="flex-items mt-5 gap-x-1 text-xs">
            <p class="text-grey-11 uppercase tracking-[0.15em]">
               {{ item.text }}
            </p>

            <div
               :style="{ backgroundColor: item.theme }"
               class="h-10 px-4 rounded-full flex-center font-medium"
            >
               {{ item.value }}
            </div>
         </div>

         <div class="flex font-medium items-center mt-2">
            <span class="text-[28px]">{{
               formatPrice(item.amount).dollars
            }}</span>
            <span class="text-sm text-grey-11 mt-2">{{
               formatPrice(item.amount).cents
            }}</span>
         </div>
      </div>
   </section>
</template>

<script setup>
const analytics = [
   {
      text: 'Total Paid',
      theme: '#B6FDD3',
      value: '1,289',
      amount: 4120102.76,
   },
   {
      text: 'Total Overdue',
      theme: '#FFB7BD',
      value: '13',
      amount: 23000.13,
   },
   {
      text: 'Total Draft',
      theme: '#D9D9E0',
      value: '08',
      amount: 12200.0,
   },
   {
      text: 'Total Unpaid',
      theme: '#F8E39B',
      value: '06',
      amount: 87102.0,
   },
];

const formatPrice = amount => {
   const dollars = Math.floor(amount);
   const cents = (amount % 1).toFixed(2).substring(2);

   return {
      dollars: '$' + dollars.toLocaleString('en-US'),
      cents: '.' + cents,
   };
};
</script>
