import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
