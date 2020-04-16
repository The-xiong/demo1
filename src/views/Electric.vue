<template>
  <div class="electric">
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
          p1: require("../assets/images/images/p3.png"),
          p2: require("../assets/images/images/p4.png"),
          p3: require("../assets/images/icon/p2.svg"),
          text: "系统冗余设计"
        },
        {
          p1: require("../assets/images/images/p16.png"),
          p2: require("../assets/images/images/p11.png"),
          p3: require("../assets/images/icon/p10.svg"),
          text: "基于SIL3的安全架构"
        },
        {
          p1: require("../assets/images/images/p7.png"),
          p2: require("../assets/images/images/p8.png"),
          p3: require("../assets/images/icon/p4.svg"),
          text: "运动控制方案"
        }
      ],
        setion:[
        {p:require('../assets/images/icon/p6.svg'),t:'视觉管理',tt:'Vision Management'},
        {p:require('../assets/images/icon/p8.svg'),t:'驱动及控制系统',tt:'Drive & Control system'},
        {p:require('../assets/images/icon/p12.svg'),t:'电机系统集成',tt:'Motor solution integration'},
      ]
    };
  },
    methods:{
    showtime(t){
      this.maskS = t
      this.nright = t
    },
     triggerChildMehtod(){
        // 触发子组件的方法
        this.$refs.children.changeImg();
     },
       goto(val) {
      this.i = val;
      console.log(val);
      if (this.i == 0) {
        this.$router.push({
          name: "Motor",
          params: {
            uid: "mao1"
          }
        });
      } else if (this.i == 1) {
        this.$router.push({
          name: "Motor",
          params: {
            uid: "mao1"
          }
        });
      } else if (this.i == 2) {
        this.$router.push({
          name: "Motor",
          params: {
            uid: "mao1"
          }
        });
      } else if (this.i == 3) {
        this.$router.push({
          name: "Motor",
          params: {
            uid: "mao1"
          }
        });
      }
    }
  },
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
.electric >>> .product .box:last-child{
    background-color: #F0F2F5;
    border-bottom: 3px solid rgba(28,129,246,1);;
    color: #1C81F6;
}
.electric >>> .flip li {
  width: 33.33%;
}
 @media (max-width: 1024px) {
   .electric >>> .flip li{
     width: 100%;
   }
  
}
</style>