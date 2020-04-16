<template>
  <div class="motor">
    <nav-bar @showtime="showtime" ref="children"></nav-bar>
    <new-st :ok='ok'></new-st>
    <product-list :commentId='commentId'></product-list>
    <!-- <tia-o :item1='item1' :blue1='blue1'></tia-o> -->
    <!-- <about-sa></about-sa> -->
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
import productList from "@/page/productList.vue"
// import tiaO from "@/page/tiaO.vue";
// import aboutSa from "@/page/aboutSa.vue";
import sideBar from "@/components/sideBar.vue";
export default {
  name: "motor",
  components: {
    navBar,
    maskf,
    navRight,
    sideBar,
    newSt,
    productList
    // aboutSa,
    // tiaO
  },
  data() {
    return {
      nright: false,
      maskS: false,
       ok: {chi: '电机系统集成',eng:'Motor solution integration'},
    //    item1: '关于我们',
    //     blue1:{
    //        color: "#fff",background: "#56A4FF"
    //    }
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
.motor .newst .gy_box{
  background: url(../assets/images/newp/p9.png) no-repeat center center;
}
@media (max-width: 414px) {
  .motor .newst .gy_box{
    background: url(../assets/images/banner/02.png) no-repeat top center;
  height: 300px;
  padding-top: 100px;
  text-align: center;
  }
  .motor .newst .gy_box h1 {
  text-align: center;
}
}
</style>