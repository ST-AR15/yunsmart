import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/p1',
    name: 'p1',
    component: () => import(/* webpackChunkName: "about" */ '../views/P1.vue')
  },
  {
    path: '/p3',
    name: 'p3',
    component: () => import(/* webpackChunkName: "about" */ '../views/P3.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
