import Vue from 'vue'
import main from './main.vue'

const ToastConstructor = Vue.extend(main)
let instance
const toast = function (options) {
  instance = new ToastConstructor({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}
export default toast
