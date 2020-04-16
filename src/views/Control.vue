<template>
  <div class="control">
    <nav-bar @showtime="showtime" ref="children"></nav-bar>
    <new-st :ok='ok'></new-st>
    <!-- <about-sa></about-sa> -->
    <control-page :commentId='commentId'></control-page>
    <side-bar></side-bar>
    <nav-right :nright="nright"></nav-right>
    <maskf :maskS="maskS" :triggerChildMehtod="triggerChildMehtod"></maskf>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import maskf from "@/components/mask.vue";
import navRight from "@/components/navRight.vue";
import newSt from "@/page/newSt.vue";
import controlPage from "@/page/controlPage.vue";
import sideBar from "@/components/sideBar.vue";
export default {
  name: "control",
  components: {
    navBar,
    maskf,
    navRight,
    sideBar,
    newSt,
    controlPage
    // aboutSa,
  },
  data() {
    return {
      nright: false,
      maskS: false,
       ok: {chi: '驱动及控制系统',eng:'Drive and control system'},
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
  },
    created(){
     this.commentId = this.$route.params.uid
        console.log(this.commentId)
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.control .newst .gy_box{
  background: url(../assets/images/newp/p6.png) no-repeat center center;
}
@media (max-width: 414px) {
  .control .newst .gy_box{
    background: url(../assets/images/banner/05.png) no-repeat top center;
  height: 300px;
  padding-top: 100px;
  text-align: center;
  }
  .control .newst .gy_box h1 {
  text-align: center;
}
}
</style>