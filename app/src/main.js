// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vconsole from 'vconsole'
import store from './store'
import interceptors from '../interceptors.js'

const vConsole = new Vconsole()
Vue.use(vConsole)
Vue.config.productionTip = false

/* 执行拦截器初始化 */
interceptors()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
