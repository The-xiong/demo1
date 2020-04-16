<template>
  <div class="guanli">
      <div class="gpage1" id="mao1">
      <div class="gpage11 ghgh">
        <div class="g1_top">
          <h3 class="gcu">01 人行管理</h3>
          <p>机器视觉简单说来，就是用机器代替人眼来做测量和判断。机器视觉系统是通过机器视觉产品将被摄取目标转换成图像信号，传送给专用的图像处理系统，得到被摄目标的形态信息，根据像素分布和亮度、颜色等信息，转变成数字化信号;图像系统对这些信号进行运算来抽取目标的特征，进而根据判别的结果来控制现场的设备动作。</p>
        </div>
        <div class="g1_bottom clearfix">
          <div class="g1b_l">
            <img src="../assets/images/newp/p10.png" alt />
          </div>
          <div class="g1b_r">
            <div class="gbrs" v-for="(item,index) in lis1" :key="index">
              <h3>{{item.t1}}</h3>
              <span>{{item.t2}}</span>
              <span>{{item.t3}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gpage2" id="mao2">
      <div class="gpage22 ghgh">
        <div class="g2_top">
          <h3 class="gcu">02 安全控制</h3>
        </div>
        <div class="g2_bottom clearfix">
          <div class="g2b_l">
            <div class="g222" v-for="(item,index) in lis2" :key="index">
              <h3>{{item.t1}}</h3>
              <span>{{item.t2}}</span>
            </div>
          </div>
          <div class="g2b_m">
            <img src="../assets/images/newp/p15.png" alt />
          </div>
          <div class="g2b_r">
            <div class="gttt">
              <h3>打造更加便捷、安全的新时代校园环境家长放心、学生舒心、学校安心</h3>
              <span>将人脸识别技术与校园的管理系统有机的结合，应用在高校的公共安全、考勤管理、考试管理、图书馆管理、宿舍管理等教、学、生活场景之中， 能够打造更加便捷、安全的新时代校园环境，同时也能够弥补高校管理者在社会化管理中的经验、力量不足。</span>
            </div>
            <div class="giii">
              <img src="../assets/images/newp/p8.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gpage3" id="mao3">
      <div class="gpage33 ghgh">
        <div class="g3_top">
          <h3 class="gcu">03 地铁站台管理</h3>
        </div>
        <div class="g3_bottom clearfix">
          <div class="g3bl">
            <img src="../assets/images/newp/p7.png" alt />
          </div>
          <div class="g3br">
            <div class="jiance">
              <h3>地铁站台屏蔽门与列车门之间风险空间及异物检测</h3>
              <span>1、采用先进异物检测技术进行检测与预警，保障行车安全。</span>
              <span>2、识别异物大小并划分风险等级、盲区小甚至无盲区。</span>
            </div>
            <div class="chemen">
              <span v-for="(item,index) in lis3" :key="index">
                <i class="iconfont iconyes" style="font-size:16px;color:#2988F5"></i>
                {{item.t}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gpage4" id="mao4">
      <div class="gpage44 clearfix ghgh">
        <div class="g4_left">
          <h3 class="gcu">04 优化楼宇管理</h3>
          <span>提升工作效率，打造优质服务体验</span>
          <p>通过云+端的模式，将智能通道管理、人脸梯控管理、智能访客管理、智能门禁管理，智能考勤管理等多个应用场景联动管理， 打造楼宇一体化智能管理平台，提高物业人员工作效率，提升企业办公效率，同时打造优质服务体验。</p>
        </div>
        <div class="g4_right">
          <img src="../assets/images/newp/p4.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props:{
    commentId: String
  },
  data() {
    return {
      lis1: [
        {
          t1: "人脸识别让机场运营更安全、管理更高效，旅客出行更便捷",
          t2:
            "通过运用人工智能、云计算、互联网、大数据等信息技术，围绕航旅客群体打造新型智慧机场运营模式，全方位提升民航机场智能化运营和管理水平。"
        },
        {
          t1: "航站楼进出智能管控系统",
          t2: "1、人证核查进出，建立航站楼的安全防护边界。",
          t3: "2、依托公安网进行身份核验，排除安全隐患。"
        }
      ],
      lis2: [
        {
          t1: "预安检",
          t2:
            "实现差异化安检，提升安检工作效率,人脸标注采集极佳点位，确保采集信息的准确性,降低安检工作强度，改善旅客安检服务体验。"
        },
        { t1: "边检自助通关", t2: "自助通关服务，提升旅客通关效率。" },
        {
          t1: "自助安检",
          t2: "人证票合一身份核验，提升安检工作效率，减少排队等候。"
        },
        { t1: "自助登机", t2: "登记身份核查，人证票合一，保障登记安全。" }
      ],
      lis3: [
        { t: "纵深长覆盖站台，定位到车门" },
        { t: "可进行视觉确认，可判断是否侵限" },
        { t: "系统检测准确度与稳定性高" },
        { t: "可平稳过渡兼容人工检测方式" },
        { t: "不易受环境影响等" }
      ]
    };
  },
  methods:{
    scrollToSection() {
    
    }
  },
  mounted(){
    console.log(this.commentId)
    let section = document.getElementById(this.commentId)
    console.log(section)
    if (section) {
      section.scrollIntoView()
    }
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
.guanli {
  min-width: 1200px;
  max-width: 1920px;
  margin: 0 auto;
  height: auto;
}
/* 公共样式 */
.guanli .gcu {
  font-size: 30px;
  font-weight: 500;
  color: rgba(41, 136, 245, 1);
  line-height: 30px;
  padding-bottom: 40px;
}
.guanli .ghgh {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
}

/* .guanli .gpage1 .gpage11 {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
} */
.gpage1 .gpage11 .g1_top p {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
  padding-bottom: 40px;
}
.gpage1 .gpage11 .g1_bottom span {
  display: block;
}
.gpage1 .gpage11 .g1_bottom .g1b_l,
.g1b_r {
  float: left;
}
.gpage1 .gpage11 .g1_bottom .g1b_r {
  width: 560px;
  padding-left: 40px;
}
.gpage1 .gpage11 .g1_bottom .g1b_r .gbrs {
  padding-bottom: 40px;
}
.gpage1 .gpage11 .g1_bottom .g1b_r .gbrs h3 {
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
}
.gpage1 .gpage11 .g1_bottom .g1b_r .gbrs span {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
}
.gpage2 {
  background: rgba(249, 249, 249, 1);
}
/* .gpage2 .gpage22 {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
} */
.gpage2 .gpage22 .g2_bottom {
  background: #fff;
}
.gpage2 .gpage22 .g2_bottom .g2b_l,
.g2b_m,
.g2b_r {
  float: left;
}
.gpage2 .gpage22 .g2_bottom .g2b_l {
  width: 385px;
  padding-top: 44px;
}
.gpage2 .gpage22 .g2_bottom .g2b_l .g222 {
  width: 320px;
  margin: 0 auto;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px dashed #ccc;
}
.gpage2 .gpage22 .g2_bottom .g2b_l .g222 h3 {
  font-size: 20px;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
}
.gpage2 .gpage22 .g2_bottom .g2b_l .g222 span {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
}
.gpage2 .gpage22 .g2_bottom .g2b_r {
  width: 400px;
}
.gpage2 .gpage22 .g2_bottom .g2b_r .gttt {
  margin: 0 auto;
  padding: 30px 29px 8px 30px;
}
.gpage2 .gpage22 .g2_bottom .g2b_r .gttt h3 {
  font-size: 20px;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 30px;
  padding-bottom: 10px;
}
.gpage2 .gpage22 .g2_bottom .g2b_r .gttt span {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 30px;
}
/* .gpage3 .gpage33 {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
} */
.gpage3 .gpage33 .g3_bottom .g3bl,
.g3br {
  float: left;
}
.gpage3 .gpage33 .g3_bottom .g3br {
  /* width: 560px; */
  padding-left: 40px;
}
.gpage3 .gpage33 .g3_bottom .g3br span {
  display: block;
}
.gpage3 .gpage33 .g3_bottom .g3br .jiance h3 {
  font-size: 20px;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
  padding-bottom: 10px;
}
.gpage3 .gpage33 .g3_bottom .g3br .jiance span {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
}
.gpage3 .gpage33 .g3_bottom .g3br .chemen {
  padding-top: 10px;
}
.gpage3 .gpage33 .g3_bottom .g3br .chemen span {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
}
.gpage3 .gpage33 .g3_bottom .g3br .chemen span i {
  padding-right: 4px;
}
.gpage4 {
  background: rgba(249, 249, 249, 1);
}
/* .gpage4 .gpage44 {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
} */
.gpage4 .gpage44 span {
  display: block;
}
.gpage4 .gpage44 .g4_left,
.g4_right {
  float: left;
}
.gpage4 .gpage44 .g4_left {
  width: 600px;
  padding-top: 90px;
  padding-right: 40px;
}
.gpage4 .gpage44 .g4_left span {
  font-size: 24px;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
  padding-bottom: 10px;
}
.gpage4 .gpage44 .g4_left p {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
}
@media (max-width: 1024px) {
  .guanli {
  min-width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  height: auto;
}
.guanli .ghgh {
  width: 100%;
  margin: 0 auto;
  padding: 80px 30px;
}

.gpage1 .gpage11 .g1_bottom .g1b_l img{
  width: 100%;
}
.gpage1 .gpage11 .g1_bottom .g1b_r {
    width: 100%;
    padding-left: 0px;
}
.gpage2 .gpage22 .g2_bottom .g2b_l {
    width: 100%;
    padding-top: 44px;
    padding-bottom: 20px;
}
.gpage2 .gpage22 .g2_bottom .g2b_m img{
  width: 100%;
}
.gpage2 .gpage22 .g2_bottom .g2b_r {
    width: 100%;
}
.gpage2 .gpage22 .g2_bottom .g2b_r .giii img{
  max-width: 100%;
}
.gpage3 .gpage33 .g3_bottom .g3bl img{
  width: 100%;
}
.gpage3 .gpage33 .g3_bottom .g3br {
    /* width: 560px; */
    padding-left: 0px;
}
.gpage4 .gpage44 .g4_left {
    width: 100%;
    padding-top: 0px;
    padding-right: 0px;
}
.gpage4 .gpage44 .g4_right img{
  width: 100%;
}
.gpage2 .gpage22 .g2_bottom .g2b_l .g222 {
    width: 100%;
    margin: 0 auto;
    padding-bottom: 20px;
    padding-top: 20px;
    border-bottom: 1px dashed #ccc;
}
.gpage2 .gpage22 .g2_bottom .g2b_r .gttt {
    margin: 0 auto;
    padding: 30px 0px 8px 0px;
}
}
@media (max-width: 414px) {
.guanli .ghgh {
    width: 100%;
    margin: 0 auto;
    padding: 80px 15px;
}
.guanli .gcu{
  font-size: 20px;
}
.gpage1 .gpage11 .g1_bottom .g1b_r .gbrs h3 {
  font-size: 16px;
}
.gpage2 .gpage22 .g2_bottom .g2b_l .g222 h3 {
  font-size: 16px;
}
.gpage2 .gpage22 .g2_bottom .g2b_r .gttt h3 {
  font-size: 16px;
}
.gpage3 .gpage33 .g3_bottom .g3br .jiance h3 {
  font-size: 16px;
}
.gpage4 .gpage44 .g4_left span {
    font-size: 18px;
}
.gpage1 .gpage11 .g1_top p {
    font-size: 14px;
}
.gpage4 .gpage44 .g4_left p {
    font-size: 14px;
}
.gpage1 .gpage11 .g1_bottom .g1b_r .gbrs span {
    font-size: 14px;
}
.gpage2 .gpage22 .g2_bottom .g2b_l .g222 span {
    font-size: 14px;
}
.gpage2 .gpage22 .g2_bottom .g2b_r .gttt span {
    font-size: 14px;
}
.gpage3 .gpage33 .g3_bottom .g3br .jiance span {
    font-size: 14px;
}
.gpage3 .gpage33 .g3_bottom .g3br .chemen span {
    font-size: 14px;
}
}
</style>