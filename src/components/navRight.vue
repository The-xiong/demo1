<template>
<transition-group name="tt">
  <div class="navright" v-show="nright" key="ijij">
      <ul>
          <li v-for="(item,index) in lis" :key="index" @click="poi(index)">
              <a href>{{item.item}}</a>
          </li>
      </ul>
  </div>
</transition-group>

</template>

<script>
export default {
    props:{
        nright: {
            type: Boolean,
             default: () => [] // es6
        }
    },
    data(){
        return{
          lis:[
            {item:'视觉管理'},
            {item:'驱动及控制系统'},
            {item:'电机系统集成'},
            {item:'联系与支持'},
            {item:'关于我们'},
            {item:'新闻'},
          ]
        }
    },
    methods:{
      poi(index){
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
      }
    }
}
</script>

<style>
.tt-enter-active {
  transition: all 0.5s;
}
.tt-leave-active {
  transition: all 0.5s;
}
.tt-enter {
  transform: translateX(200px);
}
.tt-leave-to {
  transform: translateX(200px);
}
.navright {
  position: fixed;
  top: 79px;
  right: 0;
  z-index: 10;
  background-color: #fff;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-shadow: 0;
  overflow: hidden;
  width: 200px;
  /* -webkit-transform: translateX(100%); */
  /* -ms-transform: translateX(100%); */
  /* transform: translateX(-300px); */
  /* -webkit-transition: -webkit-transform 0.3s, box-shadow 0.3s; */
  /* transition: transform 0.3s, box-shadow 0.3s; */
    z-index: 99999999999;
}
.navright > ul {
  height: 480px;
  overflow: hidden;
  overflow-y: scroll;
  width: 220px;
}
.navright ul li {
  font-size: 16px;
  padding: 10px 15px;
  text-transform: uppercase;
  border-top: 1px solid #dbdcd2;
}
.navright ul li a{
    font-size: 16px;
    color: #333;
}
</style>