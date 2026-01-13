<template>
   <div class="modal-layout">
      <div
         class="relative flex justify-center px-4 pt-20 pb-6 max-w-[1330px] mx-auto"
      >
         <div
            class="modal-inner bg-white w-full rounded-[40px] p-6 md:p-10 overflow-y-scroll no-scrollbar"
         >
            <button class="close-btn" @click="$emit('close')">
               <img src="/assets/icons/close.svg" alt="" />
            </button>

            <div class="pr-6 h-[calc(100vh-200px)] overflow-y-scroll">
               <DetailsHeader />

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
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref } from 'vue';
import DetailsHeader from './DetailsHeader.vue';
import InvoiceItems from './InvoiceItems.vue';
import InvoiceSenderDetails from './InvoiceSenderDetails.vue';
import RecentActivities from '../RecentActivities.vue';
import InvoiceActivity from './InvoiceActivity.vue';

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
@keyframes modalActive {
   from {
      transform: scale(0.7);
   }
   to {
      transform: scale(1);
   }
}

.modal-inner {
   animation-name: modalActive;
   animation-duration: 0.2s;
}

.modal-layout {
   background: rgba(0, 0, 0, 0.15);
   @apply left-0 bottom-0 top-0 right-0 z-[90] fixed h-full;
}

.filter-btn {
   @apply text-dark-grey text-sm font-medium rounded-full px-4 py-3;
   white-space: nowrap;
}

.scrollbar-hide {
   -ms-overflow-style: none;
   scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
   display: none;
}

.close-btn {
   @apply bg-white h-16 w-16 rounded-full flex items-center justify-center border
    border-grey-10 absolute top-[10px] right-4 z-50;
}
</style>
