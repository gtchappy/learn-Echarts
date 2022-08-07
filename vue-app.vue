<template>
  <div>
    <h1>
      看我如何在Vue中使用Echarts
    </h1>
    <vue-echarts :option="option" :loading="loading"></vue-echarts>
    <button @click="loadMore">加载更多</button>
  </div>
</template>


<script>
import VueEcharts from "./vue-echarts";

export default {
  data() {
    return {
      loading: false,
      option: {
        baseOption: {
          title: {
            show: true,
            text: 'ECharts 入门示例'
          },
          tooltip: {
            show: true
          },
          legend: {
            data: ['销量']
          },
          xAxis: {
            type: 'category',
            data: ['2020', '2022', '2023']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            lineStyle: {
              color: 'blue'
            },
            itemStyle: {
              color: "rgb(26,115,231)",
            },
            name: '销量',
            type: 'line',
            data: [1, 2, 3]
          }]
        }
      }
    }
  },
  components: {
    VueEcharts
  },
  methods: {
    loadMore() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.option = {
          xAxis: {
            data: ['2020', '2022', '2023', '2024']
          },
          series: [{
            data: [1, 2, 3, 4]
          }]
        }
      }, 3000)
    }
  }
}

</script>