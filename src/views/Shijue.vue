<template>
  <div class="shijue">
    <nav-bar @showtime="showtime" ref="children"></nav-bar>
    <new-st :ok="ok"></new-st>
    <guan-li :commentId='commentId'></guan-li>
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
import guanLi from "@/page/guanLi.vue";
import sideBar from "@/components/sideBar.vue";
export default {
  name: "shijue",
  components: {
    navBar,
    maskf,
    navRight,
    sideBar,
    newSt,
    guanLi
  },
  data() {
    return {
      commentId: '',
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
  mounted(){
       
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
.shijue .newst .gy_box{
  background: url(../assets/images/newp/p5.png) no-repeat center center;
}
@media (max-width: 414px) {
  .shijue .newst .gy_box{
    background: url(../assets/images/banner/01.png) no-repeat top center;
  height: 300px;
  padding-top: 100px;
  text-align: center;
  }
  .shijue .newst .gy_box h1 {
  text-align: center;
}
}
</style>