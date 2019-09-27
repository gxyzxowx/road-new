import Vue from 'vue'
import Router from 'vue-router'
import comFun from './comfun.js'
// 定义组件
// import Home from './views/main/Home.vue'

import Test from './views/main/Test.vue'

Vue.use(Router)

// 定义路由
const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('./Login.vue')
  },
  // 控制台
  {
    path: '/',
    name: 'home',
    component: () => import('./Home.vue'),
    children: [
      // 总览首页
      {
        path: '/main/home',
        name: 'main',
        component: () => import('./views/main/Home.vue')
      },
      // 生产监管总览
      {
        path: '/production/home',
        component: () => import('./views/production/Home.vue')
      },
      // 生产数据
      {
        path: '/production/produceddata',
        component: () => import('./views/production/ProducedData.vue')
      },
      // 生产质量
      {
        path: '/production/productionquality',
        component: () => import('./views/production/ProductionQuality.vue')
      },
      // 级配统计
      {
        path: '/production/gradestatistics',
        component: () => import('./views/production/GradeStatistics.vue')
      },
      // 预警统计
      {
        path: '/production/warnstatistics',
        component: () => import('./views/production/WarnStatistics.vue')
      },
      // 施工监管总览
      {
        path: '/construction/home',
        component: () => import('./views/construction/Home.vue')
      },
      // 项目管理
      {
        path: '/system/project',
        component: () => import('./views/system/Project.vue')
      },
      // 设备管理
      {
        path: '/system/equipment',
        component: () => import('./views/system/Equipment.vue')
      },
      // 配方管理
      {
        path: '/system/recipe',
        component: () => import('./views/system/Recipe.vue')
      },
      // 用户管理
      {
        path: '/system/user',
        component: () => import('./views/system/User.vue')
      },
      {
        path: '/main/test',
        component: Test
      }
    ]
  }

]

// new Router实例，传routes配置参数注入路由
// 输出以便main.js挂载根实例
var router = new Router({
  routes
})
// 设置跳转规则（管理员或者未登录状态）
router.beforeEach((to, from, next) => {
  // 取得用户数据
  let username = comFun.getCookie('roadusername')
  if (!username && to.path !== '/login') {
    console.log('没有username且不是login来的' + username)
    next('/login')
  } else {
    // console.log('有' + username)
    next()
  }
})

// 为了注释报错（相同途径点击会报错）
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
