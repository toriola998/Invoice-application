import { useQuery } from '@tanstack/vue-query';
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import api from '@/api';

export const useGetAnalytics = () => {
   return useQuery({
      queryKey: ['invoice_analytics'],
      queryFn: async () => {
         const { data } = await api.getAnalytics();
         return data || {};
      },
      staleTime: 5 * 60 * 1000,
   });
};

export const useGetRecentInvoices = () => {
   return useQuery({
      queryKey: ['recent_invoices'],
      queryFn: async () => {
         const { data } = await api.getAllRecentInvoices();
         return data || {};
      },
      staleTime: 5 * 60 * 1000,
   });
};

export const useGetRecentActivities = () => {
   return useQuery({
      queryKey: ['recent_activities'],
      queryFn: async () => {
         const { data } = await api.getAllRecentActivities();
         return data || {};
      },
      staleTime: 5 * 60 * 1000,
   });
};

export const useGetInvoiceActivities = () => {
   return useQuery({
      queryKey: ['invoice_activity'],
      queryFn: async () => {
         const { data } = await api.getAllInvoiceActivities();
         return data || {};
      },
      staleTime: 5 * 60 * 1000,
   });
};

export function useErrorState(error, list) {
   const showError = computed(() => {
      return error.value || !list.value || list.value.length === 0;
   });

   const errorTitle = computed(() => {
      return error.value
         ? 'Something seems wrong'
         : 'There are no items at this time';
   });

   const errorSubtext = computed(() => {
      return error.value ? 'Please try again later' : '';
   });

   return {
      showError,
      errorTitle,
      errorSubtext,
   };
}

/**
 * Simulates real-time activity updates to imitate a socket.
 * As there is no real server to 'socket' with
 */
export function useRealtimeActivity(initialActivities = []) {
   const activities = ref([...initialActivities]);
   let interval;

   const formatTimestamp = (date = new Date()) => {
      const options = { hour: 'numeric', minute: 'numeric' };
      return `Today, ${date.toLocaleTimeString([], options)}`;
   };

   const randomNames = [
      'Olaniyi Ojo Adewale',
      'Adeola Johnson',
      'Chukwuemeka Obi',
      'Fatima Bello',
      'Tunde Akande',
   ];

   const randomInvoiceNumber = () => {
      return String(Math.floor(10000000 + Math.random() * 90000000)).padStart(
         8,
         '0'
      );
   };

   const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];

   // ---------- Activity Generators ----------
   const createActivityCreated = () => {
      const name = getRandomItem(randomNames);
      return {
         title: 'You',
         action: 'created',
         timestamp: formatTimestamp(),
         invoiceId: `${randomInvoiceNumber()}/${name}`,
      };
   };

   const createActivitySent = () => {
      const sender = 'You';
      const receiver = getRandomItem(randomNames);
      const invoiceName = getRandomItem(randomNames);
      return {
         title: sender,
         action: 'sent',
         timestamp: formatTimestamp(),
         invoiceId: `${randomInvoiceNumber()}/${invoiceName}`,
         receiver,
      };
   };

   const createActivityPayment = () => {
      const paymentTypes = ['partial', 'full'];
      return {
         title: 'Payment Confirmed',
         action: 'payment',
         timestamp: formatTimestamp(),
         paymentType: getRandomItem(paymentTypes),
         amount: Math.floor(Math.random() * (6000000 - 500000 + 1) + 500000),
      };
   };

   //---------- Main random activity generator ----------!>
   const addRandomActivity = () => {
      const activityGenerators = [
         createActivityCreated,
         createActivitySent,
         createActivityPayment,
      ];

      const activity = getRandomItem(activityGenerators)();
      activities.value.unshift(activity);

      if (activities.value.length > 5) activities.value.pop();
   };

   // ---------- Lifecycle ----------
   onMounted(() => {
      interval = setInterval(addRandomActivity, 8000);
   });

   onUnmounted(() => clearInterval(interval));

   return { activities, addRandomActivity };
}
