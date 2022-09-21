import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/home.vue';
import Form from '@/views/formPage.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/partner_test.html',
    name: 'form',
    component: Form,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
