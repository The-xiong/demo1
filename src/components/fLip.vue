<template>
  <div class="flip clearfix">
      <ul>
          <li v-for="(item,i) in photo" :key="i" data-aos="zoom-in" data-aos-delay="400" data-aos-easing="ease" @click="go(i)">
              <!-- <a href=""> -->
                  <div class="scin">
                      <div class="scin1">
                          <img :src="item.p1" alt="">
                      </div>
                      <div class="scin2">
                          <img :src="item.p2" alt="">
                      </div>
                  </div>
                  <div class="tuxn">
                      <img :src="item.p3" alt="">
                      {{item.text}}
                  </div>
              <!-- </a> -->
          </li>
      </ul>
  </div>
</template>

<script>

export default {
    props:['photo'],
    data(){
        return{
            // photo: [
            //     {p1:require('../assets/images/images/p1.png'),p2:require('../assets/images/images/p2.png'),p3:require('../assets/images/icon/p1.svg'),text:'人行管理'},
            //     {p1:require('../assets/images/images/p15.png'),p2:require('../assets/images/images/p12.png'),p3:require('../assets/images/icon/p11.svg'),text:'安全控制'},
            //     {p1:require('../assets/images/images/p9.png'),p2:require('../assets/images/images/p10.png'),p3:require('../assets/images/icon/p9.svg'),text:'地铁站台管理'},
            //     {p1:require('../assets/images/images/p1.png'),p2:require('../assets/images/images/p2.png'),p3:require('../assets/images/icon/p1.svg'),text:'楼宇智慧眼'},
            // ]
        }
    },
    methods:{
        go(i){
            this.$emit('goto',i)
        }
    }

}
</script>

<style>
.clearfix:after {
  /*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom: 1; /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}
.flip{
    max-width: 1920px;
    min-width: 1200px;
    padding-bottom: 60px;
    height: auto;
}
.flip li{
    float: left;
    width: 25%;
    height: auto;
    position: relative;
    overflow: hidden;
    perspective: 1000px;
}
.flip .scin{
    position: relative;
    width: 100%;
    height: auto;
}
.flip .scin img{
    display: block;
    width: 100%;
    height: 480px;
}
.flip .scin .scin1{
    width: 100%;
    height: auto;
    transform: rotateY(0);
    transition: all .5s ease-in-out 0s;
}
/* Y轴翻转 */
.flip li:hover .scin .scin2{
    transform: rotateY(0);
    z-index: 99;
}
.flip li:hover .scin .scin1{
    transform: rotateY(90deg);
    z-index: 88;
}
.flip .scin .scin2{
     display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: rotateY(90deg);
    transition: all 0.50s ease-in-out 0s;
    z-index: 88;
    z-index: -1;
}
.flip .tuxn {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    font-size: 20px;
    line-height: 40px;
    padding-top: 174px;
    z-index: 995;
    transition: all 0.50s ease-in-out 0s;
}
.flip li:hover .tuxn{
    padding-top: 120px;
}
.flip .tuxn img{
    display: block;
    height: 100px;
    margin: 0 auto;
}
@media (max-width: 1440px){
.flip .scin img{
    display: block;
    width: 100%;
    height: 360px;
}
.flip .tuxn {
   position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    font-size: 18px;
    line-height: 40px;
    padding-top: 120px;
    z-index: 995;
    transition: all 0.50s ease-in-out 0s;
}
.flip .tuxn img{
    display: block;
    height: 62.5px;
    margin: 0 auto;
}
.flip li:hover .tuxn{
    padding-top: 90px;
}
}
@media (max-width: 1366px){
    .flip .scin img{
    display: block;
    width: 100%;
    height: 340px;
}
}
@media (max-width: 1280px){
    .flip .scin img{
    display: block;
    width: 100%;
    height: 300px;
}
}
@media (max-width: 1200px){
.flip .scin img{
    display: block;
    width: 100%;
    height: 320px;
}
.flip .tuxn {
   position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    font-size: 18px;
    line-height: 40px;
    padding-top: 96px;
    z-index: 995;
    transition: all 0.50s ease-in-out 0s;
}
.flip .tuxn img{
    display: block;
    height: 62.5px;
    margin: 0 auto;
}
.flip li:hover .tuxn{
    padding-top: 90px;
}
}
@media (max-width: 1024px) {
    .flip{
    max-width: 1920px;
    min-width: 100%;
    padding-bottom: 60px;
    height: auto;
}
.flip li{
    float: left;
    width: 50%;
    height: auto;
    position: relative;
    overflow: hidden;
    perspective: 1000px;
}
.flip .scin img{
    display: block;
    width: 100%;
    height: 370px;
}
.flip .tuxn {
   position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    font-size: 18px;
    line-height: 40px;
    padding-top: 96px;
    z-index: 995;
    transition: all 0.50s ease-in-out 0s;
}
.flip .tuxn img{
    display: block;
    height: 62.5px;
    margin: 0 auto;
}
.flip li:hover .tuxn{
    padding-top: 90px;
}
}
@media (max-width: 768px) {
    .flip .scin img{
    display: block;
    width: 100%;
    height: 300px;
}
}
@media (max-width: 414px) {
    .flip{
   padding-left: 5px;
   padding-right: 5px;
}
    .flip li{
    float: left;
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
    perspective: 1000px;
}
    .flip .scin img{
    display: block;
    width: 100%;
    height: 400px;
}
.flip .tuxn {
   position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    font-size: 14px;
    line-height: 40px;
    padding-top: 150px;
    z-index: 995;
    transition: all 0.50s ease-in-out 0s;
}
.flip .tuxn img{
    display: block;
    height: 70px;
    margin: 0 auto;
}
.flip li:hover .tuxn{
    padding-top: 100px;
}
}
</style>