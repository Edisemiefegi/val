// src/router.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import dashboard from './views/dashboard.vue';


const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/bemyval',
    component: dashboard,
    name: 'dashboard'
  },
 

 
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
