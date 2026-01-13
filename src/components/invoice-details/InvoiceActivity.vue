<template>
   <div>
      <p class="font-medium text-lg md:text-xl mb-6">Invoice Activity</p>

      <div class="relative">
         <ActivityCard />
         <ActivityCard />
         <ActivityCard />
      </div>
   </div>
</template>

<script setup>
import ActivityCard from '../ActivityCard.vue';

const invoiceActivity = [
   {
      user: 'You',
      timestamp: 'Today, 12:20 PM',
      action: 'created',
      message: 'Created invoice 00239434/Olaniyi Ojo Adewale',
   },
   {
      user: 'You',
      timestamp: 'Today, 12:20 PM',
      action: 'sent',
      message:
         'Sent invoice 00239434/Olaniyi Ojo Adewale to Olaniyi Ojo Adewale',
   },
   {
      user: 'Payment Confirmed',
      timestamp: 'Today, 12:20 PM',
      action: 'payment',
      message: 'You manually confirmed a partial payment of $503,000.00',
      amount: 503000.0,
   },
   {
      user: 'Payment Confirmed',
      timestamp: 'Today, 12:20 PM',
      action: 'payment',
      message: 'You manually confirmed a full payment of $6,000,000.00',
      amount: 6000000.0,
   },
   {
      user: 'You',
      timestamp: 'Today, 12:20 PM',
      action: 'sent',
      message:
         'Sent invoice 00239434/Olaniyi Ojo Adewale to Olaniyi Ojo Adewale',
   },
];
</script>
