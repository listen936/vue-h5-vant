
<template>

  <div class="home">
    <h1>rem适配</h1>
    <router-link to="landscape">
      <van-button type="default">横屏demo</van-button>
    </router-link>
    <router-link to="about">about</router-link>
    <van-button color="#7232dd">单色按钮</van-button>
    <img class="img" src="../assets/imgs/timg.jpeg">

  </div>

</template>

<script>
// @ is an alias to /src
import { Button } from 'vant'
import { getIP } from '../api/index'
export default {
  name: 'Home',
  components: {
    [Button.name]: Button
  },
  data () {
    return {
      ip: {},
      loading: true
    }
  },
  mounted () {
  },
  methods: {
    getData () {
      getIP().then(res => {
        console.log('res', res)
        this.ip = res
        this.$toast({
          msg: '获取数据成功',
          type: 'fail',
          duration: 2000
        })
        // this.$dialog({
        //   title: '流程结束',
        //   text: '您未开启下节点处理，确定后审批流程结束，不需要下节点处理人操作！',
        //   type: 'input',
        //   placeholder: '请输入内容文本...',
        //   length: 10,
        //   showCancelBtn: true,
        //   showConfirmBtn: true,
        //   confirmText: '确认',
        //   confirm (e) {
        //     console.log(e)
        //   },
        //   cancel (e) {
        //     console.log('cancel', e)
        //   }
        // })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  font-size: 26px;
}
.img {
  width: 100px;
  height: 100px;
}
</style>
