<template>
  <div class="navbar sticky" >
    <div class="navvv clearfix">
      <div class="logo" @click="shouye()">
         <a href=""> <img src="../assets/images/icon/logo.svg" alt /></a>
      </div>
      <div class="nav">
        <ul class="clearfix">
          <li v-for="(item,index) in shiii" :key="index" @click="jihuo(index)">
            <a href>{{item}}</a>
          </li>
        </ul>
      </div>
    
    </div>
         <transition-group name="ta1">
      <button
        id="m_btn"
        class="m_btn iconfont iconjiantou-zuo"
        style="font-size:35px;"
        @click="changeImg()"
        v-show="isshowss"
        key="btn1"
      ></button>
      <button
        id="m_btn"
        class="m_btn iconfont iconcaidan"
        style="font-size:35px;"
        @click="changeImg()"
        v-show="!isshowss"
        key="btn2"
      ></button>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: false,
      isshowss: false,
      shiii:["视觉管理","驱动及控制系统","电机系统集成","联系与支持","关于我们","新闻"]
    };
  },
  methods:{
    jihuo(index){
      if(index == 0){
        this.$router.push({
          path: 'shijue'
        })
      }if(index == 1){
        this.$router.push({
          path: '/control'
        })
      }if(index == 2){
        this.$router.push({
          path: '/motor'
        })
      }if(index == 3){
        this.$router.push({
          path: '/support'
        })
      }if(index == 4){
        this.$router.push({
          path: '/guanyu'
        })
      }if(index == 5){
        this.$router.push({
          path: '/information'
        })
      }
    },
     changeImg() {
      this.isshowss = !this.isshowss;
    },
    shouye(){
       this.$router.push({
          path: '/'
        })
    }
  },
  watch:{
    isshowss(t){
     this.$emit("showtime", t);
    }
  },

mounted () {
  window.addEventListener('scroll', this.scrollToTop)
},
destroyed () {
  window.removeEventListener('scroll', this.scrollToTop)
}
};
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
.ta1-enter-active {
  transition: all 0.5s;
  opacity: 0;
}
.ta1-leave-active {
  transition: all 0.5s;
  opacity: 0;
}
.ta1-enter {
  transform: rotate(360deg);
}
.ta1-leave-to {
  transform: rotate(180deg);
}
.sticky {
  /* background: rgba(0,0,0,0.75); */
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
}
.navbar {
  min-height: 80px;
  width: 100%;
  min-width: 1226px;
    max-width: 1920px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
}
.navbar .navvv{
  width: 1240px;
  margin-right: auto;
  margin-left: auto;
}
.navbar .logo {
  width: 179px;
  padding-top: 10px;
  /* padding-left: 360px; */
  float: left;
  overflow: hidden;
}
.navbar .logo img {
  cursor: pointer;
  width: 100%;
  height: 100%;
}
.navbar .nav {
  float: right;
  height: auto;
  /* padding-right: 320px; */
}
.navbar .nav li {
  float: left;
  line-height: 79px;
  padding-right: 30px;
}
.navbar .nav li a {
  color: #fff;
  font-size: 16px;
}
.navbar .search {
  display: inline;
}
.navbar .search img {
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
}
#m_btn {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 9999999;
  width: 24px;
  height: 18px;
  font-size: 0;
  text-indent: -99999;
  display: none;
  border: none;
  outline: none;
  background: none;
  color: #fff;
  cursor: pointer;
}
@media (max-width: 1250px) {
  .navbar .nav {
  float: right;
  height: auto;
  padding-right: 50px;
}
}
@media (max-width: 1200px) {
  .navbar .nav {
  float: right;
  height: auto;
  padding-right: 100px;
}
.navbar .logo {
  padding-top: 14px;
  padding-left: 30px;
  float: left;
  overflow: hidden;
}
}
@media (max-width: 1150px) {
  .navbar .nav {
  float: right;
  height: auto;
  padding-right: 150px;
}
}
@media (max-width: 1100px) {
  .navbar .nav {
  float: right;
  height: auto;
  padding-right: 200px;
}
}
@media (max-width: 1050px) {
  .navbar .nav {
  float: right;
  height: auto;
  padding-right: 250px;
}
}
@media (max-width: 1024px) {
  .navbar {
  min-height: 79px;
  width: 100%;
  min-width: 100%;
    max-width: 1920px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
}
  .navbar .nav {
  float: right;
  height: auto;
  padding-right: 300px;
  display: none;
}
  #m_btn {
    position: fixed;
    top: 12px;
    right: 12px;
    z-index: 9999999;
    width: 50px;
    height: 50px;
    font-size: 0;
    text-indent: -99999;
    display: block;
    /* background: url(../assets/img/caidan.png) no-repeat center center */
  }
}
@media (max-width: 414px) {
.navbar .logo {
  max-width: 50%;
  height: auto;
  padding-top: 14px;
  /* padding-left: 360px; */
  float: left;
  overflow: hidden;
}
.navbar .logo img{
  display: block;
  max-width: 100%;
}
}
</style>