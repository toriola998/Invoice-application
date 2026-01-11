<template>
   <section class="card p-8">
      <div
         class="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between"
      >
         <h3 class="text-xl font-medium text-black">Recent Activities</h3>

         <button class="btn blue-outline w-60">View all</button>
      </div>

      <RecentActivityCard />
   </section>
</template>

<script setup>
import RecentActivityCard from './RecentActivityCard.vue';
</script>
