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
  methods: {
    drawChart(dom, options) {
      let chart = this.$echarts.init(dom);
      chart.setOption(options);
      return chart;
    }
  },
  mounted() {
    let dashboardChart = this.drawChart(document.getElementById(this.id), this.options);
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