<template>
   <article class="flex items-start gap-x-4 relative">
      <div
         class="absolute left-5 top-10 h-10 w-1 bg-gray-200"
         v-if="showTimeline"
      />

      <div class="relative">
         <img src="/assets/icons/image.svg" alt="" class="rounded-full" />
      </div>

      <!-- Invoice creation -->
      <div class="w-full">
         <p class="font-medium md:text-lg">{{ item.title }}</p>
         <p class="text-sm mt-1 text-grey-11">{{ item.timestamp }}</p>

         <div class="bg-light-grey-10 p-4 rounded-2xl mt-2 text-sm">
            <!--Create-->
            <p v-if="item.action === 'created'">
               <span class="text-grey-11">Created Invoice </span>
               <span class="font-medium">{{ item.invoiceId }}</span>
            </p>

            <!-- Sent -->
            <p v-else-if="item.action === 'sent'">
               <span class="text-grey-11">Sent invoice</span>
               <span class="font-medium"> {{ item.invoiceId }} </span>
               <span class="text-grey-11">to</span>
               <span class="font-medium"> {{ item.receiver }} </span>
            </p>

            <!-- Payment -->
            <p v-else-if="item.action === 'payment'">
               <span class="text-grey-11"
                  >You manually confirmed a {{ item.paymentType }} payment
                  of</span
               >
               <span class="font-medium">
                  ${{ formatToDollar(item.amount) }}
               </span>
            </p>
         </div>
      </div>
   </article>
</template>

<script setup>
import { formatToDollar } from '@/utils';
const props = defineProps({
   item: {
      type: Object,
      default: () => ({}),
   },
   showTimeline: {
      type: Boolean,
      default: false,
   },
});
</script>
