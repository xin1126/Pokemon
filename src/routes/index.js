import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/flame',
    component: () => import('../views/FlameMythicalBeast.vue'),
  },
  {
    path: '/sky',
    component: () => import('../views/SkyMythicalBeast.vue'),
  },
  {
    path: '/sea',
    component: () => import('../views/SeaMythicalBeast.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
