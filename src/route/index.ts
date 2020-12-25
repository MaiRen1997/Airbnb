import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
  {
    path:'/',
    component: () => import('../views/index.vue'),
    children:[
      {
        path:'/',
        redirect: 'home'
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
  },
  {
    path:'/store/:value',
    component: () => import('../views/Store.vue')
  },
  { 
    path: '/test',
    component: () => import('../views/test.vue')
  },
  { 
    path: '/loginPassword',
    component: () => import('../views/login/loginPassword.vue')
  },
  { 
    path: '/loginPhone',
    component: () => import('../views/login/loginPhone.vue')
  },
  { 
    path: '/resetAccount',
    component: () => import('../components/login/resetAccount.vue')
  },
  { 
    path: '/resign',
    component: () => import('../views/login/resign.vue')
    // component: () => import('../views/404.vue')
  },
  { 
    path: '/list_item',
    component: () => import('../views/list_item/list_item.vue')
    // component: () => import('../views/404.vue')
  },
  {
    path:"/:catchAll(.*)",
    component:()=>import("../views/404.vue")
  }
] 
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

