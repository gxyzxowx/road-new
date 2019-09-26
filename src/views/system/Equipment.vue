<template>
    <div>
输入添加
name:
<input type="text" v-model="inputval1">
age:
<input type="text" v-model="inputval2">

 <button @click = "add()">添加</button>
 已添加：
 <div class="list" v-for="item in list" :key=item.name>name:{{item.name}},age{{item.age}}</div>
<button @click = "get()">得到</button>
<button @click= "delect()">删除</button>
    </div>

</template>
<script>
export default {
  data () {
    return {
      inputval1: '',
      inputval2: '',
      list: []

    }
  },
  methods: {
    add () {
    //   this.list.push({
    //     'name': this.inputval1,
    //     'age': this.inputval2
    //   })
    //   this.$store.commit('setList', this.list)

      // 试一下存入cookie
      //   5分钟过期
      var exp = new Date()
      exp.setTime(exp.getTime() + 60 * 5 * 1000)
      document.cookie = 'roadusername=' + escape(this.inputval2) + ';expires=' + exp.toGMTString() + ';path=/'
    },
    get () {
      let cat = this.comFun.getCookie('roadusername')
      console.log(cat)
    },
    delect () {
      this.comFun.delectCookie('roadusername')
    }
  }
}
</script>
