import Vue from 'vue'
import Vuex from 'vuex'
import crud from './crud'
import alert from './modules/alert'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    alert,
    auth,
    posts: crud('posts')
  }
})
