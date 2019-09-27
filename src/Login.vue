<template>
    <div>
        <h2>login我是登录大页面</h2>
    <Row>
        <Col>
            <Card style="width:320px;height:250px;margin: 150px auto">
                <p slot="title">欢迎登陆道路管控系统</p>
                <div class="box">
                    <div class="item">
                        <span>用户名：</span><Input v-model="value14" placeholder="Enter something..." clearable style="width: 200px" />
                    </div>
                    <div class="item">
                        <span>密码：</span><Input v-model="value14" placeholder="Enter something..." clearable style="width: 200px" />
                    </div>
                </div>
                <Button type="primary" long>登陆</Button>
            </Card>
        </Col>
    </Row>

    </div>
</template>
<script>

export default {
  data () {
    return {
      value14: ''
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
