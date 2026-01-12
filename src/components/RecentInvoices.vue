<template>
   <section class="card p-8">
      <div
         class="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between"
      >
         <h3 class="text-xl font-medium text-black">Recent Invoices</h3>

         <button class="btn blue-outline w-60">View All invoices</button>
      </div>

      <div v-for="(item, index) in recentInvoices" :key="index">
         <p class="uppercase text-xs text-black font-medium mt-11 mb-7">
            {{ item.date }}
         </p>

         <div class="flex flex-col gap-y-14 sm:pl-6">
            <RecentInvoiceInfo
               v-for="(invoice, id) in item.items"
               :key="id"
               :invoice="invoice"
            />
         </div>
      </div>
   </section>
</template>

<script setup>
import RecentInvoiceInfo from './RecentInvoiceInfo.vue';

const recentInvoices = [
   {
      date: 'TODAY - 27TH NOVEMBER, 2022',
      items: [
         {
            invoiceNumber: '1023494 - 2304',
            dueDate: 'May 19th, 2023',
            amount: 1311750.12,
            status: 'Paid',
         },
         {
            invoiceNumber: '1023494 - 2304',
            dueDate: 'May 19th, 2023',
            amount: 1311750.12,
            status: 'Overdue',
         },
      ],
   },
   {
      date: '8TH DECEMBER, 2022',
      items: [
         {
            invoiceNumber: '1023494 - 2304',
            dueDate: 'May 19th, 2023',
            amount: 1311750.12,
            status: 'Draft',
         },
         {
            invoiceNumber: '1023494 - 2304',
            dueDate: 'May 19th, 2023',
            amount: 1311750.12,
            status: 'Pending Payment',
         },
      ],
   },
];
</script>
