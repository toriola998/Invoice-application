<template>
   <div class="lg:grid page-layout">
      <SideBar />
      <div class="px-4 bg-grey-12 min-h-screen md:px-10">
         <div class="max-w-[1500px] mx-auto pb-10">
            <Header class="hidden lg:flex" />
            <main>
               <div
                  class="flex flex-col gap-4 md:flex-row justify-between md:items-center mb-10 pt-10"
               >
                  <h2 class="text-black-1 font-medium text-2xl md:text-3xl">
                     Invoice
                  </h2>

                  <div class="flex flex-col sm:flex-row gap-4 sm:gap-x-8">
                     <button class="btn white-outline w-full sm:w-48">
                        See what's new
                     </button>
                     <button class="btn blue w-full sm:w-48">Create</button>
                  </div>
               </div>

               <Analytics />
               <InvoiceActions />

               <div
                  class="flex flex-col gap-y-5 mt-6 xl:gap-10 xl:grid grid-cols-[58%_auto]"
               >
                  <RecentInvoices />
                  <RecentActivities />
               </div>
            </main>
         </div>
      </div>
   </div>
   <Invoice />
</template>

<script setup>
import Analytics from '@/components/Analytics.vue';
import Header from '@/components/Header.vue';
import InvoiceActions from '@/components/InvoiceActions.vue';
import RecentActivities from '@/components/RecentActivities.vue';
import RecentInvoices from '@/components/RecentInvoices.vue';
import SideBar from '@/components/SideBar.vue';
import Invoice from '@/components/invoice-details/Invoice.vue';
</script>

<style scoped>
.page-layout {
   grid-template-columns: 280px auto;
}
</style>
