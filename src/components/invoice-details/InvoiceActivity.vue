<template>
   <div>
      <p class="font-medium text-lg md:text-xl mb-6">Invoice Activity</p>

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
      <div v-else class="flex flex-col gap-y-6">
         <ActivityCard
            v-for="(item, index) in activities"
            :key="index"
            :item="item"
            :showTimeline="index !== activities?.length - 1"
         />
      </div>
   </div>
</template>

<script setup>
import { watchEffect } from 'vue';
import {
   useErrorState,
   useGetInvoiceActivities,
   useRealtimeActivity,
} from '@/composables/useApi';
import ErrorState from '../shared/ErrorState.vue';
import SkeletonLoader from '../shared/SkeletonLoader.vue';
import ActivityCard from '../ActivityCard.vue';

const { isLoading, data, error } = useGetInvoiceActivities();
const { showError, errorTitle, errorSubtext } = useErrorState(error, data);
const { activities } = useRealtimeActivity([]);

watchEffect(() => {
   if (data.value) {
      activities.value = [...data.value];
   }
});
</script>
