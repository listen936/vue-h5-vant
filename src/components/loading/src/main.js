import Vue from 'vue'
import main from './main.vue'
const LoadingConstrcvtor = Vue.extend(main)

let instance
const Loading = {
  show (options) {
    options = options || {}
    instance = new LoadingConstrcvtor({
      data: options
    })
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
    return instance.vm
  },
  hide () {
    if (instance) {
      instance.vm.loading = false
    }
  }
}
export default Loading
