<!--饼图模板 -->
<style lang="scss" scoped>
  #chart1{
    width: 50%;
    height: 500px;

  }
</style>
<template>
  <div>
    <div id="chart1"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'PieChart',
  props: {
    pieData: {
      type: Object
    }
  },
  data () {
    return {
      msg: '生产数据'
    }
  },
  mounted () {
    let myChart = echarts.init(document.getElementById('chart1'))
    let option = this.pieData
    myChart.setOption(option)
    window.addEventListener('resize', function () {
      myChart.resize()
    })
  }

}
</script>
