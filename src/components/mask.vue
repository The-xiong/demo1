<template>
  <div class="mask" v-show="maskS" @click="changeImg()"></div>
</template>

<script>
export default {
    props:['maskS','triggerChildMehtod'],
    data(){
        return{
        }
    },
    methods:{
        changeImg(){
             this.triggerChildMehtod() 
        }
    }
};
</script>

<style>
.mask {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: visible;
  opacity: 1;
  -webkit-transition: opacity 0.5s, visibility 0.5s;
  transition: opacity 0.5s, visibility 0.5s;
}
</style>