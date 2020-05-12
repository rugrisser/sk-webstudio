import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    screen: {
      sizes: {
        small: 576,
        medium: 768,
        large: 992,
        extra_large: 1200,
      }
    }
  },
  getters: {
    getScreenSizes: state => {
      return state.screen.sizes;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
