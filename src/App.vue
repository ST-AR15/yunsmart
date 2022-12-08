<template>
  <div id="app">
    <header>
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
    </header>
    <section>
      <aside>
        <div class="menu" v-if="testRoom == 0">
          <template v-for="(item, i) in menu">
            <p class="menu-submenu" @click="querySubmenu(item.path, i)" v-text="item.title"></p>
            <ul class="menu-inline" :id="'inlinemenu' + i">
              <li class="menu-item" v-for="menuitem in item.items">
                <router-link :to="menuitem.path" v-text="menuitem.title" v-if="menuitem.path"></router-link>
                <a v-text="menuitem.title" v-else></a>
              </li>
            </ul>
          </template>
        </div>
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
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </section>
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
      },
      menu: [
        {
          title: "测试",
          path: "/",
          items: [
            {
              title: "首页",
              path: "/"
            },
            {
              title: "设备管理3",
              path: "/p5"
            },
            {
              title: "设备管理4",
              path: "/p6"
            },
          ]
        },
        {
          title: "数字安防",
          path: "/",
          items: [
            {
              title: "（这里还没有内容）",
              path: null
            }
          ]
        },
        {
          title: "设备管理",
          path: "/sbgl",
          items: [
            {
              title: "第一种的设备状态",
              path: "/sbgl/type1"
            },
            {
              title: "第二种的灯光控制",
              path: "/sbgl/type2"
            }
          ]
        },
        {
          title: "统计",
          path: "/tj",
          items: [
          {
              title: "能耗",
              path: "/tj/nh"
            },
            {
              title: "环境",
              path: "/tj/hj"
            }
          ]
        }
      ]
    }
  },
  methods: {
    querySubmit() {
      this.isform = false;
    },
    handleOpen(key) {
      const list = ['szaf', 'sbgl'];
      if(list.indexOf(key) + 1) {
        this.$router.push('/' + key);
      }
    },
    querySubmenu(path, index) {
      let len = this.menu.length;
      for(let i = 0; i < len; i++) {
        if(index == i) {
          if(document.getElementById('inlinemenu' + i).style.height == 50*this.menu[i].items.length + 'px') {
            document.getElementById('inlinemenu' + i).style.height = 0;
          } else {
            document.getElementById('inlinemenu' + i).style.height = 50*this.menu[i].items.length + 'px';
          }
        } else {
          document.getElementById('inlinemenu' + i).style.height = 0;
        }
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
  },
  mounted() {
    this.$router.push('/');
  }
}
</script>

<style>
/* 全局 */
:root {
  --theme-dark-bg: rgb(0, 97, 158);
  --theme-light-bg: rgb(4, 85, 136);
  --font-color: rgb(255, 255, 255);
}

* {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}

#app {
  width: 100vw;
  height: 100vh;
  min-height: 50vw; /* 至少2：1 */
  position: relative;
  overflow: hidden;
  color: rgb(255, 255, 255);
}

/* 整体构造 */
header {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--theme-dark-bg);
}

section {
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
}

aside {
  position: relative;
  width: 14%;
  height: 100%;
  background-color: var(--theme-dark-bg);
}

.menu-submenu {
  height: 56px;
  line-height: 56px;
  padding: 0 20px;
  cursor: pointer;
  background-color: var(--theme-dark-bg);
  transition: all .7s;
}
.menu-submenu:hover {
  background-color: var(--theme-light-bg);
}

.menu-item {
  height: 50px;
  line-height: 50px;
  background-color: var(--theme-dark-bg);
  transition: all .7s;
}

.menu-item:hover {
  background-color: var(--theme-light-bg);
}


.menu-item > a {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 40px;
  text-decoration: none;
  color: var(--font-color);
  cursor: pointer;
}

.menu-inline {
  height: 0;
  transition: all .4s;
  overflow: hidden;
}

main {
  position: relative;
  width: 86%;
  height: 100%;
  background-color: var(--theme-light-bg);
  padding: 20px;
  box-sizing: border-box;
}

main > div {
  width: 100%;
  height: 100%;
  position: relative;
}

/* header排版 */
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

/* TODO 临时菜单 */
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


/* TODO 临时登录 */
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
</style>
