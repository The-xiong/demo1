<template>
  <div class="aboutsa">
      <div class="aboutline" v-html="blogData.Content">
        <!-- <p>海森博格是一家年轻的公司专注于视觉安全，运动控制，电源和系统集成。我们的工程师均是各自领域的专家积累了多年的经验，对产品和客户应用具有充分的理解，项目成功应用于铁路、机场、以及工厂自动化。</p>
        <p>同时成立的重庆海森博格自动控制技术有限公司，及东莞海森博格自动控制技术有限公司为本区域范围内的客户提供销售及售后服务。</p> -->
        {{blogData.Content}}
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      blogData: ''
    }
  },
  methods: {
    getax(){
      this.$axios.get("/Srv/Article.svc/ArticleReadByCate?cate=06")
      .then(res =>{
        console.log(res.data.d.Data)
        this.blogData = res.data.d.Data
        console.log(this.blogData)
      })
      .catch(error => console.log(error));
    }
  },
  mounted(){
    this.getax()
  }
}
</script>

<style>
.aboutsa{
    clear: both;
    width: 100%;
    height: auto;
    overflow: hidden;
    background: #fff;
    padding: 80px 0;
}
.aboutsa .aboutline {
  width: 1200px;
  height: auto;
  margin: 0 auto;
}
/* .aboutsa .aboutline p{
  font-size: 16px;
  font-weight:400;
color:rgba(102,102,102,1);
line-height:32px;
}
.aboutsa .aboutline p:first-child{
  padding-bottom: 40px;
} */
@media (max-width: 1440px) {
  .aboutsa .aboutline {
  width: 100%;
  padding: 0 60px;
  height: auto;
  margin: 0 auto;
}
}
@media (max-width: 1024px) {
  .aboutsa .aboutline {
  width: 100%;
  padding: 0 30px;
  height: auto;
  margin: 0 auto;
}
.aboutsa{
    clear: both;
    width: 100%;
    height: auto;
    overflow: hidden;
    background: #fff;
    padding: 40px 0;
}
}
@media (max-width: 768px) {
  .aboutsa .aboutline {
  width: 100%;
  padding: 0 30px;
  height: auto;
  margin: 0 auto;
}
.aboutsa{
    clear: both;
    width: 100%;
    height: auto;
    overflow: hidden;
    background: #fff;
    padding: 80px 0;
}
}
@media (max-width: 414px) {
  .aboutsa .aboutline {
  width: 100%;
  padding: 0 15px;
  height: auto;
  margin: 0 auto;
}
.aboutsa{
    clear: both;
    width: 100%;
    height: auto;
    overflow: hidden;
    background: #fff;
    padding: 80px 0;
}
/* .aboutsa .aboutline p{
  font-size: 14px;
} */
}
</style>