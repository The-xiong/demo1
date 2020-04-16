<template>
  <div class="guanyu">
    <nav-bar @showtime="showtime" ref="children"></nav-bar>
    <new-s :ok='ok'></new-s>
    <tia-o :item1='item1' :blue1='blue1'></tia-o>
    <about-sa></about-sa>
    <side-bar></side-bar>
    <nav-right :nright="nright"></nav-right>
    <maskf :maskS="maskS" :triggerChildMehtod="triggerChildMehtod"></maskf>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import maskf from "@/components/mask.vue";
import navRight from "@/components/navRight.vue";
import newS from "@/page/newS.vue";
import tiaO from "@/page/tiaO.vue";
import aboutSa from "@/page/aboutSa.vue";
import sideBar from "@/components/sideBar.vue";
export default {
  name: "guanyu",
  components: {
    navBar,
    maskf,
    navRight,
    sideBar,
    newS,
    aboutSa,
    tiaO
  },
  data() {
    return {
      nright: false,
      maskS: false,
       ok: {chi: '关于我们',eng:'About Us'},
       item1: '关于我们',
        blue1:{
           color: "#fff",background: "#56A4FF"
       }
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
.guanyu .newss .gy_box{
  background: url(../assets/images/banner/bg7.png) no-repeat center center;
}
@media (max-width: 414px) {
  .guanyu .newss .gy_box{
    background: url(../assets/images/banner/04.png) no-repeat top center;
  height: 300px;
  padding-top: 100px;
  text-align: center;
  }
  .guanyu .newss .gy_box h1 {
  text-align: center;
}
}
</style>