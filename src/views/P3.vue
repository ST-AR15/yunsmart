<template>
  <div class="p3">
    <div class="p3-item" v-for="item in data" :key="item.id">
      <p v-text="item.name"></p>
      <div class="p3-item-detail">
        <p>已开启设备</p>
        <p>{{item.light[0]}}/{{item.light[1]}} | {{item.air[0]}}/{{item.air[1]}} | {{item.window[0]}}/{{item.window[1]}} | {{item.elec[0]}}/{{item.elec[1]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'P3',
  data() {
    return {
      data: [
        {
          id: 1,
          name: '一层大厅',
          light: [25, 25],
          air: [13, 13],
          window: [6, 6],
          elec: [11, 11],
        },
        {
          id: 2,
          name: '地下一层',
          light: [25, 25],
          air: [13, 13],
          window: [6, 6],
          elec: [11, 11],
        },
        {
          id: 3,
          name: '01层',
          light: [25, 25],
          air: [13, 13],
          window: [6, 6],
          elec: [11, 11],
        },
        {
          id: 4,
          name: '02层',
          light: [25, 25],
          air: [13, 13],
          window: [6, 6],
          elec: [11, 11],
        },
        {
          id: 5,
          name: '03层',
          light: [25, 25],
          air: [13, 13],
          window: [6, 6],
          elec: [11, 11],
        },
        {
          id: 6,
          name: '04层',
          light: [25, 25],
          air: [13, 13],
          window: [6, 6],
          elec: [11, 11],
        },
        {
          id: 7,
          name: '05层',
          light: [25, 25],
          air: [13, 13],
          window: [6, 6],
          elec: [11, 11],
        },
        {
          id: 8,
          name: '06层',
          light: [25, 25],
          air: [13, 13],
          window: [6, 6],
          elec: [11, 11],
        },
        {
          id: 9,
          name: '07层',
          light: [25, 25],
          air: [13, 13],
          window: [6, 6],
          elec: [11, 11],
        },
        {
          id: 10,
          name: '08层',
          light: [25, 25],
          air: [13, 13],
          window: [6, 6],
          elec: [11, 11],
        },
      ]
    }
    
  },
}
</script>

<style>
.p3 {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.p3-item {
  width: 40%;
  height: 80px;
  display: flex;
  margin-bottom: 20px;
}
.p3-item > p {
  width: 30%;
  text-align: center;
  line-height: 80px;
  background-color: aqua;
}
.p3-item > div {
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
}
</style>