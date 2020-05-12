import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'

import VueWow from 'vue-wow';

import 'bootstrap/dist/css/bootstrap-grid.min.css';

Vue.use(VueWow);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
