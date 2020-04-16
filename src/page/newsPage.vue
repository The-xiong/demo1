<template>
  <div class="newspage">
    <div class="pages">
      <h3>{{list.Title}}</h3>
      <span>发布时间：{{list.PublishTime | dateformat('YYYY-MM-DD')}}</span>
      <span>发布人：{{list.Author}}</span>
      <span>浏览：{{list.ViewCount}}</span>
    </div>
    <div class="pagez" v-html="list.Content">
        {{list.Content}}
      <!-- <p>{{t5}}</p>
      <img :src="'http://vps2.seekersoft.cn:9099/res/articleImg/'+list.Img" alt="">
      <p>{{t6}}</p> -->
    </div>
    <div class="pagex">
      
      <span v-if="this.perv == null">
        上一篇
        <a href="" >无</a>
      </span>
      <span v-else>
        上一篇
        <a href="" @click="pervP()">{{perv.Title}}</a>
      </span>
      <span v-if="this.next ==null">
        下一篇
        <a href="" >无</a>
      </span>
      <span v-else>
        下一篇
        <a href="" @click="nextP()">{{next.Title}}</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      next:[],
      perv:[],
    };
  },
  methods: {
    getax() {
      
      this.$axios
        .get("/Srv/Article.svc/ArticleRead?id="+this.$route.query.id)
        .then(res => {
          //   this.deguo = res.data.d.Data.Data
          //   console.log(this.deguo);
          this.list = res.data.d.Data;
          this.perv = this.list.Perv
          this.next = this.list.Next
          console.log(this.list);
        })
        .catch(error => console.log(error));
    },
    nextP(){
        this.$router.push({
            path: "newssubpage",
        query:{
          id: this.next.ArticleID
        }
        })
    },
       pervP(){
        this.$router.push({
            path: "newssubpage",
        query:{
          id: this.perv.ArticleID
        }
        })
    }
  },
  computed:{

  },
  mounted() {
      console.log(this.$route.query.id)
    this.getax();
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
  },

  created() {
      
  }
};
</script>

<style>
.newspage {
  min-width: 1200px;
  max-width: 1920px;
  width: 1200px;
  height: auto;
  margin: 0 auto;
  padding: 80px 0;
}
.newspage .pages {
  text-align: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #e5e5e5;
}
.newspage .pages h3 {
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;
  color: rgba(51, 51, 51, 1);
  padding-bottom: 10px;
}
.newspage .pages span {
  font-size: 14px;
  padding-right: 10px;
  line-height: 20px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.newspage .pagez {
  padding: 40px 0;
  border-bottom: 1px solid #e5e5e5;
  color: rgba(102, 102, 102, 1);
}
.newspage .pagez p {
  font-size: 16px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 32px;
}

.newspage .pagez img {
  width: 100%;
  height: 600px;
  padding: 40px 0;
}
.newspage .pagex {
  padding-top: 30px;
}
.newspage .pagex span {
  display: block;
  padding-top: 10px;
  font-size: 16px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.newspage .pagex span a {
  color: rgba(102, 102, 102, 1);
  padding-left: 20px;
}
@media (max-width: 1440px) {
  .newspage {
    min-width: 1200px;
    max-width: 1920px;
    width: 1200px;
    height: auto;
    margin: 0 auto;
    padding: 80px 0;
  }
}
@media (max-width: 1024px) {
  .newspage {
    min-width: 100%;
    max-width: 1920px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 80px 30px;
  }
}
@media (max-width: 414px) {
  .newspage {
    min-width: 100%;
    max-width: 1920px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 80px 15px;
  }
  .newspage .pagez img {
    width: 100%;
    height: 300px;
    padding: 40px 0;
  }
  .newspage .pages h3 {
    font-size: 18px;
  }
  .newspage .pagez p {
    font-size: 14px;
  }
  .newspage .pagex span {
    font-size: 14px;
  }
}
</style>