import api from '@/api';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';

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
