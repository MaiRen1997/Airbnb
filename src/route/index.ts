const Home = { template: '<div>这是Home页面</div>' }
const About = { template: '<div>这是Test页面</div>' }

import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  { 
    path: '/home',
    component: () => import('../views/Home.vue')
  },
  { 
    path: '/test',
    component: () => import('../views/test.vue')
  }
] 
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

