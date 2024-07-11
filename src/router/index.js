// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import secondPage from '../components/secondPage.vue';
import thirdPage from '../components/thirdPage.vue';

const routes = [
{ 
    path: '/', 
    name: 'HomePage',
    component: HomePage 
},
{
    path: '/secondPage', 
    name: 'secondPage',
    component: secondPage
 },
 {
    path: '/thirdPage',
    name: 'thirdPage',
    component: thirdPage,
 }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
