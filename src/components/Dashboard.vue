<template>
  <div class="dashboard-chart" :id="id">

  </div>
</template>

<script>
export default {
  name: "DashboardChart",
  props: {
    id: String,
    options: Object,
  },
  data() {
    return {
      Yibiaopan: {
        title: {
          text: '仪表',
          left: '15%',
          top: '10%',
          textAlign: 'center',
        },
        backgroundColor: '#0E1327',
        series: [
          {
            type: 'gauge',
            center: ['50%', '60%'],
            radius: '70%',
            startAngle: '225',
            endAngle: '-45',
            min: 0,
            max: 100,
            pointer: {
              show: false,
            },
            progress: {
              show: true,
              width: 20,
              itemStyle: {
                color:
                {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#0dd2db' // 0% 处的颜色
                  }, {
                    offset: 1, color: '#1f79b6' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              }
            },
            detail: {
              valueAnimation: true,
              width: '60%',
              lineHeight: 40,
              borderRadius: 8,
              offsetCenter: [0, '80%'],
              fontSize: 20,
              fontWeight: 'bolder',
              formatter: '{value}',
              color: 'white'
            },
            data: [{
              value: 0,
              name: '指示器',
            }],
            title: {
              show: true,
              color: '#fff',
              offsetCenter: ['0', '0'],
              fontSize: 20
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: [[1, '#15337C']],
                width: 20,
                opacity: 1,
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
              length: 0,
              lineStyle: {
                color: '#00377a',
                width: 2,
                type: 'solid',
              },
            },
            axisLabel: {
              show: true,
              color: '#fff',
              formatter: function (value, index) {
                return null;
              },
            },
          },
        ],
      }, //仪表盘样式
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
    this.Yibiaopan.series[0].min = this.options.dataArea[0];
    this.Yibiaopan.series[0].max = this.options.dataArea[1];
    this.Yibiaopan.title.text = this.options.title;
    this.Yibiaopan.series[0].data[0].name = this.options.subTitle;
    this.Yibiaopan.series[0].data[0].value = this.options.data;

    let dashboardChart = this.drawChart(document.getElementById(this.id), this.Yibiaopan);
  }

}
</script>

<style>
.dashboard-chart {
  background-color: aqua;
  height: 10vw;
  width: 10vw;
}
</style>