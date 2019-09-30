<style scoped>
.form1 {
  width: 800px;
  margin: 50px auto;
  height: auto;
  overflow-y: scroll;
}

</style>
<template>
  <div class="form1">
    <h2 style="margin-bottom:10px;">新建项目</h2>

      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
        <FormItem label="项目名称" prop="name">
          <Input v-model="formValidate.name" placeholder="输入您的项目名称"></Input>
        </FormItem>
        <FormItem label="最大标段数" prop="mItemBidSun">
          <Input v-model.number="formValidate.mItemBidSun" placeholder="用于网页录入和条件控制"></Input>
        </FormItem>
        <FormItem label="项目总长度" prop="mItemTotalLength">
          <Input v-model.number="formValidate.mItemTotalLength" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="项目状态" prop="mItemActive">
          <RadioGroup v-model="formValidate.mItemActive">
            <Radio label="1">施工中</Radio>
            <Radio label="0">已完结</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="项目描述" prop="mItemDes">
          <Input v-model="formValidate.mItemDes" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="项目负责人" prop="mItemAdmin">
          <Input v-model="formValidate.mItemAdmin" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="项目联系电话" prop="mItemPhoneNo">
          <Input v-model.number="formValidate.mItemPhoneNo" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="施工单位" prop="mItemSGUint">
          <Input v-model="formValidate.mItemSGUint" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="监管单位" prop="mItemJGUint">
          <Input v-model="formValidate.mItemJGUint" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="一级预警联系人" prop="mAlarmLev1Name">
          <Input v-model="formValidate.mAlarmLev1Name" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="一级预警联系电话" prop="mAlarmLev1PhoneNo">
          <Input v-model.number="formValidate.mAlarmLev1PhoneNo" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="二级预警联系人" prop="mAlarmLev2Name">
          <Input v-model="formValidate.mAlarmLev2Name" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="二级预警联系电话" prop="mAlarmLev2PhoneNo">
          <Input v-model.number="formValidate.mAlarmLev2PhoneNo" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="三级预警联系人" prop="mAlarmLev3Name">
          <Input v-model="formValidate.mAlarmLev3Name" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="三级预警联系电话" prop="mAlarmLev3PhoneNo">
          <Input v-model.number="formValidate.mAlarmLev3PhoneNo" placeholder="请输入..."></Input>
        </FormItem>

        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">确认新建</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
      </Form>
 <Row>
      <Col class="demo-spin-col" v-if="loading">
            <Spin fix>
                <Icon type="ios-loading"  class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
        </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      formValidate: {
        name: '',
        mItemBidSun: '',
        mItemTotalLength: '',
        mItemActive: '',
        mItemDes: '',
        mItemAdmin: '',
        mItemPhoneNo: '',
        mItemSGUint: '',
        mItemJGUint: '',
        mAlarmLev1Name: '',
        mAlarmLev1PhoneNo: '',
        mAlarmLev2Name: '',
        mAlarmLev2PhoneNo: '',
        mAlarmLev3Name: '',
        mAlarmLev3PhoneNo: ''
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur'
          }
        ],
        mItemBidSun: [
          { required: true, type: 'number', message: 'Incorrect mItemBidSun format', trigger: 'blur' }
        ],
        mItemTotalLength: [
          { required: true, type: 'number', message: 'Incorrect mItemTotalLength format', trigger: 'blur' }
        ],
        mItemActive: [
          { required: true, message: 'Please select ItemActive', trigger: 'change' }
        ],
        mItemPhoneNo: [
          { required: true, type: 'number', message: 'Incorrect mItemTotalLength format', trigger: 'blur' }
        ],
        mAlarmLev1PhoneNo: [
          { required: true, type: 'number', message: 'Incorrect mItemTotalLength format', trigger: 'blur' }
        ],
        mAlarmLev2PhoneNo: [
          { required: true, type: 'number', message: 'Incorrect mItemTotalLength format', trigger: 'blur' }
        ],
        mAlarmLev3PhoneNo: [
          { required: true, type: 'number', message: 'Incorrect mItemTotalLength format', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        let obj = this.formValidate
        obj['mUserID'] = this.comFun.getCookie('roadmUserID')
        console.log(obj)
        if (valid) {
          this.comFun.post('/Item/userCreateItem', obj, this).then((rs) => {
            console.log(rs)
            if (rs.code === 0) {
              // 成功,提示后返回控制台
              this.$Message.success(rs.message)
              this.$router.push('./contorl')
              return false
            } else {
            //  失败
              this.$Message.error(rs.message)
            }
          }, (err) => { console.log(err) })
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>
