<template>
   <main class="px-4 bg-grey-12 min-h-screen">
      <div
         class="flex flex-col gap-4 md:flex-row justify-between md:items-center mb-10"
      >
         <h2 class="text-black-1 font-medium text-2xl md:text-3xl">Invoice</h2>

         <div class="flex flex-col sm:flex-row gap-4 sm:gap-x-8">
            <button class="btn white-outline w-full sm:w-48">
               See what's new
            </button>
            <button class="btn blue w-full sm:w-48">Create</button>
         </div>
      </div>

      <Analytics />
      <InvoiceActions />

      <div class="mt-6 gap-10 xl:grid grid-cols-2">
         <RecentInvoices />
         <RecentActivities />
      </div>
   </main>
</template>

<script setup>
import Analytics from '@/components/Analytics.vue';
import InvoiceActions from '@/components/InvoiceActions.vue';
import RecentActivities from '@/components/RecentActivities.vue';
import RecentInvoices from '@/components/RecentInvoices.vue';
</script>
