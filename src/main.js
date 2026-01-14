import './css/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Vue3Toastify, {
   autoClose: 3000,
   hideProgressBar: true,
   theme: 'colored',
   hideProgressBar: true,
   dangerouslyHTMLString: true,
});

app.use(VueQueryPlugin);
app.mount('#app');
