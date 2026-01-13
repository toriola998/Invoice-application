<template>
   <section class="card p-8">
      <div class="flex gap-4 items-center justify-between mb-6">
         <h3 class="text-xl font-medium text-black">Recent Activities</h3>

         <button class="btn blue-outline w-32">View all</button>
      </div>

      <ActivityCard />
   </section>
</template>

<script setup>
import ActivityCard from './ActivityCard.vue';
</script>
