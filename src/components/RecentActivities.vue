<template>
   <section class="card p-8">
      <div class="flex gap-4 items-center justify-between mb-6">
         <h3 class="text-xl font-medium text-black">Recent Activities</h3>

         <button class="btn blue-outline w-32">View all</button>
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

      <div v-else class="flex flex-col gap-y-6">
         <ActivityCard
            v-for="(item, index) in data"
            :key="index"
            :item="item"
         />
      </div>
   </section>
</template>

<script setup>
import ActivityCard from './ActivityCard.vue';
import { useErrorState, useGetRecentActivities } from '@/composables/useApi';
import ErrorState from './shared/ErrorState.vue';
import SkeletonLoader from './shared/SkeletonLoader.vue';

const { isLoading, data, error } = useGetRecentActivities();
const { showError, errorTitle, errorSubtext } = useErrorState(error, data);
</script>
