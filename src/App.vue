<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    // 启动后判断登录状态
    // let ifLogin = this.comFun.getCookie('roadusername')
    // if (!ifLogin) {
    //   this.$router.push('./login')
    // } else {
    //   this.$router.push('./home')
    // }
  }
}
</script>

<style>
/* .size{
  width: 100%;
  height: 100%;
} */
/* html,body{
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
} */
</style>
