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
  }
  ,{ 
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    component: () => import('../components/login/resign.vue'),
=======
>>>>>>> bc7f3fb1686de7bbe3e996db0359153de854a3b6
    component: () => import('../views/login/resign.vue')
  },{
    path:"/:catchAll(.*)",
    component:()=>import("../views/404.vue")
<<<<<<< HEAD
=======
>>>>>>> master-dev
>>>>>>> bc7f3fb1686de7bbe3e996db0359153de854a3b6
  }
] 
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

