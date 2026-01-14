<template>
   <ModalLayout customClass="max-w-[1330px]">
      <div class="pr-6 h-[calc(100vh-200px)] overflow-y-scroll">
         <DetailsHeader :invoice="invoice" />

         <div
            class="border border-grey-10 rounded-3xl py-6 px-6 flex-items gap-x-2 my-8 xl:w-fit"
         >
            <p class="text-xs text-grey-15 pr-2">REMINDERS</p>
            <div
               class="flex items-center gap-x-2 overflow-x-auto scrollbar-hide xl:overflow-visible"
            >
               <button
                  v-for="reminder in reminders"
                  :key="reminder.id"
                  :class="getButtonClasses(reminder.active)"
               >
                  {{ reminder.label }}
                  <img
                     v-if="reminder.active"
                     src="/assets/icons/tick-circle.svg"
                     alt=""
                  />
               </button>
            </div>
         </div>

         <div
            class="flex flex-col gap-y-4 xl:grid grid-cols-[60%_auto] xl:gap-x-10"
         >
            <div class="grey-border p-4 sm:p-8">
               <InvoiceSenderDetails />
               <InvoiceItems />
            </div>

            <InvoiceActivity />
         </div>
      </div>
   </ModalLayout>
</template>

<script setup>
import { ref } from 'vue';
import DetailsHeader from './DetailsHeader.vue';
import InvoiceItems from './InvoiceItems.vue';
import InvoiceSenderDetails from './InvoiceSenderDetails.vue';
import InvoiceActivity from './InvoiceActivity.vue';
import ModalLayout from '../shared/ModalLayout.vue';

defineProps({
   invoice: {
      type: Object,
      default: () => ({}),
   },
});

const reminders = ref([
   { id: 1, label: '14 days before due date', active: true },
   { id: 2, label: '7 days before due date', active: true },
   { id: 3, label: '3 days before due date', active: false },
   { id: 4, label: '24 hrs before due date', active: false },
   { id: 5, label: 'On the due date', active: false },
]);

const getButtonClasses = isActive => {
   return [
      'filter-btn',
      'flex-shrink-0',
      'flex',
      'items-center',
      'gap-x-2',
      isActive ? 'bg-green-10' : 'border border-grey-10',
   ];
};
</script>

<style scoped>
.filter-btn {
   @apply text-dark-grey text-sm font-medium rounded-full px-4 py-3;
   white-space: nowrap;
}
</style>
