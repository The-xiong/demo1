<template>
  <div class="lianxi">
    <div class="lians">
      <h3>尊敬的客户：感谢您选择海森博格产品和服务！</h3>
      <span>通过以下方式联系我们</span>
    </div>
    <div class="lianx clearfix">
      <div class="lianx3" v-for="(li,index) in lis" :key="index">
        <img :src="li.img" alt />
        <div class="number3">
          <span>{{li.t1}}</span>
          <span>{{li.t2}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lis: [
        {
          img: require("../assets/images/newp/icon3.svg"),
          t1: "159 6261 4723",
          t2: "周一至周五 8:00-17:00"
        },
        {
          img: require("../assets/images/newp/icon2.svg"),
          t1: "sales@heisenbergvmc.com",
          t2: "请将您的疑问发送给我们"
        },
        {
          t1: "扫一扫二维码，联系我",
          t2: "在线提交您的疑问"
        }
      ],
      otk: ''
    };
  },
  mounted(){
       this.$axios
      .get("/SiteInfo.ashx")
      .then(res => {
          function transToModel(obj) {
            var result = {};
            for (var i = 0; i < obj.length; i++) {
                result[obj[i].Code] = obj[i].DataValue;
            }
            return result
        }
        //  eval(res.data+";var obj=transToModel(SiteInfo);console.log(obj.Email)")
        let arr = []
        this.otk = window.location.origin
        eval(res.data+";arr=SiteInfo")
         var obj=transToModel(arr)
         this.lis[0].t1 = obj.Phone
         this.lis[0].t2 = obj.ServiceTime
         this.lis[1].t1 = obj.Email
         this.lis[2].img = this.otk+obj.WXQrCode
        console.log(obj)
      })
      .catch(error => console.log(error));
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
.lianxi {
  min-width: 1200px;
  max-width: 1920px;
  width: 1200px;
  height: auto;
  margin: 0 auto;
  padding: 70px 0 160px;
  text-align: center;
  clear: both;
}
.lianxi .lians {
  padding-bottom: 100px;
}
.lianxi .lians h3 {
  font-size: 30px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 30px;
  padding-bottom: 10px;
}
.lianxi .lians span {
  font-size: 20px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
.lianxi .lianx .lianx3 {
  width: 33%;
  float: left;
}
.lianxi .lianx .lianx3:nth-child(3) img{
 width: 120px;
 height: 120px;
 padding: 19px 19px;
}
.lianxi .lianx .lianx3 .number3 span {
  display: block;
}
.lianxi .lianx .lianx3 .number3 span:first-child {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 24px;
}
.lianxi .lianx .lianx3 .number3 span:last-child {
  font-size: 16px;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 24px;
}
@media (max-width: 1024px) {
    .lianxi {
  min-width: 100%;
  max-width: 1920px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 70px 30px 160px;
  text-align: center;
  clear: both;
}
}
@media (max-width: 414px) {
        .lianxi {
  min-width: 100%;
  max-width: 1920px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 70px 15px 160px;
  text-align: center;
  clear: both;
}
    .lianxi .lianx .lianx3 {
  width: 100%;
  float: left;
}
.lianxi .lians h3 {
  font-size: 16px;
}
.lianxi .lians span {
  font-size: 16px;
}
.lianxi .lianx .lianx3 .number3 span:first-child {
  font-size: 14px;
}
.lianxi .lianx .lianx3 .number3 span:last-child {
  font-size: 14px;
}
.lianxi .lians {
    padding-bottom: 50px;
}
}
</style>