import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export default {
   getAnalytics: () => {
      let method = 'get';
      let url = 'invoice_analytics';
      return axios({ method, url });
   },
   getAllRecentInvoices: () => {
      let method = 'get';
      let url = 'recent_invoices';
      return axios({ method, url });
   },
   getAllRecentActivities: () => {
      let method = 'get';
      let url = 'recent_activities';
      return axios({ method, url });
   },
   getAllInvoiceActivities: () => {
      let method = 'get';
      let url = 'invoice_activity';
      return axios({ method, url });
   },
   createInvoice: data => {
      let method = 'post';
      let url = 'recent_invoices';
      return axios({ method, url, data });
   },
   addInvoiceActivity: data => {
      let method = 'post';
      let url = 'invoice_activity';
      return axios({ method, url, data });
   },
};

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
   apiKey: import.meta.env.VITE_API_KEY,
   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
   projectId: import.meta.env.VITE_PROJECT_ID,
   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
   messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
   appId: import.meta.env.VITE_APP_ID,
   measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
