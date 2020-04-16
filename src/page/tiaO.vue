<template>
  <div class="tiao">
          <div class="gy_box1">
      <div class="guyiq">
        <ul>
          <li @click="li1()" >
            <a href="" :style="blue1">
              <span>{{item1}}</span>
            </a>
          </li>
            <li @click="li2()">
            <a href="" :style="blue2">
              <span>{{item2}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['item1','item2','blue1','blue2'],
    data(){
        return{
            // lis:[
            //     {item:"新闻动态"}
            // ]
        }
    },
    methods:{
      li1(){
        this.$emit('okk1')
      },
       li2(){
        this.$emit('okk2')
      }
    }
}
</script>

<style>
.tiao {
  min-width: 1200px;
  max-width: 1920px;
}
.tiao .gy_box1 {
  width: 100%;
  height: auto;
  background: #f5f5f5;
  min-height: 80px;
}
.tiao .gy_box1 .guyiq{
  width: 1200px;
  height: auto;
  margin: 0 auto;
}
.tiao .gy_box1 .guyiq ul{
  float: right;
}
.tiao .gy_box1 .guyiq li{
  display: block;
  float: left;
  line-height: 80px;
}
.tiao .gy_box1 .guyiq li a{
  display: block;
  padding: 0 50px;
  color: #333;
  font-size: 16px;
}
.tiao .gy_box1 .guyiq .active a{
  color: #fff;
  background: #56A4FF;
}
.tiao .gy_box1 .guyiq a:hover{
  color: #fff;
  background: #56A4FF;
}
/* .tiao .gy_box1 .guyiq li:first-child a{
color: #fff;
  background: #56A4FF;
} */


@media (max-width: 1440px) {
  .tiao .gy_box1 .guyiq{
      width: 100%;
    padding: 0 60px;
    height: auto;
    margin: 0 auto;
}
}
@media (max-width: 1024px) {
  .tiao {
  min-width: 100%;
  max-width: 1920px;
}

.tiao .gy_box1 {
  width: 100%;
  height: auto;
  background: #f5f5f5;
  min-height:50px;
}
  .tiao .gy_box1 .guyiq{
      width: 100%;
    padding: 0 30px;
    height: auto;
    margin: 0 auto;
}
.tiao .gy_box1 .guyiq li{
  display: block;
  float: left;
  line-height: 50px;
}
.tiao .gy_box1 .guyiq li a{
  display: block;
  padding: 0 30px;
  font-size: 16px;
}
}
@media (max-width: 414px) {
      .tiao .gy_box1 .guyiq{
      width: 100%;
    padding: 0 15px;
    height: auto;
    margin: 0 auto;
}
    .tiao .gy_box1 .guyiq ul{
  width: 100%;
}
.tiao .gy_box1 .guyiq li{
    width: 25%;
    text-align: center;
  display: block;
  float: left;
  line-height: 50px;
}
.tiao .gy_box1 .guyiq li a{
  display: block;
  padding: 0 0px;
  font-size: 14px;
}
}
</style>