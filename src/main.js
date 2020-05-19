import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/reset.css'
import './utils/plugins'
import './router/permission'
import Loading from './components/loading'
import Toast from './components/toast'
import Dialog from './components/dialog'
Vue.prototype.$loading = Loading
Vue.prototype.$toast = Toast
Vue.prototype.$dialog = Dialog

Vue.config.productionTip = false

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
