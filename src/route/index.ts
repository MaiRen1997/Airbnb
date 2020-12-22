import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
  { 
    path: '/home',
    component: () => import('../views/Home.vue')
  },
  { 
    path: '/test',
    component: () => import('../views/test.vue')
  },
  { 
    path: '/loginPassword',
    component: () => import('../views/loginPassword.vue')
  },
  { 
    path: '/loginPhone',
    component: () => import('../views/loginPhone.vue')
  },
  { 
    path: '/resetAccount',
    component: () => import('../views/resetAccount.vue')
  },
  { 
    path: '/resign',
    component: () => import('../views/resign.vue'),
    children:[{
      path:'input',
      component: ()=> import('../views/input/input.vue'),
    }]
  }
] 
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

