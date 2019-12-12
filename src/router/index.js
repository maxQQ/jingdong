import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/botnav',
    component: () => import('../views/Botnav.vue'),
    children: [
      
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/index.vue')
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/List.vue')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('../views/Search.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/Cart.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import('../views/Mine.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
