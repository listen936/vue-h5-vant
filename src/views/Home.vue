
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <van-button type="default">默认按钮</van-button>
    <van-button color="#7232dd">单色按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Button } from 'vant'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    [Button.name]: Button
  }
}
</script>
