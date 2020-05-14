import request from '../utils/request'

export function getWeather (data) {
  return request({
    url: 'http://t.weather.sojson.com/api/weather/city/101030100',
    method: 'GET',
    loading: true, // 是否显示加载动画
    data
  })
}
