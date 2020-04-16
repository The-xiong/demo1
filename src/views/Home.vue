<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <nav-bar @showtime="showtime" ref="children"></nav-bar>
    <ban-ner></ban-ner>
    <pro-duct :setion="setion"></pro-duct>
    <f-lip :photo="photo" @goto="goto"></f-lip>
    <about-us></about-us>
    <con-tact></con-tact>
    <side-bar></side-bar>
    <nav-right :nright="nright"></nav-right>
    <maskf :maskS="maskS" :triggerChildMehtod="triggerChildMehtod"></maskf>
  </div>
</template>

<script>
// @ is an alias to /src
import navBar from "@/components/navBar.vue";
import banNer from "@/components/banNer.vue";
import proDuct from "@/components/proDuct.vue";
import sideBar from "@/components/sideBar.vue";
import conTact from "@/components/conTact.vue";
import fLip from "@/components/fLip.vue";
import aboutUs from "@/components/aboutUs.vue";
import maskf from "@/components/mask.vue";
import navRight from "@/components/navRight.vue";

export default {
  name: "Home",
  components: {
    navBar,
    banNer,
    proDuct,
    sideBar,
    conTact,
    fLip,
    aboutUs,
    maskf,
    navRight
  },
  data() {
    return {
      nright: false,
      maskS: false,
      photo: [
        {
          p1: require("../assets/images/images/p1.png"),
          p2: require("../assets/images/images/p2.png"),
          p3: require("../assets/images/icon/p1.svg"),
          text: "人行管理"
        },
        {
          p1: require("../assets/images/images/p15.png"),
          p2: require("../assets/images/images/p12.png"),
          p3: require("../assets/images/icon/p11.svg"),
          text: "安全控制"
        },
        {
          p1: require("../assets/images/images/p9.png"),
          p2: require("../assets/images/images/p10.png"),
          p3: require("../assets/images/icon/p9.svg"),
          text: "站台管理"
        },
        {
          p1: require("../assets/images/images/p21.png"),
          p2: require("../assets/images/images/p22.png"),
          p3: require("../assets/images/icon/p1.svg"),
          text: "楼宇智慧眼"
        }
      ],
      setion: [
        {
          p: require("../assets/images/icon/p5.svg"),
          t: "视觉管理",
          tt: "Vision Management"
        },
        {
          p: require("../assets/images/icon/p8.svg"),
          t: "驱动及控制系统",
          tt: "Drive & Control system"
        },
        {
          p: require("../assets/images/icon/p13.svg"),
          t: "电机系统集成",
          tt: "Motor solution integration"
        }
      ]
    };
  },
  methods: {
    showtime(t) {
      this.maskS = t;
      this.nright = t;
    },
    triggerChildMehtod() {
      // 触发子组件的方法
      this.$refs.children.changeImg();
    },
    goto(val) {
      this.i = val;
      console.log(val);
      if (this.i == 0) {
        this.$router.push({
          name: "Shijue",
          params: {
            uid: "mao1"
          }
        });
      } else if (this.i == 1) {
        this.$router.push({
          name: "Shijue",
          params: {
            uid: "mao2"
          }
        });
      } else if (this.i == 2) {
        this.$router.push({
          name: "Shijue",
          params: {
            uid: "mao3"
          }
        });
      } else if (this.i == 3) {
        this.$router.push({
          name: "Shijue",
          params: {
            uid: "mao4"
          }
        });
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
}
/*正常的未被访问过的链接*/
a:link {
  text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
  text-decoration: none;
}
/*鼠标划过(停留)的链接*/
a:hover {
  text-decoration: none;
}
/* 正在点击的链接*/
a:active {
  text-decoration: none;
}
</style>
<style scoped>
.home >>> .product .box:first-child {
  background-color: #f0f2f5;
  border-bottom: 3px solid rgba(28, 129, 246, 1);
  color: #1c81f6;
}
</style>