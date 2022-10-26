<template>
  <div class="p3">
    <div class="p3-item" v-for="item in data" :key="item.id">
      <p><i class="el-icon-share"></i>    {{ item.name }}</p>
      <div class="p3-item-detail">
        <p>已开启设备</p>
        <p><i class="el-icon-share"></i>{{item.light[0]}}/{{item.light[1]}} | <i class="el-icon-share"></i>{{item.air[0]}}/{{item.air[1]}} | <i class="el-icon-share"></i>{{item.window[0]}}/{{item.window[1]}} | <i class="el-icon-share"></i>{{item.elec[0]}}/{{item.elec[1]}}</p>
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
  background-color: rgb(7,24,88);
}
.p3-item > div {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  background-color: rgb(54,71,124);
}
</style>