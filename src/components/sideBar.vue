<template>
  <div class="sidebar">
    <div class="top">
      <div class="logo" @click="shouye()">
        <a href=""><img src="../assets/images/icon/logo.svg" alt /></a>
      </div>
      <div class="news">
        <h4>新闻</h4>
        <p v-for="(item,i) in lis1" :key="i" @click="xinweng(i)">[{{item.PublishTime | dateformat('YYYY-MM-DD')}}]  {{item.Title}}</p>
        <!-- <p v-for="(item,i) in lis1" :key="i">[2019-12-26]这是新闻标题这是新闻标题</p> -->
      </div>
      <div class="hot">
        <h4>热门产品</h4>
        <p v-for="(item,i) in lis2" :key="i" @click="chanpin(i)"><a href="">{{item.Title}}</a></p>
      </div>
      <div class="content">
        <h4 class="hai">联系与支持</h4>
        <h4 class="bo">海森博格</h4>
        <p>邮箱：{{e_mail}}</p>
        <p>电话：{{number}}</p>
      </div>
    </div>
    <div class="xian"></div>
    <div class="bottommm">
      <span style="paddingRight:10px">{{banquan}}</span>
      <span>
        <a href="http://www.beian.miit.gov.cn/" target="_blank">{{beian}}</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      e_mail: "",
      number: "",
      banquan: "",
      beian: "",
      lis1: [],
      lis2: []
    };
  },
  methods: {
    shouye() {
      this.$router.push({
        path: "/"
      });
    },
    chanpin(i){
          this.$router.push({
        path: "motor"
      });
    },
    xinweng(i){
        this.$router.push({
        path: "newssubpage",
        query:{
          id: this.lis1[i].ArticleID
        }
      });
    }
  },
  mounted() {
    this.$axios
      .get("/SiteInfo.ashx")
      .then(res => {
        function transToModel(obj) {
          var result = {};
          for (var i = 0; i < obj.length; i++) {
            result[obj[i].Code] = obj[i].DataValue;
          }
          return result;
        }
        //  eval(res.data+";var obj=transToModel(SiteInfo);console.log(obj.Email)")
        let arr = [];
        eval(res.data + ";arr=SiteInfo");
        var obj = transToModel(arr);
        console.log(obj)
        this.e_mail = obj.Email;
        this.number = obj.Phone;
        this.banquan = obj.Copyright;
        this.beian = obj.Beian;
        eval(obj.TongjiCode)
      })
      .catch(error => console.log(error));

    this.$axios.get("/Srv/Article.svc/ArticleQueryLst2?cate=07&pageSize=4&pageIndex=1")
      .then(res => {
          // console.log(res)
          this.lis1 = res.data.d.Data.Data
          console.log(res)
      })
      .catch(error => console.log(error));

       this.$axios
        .get("/Srv/Article.svc/ArticleQueryLst2?cate=04&pageSize=4&pageIndex=1")
        .then(res => {
          this.lis2 = res.data.d.Data.Data
        })
        .catch(error => console.log(error));
  }
};
</script>

<style>
.sidebar {
  min-width: 1200px;
  max-width: 1920px;
  background-color: #3a3a3a;
  color: #fff;
}
.sidebar .top {
  height: 284px;
  /* padding: 60px 360px; */
  padding-top: 60px;
  padding-bottom: 60px;
  overflow: hidden;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.sidebar .top .logo {
  float: left;
  width: 193px;
}
.sidebar .top .logo img {
  display: block;
  max-width: 100%;
  cursor: pointer;
}
.sidebar .top .news {
  float: left;
  width: 500px;
  padding-right: 50px;
}
.sidebar .top .news p{
width:430px; 
overflow:hidden; 
white-space:nowrap; 
text-overflow:ellipsis;
}
.sidebar .top .hot {
  float: left;
  width: 262px;
}
.sidebar .top .hot p{
    width:230px; 
overflow:hidden; 
white-space:nowrap; 
text-overflow:ellipsis;
}
.sidebar .top .content {
  float: right;
  width: 245px;
}
.sidebar .top .content .bo {
  display: none;
}
.sidebar .top h4 {
  font-size: 20px;
  font-weight: 400;
}
.sidebar .top p {
  padding-top: 10px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
}
.sidebar .xian {
  height: 1px;
  width: 100%;
  background-color: #fff;
}
.sidebar .bottommm {
  text-align: center;
  padding: 10px;
}
.sidebar .bottommm span {
  line-height: 30px;
  cursor: pointer;
  display: block;
}
.sidebar .bottommm span a {
  color: rgba(255, 255, 255, 1);
}
a{
     color: rgba(255, 255, 255, 1);
}
@media (max-width: 1200px) {
  .sidebar .top .logo {
    float: left;
    width: 293px;
    padding-left: 10px;
  }
  .sidebar .top .content {
    float: right;
    width: 201px;
    padding-right: 10px;
  }
  .sidebar .top .news {
  width: 415px;
}
  .sidebar .top .news p{
width:330px; 
overflow:hidden; 
white-space:nowrap; 
text-overflow:ellipsis;
}
.sidebar .top .hot p{
    width:150px; 
overflow:hidden; 
white-space:nowrap; 
text-overflow:ellipsis;
}
}
@media (max-width: 1024px) {
  .sidebar {
    min-width: 100%;
    max-width: 1920px;
    background-color: #3a3a3a;
    color: #fff;
  }
  .sidebar .top {
    height: 284px;
    /* padding: 60px 360px; */
    padding-top: 60px;
    padding-bottom: 60px;
    overflow: hidden;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .sidebar .top .logo {
    float: left;
    width: 20%;
  }
  .sidebar .top .logo img {
    display: block;
    max-width: 60%;
  }
  .sidebar .top .news {
    float: left;
    width: 300px;
    width: 30%;
    padding-right: 0;
  }
  .sidebar .top .hot {
    float: left;
    width: 25%;
  }
  .sidebar .top .content {
    float: left;
    width: 201px;
    width: 25%;
  }
  .sidebar .top h4 {
    font-size: 18px;
    font-weight: 400;
  }
  .sidebar .top p {
    padding-top: 10px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
  }
    .sidebar .top .news p{
width:180px; 
overflow:hidden; 
white-space:nowrap; 
text-overflow:ellipsis;
}
.sidebar .top .hot p{
    width:120px; 
overflow:hidden; 
white-space:nowrap; 
text-overflow:ellipsis;
}
}
@media (max-width: 414px) {
  .sidebar .top {
    height: auto;
    /* padding: 60px 360px; */
    padding-top: 60px;
    padding-bottom: 60px;
    overflow: hidden;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 50px;
    padding-right: 15px;
  }
  .sidebar .top .logo {
    float: left;
    width: 100%;
    padding-bottom: 20px;
  }
  .sidebar .top .logo img {
    display: block;
    max-width: 100%;
  }
  .sidebar .top .news {
    display: none;
  }
  .sidebar .top .hot {
    display: none;
  }
  .sidebar .top .content {
    float: left;
    width: 100%;
  }
  .sidebar .bottommm {
    text-align: center;
  }
  .sidebar .bottommm span {
    line-height: 40px;
    font-size: 14px;
  }
  .sidebar .bottommm span a {
    font-size: 14px;
  }
  .sidebar .top .content .bo {
    display: block;
  }
  .sidebar .top .content .hai {
    display: none;
  }
}
</style>