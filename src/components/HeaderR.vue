<style scoped>
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.menu {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}
.select {
  width:250px;
  margin-top: 15px;
  /* margin-right: 990px; */

}
.r-layout-nav {
  display: flex;
  justify-content: flex-end;
  /* width: 500px; */
}
</style>
<template>
  <div>
    <Header>
      <Menu mode="horizontal" theme="dark" active-name="1" class="menu">
        <div class="layout-logo"></div>
        <Select v-model="choseItem" class="select" :on-change = "choseItemFun()">
          <Option v-for="item in items" :key="item.mItemID" :value="item.mItemID" :label="item.ItemDes">
            <span>项目名：{{item.ItemDes}}</span>
            <span style="float:right;color:#ccc">项目ID:{{item.mItemID}}</span>
          </Option>
          <!-- <Option value="London" label="London">
            <span>London</span>
            <span style="float:right;color:#ccc">U.K.</span>
          </Option>
          <Option value="Sydney" label="Sydney" selected>
            <span>Sydney</span>
            <span style="float:right;color:#ccc">Australian</span>
          </Option> -->
        </Select>
        <div class="layout-nav r-layout-nav">
          <MenuItem name="1" @click.native="choseToLink(0)">
            <Icon type="ios-analytics"></Icon>总控制台
          </MenuItem>
          <MenuItem name="2" @click.native="choseToLink(1)">
            <Icon type="ios-analytics"></Icon>新建项目
          </MenuItem>
          <MenuItem name="3" @click.native="exit()">
            <Icon type="ios-paper"></Icon>退出登录
          </MenuItem>
        </div>
      </Menu>
    </Header>
  </div>
</template>
<script>
export default {
  name: 'HeaderR',
  data () {
    return {
      choseItem: '',
      items: []
    }
  },
  created () {
    // 获取用户拥有项目列表
    let obj = {
      mUserID: this.comFun.getCookie('roadmUserID')
    }
    this.comFun.post('/User/getUserItem', obj, this).then(
      rs => {
        // console.log(rs)
        if (rs.code === 0) {
          this.items = rs.data
          // 取第一个复制给select,且存入vuex
          this.choseItem = rs.data[0].mItemID
          this.choseItemFun()
          return false
        } else {
        }
      },
      err => {
        console.log(err)
      }
    )
  },
  methods: {
    exit () {
      // 删除cookie数据并跳转到Login
      console.log('exit')
      this.comFun.delectCookie('roadmUserID')
      this.$router.push({ name: 'login' })
    },
    choseToLink (type) {
      // 0进入总控制台,1新建项目，发送给父级Home.vue
      this.$emit('choseToLink', type)
    },
    // 切换项目的时候
    choseItemFun () {
      this.$store.commit('setItem', this.choseItem)
      // 重新渲染组件（发送给父级组件）
      this.$emit('reroad')
    }
  }
}
</script>
