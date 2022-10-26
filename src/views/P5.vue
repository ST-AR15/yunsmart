<template>
  <div class="p5">
    <div class="p5-item" v-for="item in data" :key="item.id">
      <p><i class="el-icon-share"></i>    {{ item.name }}</p>
      <div>图标</div>
      <div class="p5-item-detail">
        <p>打开/总数</p>
        <p>{{item.a}}/{{item.b}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'p5',
  data() {
    return {
      data: [
        {
          id: 1,
          name: '一层大厅',
          a: 25,
          b: 30
        },
        {
          id: 2,
          name: '地下一层',
          a: 25,
          b: 30
        },
        {
          id: 3,
          name: '01层',
          a: 25,
          b: 30
        },
        {
          id: 4,
          name: '02层',
          a: 25,
          b: 30
        },
        {
          id: 5,
          name: '03层',
          a: 25,
          b: 30
        },
        {
          id: 6,
          name: '04层',
          a: 25,
          b: 30
        },
        {
          id: 7,
          name: '05层',
          a: 25,
          b: 30
        },
        {
          id: 8,
          name: '06层',
          a: 25,
          b: 30
        },
        {
          id: 9,
          name: '07层',
          a: 25,
          b: 30
        },
        {
          id: 10,
          name: '08层',
          a: 25,
          b: 30
        },
      ]
    }
    
  },
}
</script>

<style>
.p5 {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.p5-item {
  width: 40%;
  height: 80px;
  display: flex;
  margin-bottom: 20px;
  background-color: rgb(54,71,124);
  align-items: center;
}
.p5-item > p {
  width: 30%;
  text-align: center;
  line-height: 80px;
  background-color: rgb(7,24,88);
}
.p5-item > div {
  box-sizing: border-box;
  padding-left: 40px;
  width: 35%;
}
.p5-item > div > p {
  height: 30px;
  line-height: 30px
}
</style>