<template>
  <div class="view">
    <div class="deguo clearfix" v-for="(lk,i) in deguo" :key="i" @click="pages(i)">
        <div class="del">
          <img :src="otk+'/res/articleImg/'+lk.Img" alt />
        </div>
        <div class="der">
          <h4>{{lk.Title}}</h4>
          <p>{{lk.Summary}}</p>
          <span>查看详情</span>
        </div>
        <div class="date">
          <span>{{lk.PublishTime | dateformat('DD')}}</span>
          <span>{{lk.PublishTime | dateformat('YYYY-MM')}}</span>
        </div>
    </div>
    <div class="news_rb">
      <ul>
        <li @click="prePage()">
          <span>上一页</span>
        </li>
        <li v-for="index in pageTotal" :key="index" @click="curPage(index)" >
          <span :class="pageNo==index?'active':''">{{index}}</span>
        </li>
        <li @click="nextPage()">
          <span>下一页</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deguo: [],
      pageTotal: 1,
      pageNo: 1,
      otk: ''
    };
  },
  methods: {
    pages(index) {
      this.$router.push({
        path: "newssubpage",
        query:{
          id: this.deguo[index].ArticleID
        }
      });
    },
    getax(i) {
      this.pageNo = i || this.pageNo;
      this.$axios
        .get("/Srv/Article.svc/ArticleQueryLst2?cate=07&pageSize=5"+"&pageIndex="+this.pageNo)
        // .get("/api/Srv/Article.svc/ArticleQueryLst2?cate=07&pageSize=5&pageIndex=0")
        .then(res => {
          this.deguo = res.data.d.Data.Data
          console.log(res.data.d.Data.Data);
          this.pageTotal = res.data.d.Data.TotalPages
          this.otk = window.location.origin
          // console.log(this.pageTotal)
        })
        .catch(error => console.log(error));
    },
    curPage(index){
      this.getax(index);
      console.log(index)
    },
    prePage(){
      if(this.pageNo>1){
        this.pageNo--;
        this.getax(this.pageNo)
      }
    },
     nextPage(){
         if(this.pageNo<this.pageTotal){
        this.pageNo++
        this.getax(this.pageNo)
      }
    }
  },
  mounted() {
    this.getax()
  },
   
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
.view {
  padding: 40px 0 80px;
  width: 1200px;
  height: auto;
  margin: 0 auto;
  min-width: 1200px;
  max-width: 1920px;
}
.view .deguo {
  border-bottom: 1px solid #ccc;
  padding-bottom: 40px;
  padding-top: 40px;
  cursor: pointer;
}
.view .deguo:hover {
  border-bottom: 1px solid red;
}
.view .deguo .del {
  float: left;
  height: auto;
  overflow: hidden;
}
.view .deguo .del img {
  display: block;
  width: 300px;
  height: 300px;
}
.view .deguo .der {
  width: 55%;
  float: left;
  margin-left: 40px;
  min-height: 300px;
  position: relative;
}
.view .deguo .der h4 {
  font-size: 20px;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
  padding-bottom: 10px;
}
.view .deguo .der p {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
}
.view .deguo .der > span {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 12px 28px;
  font-size: 16px;
  color: #fff;
  background: #56a4ff;
  text-align: center;
  border-radius: 4px;
}
.view .deguo .date {
  float: right;
}
.view .deguo .date span {
  display: block;
  text-align: center;
}
.view .deguo .date span:first-child {
  font-size: 60px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 60px;
}
.view .deguo .date span:last-child {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 16px;
}
.view .news_rb {
  padding-top: 80px;
  clear: both;
  width: 100%;
  height: auto;
  text-align: center;
}
.view .news_rb li {
  display: inline-table;
}
.view .news_rb .active{
  background: #56a4ff;
}
.news_rb li span {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-right: 10px;
  border: 1px solid rgba(229, 229, 229, 1);
  padding: 7px 13px;
  cursor: pointer;
}
/* .news_rb li a {
    color: #333333;
    font-size: 16px;
    line-height: 24px;
    margin-right: 30px;
    font-family: "Microsoft YaHei";
} */
@media (max-width: 1440px) {
  .view {
    padding: 40px 60px 80px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    min-width: 1200px;
    max-width: 1920px;
  }
}
@media (max-width: 1024px) {
  .view {
    padding: 40px 30px 80px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    min-width: 100%;
    max-width: 1920px;
  }
  .view .deguo {
    border-bottom: 1px solid #ccc;
    padding-bottom: 40px;
    padding-top: 40px;
    min-width: 100%;
  }
  .view .deguo .der {
    width: 40%;
    float: left;
    margin-left: 40px;
    min-height: 300px;
    position: relative;
  }
}
@media (max-width: 832px) {
  .view .deguo .del {
    float: left;
    height: auto;
    overflow: hidden;
    width: 100%;
  }
  .view .deguo .del img {
    display: block;
    width: 100%;
    height: auto;
  }
  .view .deguo .der {
    width: 80%;
    float: left;
    margin-left: 0;
    min-height: 180px;
    position: relative;
  }
  .view .deguo .date {
    float: right;
    width: 20%;
  }
}
@media (max-width: 414px) {
  .view {
    padding: 40px 15px 80px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    min-width: 100%;
    max-width: 1920px;
  }
  .view .deguo .der {
    width: 80%;
    float: left;
    margin-left: 0;
    min-height: 220px;
    position: relative;
  }
  .view .deguo .der h4 {
    font-size: 16px;
  }
  .view .deguo .der p {
    font-size: 14px;
  }
  .view .deguo .der > span {
    position: absolute;
    left: 0;
    bottom: -22px;
    padding: 12px 28px;
    font-size: 14px;
    color: #fff;
    background: #56a4ff;
    text-align: center;
    border-radius: 4px;
  }
  .view .deguo .date {
    float: right;
    width: 20%;
  }
  .view .deguo .date span:first-child {
    font-size: 40px;
  }
  .view .deguo .date span:last-child {
    font-size: 14px;
  }
}
</style>