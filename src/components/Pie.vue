<template>
  <div class="pie-chart" :id="id">

  </div>
</template>

<script>
export default {
  name: "PieChart",
  props: {
    id: String,
    options: Object,
  },
  // data() {
  //   return {
  //     options: {
  //       title: {
  //         text: '饼图',
  //         subtext: '副标题',
  //         left: '10%',
  //         top: '5%'
  //       },
  //       backgroundColor: '#020f18',
  //       color: [
  //         '#00d2ff',
  //         '#22e5d1',
  //         '#f4d64e',
  //         '#0072ff'
  //       ],
  //       series: [
  //         {
  //           type: 'pie',
  //           startAngle: 180, //起始角度
  //           clockwise: false, //是否顺时针
  //           radius: ['30%', '45%'],
  //           center: ['50%', '60%'],
  //           avoidLabelOverlap: false,
  //           label: {
  //             emphasis: {
  //               show: true
  //             }
  //           },
  //           labelLine: {
  //             length: 10,
  //             length2: 5,
  //           },
  //           data: [
  //             {
  //               value: 55.91,
  //               name: '数据1',
  //             },
  //             {
  //               value: 29.46,
  //               name: '数据2',
  //             },
  //             {
  //               value: 12.77,
  //               name: '数据3',
  //             },
  //             {
  //               value: 5.8,
  //               name: '数据4',
  //             }
  //           ],
  //           itemStyle: {
  //             normal: {
  //               shadowColor: '#37B4CD',
  //               shadowBlur: 30,
  //               shadowOffsetY: 10
  //             },
  //           },
  //         },
  //       ]
  //     }, //饼图样式
  //   }
  // },
  methods: {
    drawChart(dom, options) {
      let chart = this.$echarts.init(dom);
      chart.setOption(options);
      return chart;
    }
    
  },
  mounted() {
    this.pieChart = this.drawChart(document.getElementById(this.id), this.options);  
  }
}
</script>

<style>
.pie-chart {
  background-color: aqua;
  height: 10vw;
  width: 10vw;
}
</style>