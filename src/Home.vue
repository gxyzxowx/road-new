<style lang="scss" scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
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
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
a {
    // font-weight: bold;
    color: #515a6e;
    &.router-link-exact-active {
      color: #2d8cf0;
    }
  }
</style>
<template>
    <div class="layout" style="height:100%">
        <Layout  style="height:100%">
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav" style="display:flex;justify-content:flex-end;">

                        <MenuItem name="1">
                            <Icon type="ios-analytics"></Icon>
                            新建项目
                        </MenuItem>
                        <MenuItem name="2" @click.native= "exit()">
                            <Icon type="ios-paper"></Icon>
                            退出登录
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger>
                   <!-- <Sider hide-trigger :style="{background: '#fff'}"> -->
                    <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>

                               项目总览
                            </template>
                            <MenuItem name="1-1" v-on:click.native="routerLinkM('/main/home', '首页', '项目总览')">总览</MenuItem>

                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                生产监管
                            </template>
                            <MenuItem v-for="item in pageData.second" :name=item.name @click.native="routerLinkM(item.path,item.title, '生产管理')" :key="item.name">{{item.title}}</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                施工监管
                            </template>
                             <MenuItem name="3-1" v-on:click.native="routerLinkM('/construction/home', '总览', '施工监管')">总览</MenuItem>
                        </Submenu>
                        <Submenu name="4">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                系统管理
                            </template>
                            <MenuItem v-for="item in pageData.four" :key=item.name :name=item.name @click.native="routerLinkM(item.path, item.title, '系统管理')">{{item.title}}</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>{{nowFirstPage}}</BreadcrumbItem>
                        <BreadcrumbItem>{{nowSecondPage}}</BreadcrumbItem>
                        <!-- <BreadcrumbItem>{{name}}</BreadcrumbItem> -->
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        Content
                         <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>

    </div>
</template>
<script>
export default {
  data () {
    return {
      pageData: {
        second: [
          { title: '总览',
            name: '2-1',
            path: '/production/home' },
          { title: '生产数据',
            name: '2-2',
            path: '/production/produceddata' },
          { title: '生产质量',
            name: '2-3',
            path: '/production/Productionquality' },
          { title: '级配统计',
            name: '2-4',
            path: '/production/gradestatistics' },
          { title: '预警统计',
            name: '2-5',
            path: '/production/warnstatistics' }],
        four: [
          { title: '项目管理',
            name: '4-1',
            path: '/system/project' },
          { title: '设备管理',
            name: '4-2',
            path: '/system/equipment' },
          { title: '配方管理',
            name: '4-3',
            path: '/system/recipe' },
          { title: '用户管理',
            name: '4-4',
            path: '/system/user' }]
      },
      nowFirstPage: '总览',
      nowSecondPage: '首页'
    }
  },
  methods: {
    routerLinkM (url, title, type) {
      this.$router.push({ path: url })
      this.nowFirstPage = type
      this.nowSecondPage = title
    },
    exit () {
      // 删除cookie数据并跳转到Login
      console.log(123)
      this.comFun.delectCookie('roadusername')
      // 又跳不起
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
