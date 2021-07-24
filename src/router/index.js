import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Homer from '../views/Homer.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '//:id',
    name: 'Homer',
    component: Homer
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
