import Vue from 'vue'
import main from './main.vue'

const DialogConstructor = Vue.extend(main)

let instance
const dialog = function (options) {
  instance = new DialogConstructor({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}
export default dialog
