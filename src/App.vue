<template>
  <div id="app">
    <router-view/>
    <!-- <vant-loading vertical type="spinner" v-show="topLoading">加载中...</vant-loading> -->
  </div>
</template>
<script>

export default {
  data () {
    return {
      topLoading: false
    }
  },
  components: {
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
