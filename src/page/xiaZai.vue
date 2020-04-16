<template>
  <div class="xiazai">
    <div class="xiazaitop">
      <span>名称</span>
      <span>大小</span>
      <span>更新时间</span>
      <span>下载</span>
    </div>
    <div class="xiazaimiddle" v-for="(item,i) in xiazai" :key="i" :class="i==0?'poi':''">
      <span>{{item.Title}}</span>
      <span>{{item.FileSize | formatFileSize}}{{item.FileSize | formatfileSuffix}}</span>
      <span>{{item.PublishTime | dateformat('YYYY-MM-DD')}}</span>
      <span>
        <a :href="otk+'/res/file/'+item.FileName" target="_blank">
          <img src="../assets/images/newp/icon1.svg" alt />
        </a>
      </span>
      <!-- <span>BEG6010A产品手册</span>
          <span>1M</span>
          <span>2020-01-01</span>
      <span><a href="#"><img src="../assets/images/newp/icon1.svg" alt=""></a></span>-->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xiazai: [],
      otk:''
    };
  },
  methods: {
    getax() {
      this.$axios
        .get("/Srv/Article.svc/FileQueryAll?cate=0502")
        // .get("/api/Srv/Article.svc/ArticleQueryLst2?cate=07&pageSize=5&pageIndex=0")
        .then(res => {
          this.xiazai = res.data.d.Data;
          console.log(res.data.d.Data);
          // this.pageTotal = res.data.d.Data.TotalPages
          this.otk = window.location.origin
        })
        .catch(error => console.log(error));
    }
  },
  filters: {
    //格式化文件大小，不带GB MB KB
    formatFileSize(FileSize) {
      var size = parseFloat(FileSize);
      var fileSizeKB = Math.round(size / 1024);
      var fileSizeMB = Math.round(size / 1024 / 1024);
      var fileSizeGB = Math.round(size / 1024 / 1024 / 1024);

      if (size >= 1024 * 1024 * 1024) {
        return fileSizeGB;
      } else if (size >= 1024 * 1024) {
        return fileSizeMB;
      } else if (size >= 1024) {
        return fileSizeKB;
      } else {
        return size;
      }
    },
    //格式化文件大小，值返回GB MB KB
    formatfileSuffix(FileSize) {
      if (FileSize >= 1024 * 1024 * 1024) {
        return "GB";
      } else if (FileSize >= 1024 * 1024) {
        return "MB";
      } else if (FileSize >= 1024) {
        return "KB";
      } else {
        return "B";
      }
    }
  },
  mounted() {
    this.getax();
  },
  computed: {
  }
  // console.log(this.xiazai.FileSize)
};
</script>



<style>
.xiazai {
  min-width: 1200px;
  max-width: 1920px;
  width: 1200px;
  height: auto;
  margin: 0 auto;
  padding: 60px 0;
}
.xiazai .xiazaitop {
  min-height: 80px;
  line-height: 80px;
  background-color: #e5e5e5;
  overflow: hidden;
  border: 1px solid #e5e5e5;
}
.xiazai .xiazaitop span:nth-child(1) {
  width: 36.66%;
}
.xiazai .xiazaitop span:nth-child(2) {
  width: 25%;
}
.xiazai .xiazaitop span:nth-child(3) {
  width: 21.66%;
}
.xiazai .xiazaitop span:nth-child(4) {
  width: 16.66%;
}
.xiazai .xiazaitop span {
  float: left;
  text-align: center;
}
.xiazai .xiazaimiddle {
  min-height: 80px;
  line-height: 80px;
  border-bottom: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;

  overflow: hidden;
}
.xiazai .xiazaimiddle span:nth-child(1) {
  width: 36.66%;
}
.xiazai .xiazaimiddle span:nth-child(2) {
  width: 25%;
}
.xiazai .xiazaimiddle span:nth-child(3) {
  width: 21.66%;
}
.xiazai .xiazaimiddle span:nth-child(4) {
  width: 16.66%;
}
.xiazai .xiazaimiddle span {
  text-align: center;
  display: inline-block;
}
.xiazai .xiazaimiddle img {
  vertical-align: middle;
}
@media (max-width: 1024px) {
  .xiazai {
    min-width: 100%;
    max-width: 1920px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    border: 1px solid #e5e5e5;
    padding: 60px 30px;
  }
}
@media (max-width: 414px) {
  .xiazai {
    min-width: 100%;
    max-width: 1920px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    border: 1px solid #e5e5e5;
    padding: 60px 15px;
  }
  .xiazai span {
    font-size: 12px;
  }
  .xiazai .xiazaitop {
    display: none;
  }
  .xiazai .xiazaimiddle{
    padding: 0 15px;
    line-height: 40px;
  }
  .xiazai .poi {
    border-top: 1px solid #e5e5e5;
    
  }

  .xiazai .xiazaimiddle span:nth-child(1) {
    width: 311px;
    text-align: left;
overflow:hidden; 
white-space:nowrap; 
text-overflow:ellipsis;
}
.xiazai .xiazaimiddle span:nth-child(2) {
    width: 33.33%;
}
.xiazai .xiazaimiddle span:nth-child(3) {
    width: 33.33%;
}
.xiazai .xiazaimiddle span:nth-child(4) {
    width: 33.33%;
}
  .xiazai .xiazaimiddle img {
    vertical-align: middle;
    width: 20px;
  }
}
</style>