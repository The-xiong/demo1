<template>
  <div class="newss">
    <div class="gy_box" :style="backgroundDiv">
      <h1>
        {{ok.chi}}
        <br />
        <span>{{ok.eng}}</span>
      </h1>
    </div>


  </div>
</template>

<script>
export default {
  props:['ok','backgroundDiv'],
  data(){
    return{
      //  backgroundDiv:{
      //    backgroundImage: 'url(' + require('../assets/images/images/about.png') + ')',
      //  }
    }
  }
};
</script>

<style>
.newss {
  min-width: 1200px;
  max-width: 1920px;
}
.newss .gy_box {
  height: 640px;
  /* background: url(../assets/images/images/about.png) no-repeat center center; */
  background: no-repeat center center;
  background-size: cover;
  text-align: center;
  padding-top: 315px;
}
.newss .gy_box h1 {
  font-size: 40px;
  color: #fff;
  font-weight: 400;
}
.newss .gy_box h1 span{
  font-size: 30px;
  padding-top: 10px;
}
@media (max-width: 1024px) {
  .newss {
  min-width: 100%;
  max-width: 1920px;
}
.newss .gy_box h1 {
  font-size: 24px;
  color: #fff;
  font-weight: 400;
}
}
@media (max-width: 414px) {
  .newss .gy_box h1 {
  font-size: 20px;
  color: #fff;
  font-weight: 300;
}
.newss .gy_box h1 span{
  font-size: 16px;
}
}
</style>