
<template>
  <div class="home">
    <h1>rem适配</h1>
    <van-button type="default">默认按钮</van-button>
    <van-button color="#7232dd">单色按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button } from 'vant'
import { getWeather } from '../api/index'
export default {
  name: 'Home',
  components: {
    [Button.name]: Button
  },
  data () {
    return {
      weather: {},
      topLoading: true
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      getWeather().then(res => {
        console.log('res', res)
        this.weather = res
      })
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  font-size: 26px;
}
</style>
