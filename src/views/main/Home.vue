<style lang="less">
  .main{
    display: flex;
    .left,.right{
      width: 400px;
    }
    .middle{
      flex:1;
    }
  }
</style>
<template>
  <div class="main">
      <div class="left col">

        <!-- 预警按类型分类饼图 -->
        <div class="top">
          <PieChart v-bind:pieData="pieData" v-if="showpie1"></PieChart>
        </div>
        <!-- 预警按预警级别分类饼图 -->
        <div class="mid"></div>
        <!-- 项目基本信息展示：名称、监管单位、施工单位、标段数据量、设备数量等 -->
        <div class="botm"></div>
      </div>
      <div class="middle col">地图</div>
      <div class="right col">
        <div class="top"></div>
        <div class="mid"></div>
        <div class="botm"></div>
      </div>

  </div>
</template>
<script>
import PieChart from '@/components/PieChart.vue'
export default {
  components: {
    PieChart
  },
  data () {
    return {
      mItemID: '',
      pieData: {},
      showpie1: false
    }
  },
  watch: {
    // mItemID: 'openp'
  },
  mounted () {
    this.mItemID = this.$store.state.mItemID
    // 得到数据
    // 预警类型(bt)
    this.openp()
  },
  methods: {
    openp () {
      var obj = {
        mUserID: this.comFun.getCookie('roadmUserID'),
        mItemID: this.$store.state.mItemID
      }
      console.log(obj)
      this.comFun.post('/Alarm_Log/getAlarmLogRepByType', obj, this).then((rs) => {
        console.log(rs)
        if (rs.code === 0) {
          this.showpie1 = true
          this.pieData = {
            title: {
              text: '某站点用户访问来源',
              subtext: '纯属虚构',
              x: 'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            // legend: {
            //   orient: 'vertical',
            //   left: 'left',
            //   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            // },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                  { value: 335, name: '直接访问' },
                  { value: 310, name: '邮件营销' },
                  { value: 234, name: '联盟广告' },
                  { value: 135, name: '视频广告' },
                  { value: 1548, name: '搜索引擎' }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          }
          return false
        }
      }, (err) => { console.log(err) })
    }
  }
}
</script>
