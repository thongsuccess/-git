import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = { // 初始化
  count: 1,
  isLogin: false
}

const getters = { // 承载变化
  getStateName: state => state.count,
  getIsLogin: state => state.isLogin
}

const mutations = { // 如何变化
  increment(state,n = 0) {
    if(n) {
      // 存在赋值
      state.count += n;
    } else {
      state.count = '没有传值过来';
    }
  }
}

const actions = { // 触发mutations 中的事件
  addBtn({commit},n) {
    commit('increment',n)
  },
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store;