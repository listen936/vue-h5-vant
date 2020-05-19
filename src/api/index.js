import request from '../utils/request'

export function getIP (data) {
  return request({
    url: 'https://restapi.amap.com/v3/ip?key=0113a13c88697dcea6a445584d535837',
    method: 'GET',
    loading: true, // 是否显示加载动画
    data
  })
}
