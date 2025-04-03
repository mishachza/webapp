// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import DescriptionPage from '@/views/DescriptionPage.vue';
import AboutPage from '@/views/AboutPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { elementId: 'home-page' }
  },
  {
    path: '/description',
    name: 'description',
    component: DescriptionPage,
    meta: { elementId: 'description-page' }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    meta: { elementId: 'about-page' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (to.meta.elementId) {
      const element = document.getElementById(to.meta.elementId);
      if (element) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              el: '#' + to.meta.elementId,
              behavior: 'smooth',
              top: 0,
            });
          }, 500);
        });
      } else {
        return { top: 0 }
      }
    } else {
      return { top: 0 }
    }
  }
});

export default router;
