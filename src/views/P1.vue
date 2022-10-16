<template>
  <div class="p1">
    <div id="C1" class="p1-item"></div>
    <div id="C2" class="p1-item"></div>
    <div id="C3" class="p1-item"></div>
    <div id="C4" class="p1-item"></div>
    <div id="C5" class="p1-item"></div>
    <div id="C6" class="p1-item"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      random:0,
      Bingtu: {
        title: {
          text: '饼图',
          subtext: '副标题',
          left: '10%',
          top: '5%'
        },
        backgroundColor: '#020f18',
        color: [
          '#00d2ff',
          '#22e5d1',
          '#f4d64e',
          '#0072ff'
        ],
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
              {
                value: 55.91,
                name: '数据1',
              },
              {
                value: 29.46,
                name: '数据2',
              },
              {
                value: 12.77,
                name: '数据3',
              },
              {
                value: 5.8,
                name: '数据4',
              }
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
      let chart = this.$echarts.init(dom)
      chart.setOption(options);
      return chart;
    }
  },
  mounted() {
    this.C1 = this.drawChart(document.getElementById('C1'), this.Bingtu);
    this.C2 = this.drawChart(document.getElementById('C2'), this.Bingtu);
    this.C3 = this.drawChart(document.getElementById('C3'), this.Bingtu);
    this.C4 = this.drawChart(document.getElementById('C4'), this.Bingtu);
    this.C5 = this.drawChart(document.getElementById('C5'), this.Bingtu);
    this.C6 = this.drawChart(document.getElementById('C6'), this.Bingtu);
    setInterval(() => {
      this.random = (Math.random() * 60).toFixed(2);
      let data1 = {
        series: [
          {
            data: [
              {
                value: this.random,
                name: '数据1',
              },
              {
                value: 29.46,
                name: '数据2',
              },
              {
                value: 12.77,
                name: '数据3',
              },
              {
                value: 5.8,
                name: '数据4',
              }
            ]
          }
        ]
      }
      let data2 = {
        series: [
          {
            data: [
              {
                value: 10,
                name: '数据1',
              },
              {
                value: this.random,
                name: '数据2',
              },
              {
                value: 12.77,
                name: '数据3',
              },
              {
                value: 5.8,
                name: '数据4',
              }
            ]
          }
        ]
      }
      this.C1.setOption(data1)
      this.C2.setOption(data2)
      this.C3.setOption(data1)
      this.C4.setOption(data2)
      this.C5.setOption(data1)
      this.C6.setOption(data2)
    }
      , 2000);
  },
}
</script>

<style>
.p1 {
  display: flex;
  flex-wrap: wrap;
}

.p1-item {
  width: 300px;
  height: 300px;
  margin: 1vw;
  background-color: red;
}
</style>