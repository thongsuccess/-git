import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/index.vue'
import Test from '@/page/test/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
