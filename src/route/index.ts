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
    component: () => import('../views/login/resign.vue'),
    children:[{
      path:'input',
      component: ()=> import('../views/input/input.vue'),
    }]
  },
  {
    path: '/detail',
    component: () => import('../views/detail/detail.vue'),
    //component: () => import('../views/login/resign.vue')
    // component: () => import('../views/404.vue')
  },
  {
    path:'/comment',
    component: () => import('../views/detail/comment.vue')
  }, {
    path:'/shopcart',
    component: () => import('../views/detail/shopcart.vue')
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

