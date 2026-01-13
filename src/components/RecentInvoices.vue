<template>
   <section class="card p-8">
      <div
         class="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between"
      >
         <h3 class="text-xl font-medium text-black">Recent Invoices</h3>

         <button class="btn blue-outline w-60">View All invoices</button>
      </div>

      <SkeletonLoader
         v-if="isLoading"
         type="paragraph, table-row, table-row"
         class="mt-11"
      />
      <ErrorState
         v-else-if="showError"
         :title="errorTitle"
         :sub-title="errorSubtext"
      />
      <div v-else>
         <div v-for="(item, index) in recentInvoices" :key="index">
            <p class="uppercase text-xs text-black font-medium mt-11 mb-7">
               {{ item.date }}
            </p>

            <div class="flex flex-col gap-y-14 sm:pl-6">
               <RecentInvoiceInfo
                  v-for="(invoice, id) in item.items"
                  :key="id"
                  :invoice="invoice"
                  @getInvoice="getInvoice"
               />
            </div>
         </div>
      </div>
   </section>
   <Invoice v-if="showInvoice" @close="showInvoice = false" />
</template>

<script setup>
import { ref } from 'vue';
import { useErrorState, useGetRecentInvoices } from '@/composables/useApi';
import ErrorState from './shared/ErrorState.vue';
import SkeletonLoader from './shared/SkeletonLoader.vue';
import RecentInvoiceInfo from './RecentInvoiceInfo.vue';
import Invoice from '@/components/invoice-details/Invoice.vue';

const { isLoading, data: recentInvoices, error } = useGetRecentInvoices();
const { showError, errorTitle, errorSubtext } = useErrorState(
   error,
   recentInvoices
);

const selectedInvoice = ref('');
const showInvoice = ref(false);

function getInvoice(param) {
   console.log(param);
   showInvoice.value = true;
   selectedInvoice.value = param;
}
</script>
