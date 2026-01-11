<template>
   <article class="grid grid-cols-3 justify-between">
      <div class="text-sm font-medium text-dark-grey">
         <p>Invoice -</p>
         <p>{{ invoice?.invoiceNumber }}</p>
      </div>

      <div>
         <p class="text-[10px] text-grey-15">DUE DATE</p>
         <p class="text-sm font-medium text-grey-11">{{ invoice?.dueDate }}</p>
      </div>

      <div>
         <p class="font-medium text-dark-grey">
            {{ formatToDollar(invoice?.amount) }}
         </p>
         <p
            class="mt-3 text-[10px] rounded-full max-w-fit px-4 h-7 flex-center uppercase font-medium"
            :class="getStatusColor(invoice?.status)"
         >
            {{ invoice?.status }}
         </p>
      </div>
   </article>
</template>

<script setup>
import { formatToDollar, getStatusColor } from '@/utils';

defineProps({
   invoice: {
      type: Object,
      default: {},
   },
});
</script>
