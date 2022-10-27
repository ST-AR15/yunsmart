import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import P5 from '../views/P5.vue'
import P6 from '../views/P6.vue'
// 一次修改
// 统计
import Hj from '../pages/tj/Hj.vue'
import Nh from '../pages/tj/Nh.vue'
// 设备管理
import Sbgl from '../pages/sbgl/ShebeiHome.vue'
import Sbgl1 from '../pages/sbgl/Type1.vue'
import Sbgl2 from '../pages/sbgl/Type2.vue'
// 数字安防
import Szaf from '../pages/szaf/SzafHome.vue'

Vue.use(VueRouter)

const routes = [
  // 统计
  {
    path: '/tj/hj',
    name: 'hj',
    component: Hj,
  },
  {
    path: '/tj/nh',
    name: 'nh',
    component: Nh,
  },
  // 设备管理
  {
    path: '/sbgl',
    name: 'sbgl',
    component: Sbgl
  },
  {
    path: '/sbgl/type1',
    name: 'sbgl1',
    component: Sbgl1,
  },
  {
    path: '/sbgl/type2',
    name: 'sbgl2',
    component: Sbgl2,
  },
  // 数字安防
  {
    path: '/szaf',
    name: 'szaf',
    component: Szaf,
  },
  // 一次修改前
  {
    path: '/',
    name: 'home',
    component: HomeView
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
]

const router = new VueRouter({
  base: '/tanapp/',
  routes
})

export default router
