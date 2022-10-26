<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1>办公楼智能云平台</h1>
        <nav>
          <ul>
            <li>系统首页</li>
            <li>告警处理</li>
            <li>模式管理</li>
            <li>日志管理</li>
            <li>用户管理</li>
            <li>报表中心</li>
            <li @click="testRoom1">切换到房间1</li>
            <li @click="testRoom2">切换到房间2</li>
          </ul>
        </nav>
        <div class="app-time">
          <p style="border-right: 1px solid #fff; padding-right: 5px; margin-right: 5px">12：30</p>
          <p style="display: flex; flex-direction: column; line-height: 20px;">
            <span>2020/12/25</span>
            <span>星期四</span>
          </p>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu class="el-menu-vertical-demo" :router="true" @open="handleOpen" v-if="testRoom == 0" :default-active="$route.path">
            <el-submenu index="1">
              <span slot="title">测试</span>
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="/p1">数字安防首页</el-menu-item>
              <el-menu-item index="/p2">设备首页</el-menu-item>
              <el-menu-item index="/p3">设备管理1</el-menu-item>
              <el-menu-item index="/p4">设备管理2</el-menu-item>
              <el-menu-item index="/p5">设备管理3</el-menu-item>
              <el-menu-item index="/p6">设备管理4</el-menu-item>
              <el-menu-item index="/p7">数据统计1</el-menu-item>
              <el-menu-item index="/p8">数据统计2</el-menu-item>
            </el-submenu>
            <el-submenu index="p1">
              <span slot="title">数字安防</span>
              <el-menu-item>监控系统</el-menu-item>
              <el-menu-item>周界防范</el-menu-item>
              <el-menu-item>安防报警</el-menu-item>
              <el-menu-item>出入管理</el-menu-item>
              <el-menu-item>电子巡更</el-menu-item>
              <el-menu-item>停车管理</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <span slot="title">远程抄表</span>
              <el-menu-item>水表</el-menu-item>
              <el-menu-item>电表</el-menu-item>
              <el-menu-item>燃气表</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <span slot="title">设备管理</span>
              <el-menu-item>灯光控制</el-menu-item>
              <el-menu-item>空调控制</el-menu-item>
              <el-menu-item>电器控制</el-menu-item>
              <el-menu-item>机房控制</el-menu-item>
              <el-menu-item>停车引导</el-menu-item>
              <el-menu-item>无线wifi覆盖</el-menu-item>
            </el-submenu>
            <el-menu-item index="5">
              <span slot="title">门禁管理</span>
            </el-menu-item>
            <el-menu-item index="6">
              <span slot="title">信息发布</span>
            </el-menu-item>
            <el-menu-item index="7">
              <span slot="title">智能广播</span>
            </el-menu-item>
          </el-menu>
          <div class="test-room1" v-if="testRoom == 1">
            <p>楼栋：写字楼A</p>
            <p>楼层：25</p>
            <div class="room1">2505室</div>
            <div class="room1">2506室</div>
            <div class="room1">2507室</div>
            <div class="room1">2508室</div>
            <div class="room1">2509室</div>
          </div>
          <div class="test-room2" v-if="testRoom == 2">
            <div class="room2">地下一层</div>
            <div class="room2">地下一层</div>
            <div class="room2">地下一层</div>
            <div class="room2">地下一层</div>
            <div class="room2">地下一层</div>
            <div class="room2">地下一层</div>
          </div>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <div class="login" v-if="isform">
      <div class="login-zoom">
        <el-form ref="form" :model="form" label-width="80px">
          <h1>智慧园区云管控平台</h1>
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="form.vcode"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="querySubmit">立即登录</el-button>
          </el-form-item>
          <p>建议使用360极速浏览器/谷歌浏览器进行浏览</p>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isform: true,
      testRoom: 0,
      form: {
        username: '',
        password: '',
        vcode: '',
      }
    }
  },
  methods: {
    querySubmit() {
      this.isform = false;
    },
    handleOpen(key) {
      console.log(key);
      const list = ['p1'];
      if(list.indexOf(key) + 1) {
        console.log('qwq');
        this.$router.push('/' + key);
      }
    },
    testRoom1() {
      this.testRoom = 1;
      console.log('qwq');
      this.$router.push('/p4');
    },
    testRoom2() {
      this.testRoom = 2;
      this.$router.push('/p6');
    },
    test(a) {
      console.log(a);
    }
  }
}
</script>

<style>
* {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  color: rgb(255, 255, 255) !important;
  --header-height: 60px;
  --screen-height: 810px;
  --screen-width: 1440px;
  --aside-width: 200px;
}

#app {
  /* width: 100vw;
  height: 56.25vw; */
  width: calc(var(--screen-width));
  height: calc(var(--screen-height));
  position: relative;
  background-color: rgb(1, 40, 64);
  overflow: hidden;
}

main {
  margin: 0 0 0 0 !important;
  padding: 0 0 0 0 !important;
  width: calc(var(--screen-width) - var(--aside-height));
  height: calc(var(--screen-height) - var(--header-height));
}

aside {
  width: calc(var(--aside-height));
  height: calc(var(--screen-height) - var(--header-height));
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  display: flex;
  background-color: rgb(44,76,96);
  border-radius: 500px;
  padding: 5px 30px;
}
header ul > li {
  padding: 0 15px;
  cursor: pointer;
}

.app-time {
  height: 40px;
  line-height: 40px;
  display: flex;

}

.el-container {
  height: 100vh
}

.el-menu {
  background-color: rgb(44,76,96) !important;
  
}

.login {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(1,45,72);
}
.login h1 {
  color: rgb(63,181,192) !important;
  padding: 10px 0;
}
.login-zoom {
  position: absolute;
  width: 33%;
  height: 44%;
  right: 13%;
  top: 34%;
  background-color: rgb(43,88,113);
  padding: 0 20px;
  text-align: center;
  /* box-sizing: border-box; */
}
.test-room1 > p {
  height: 60px;
  line-height: 60px;
  font-size: 1.5rem;
}
.room1 {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 1.2rem;
  padding-left: 15px;
  background-color: rgb(7,24,88);
  margin: 10px 0;
}
.room2 {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 1.2rem;
  padding-left: 15px;
  background-color: rgb(7,24,88);
  margin: 10px 0;
}
</style>
