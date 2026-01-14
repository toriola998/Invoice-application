<template>
   <div class="modal-layout">
      <div
         :class="`${customClass} relative flex justify-center px-4 pt-20 pb-6 mx-auto`"
      >
         <div
            :class="`modal-inner bg-white w-full rounded-[40px] p-6 md:p-10 overflow-y-scroll no-scrollbar`"
         >
            <button class="close-btn" @click="closeModal">
               <img src="/assets/icons/close.svg" alt="" />
            </button>

            <slot />
         </div>
      </div>
   </div>
</template>

<script setup>
import { inject } from 'vue';
defineProps({
   customClass: String,
});
const closeModal = inject('closeModal');
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
