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
          <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
              <span slot="title">导航一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
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
        <el-main>Main</el-main>
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
