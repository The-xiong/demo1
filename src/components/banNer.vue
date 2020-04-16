<template>
  <div class="banner" id="bann">
    <swiper :options="swiperOption">
      <swiper-slide class="s1" >
        <!-- <img src="../assets/images/banner/bg1.png" alt /> -->
        <div class="dyob" @click="go1()">
          <div class="dyob_l">
            <h1>
              视觉管理<br>
              <span>Vision Management</span>
            </h1>
            <!-- <a href="">查看详情</a> -->
          </div>
          <div class="dyob_b">
            <img src="../assets/images/banner/pic1.png" alt="">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="s2" >
        <!-- <img src="../assets/images/banner/bg2.png" alt /> -->
        <div class="unit" @click="go2()">
          <div class="unit_t">
            <h1>
              驱动及控制系统<br>
              <span>Drive & Control system</span>
            </h1>
            <!-- <a href="">查看详情</a> -->
          </div>
          <div class="unit_b">
            <img src="../assets/images/banner/pic.png" alt="">
            <img src="../assets/images/banner/pic2.png" alt="">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="s3">
        <!-- <img src="../assets/images/banner/bg3.png" alt /> -->
        <div class="system" @click="go3()">
          <div class="system_t">
            <h1>
              电机系统集成<br>
              <span>Motor solution integration</span>
            </h1>
            <!-- <a href="">查看详情</a> -->
          </div>
          <div class="system_b">
            <img src="../assets/images/banner/p.png" alt="">
            <img src="../assets/images/banner/pic3.png" alt="">
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// import "swiper/dist/css/swiper.css";
// import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      //  swiperSlides:[require("../assets/images/banner/bg1.png"),require("../assets/images/banner/bg2.png"),require("../assets/images/banner/bg3.png")],
      swiperOption: {
        // 参数选项,显示小点
        pagination: {el:".swiper-pagination",clickable:true,},
        //循环
        loop: true,
        //每张播放时长3秒，自动播放
        autoplay: {delay:5000},
        //滑动速度
        speed: 1000,
        // delay:1000
      },


      
    };
  },
  // components: [swiper, swiperSlide]
  methods:{
    go1(){
      this.$router.push({
        path: 'shijue'
      })
    },
    go2(){
      this.$router.push({
        path: 'control'
      })
    },
    go3(){
      this.$router.push({
        path: 'motor'
      })
    }
  }
};
</script>

<style>
.banner{
    max-width: 1920px;
  min-width: 1200px;
  height: 800px;
  position: relative;
}
.swiper-container {
  height: 800px;
}
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
/* 第一张轮播图的页面元素 */
.banner .dyob{
cursor: pointer;
width: 100%;  height: 100%;
}
.banner .dyob .dyob_l{
  float: right;
  width: 31%;
  height: auto;
  padding-top: 300px;
  /* position: absolute;
  right: 0;
  top: 0; */
}
.banner .dyob .dyob_l h1{
  font-size: 40px;
  color: #fff;
  font-weight: 400;
  padding-bottom: 40px;
}
.banner .dyob .dyob_l h1 span{
  letter-spacing: 2px;
}
/* .banner .dyob .dyob_l a{
  padding: 12px 28px;
  font-size: 16px;
  color: #fff;
  background: #56A4FF;
  border-radius: 4px;
}  */
.banner .dyob .dyob_b{
  display: none;
}
/* 第二张轮播图的页面元素 */
.banner .unit{
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 124px 0 0 0;
  text-align: center;
  cursor: pointer;
}
.banner .unit .unit_t{
  text-align: center;
  height: auto;
  padding-top: 80px;
  padding-bottom: 64px;
}
.banner .unit .unit_t h1{
  font-size: 40px;
  color: #fff;
  font-weight: 400;
  padding-bottom: 40px;
}
.banner .unit .unit_t span{
  letter-spacing: 2px;
}
/* .banner .unit .unit_t a{
  padding: 12px 28px;
  font-size: 16px;
  color: #fff;
  background: #56A4FF;
  text-align: center;
  line-height: 40px;
  border-radius: 4px;
}  */
.banner .unit .unit_b img{
  max-width: 1200px;
}
.banner .unit .unit_b img:last-child{
  display: none;
}


/* 第三张轮播图的页面元素 */
.banner .system{
  width: 1200px;
  height: auto;
  margin: 0 auto;
  padding: 164px 0 0 0;
  text-align: center;
  cursor: pointer;
}
.banner .system .system_t{
  text-align: center;
  height: auto;
  padding-top: 10px;
}
.banner .system .system_t h1{
  font-size: 40px;
  color: #fff;
  font-weight: 400;
  padding-bottom: 40px;
}
.banner .system .system_t span{
  letter-spacing: 2px;
}
/* .banner .system .system_t a{
  padding: 12px 28px;
  font-size: 16px;
  color: #fff;
  background: #56A4FF;
  text-align: center;
  line-height: 40px;
  border-radius: 4px;
} */
.banner .system .system_b img:last-child{
  display: none
}


/* 轮播图 */
.s1{
  background: url(../assets/images/banner/banner1.jpg) center center / cover no-repeat;
}
.s2{
  background: url(../assets/images/banner/banner2.jpg) center center / cover no-repeat;
}
.s3{
  background: url(../assets/images/banner/banner3.jpg) center center / cover no-repeat;
}
.banner .swiper-pagination-bullet {
    width: 17px;
    height: 17px;
    display: inline-block;
    border-radius: 100%;
    background: #fff;
    opacity: 1;
}
.banner .swiper-pagination-bullet-active {
    opacity: 1;
    border: 4px solid rgba(255,255,255,0.25);
    padding: 6px;
}
@media (max-width: 1024px) {
    .banner{
    max-width: 100%;
  min-width: 100%;
  height: 800px;
}
.banner .system{
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 124px 0 0 0;
  text-align: center;
}
.banner .unit{
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 124px 0 0 0;
  text-align: center;
}
.banner .unit .unit_b img{
  max-width: 100%;
}
.banner .system .system_b img{
  max-width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
.banner .dyob .dyob_l {
    float: right;
    width: 29%;
    height: auto;
    padding-top: 300px;
}
#bann h1{
  font-size: 24px;
}
/* #bann a{
  font-size: 14px;
} */
}
@media (max-width: 414px) {
  .s1{
  background: url(../assets/images/banner/bg4.png) center center / cover no-repeat;
}
.s2{
  background: url(../assets/images/banner/bg5.png) center center / cover no-repeat;
}
.s3{
  background: url(../assets/images/banner/bg6.png) center center / cover no-repeat;
}
#bann h1{
  font-weight: 300;
}
#bann h1 span{
  font-size: 16px;
}
.banner .dyob .dyob_l {
    float: none;
    width: 100%;
    height: auto;
    padding-top: 190px;
    margin: 0 auto;
    text-align: center;
}
.banner .dyob .dyob_l h1 {
    padding-bottom: 20px;
}
.banner .dyob .dyob_b{
  display: block;
  padding-top: 115px;
}
.banner .dyob .dyob_b img{
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
.banner .unit .unit_b img:first-child{
  display: none;
}
.banner .unit .unit_b img:last-child{
  display: block;
  margin: 0 auto;
}
.banner .unit .unit_t h1 {
    padding-bottom: 20px;
}
.banner .system .system_b img:first-child{
  display: block;
}
.banner .system .system_b img:last-child{
  display: block;
}
.banner .system .system_t{
  text-align: center;
  height: auto;
  padding-top: 140px;
}
.banner .system .system_t h1{
  padding-bottom: 20px;
}
}
</style>