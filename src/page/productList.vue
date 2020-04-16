<template>
  <div class="productlist clearfix" id="mao1">
    <div class="lists" v-for="(item,i) in lis" :key="i" :class="(i+1)%3==0?'llll':''">
      <div class="list_img">
        <img :src="otk+'/res/articleImg/'+item.Img" alt />
      </div>
      <div class="list_text">
        <span>{{item.Title}}</span>
        <span>{{item.SubTitle}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs';
export default {
  props:{
    commentId: String
  },
  data() {
    return {
      lis: [],
      otk: ''
    };
  },
  methods: {
    getax() {

      this.$axios
        .get("/Srv/Article.svc/ArticleQueryAll?cate=04")
        .then(res => {
          this.lis = res.data.d.Data
          this.otk = window.location.origin
          console.log(this.otk)
        })
        .catch(error => console.log(error));
    }
  },
  mounted() {
    this.getax();
    let section = document.getElementById(this.commentId)
    if (section) {
      section.scrollIntoView()
    };

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
.productlist {
  min-width: 1200px;
  max-width: 1920px;
  width: 1200px;
  margin: 0 auto;
  height: auto;
  padding: 40px 0;
}

.productlist .lists {
  float: left;
  padding-right: 24px;
  overflow: hidden;
  padding-bottom: 40px;
}
/* .productlist .lists:nth-child(3),
.productlist .lists:nth-child(6),
.productlist .lists:nth-child(9),
.productlist .lists:nth-child(12){
    padding-right: 0;

} */
.productlist .lists.llll {
  padding-right: 0;
}
.productlist .lists .list_img {
  width: 384px;
  height: 384px;
  border: 1px solid rgba(151, 151, 151, 1);
}
.productlist .lists .list_img img {
  display: block;
  width: 100%;
  height: 100%;
}
.productlist .lists .list_text {
  padding-top: 12px;
}
.productlist .lists .list_text span {
  display: block;
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
}
@media (max-width: 1024px) {
  .productlist {
    min-width: 100%;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    height: auto;
    padding: 40px 30px;
  }
  .productlist .lists {
    float: left;
    padding-right: 0;
    overflow: hidden;
    width: 33.33%;
  }
  .productlist .lists .list_img {
    width: 100%;
    height: auto;
    border: 1px solid rgba(151, 151, 151, 1);
  }
}
@media (max-width: 414px) {
  .productlist {
    min-width: 100%;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    height: auto;
    padding: 40px 15px;
  }
  .productlist .lists {
    float: left;
    padding-right: 0;
    overflow: hidden;
    width: 100%;
  }
  .productlist .lists .list_text span {
    font-size: 14px;
  }
}
</style>