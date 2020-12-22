const Home = { template: '<div>这是Home页面</div>' }
const About = { template: '<div>这是Test页面</div>' }

import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path:'/',
    component: () => import('../views/index.vue'),
    children:[
      {
        path:'/',
        redirect: '/home'
      },
      { 
        path: 'home',
        component: () => import('../views/Home.vue')
      },
      { 
        path: 'community',
        component: () => import('../views/community.vue')
      },
      { 
        path: 'info',
        component: () => import('../views/info.vue')
      },
      { 
        path: 'mine',
        component: () => import('../views/mine.vue')
      }
    ]
  },
  {
    path:'/search',
    component: () => import('../views/Search.vue')
  }
  
] 
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

