<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1>左上标题</h1>
        <nav>
          <ul>
            <li>nav内容</li>
            <li>nav内容</li>
            <li>nav内容</li>
            <li>nav内容</li>
            <li>nav内容</li>
            <li>nav内容</li>
          </ul>
        </nav>
        <div>
          时间
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu class="el-menu-vertical-demo" :router="true">
            <el-submenu index="1">
              <span slot="title">导航一</span>
              <el-menu-item index="login">登录</el-menu-item>
              <el-menu-item index="home">首页</el-menu-item>
              <el-menu-item index="p1">数字安防首页</el-menu-item>
              <el-menu-item index="p2">设备首页</el-menu-item>
              <el-menu-item index="p3">设备管理1</el-menu-item>
              <el-menu-item index="p4">设备管理2</el-menu-item>
              <el-menu-item index="p5">设备管理3</el-menu-item>
              <el-menu-item index="p6">设备管理4</el-menu-item>
              <el-menu-item index="p7">数据统计1</el-menu-item>
              <el-menu-item index="p8">数据统计2</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">

              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header ul {
  list-style: none;
  display: flex;
}
.el-container {
  height: 100vh
}
body {
  /* background-color: rgb(1,45,72); */
}
</style>
