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
    component: () => import('../views/login/resetAccount.vue')
  },
  { 
    path: '/resign',
    component: () => import('../views/login/resign.vue')
    // component: () => import('../views/404.vue')
  },{
    path:"/:catchAll(.*)",
    component:()=>import("../views/404.vue")
  }
] 
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

