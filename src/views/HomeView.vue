<template>
  <div class="home">
    <div class="home-view1">
      <div class="hv-row">
        <Dashboard id="C1" :options="Yibiaopan" />
        <Dashboard id="C2" :options="Yibiaopan" />
      </div>
      <div class="hv-row">
        <Pie id="C3" :options="Bingtu" />
        <Pie id="C4" :options="Bingtu" />
        <Pie id="C5" :options="Bingtu" />
      </div>
      <div class="hv-row">
        <Pie id="C6" :options="Bingtu" />
        <Pie id="C7" :options="Bingtu" />
        <Pie id="C8" :options="Bingtu" />
      </div>
    </div>
    <div class="home-view2">
      <div class="hv-row">
        <div id="C9" class="hv-rectangle-item">
          非erchart仪表图例
        </div>
      </div>
      <div class="hv-row">
        <Pie id="C10" :options="Bingtu" />
        <Pie id="C11" :options="Bingtu" />
      </div>
      <div class="hv-col">
        <div id="C12" class="hv-rectangle-item"></div>
        <div id="C13" class="hv-rectangle-item"></div>
      </div>
    </div>
    <div class="home-view3">
      <div id="C14" class="hv-bigRectangle-item"></div>
    </div>
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue';
import Pie from '@/components/Pie.vue';
export default {
  name: 'HomeView',
  components: {
    Pie,
    Dashboard
},
  data() {
    return {
      random: 10,
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
            min: -30,
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
              value: 30,
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
              formatter: function (value) {
                if (value === -30 || value === 100) {
                  return value;
                }
              },
            },
          },
        ],
      }, //仪表盘样式
      Bingtu: {
        title: "图表的标题",
        subTitle: "图表的副标题",
        data: [
          {
            value: 55.91,
            name: '第一个',
          },
          {
            value: 29.46,
            name: '第二个',
          },
          {
            value: 12.77,
            name: '第三个',
          },
          {
            value: 5.8,
            name: '第四个',
          }
        ]
      },
      Bar: {
        title: {
          left: '9%',
          top: '10%',
          text: '条图-某些数据',
          textStyle: {
            fontSize: 12,
            color: "gray"
          }
        },
        backgroundColor: '#031d33',
        xAxis: {
          show: false,
          type: 'value',
          boundaryGap: [0, 0],
        },
        yAxis: [
          {
            type: 'category',
            data: [''],
            axisLine: { show: false },
            axisTick: [
              {
                show: false,
              },
            ],
          },
        ],
        series: [
          {
            type: 'bar',
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: {
                  type: 'linear',
                  x: 1,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 1, color: 'rgba(48, 236, 166, 1)' // 0% 处的颜色
                  }, {
                    offset: 0, color: 'rgba(48, 236, 166, 0.5)' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              },
            },
            barWidth: 20,
            data: [10],
          },
          {
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [100],
            itemStyle: {
              normal: {
                color: 'rgba(28, 128, 213, 0.19)',
                borderWidth: 1,
                borderColor: 'rgba(48, 236, 166, 1)',
                barBorderRadius: 30,
              },
            },
          },
        ],
      }, //条样式
      Area: {
        title: {
          left: '7.5%',
          top: '5%',
          text: '区域折线图',
          textStyle: {
            fontSize: 12,
            color: "gray"
          }
        },
        backgroundColor: '#020347',
        legend: {
          show: true,
          right: '10%',
          top: '10%',
          itemGap: 20,
          itemWidth: 15,
          itemHeight: 10,
          data: [
            {
              name: '数据单位',
              icon: 'circle',
              textStyle: {
                color: '#00DAFF',
              },
            },
          ],
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            label: {
              show: true,
              backgroundColor: '#fff',
              color: '#556677',
              borderColor: 'rgba(0,0,0,0)',
              shadowColor: 'rgba(0,0,0,0)',
              shadowOffsetY: 0,
            },
            lineStyle: {
              width: 0,
            },
          },
          backgroundColor: '#fff',
          textStyle: {
            color: '#5c6c7c',
          },
        },
        grid: {
          top: '15%',
        },
        xAxis: [
          {
            type: 'category',
            data: ['1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时'],
            axisLine: {
              lineStyle: {
                color: '#0173DA',
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                color: '#FFFFFF',
              },
              // 默认x轴字体大小
              fontSize: 12,
              // margin:文字到x轴的距离
            },
            boundaryGap: false,
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
                color: '#0173DA',
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#0173DA',
              },
            },
            axisLabel: {
              textStyle: {
                color: '#FFFFFF',
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
                color: '#0173DA',
              },
            },
          },
          {
            type: 'value',
            position: 'right',
            axisTick: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: '#0173DA',
              },
              formatter: '{value}',
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#0173DA',
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '数据单位',
            type: 'line',
            data: [100, 220, 280, 200, 500, 420, 600, 500],
            symbolSize: 1,
            symbol: 'circle',
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
              width: 2,
              color: '#00DAFF',
            },
            itemStyle: {
              normal: {
                color: '#00DAFF',
                borderColor: '#00DAFF',
              },
            },
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#00DAFF' // 0% 处的颜色
                  }, {
                    offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                  }],
                }
              },
            },
          },
        ],
      },
    }
  },
  methods: {
    resizeEvent(e) {
      this.C14.resize();
    },
    drawChart(dom, options) {
      let chart = this.$echarts.init(dom)
      chart.setOption(options);
      return chart;
    }
  },
  created() {
    window.addEventListener("resize", this.resizeEvent);
  },
  mounted() {
    this.C12 = this.drawChart(document.getElementById('C12'), this.Bar);
    this.C13 = this.drawChart(document.getElementById('C13'), this.Bar);
    this.C14 = this.drawChart(document.getElementById('C14'), this.Area);
    // setInterval(() => {
    //   this.random = (Math.random() * 60).toFixed(2);
    //   let datas = {
    //     series: [
    //       {
    //         data: [
    //           {
    //             name: '指示器',
    //             value: this.random
    //           }
    //         ]
    //       }
    //     ]
    //   }
    //   this.C1.setOption(datas)
    // }
    //   , 2000);
  },
  updated() {

  },
  destroyed() {
    window.removeEventListener("resize", this.resizeEvent);
  }
}
</script>

<style>
.home {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 70% 30%;
  grid-gap: 20px;
}

.home-view1 {
  /* overflow: auto;
  display: block;
  flex-shrink: 0;
  flex-direction: column; */
  grid-row: 1/2;
  grid-column: 1/2;
}

.home-view2 {
  /* display: block;
  overflow: auto;
  flex-shrink: 0;
  flex-direction: column; */
  grid-row: 1/2;
  grid-column: 2/3;
  /* padding-top: 5%; */
}

.home-view3 {
  grid-row: 2/3;
  grid-column: 1/3;
}

.hv-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
  min-width: 600px;
  margin: 2% 0 1% 0;
}

.hv-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
  min-height: 250px;
  margin: 2% 0% 1% 0%;
}

.hv-square-item {
  background-color: aqua;
  height: 10vw;
  width: 10vw;
}

.hv-rectangle-item {
  background-color: aqua;
  height: 100px;
  width: 500px;
}

.hv-bigRectangle-item {
  height: 250px;
  width: 100%;
}



</style>