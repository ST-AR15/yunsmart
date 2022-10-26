<template>
  <div class="p4">
    <div class="p4-zoom1">
      <p>XXX室  已开启设备</p>
      <p><i class="el-icon-share"></i>25 | <i class="el-icon-share"></i>25 | <i class="el-icon-share"></i>25 | <i class="el-icon-share"></i>25</p>
    </div>
    <div class="p4-zoom2">
      <div class="p4-zoom2-echarts"></div>
      <div class="p4-zoom2-echarts"></div>
      <div class="p4-zoom2-echarts"></div>
      <div class="p4-zoom2-echarts"></div>
    </div>
    <div class="p4-zoom3">
      <div class="p4-zoom3-item">
        <h2 class="p4-zoom3-item_title">
          <i class="el-icon-share"></i>安防
        </h2>
        <div class="p4-zoom3-item_content">
          <p>大门</p>
          <p>状态：关闭</p>
        </div>
        <div class="p4-zoom3-item_content">
          <p>燃气检测</p>
          <p>状态：<red>报警</red></p>
        </div>
        <div class="p4-zoom3-item_content">
          <p>大门</p>
          <p>状态：正常</p>
        </div>
      </div>
      <div class="p4-zoom3-item">
        <h2 class="p4-zoom3-item_title">
          <i class="el-icon-share"></i>灯光
        </h2>
        <div class="p4-zoom3-item_content">
          <p>大厅灯</p>
          <p style="text-align: center;">
            <button>开启</button>
            <button>关闭</button>
          </p>
        </div>
        <div class="p4-zoom3-item_content">
          <p>过道灯</p>
          <p style="text-align: center;">
            <button>开启</button>
            <button>关闭</button>
          </p>
        </div>
        <div class="p4-zoom3-item_content">
          <p>大厅灯</p>
          <p style="text-align: center;">
            <button>开启</button>
            <button>关闭</button>
          </p>
        </div>
      </div>
      <div class="p4-zoom3-item">
        <h2 class="p4-zoom3-item_title">
          <i class="el-icon-share"></i>空调
        </h2>
        <div class="p4-zoom3-item_content">
          <p>客厅空调</p>
          <p style="display: flex; justify-content: space-around;">
            <span>图标</span>
            <span>
              <button>+</button>
              25
              <button>-</button>
            </span>
          </p>
        </div>
      </div>
      <div class="p4-zoom3-item">
        <h2 class="p4-zoom3-item_title">
          <i class="el-icon-share"></i>灯光
        </h2>
        <div class="p4-zoom3-item_content">
          <p>大厅灯</p>
          <p style="text-align: center;">
            <button>开启</button>
            <button>关闭</button>
          </p>
        </div>
        <div class="p4-zoom3-item_content">
          <p>过道灯</p>
          <p style="text-align: center;">
            <button>开启</button>
            <button>关闭</button>
          </p>
        </div>
        <div class="p4-zoom3-item_content">
          <p>大厅灯</p>
          <p style="text-align: center;">
            <button>开启</button>
            <button>关闭</button>
          </p>
        </div>
      </div>
      <div class="p4-zoom3-item">
        <h2 class="p4-zoom3-item_title">
          <i class="el-icon-share"></i>灯光
        </h2>
        <div class="p4-zoom3-item_content">
          <p>大厅灯</p>
          <p style="text-align: center;">
            <button>开启</button>
            <button>关闭</button>
          </p>
        </div>
        <div class="p4-zoom3-item_content">
          <p>过道灯</p>
          <p style="text-align: center;">
            <button>开启</button>
            <button>关闭</button>
          </p>
        </div>
        <div class="p4-zoom3-item_content">
          <p>大厅灯</p>
          <p style="text-align: center;">
            <button>开启</button>
            <button>关闭</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'P4',
  data() {
    return {
      
    }
  }
}
</script>

<style>
red {
  color: red !important;
}
button {
  color: black !important;
}
.p4 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 75%;
  grid-gap: 20px;
}
.p4-zoom1 {
  grid-column: 1/2;
  padding: 30px;
  background-color: rgb(54,71,124);
  font-size: 2rem;
}
.p4-zoom1 > p {
  margin-bottom: 30px;
}
.p4-zoom2 {
  grid-column: 2/3;
  background-color: rgb(54,71,124);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.p4-zoom2-echarts {
  width: 20%;
  height: 90%;
  background-color: blue;
}
.p4-zoom3 {
  grid-column: 1/3;
  display: flex;
  justify-content: space-around;
}
.p4-zoom3-item {
  width: 18%;
  height: 100%;
  background-color: rgb(54,71,124);
}
.p4-zoom3-item_title {
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: rgb(12,59,83);
  border: 2px dashed white;
}
.p4-zoom3-item_content {
  border-radius: 3px;
  background-color: rgb(38,92,109);
  margin: 15px;
  border-radius: 25px;
}
.p4-zoom3-item_content > p {
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
}
.p4-zoom3-item_content > p:nth-child(1) {
  border-bottom: 1px solid white;
}
</style>