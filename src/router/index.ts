import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue';
import Game from '../views/Game.vue';
import Demo from '@/views/Demo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    }
  ]
})

export default router
