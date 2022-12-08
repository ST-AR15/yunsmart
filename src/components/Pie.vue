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
  data() {
    return {
      Bingtu: {
        title: {
          text: '',
          subtext: '',
          left: '10%',
          top: '5%'
        },
        backgroundColor: '#020f18',
        series: [
          {
            type: 'pie',
            startAngle: 180, //起始角度
            clockwise: false, //是否顺时针
            radius: ['30%', '45%'],
            center: ['50%', '60%'],
            avoidLabelOverlap: false,
            label: {
              emphasis: {
                show: true
              }
            },
            labelLine: {
              length: 10,
              length2: 5,
            },
            data: [
              // {
              //   value: 55.91,
              //   name: '数据1',
              // },
              // {
              //   value: 29.46,
              //   name: '数据2',
              // },
              // {
              //   value: 12.77,
              //   name: '数据3',
              // },
              // {
              //   value: 5.8,
              //   name: '数据4',
              // }
            ],
            itemStyle: {
              normal: {
                shadowColor: '#37B4CD',
                shadowBlur: 30,
                shadowOffsetY: 10
              },
            },
          },
        ]
      }, //饼图样式
    }
  },
  methods: {
    drawChart(dom, options) {
      let chart = this.$echarts.init(dom);
      chart.setOption(options);
      return chart;
    }
    
  },
  mounted() {
    this.Bingtu.title.text = this.options.title;
    this.Bingtu.title.subtext = this.options.subTitle;
    this.Bingtu.series[0].data = this.options.data;
    this.pieChart = this.drawChart(document.getElementById(this.id), this.Bingtu);  
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