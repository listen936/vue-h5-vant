import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/reset.css'
import './utils/plugins'

import Loading from './components/loading'
Vue.prototype.$loading = Loading

Vue.config.productionTip = false

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
