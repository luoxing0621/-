import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/collect',
    name: 'collect',
    component: () => import('../views/Collect.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue'),
  },
  {
    path: '/car',
    name: 'car',
    component: () => import('../views/Car.vue'),
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/Product.vue'),
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Reg.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
