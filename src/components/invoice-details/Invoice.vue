<template>
   <div class="modal-layout flex-center px-4">
      <div
         class="bg-white w-full relative rounded-[40px] modal-inner p-6 md:p-10"
      >
         <button
            class="bg-white h-16 w-16 rounded-full flex-center border border-grey-10 absolute -top-20 right-0"
         >
            <img src="/assets/icons/close.svg" alt="" />
         </button>

         <DetailsHeader />

         <!-- <div
            class="border border-grey-10 rounded-3xl py-6 px-6 flex-items gap-x-2 mt-8"
         >
            <p class="text-xs text-grey-15 pr-2">REMINDERS</p>
            <button
               class="filter-btn bg-green-10 flex-items gap-x-2"
            >
               14 days before due date
               <img src="/assets/icons/tick-circle.svg" alt="" />
            </button>
            <button
               class="filter-btn bg-green-10 flex-items gap-x-2"
            >
               7 days before due date
               <img src="/assets/icons/tick-circle.svg" alt="" />
            </button>
            <button class="filter-btn border border-grey-10">
               3 days before due date
            </button>
             <button class="filter-btn border border-grey-10">
               24 hrs days before due date
            </button>
            <button class="filter-btn border border-grey-10">
               On the due date
            </button>
         </div> -->

          <div
            class="border border-grey-10 rounded-3xl py-6 px-6 flex-items gap-x-2 my-8"
         >
            <p class="text-xs text-grey-15 pr-2">REMINDERS</p>
         <div class="flex items-center gap-x-2 overflow-x-auto scrollbar-hide md:overflow-visible">
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
      </div>
   </div>
</template>

<script setup>
import { ref } from 'vue';
import DetailsHeader from './DetailsHeader.vue';

const reminders = ref([
   { id: 1, label: '14 days before due date', active: true },
   { id: 2, label: '7 days before due date', active: true },
   { id: 3, label: '3 days before due date', active: false },
   { id: 4, label: '24 hrs before due date', active: false },
   { id: 5, label: 'On the due date', active: false },
])

const getButtonClasses = (isActive) => {
   return [
      'filter-btn', 'flex-shrink-0', 'flex', 'items-center', 'gap-x-2',
      isActive ? 'bg-green-10' : 'border border-grey-10'
   ]
}

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
   @apply text-dark-grey text-sm font-medium rounded-full px-4 py-3 ;
   white-space: nowrap;
}

.scrollbar-hide {
   -ms-overflow-style: none;
   scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
   display: none;
}
</style>
