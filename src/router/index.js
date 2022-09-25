import { createRouter, createWebHashHistory } from 'vue-router';

import Form from '@/views/formPage.vue';
const routes = [
  {
    path: '/',
    redirect: '/partner_test.html/:id',
  },
  {
    path: '/partner_test.html/:id',
    name: 'form',
    component: Form,
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
