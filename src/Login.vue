<template>
    <div>
        <h2>login我是登录大页面</h2>
    <Row>
        <Col>
            <Card style="width:320px;height:250px;margin: 150px auto">
                <p slot="title">欢迎登陆道路管控系统</p>
                <div class="box">
                    <div class="item">
                        <span>用户名：</span><Input v-model="name" placeholder="Enter something..." clearable style="width: 200px" />
                    </div>
                    <div class="item">
                        <span>密码：</span><Input type="password" v-model="password" placeholder="Enter something..." clearable style="width: 200px" />
                    </div>
                </div>
                <Button type="primary" long @click="login()">登陆</Button>
            </Card>
        </Col>
    </Row>

    </div>
</template>
<script>

export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login () {
      //   通过axios发送请求到服务端，核对用户名和密码返回为true时，判断为登陆模式
      //   存入cookie
      this.comFun.setCookie('roadusername', this.name, 1)
      this.$router.push('/')
    }
  }

}
</script>
<style lang="scss" scoped>
    .box{
        margin: 20px 0;
    }
    .item{
        display: flex;
        justify-content: space-between;
        align-items:center;
    }
    .item:first-child{
        margin-bottom: 20px;
    }
</style>
