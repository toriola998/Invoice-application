import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { auth } from '@/api';

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home',
         component: HomeView,
         meta: { requiresAuth: true },
      },
      {
         path: '/:pathMatch(.*)*',
         name: 'NotFound',
         component: () => import('../views/NotFound.vue'),
      },
      {
         path: '/login',
         name: 'login',
         component: () => import('../views/Login.vue'),
         meta: { requiresAuth: false },
      },
   ],
});

router.beforeEach((to, from, next) => {
   const requiresAuth = to.meta.requiresAuth;
   const user = auth.currentUser;

   if (requiresAuth && !user) {
      next('/login');
   } else if (to.path === '/login' && user) {
      next('/');
   } else {
      next();
   }
});

export default router;
