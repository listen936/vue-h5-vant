<template>
  <div id="app">
    <router-view v-if="!$route.meta.keepAlive"/>
    <keep-alive v-else>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}

</style>
