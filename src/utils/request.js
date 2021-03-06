import axios from 'axios'
// import { Notify } from 'vant'
import vm from '../main'

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 15000
})
// 请求拦截
http.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token')
    if (token) {
    // 设置header
      config.headers['X-Token'] = token
    }
    // 根据是否传loading参数来选择是否显示加载提示
    if (config.loading) {
      vm.$loading.hide()
      vm.$loading.show()
    }
    return config
  }, (err) => {
    vm.$loading.hide()
    return Promise.reject(err)
  })

// 响应拦截
http.interceptors.response.use(
  (response) => {
    vm.$loading.hide()
    const res = response.data
    //  判断自定义的code
    // if (res.errCode !== 0) {
    //   console.log(`数据请求失败：${res.errMsg}`)
    //    Notify({ type: 'danger', message: '通知内容' })
    //   return Promise.reject(new Error(res.errMsg || 'Error'))
    // }
    return res
  },
  (err) => {
    vm.$loading.hide()
    return Promise.reject(err)
  }
)

export default http
