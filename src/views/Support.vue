<template>
  <div class="support">
    <nav-bar @showtime="showtime" ref="children"></nav-bar>
    <new-s :ok='ok'></new-s>
    <tia-o :item1='item1' :item2='item2' :blue1='blue1'  @okk1='okk1' @okk2='okk2'></tia-o>
    <lian-xi></lian-xi>
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
import lianXi from "@/page/lianXi.vue";
import sideBar from "@/components/sideBar.vue";
export default {
  name: "support",
  components: {
    navBar,
    maskf,
    navRight,
    sideBar,
    newS,
    tiaO,
    lianXi,
  },
  data() {
    return {
      nright: false,
      maskS: false,
       ok: {chi: '联系与支持',eng:'Contact and Support'},
      item1: '联系我们',
      item2: '文件下载',
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
     },
     okk1(){
       this.$router.push({
           path: 'support'
         })
     },
     okk2(){
       this.$router.push({
           path: 'download'
         })
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
.support .newss .gy_box{
  background: url(../assets/images/banner/bg8.png) no-repeat center center;
}
@media (max-width: 414px) {
  .support .newss .gy_box{
    background: url(../assets/images/banner/03.png) no-repeat top center;
  height: 300px;
  padding-top: 100px;
  text-align: center;
  }
  .support .newss .gy_box h1 {
  text-align: center;
}
}
</style>