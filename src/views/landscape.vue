<template>
    <div class="wrap" id="wrap" >
        <img class="img" src="../assets/imgs/timg.jpeg">
    </div>
</template>
<script>
export default {
  name: 'Landscape',
  data () {
    return {

    }
  },
  mounted () {
    window.onresize = this.change
    this.change()
  },
  methods: {
    change () {
      var width = document.documentElement.clientWidth
      var height = document.documentElement.clientHeight
      var wrapper = document.getElementById('wrap')
      var style = ''
      if (width >= height) { // 竖屏
        style += 'width:100%'
        style += 'height:100%;'
        style += '-webkit-transform: rotate(0); transform: rotate(0);'
        style += '-webkit-transform-origin: 0 0;'
        style += 'transform-origin: 0 0;'
      } else { // 横屏
        style += 'width:' + height + 'px;'// 注意旋转后的宽高切换
        style += 'height:' + width + 'px;'
        style += '-webkit-transform: rotate(90deg); transform: rotate(90deg);'
        // 注意旋转中点的处理
        style += '-webkit-transform-origin: ' + width / 2 + 'px ' + width / 2 + 'px;'
        style += 'transform-origin: ' + width / 2 + 'px ' + width / 2 + 'px;'
      }
      wrapper.style.cssText = style
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap {
    width:100%;
    height: 100%;
}
.img {
    width: 100%;
    height: 100%;
}
</style>
