<template>
  <div class="product">
      <div class="core">
          <p>核心产品</p>
          <p>Core product</p>
      </div>
      <div class="shijue">
        <div class="box" v-for="(item,index) in setion" :key="index" @click="guanli(index)">
          <img :src="item.p" alt="">
          {{item.t}}
          <br>{{item.tt}}
        </div>
      </div>
      <div class="kong"></div>
  </div>
</template>

<script>
export default {
  props:['setion'],
  data(){
    return{
    
    }
  },
  methods:{
    guanli(index){
      if(index == 0){
        this.$router.push({
            path:'/'
          })
      }
        if(index == 1){
          this.$router.push({
            path:'/drive'
          })
        }
        if(index == 2){
          this.$router.push({
            path:'/electric'
          })
        }
    }
  }

}
</script>

<style>
.product{
    min-width: 1200px;
    max-width: 1920px;
    text-align: center;
    overflow: hidden;
    padding-top: 80px;
}
.product .core{
    text-align: center;
    padding-bottom: 40px;
}
.product .core p:first-child{
  font-size: 30px;
  padding-bottom: 10px;
}
.product .core p:last-child{
  font-size: 20px;
}
.product .shijue{
    width: 1200px;
    min-height: 180px;
    margin-left: auto;
    margin-right: auto;
}

.product .box{
    width: 33.33%;
    height: 180px;
    float: left;
    text-align: center;
    padding-top: 17px;
    line-height: 30px;
    cursor: pointer;
}
.product .box img{
  display: block;
  margin: 0 auto;
}
.product .kong{
  width: 100%;
  height: 60px;
  background:rgba(240,242,245,1);
  box-shadow:10px 5px 10px 0px rgba(190,197,207,0.84) inset;
}
@media (max-width: 1024px) {
  .product{
    min-width: 100%;
    max-width: 100%;
    text-align: center;
    overflow: hidden;
    padding-top: 80px;
    margin: 0 auto;
}
.product .shijue{
  min-width: 100%;
    min-height: 160px;
    margin-left: 0;
    margin-right: 0;
    margin: 0 auto;
    /* padding-left: 10px;
    padding-right: 10px; */
    clear: both;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
.product .box{
    width: 33.33%;
    height: 180px;
    float:none;
    text-align: center;
    padding-top: 17px;
    line-height: 26px;
    cursor: pointer;
    display: inline-block;
    font-size: 15px;
}

}
@media (max-width: 414px) {
  .product .core p:first-child {
    font-size: 20px;
    padding-bottom: 10px;
}
.product .core p:last-child {
    font-size: 16px;
}
}
</style>