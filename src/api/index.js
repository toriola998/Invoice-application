import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/';

export default {
   getAnalytics: () => {
      let method = 'get';
      let url = 'invoice_analytics';
      return axios({ method, url });
   },
};
