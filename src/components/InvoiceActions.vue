<template>
   <section>
      <h3 class="font-medium mt-10 mb-6">Invoice Actions</h3>

      <div
         class="flex flex-col gap-y-4 xl:grid-x-8 xl:grid grid-cols-3 xl:gap-x-8"
      >
         <div
            class="rounded-3xl px-10 py-8"
            :class="item.theme"
            v-for="(item, index) in invoiceActions"
            :key="index"
         >
            <img :src="item.icon" alt="" />
            <p class="text-xl md:text-[22px] font-medium mt-4">
               {{ item.text }}
            </p>
            <p class="text-sm mt-2">{{ item.subText }}</p>
         </div>
      </div>
   </section>
</template>

<script setup>
const invoiceActions = [
   {
      text: 'Create New Invoice',
      icon: '/assets/icons/money.svg',
      subText: 'Create new invoices easily',
      theme: 'text-white bg-blue-10',
   },
   {
      text: 'Change Invoice settings',
      icon: '/assets/icons/setting.svg',
      subText: 'Customise your invoices',
      theme: 'text-dark-grey bg-white',
   },
   {
      text: 'Manage Customer list',
      icon: '/assets/icons/profile-2user.svg',
      subText: 'Add and remove customers',
      theme: 'text-dark-grey bg-white',
   },
];
</script>
