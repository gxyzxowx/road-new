import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Test from './views/main/Test.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/main/test',
      name: 'test',
      component: Test
    },
    {
      path: '/produceddata',
      name: 'produceddata',
      component: () => import('./views/ProducedData.vue')
    }
  ]
})
