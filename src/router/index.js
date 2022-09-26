import { createRouter, createWebHashHistory } from 'vue-router';

import mainPage from '@/views/mainPage.vue';
const routes = [
  {
    path: '/',
    redirect: '/partner_test.html/:id',
  },
  {
    path: '/partner_test.html/:id',
    name: 'mainPage',
    component: mainPage,
    props: (route) => {
      const { id } = route.params;
      return {
        id: Number(id),
      };
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
