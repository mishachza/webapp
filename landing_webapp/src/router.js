// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import DescriptionPage from './views/DescriptionPage.vue';
import AboutPage from './views/AboutPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { transition: 'fade' }
  },
  {
    path: '/description',
    name: 'description',
    component: DescriptionPage,
    meta: { transition: 'slide' }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    meta: { transition: 'slide' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
