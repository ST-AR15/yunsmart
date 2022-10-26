import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import P1 from '../views/P1.vue'
import P2 from '../views/P2.vue'
import P3 from '../views/P3.vue'
import P4 from '../views/P4.vue'
import P5 from '../views/P5.vue'
import P6 from '../views/P6.vue'
import P7 from '../views/P7.vue'
import P8 from '../views/P8.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/p1',
    name: 'p1',
    component: P1
  },
  {
    path: '/p2',
    name: 'p2',
    component: P2
  },
  {
    path: '/p3',
    name: 'p3',
    component: P3
  },
  {
    path: '/p4',
    name: 'p4',
    component: P4
  },
  {
    path: '/p5',
    name: 'p5',
    component: P5
  },
  {
    path: '/p6',
    name: 'p6',
    component: P6
  },
  {
    path: '/p7',
    name: 'p7',
    component: P7
  },
  {
    path: '/p8',
    name: 'p8',
    component: P8
  },
]

const router = new VueRouter({
  base: '/tanapp/',
  routes
})

export default router
