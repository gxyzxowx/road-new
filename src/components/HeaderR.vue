<style scoped>
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}

</style>
<template>
  <div class="main">
    <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav" style="display:flex;justify-content:flex-end;">
                        <MenuItem name="1"  @click.native= "choseToLink(0)">
                            <Icon type="ios-analytics"></Icon>
                            总控制台
                        </MenuItem>
                        <MenuItem name="2"  @click.native= "choseToLink(1)">
                            <Icon type="ios-analytics"></Icon>
                            新建项目
                        </MenuItem>
                        <MenuItem name="3" @click.native= "exit()">
                            <Icon type="ios-paper"></Icon>
                            退出登录
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
  </div>
</template>
<script>
export default {
  name: 'HeaderR',
  methods: {
    exit () {
      // 删除cookie数据并跳转到Login
      console.log('exit')
      this.comFun.delectCookie('roadusername')
      // 又跳不起
      this.$router.push({ name: 'login' })
    },
    choseToLink (type) {
      // 0进入总控制台,1新建项目
      this.$emit('choseToLink', type)
    }
  }
}
</script>
