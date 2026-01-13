import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/';

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
};
