<template>
   <div>
      <nav class="">
         <div
            class="bg-white min-h-screen fixed w-[280px] z-[90] side-nav px-6 py-10"
            v-show="toggleNavBar"
         >
            <router-link to="/" class="mb-10">
               <img src="/assets/icons/logo.svg" alt="" />
            </router-link>
            <ul class="flex flex-col justify-between py-10 gap-y-4">
               <li v-for="(item, index) in mainNav" :key="index">
                  <RouterLink
                     :to="item.link"
                     :class="getNavClass(item)"
                     class="text-sm text-grey-11 flex-items"
                  >
                     <img :src="`/assets/icons/nav/${item.icon}`" alt="" />
                     {{ item.cta }}
                  </RouterLink>
               </li>
            </ul>
         </div>
      </nav>
      <Header class="lg:hidden">
         <button @click="toggleNavBar = !toggleNavBar" class="lg:hidden">
            <img src="/assets/icons/nav/menu.png" alt="" class="w-6" />
         </button>
      </Header>
   </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import Header from './Header.vue';
const route = useRoute();

const toggleNavBar = ref(false);

const getNavClass = item => {
   return [item.isActive ? 'active-link' : '', 'flex gap-4 nav_link'];
};

const mainNav = computed(() => {
   return [
      {
         cta: 'Getting Started',
         icon: 'home.svg',
         link: '/#',
      },
      {
         cta: 'Overview',
         icon: 'overview.svg',
         link: '/#',
      },
      {
         cta: 'Accounts',
         icon: 'home.svg',
         link: '/#',
      },
      {
         cta: 'Invoice',
         icon: 'receipt-item.svg',
         link: '/',
         isActive: route.path.includes('/'),
      },
      {
         cta: 'Beneficiary Management',
         icon: 'profile-2user.svg',
         link: '/#',
      },
      {
         cta: 'Help Center',
         icon: 'message-question.svg',
         link: '/#',
      },
      {
         cta: 'Settings',
         icon: 'setting.svg',
         link: '/#',
      },
   ];
});
</script>

<style lang="scss" scoped>
a.nav_link {
   @apply text-grey-11 px-3 py-3 w-full;
}

.side-nav {
   @apply lg:block !important;
}

.active-link {
   @apply border-[6px] border-[#F8F8FB] rounded-full;
}
</style>
