<template>
  <div class="controlpage">
    <div class="cpage1" id="mao1">
      <div class="cpage11 ghgh">
        <div class="p1_top">
          <h3 class="gcu">01门控器</h3>
          <span>基于多年的应用经验，海森博格门机控制更加友好，安静，使用德恩科Dunkermotoren电机能达到正常开关门700万次的寿命。</span>
        </div>
        <div class="p1_bottom clearfix">
          <div class="p1bl">
            <img src="../assets/images/newp/p7.png" alt />
          </div>
          <div class="p1br">
            <span>同时，海森博格产品具有国际标准的可靠性。</span>
            <span class="emc">CE EMC 电磁兼容标准</span>
            <span>EN 61000-6-2:2005</span>
            <span>EN 61000-6-4:2007+A1</span>
            <span class="emc">Safety Standard 安全标准</span>
            <span>EN 16005 -1: 2012</span>
            <span>EN 1050: 1997</span>
          </div>
        </div>
      </div>
    </div>
    <div class="cpage2" id="mao2">
      <div class="cpage22 ghgh">
        <div class="p2_top">
          <h3 class="gcu">02 闸机机芯GCU</h3>
        </div>
        <div class="p2_bottom clearfix">
          <div class="p2bl">
            <span class="emc">支持德恩科直流无刷电机 Dunkermotoren BLDC 和有刷电机</span>
            <div class="p2zhi">
              <h4>支持反馈方式</h4>
              <span v-for="(item,index) in lis1" :key="index">{{item.text}}</span>
            </div>
            <div class="p2dian">
              <h4>驱动模块控制方式-全闭环控制 (速度，位置，电流)</h4>
              <span v-for="(item,index) in lis2" :key="index">
                <i class="iconfont iconyes" style="font-size:16px;color:#2988F5"></i>
                {{item.text}}
              </span>
            </div>
          </div>
          <div class="p2br">
            <img src="../assets/images/newp/p14.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="cpage3" id="mao3">
      <div class="cpage33 clearfix ghgh">
        <div class="c3_left">
          <img src="../assets/images/newp/p12.png" alt />
        </div>
        <div class="c3_right">
          <h4>正在验证中 Coming soon</h4>
          <span>配合德恩科Dunkermotoren电机的标准动车组车辆门门机驱控系统</span>
        </div>
      </div>
    </div>
    <div class="cpage4" id="mao4">
      <div class="cpage44 clearfix ghgh">
        <div class="c4_left">
          <h3 class="gcu">03 地铁屏蔽门电源方案，可以提供电源模块或者整机</h3>
          <span class="emc">电源模块具有多条地铁运行业绩</span>
          <div class="ibp">
            <p>驱动电源柜提供门机系统供电，直流方式，充电、馈电、故障保护、电源参数和报警信息监测以及事件管理记录。</p>
            <p>控制电源柜提供门控器DCU、PSC、PSL、IBP 和接口等供电。</p>
          </div>
          <div class="formm clearfix">
            <div class="forms" v-for="(item,index) in lis3" :key="index">
              <div class="f_t">
                <span>{{item.t1}}</span>
                <span>{{item.t2}}</span>
              </div>
              <div class="f_b">
                <span>{{item.t3}}</span>
                <span>{{item.t4}}</span>
                <span>{{item.t5}}</span>
                <span>{{item.t6}}</span>
              </div>
            </div>
          </div>
          <div class="duomo">
            <span v-for="(item,index) in lis4" :key="index">
              <i class="iconfont iconyes" style="font-size:16px;color:#2988F5"></i>
              {{item.text}}
            </span>
          </div>
        </div>
        <div class="c4_right">
          <img src="../assets/images/newp/p13.png" alt />
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
        { text: "1.光电编码器 ABZ" },
        { text: "2.Hall传感器+光电编码器" },
        { text: "3.光电编码器AB+绝对位置编码器" },
        { text: "4.支持抱闸和离合器" }
      ],
      lis2: [
        { text: "平滑运行" },
        { text: "开关门0.3-0.7秒可调" },
        { text: "控制方式：Field Oriented Control(FOC)" },
        { text: "自学习过程中自行调整PID" },
        { text: "速度曲线自动生产成" },
        { text: "动态力矩输出设置 (DIN 18650 EN16005 EN13849)" },
        { text: "静态力矩输出设置" }
      ],
      lis3: [
        {
          t1: "控制电源输入",
          t2: "（Control Power Panel INPUT）",
          t3: "双路单相三线制AC 220±20%V，由双电源切换箱接入。"
        },
        {
          t1: "控制电源输出",
          t2: "（Control Power Panel Out）",
          t3: "2路  AC220V ;",
          t4: "4路  DC110V；（DC90V～135V可调）",
          t5: "12路 DC24V；（DC20V～28V可调）",
          t6: "2路 DC24V ～ 36V  宽电压可调。"
        },
        {
          t1: "驱动电源输入",
          t2: "（DRIVE Power Panel INPUT）",
          t3: "三相 380VAC±20%V，由双电源切换箱接入。"
        },
        {
          t1: "驱动电源输出",
          t2: "（DRIVE Power Panel Out）",
          t3: "10路输出DC110V；（DC90V～135V可调）。"
        }
      ],
      lis4:[
          {text:'多模块并联运行'},
          {text:'硬件自动均流'},
          {text:'N+1冗余；'},
          {text:'无需缓冲网络,热插拨，扩容、维护便捷。'},
          {text:'支持驱动柜电池组充电'},
          {text:'宽电压输入'},
          {text:'Inrush Current 冲击电流50A, 持续300秒'},
      ]
    };
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
.controlpage {
  min-width: 1200px;
  max-width: 1920px;
  margin: 0 auto;
  height: auto;
  /* padding: 100px 0; */
}
/* 公共样式 */
.controlpage .gcu {
  font-size: 30px;
  font-weight: 500;
  color: rgba(41, 136, 245, 1);
  line-height: 30px;
  padding-bottom: 40px;
}
.controlpage .emc {
  font-size: 20px;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
  padding-bottom: 10px;
}
.controlpage .ghgh {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
}





.controlpage .cpage1 {
  background: url(../assets/images/images/about.png) no-repeat center center;
  background-size: cover;
}
/* .controlpage .cpage1 .cpage11 {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
} */
.controlpage .cpage1 .cpage11 .p1_top {
  padding-bottom: 40px;
}

.controlpage .cpage1 .cpage11 .p1_top span {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
}
.controlpage .cpage1 .cpage11 .p1_bottom .p1bl,
.p1br {
  float: left;
}
.controlpage .cpage1 .cpage11 .p1_bottom .p1br {
  padding-left: 40px;
}
.controlpage .cpage1 .cpage11 .p1_bottom .p1br span {
  display: block;
}
.controlpage .cpage1 .cpage11 .p1_bottom .p1br span:first-child {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
  padding-bottom: 10px;
}

.controlpage .cpage1 .cpage11 .p1_bottom .p1br span:nth-child(3),
.controlpage .cpage1 .cpage11 .p1_bottom .p1br span:nth-child(4) {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
}
.controlpage .cpage1 .cpage11 .p1_bottom .p1br span:nth-child(4) {
  padding-bottom: 40px;
}

.controlpage .cpage1 .cpage11 .p1_bottom .p1br span:nth-child(6),
.controlpage .cpage1 .cpage11 .p1_bottom .p1br span:nth-child(7) {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
}

/* .controlpage .cpage2 .cpage22 {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
} */
.controlpage .cpage2 .cpage22 .p2_bottom .p2bl,
.p2br {
  float: left;
}
.controlpage .cpage2 .cpage22 .p2_bottom .p2bl {
  padding-right: 40px;
}
.controlpage .cpage2 .cpage22 .p2_bottom .p2bl .p2zhi {
  padding-bottom: 30px;
}
.controlpage .cpage2 .cpage22 .p2_bottom .p2bl .p2zhi h4 {
  font-size: 20px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
}
.controlpage .cpage2 .cpage22 .p2_bottom .p2bl .p2zhi span {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
}
.controlpage .cpage2 .cpage22 .p2_bottom .p2bl .p2dian h4 {
  font-size: 20px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
}
.controlpage .cpage2 .cpage22 .p2_bottom .p2bl .p2dian span {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
}
.controlpage .cpage2 .cpage22 .p2_bottom .p2bl .p2dian span i {
  padding-right: 4px;
}
.controlpage .cpage2 .cpage22 .p2_bottom .p2bl span {
  display: block;
}
.controlpage .cpage3 {
  background: rgba(249, 249, 249, 1);
}
/* .controlpage .cpage3 .cpage33 {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
} */
.controlpage .cpage3 .cpage33 .c3_right,
.c3_left {
  float: left;
}
.controlpage .cpage3 .cpage33 .c3_right {
  padding-left: 40px;
  padding-top: 140px;
}
.controlpage .cpage3 .cpage33 .c3_right h4 {
  font-size: 30px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 42px;
  padding-bottom: 17px;
}
.controlpage .cpage3 .cpage33 .c3_right span {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
}
/* .controlpage .cpage4 .cpage44 {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
} */
.controlpage .cpage4 .cpage44 .c4_right,
.c4_left {
  float: left;
}
.controlpage .cpage4 .cpage44 .c4_left {
  width: 706px;
  padding-right: 40px;
}
.controlpage .cpage4 .cpage44 .c4_left .ibp {
  padding-top: 5px;
  padding-bottom: 20px;
}
.controlpage .cpage4 .cpage44 .c4_left .ibp p{
 font-size:16px;
font-weight:400;
color:rgba(51,51,51,1);
line-height:32px;
}
.controlpage .cpage4 .cpage44 .c4_left .formm {
  padding-bottom: 20px;
}
.controlpage .cpage4 .cpage44 .c4_left .formm .forms {
  float: left;
  width: 49%;
  text-align: center;
  padding-right: 2px;
}
.controlpage .cpage4 .cpage44 .c4_left .formm .forms span {
  display: block;
}
.controlpage .cpage4 .cpage44 .c4_left .formm .forms .f_t {
  height: 60px;
  background: #ecf3fc;
  padding: 8px 0;
}
.controlpage .cpage4 .cpage44 .c4_left .formm .forms .f_t span {
  font-size: 16px;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
}
.controlpage .cpage4 .cpage44 .c4_left .formm .forms .f_b {
  height: 148px;
  padding: 54px 35px;
  background: rgba(249, 249, 249, 1);
  text-align: left;
}
.controlpage .cpage4 .cpage44 .c4_left .formm .forms:nth-child(2) .f_b {
  padding: 14px 35px;
}
.controlpage .cpage4 .cpage44 .c4_left .formm .forms:nth-child(2) .f_b span {
  line-height: 28px;
}
.controlpage .cpage4 .cpage44 .c4_left .formm .forms .f_b span {
  font-size: 14px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
.controlpage .cpage4 .cpage44 .c4_left .duomo span {
    display: block;
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
}
.controlpage .cpage4 .cpage44 .c4_left .duomo span i {
  padding-right: 4px;
}
.controlpage .cpage4 .cpage44 .c4_right {
  padding-top: 191px;
}
@media (max-width: 1024px) {
    .controlpage {
  min-width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  height: auto;
}
.controlpage .ghgh {
  width: 100%;
  margin: 0 auto;
  padding: 80px 30px;
}
.controlpage .cpage1 .cpage11 .p1_bottom .p1br {
    padding-left: 0px;
}
.controlpage .cpage2 .cpage22 .p2_bottom .p2bl {
    padding-right: 0px;
}
.controlpage .cpage3 .cpage33 .c3_right {
    padding-left: 0px;
    padding-top: 40px;
}
.controlpage .cpage4 .cpage44 .c4_right {
    padding-top: 40px;
}
.controlpage .cpage1 .cpage11 .p1_bottom .p1bl img{
    width: 100%;
}
.controlpage .cpage2 .cpage22 .p2_bottom .p2br img{
    width: 100%;
}
.controlpage .cpage3 .cpage33 .c3_left img{
    width: 100%;
}
.controlpage .cpage4 .cpage44 .c4_right img{
  width: 100%;
}
.controlpage .cpage4 .cpage44 .c4_left {
  width: 100%;
  padding-right: 0;
}
}
@media (max-width: 414px) {
.controlpage {
  min-width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  height: auto;
}
.controlpage .ghgh {
  width: 100%;
  margin: 0 auto;
  padding: 80px 15px;
}
.controlpage .gcu {
    font-size: 20px;
}
.controlpage .cpage1 .cpage11 .p1_top span {
    font-size: 14px;
}
.controlpage .cpage1 .cpage11 .p1_bottom .p1br span:first-child {
    font-size: 14px;
}
.controlpage .emc {
    font-size: 16px;
}
.controlpage .cpage1 .cpage11 .p1_bottom .p1br span:nth-child(3), .controlpage .cpage1 .cpage11 .p1_bottom .p1br span:nth-child(4) {
    font-size: 14px;
}
.controlpage .cpage1 .cpage11 .p1_bottom .p1br span:nth-child(6), .controlpage .cpage1 .cpage11 .p1_bottom .p1br span:nth-child(7) {
    font-size: 14px;
}
.controlpage .cpage2 .cpage22 .p2_bottom .p2bl .p2zhi h4 {
    font-size: 16px;
}
.controlpage .cpage2 .cpage22 .p2_bottom .p2bl .p2zhi span {
    font-size: 14px;
}
.controlpage .cpage2 .cpage22 .p2_bottom .p2bl .p2dian h4 {
    font-size: 16px;
}
.controlpage .cpage2 .cpage22 .p2_bottom .p2bl .p2dian span {
    font-size: 14px;
}
.controlpage .cpage3 .cpage33 .c3_right h4 {
    font-size: 20px;
}
.controlpage .cpage3 .cpage33 .c3_right span {
    font-size: 14px;
}
.controlpage .cpage4 .cpage44 .c4_left .ibp p{
 font-size: 14px;
}
.controlpage .cpage4 .cpage44 .c4_left .formm .forms .f_t span {
    font-size: 14px;
}
.controlpage .cpage4 .cpage44 .c4_left .formm .forms .f_t {
    height: 77px;
}
.controlpage .cpage4 .cpage44 .c4_left .formm .forms .f_b span {
    font-size: 12px;
}
.controlpage .cpage4 .cpage44 .c4_left .formm .forms .f_b {
    padding: 45px 20px;
}
.controlpage .cpage4 .cpage44 .c4_left .formm .forms:nth-child(2) .f_b {
    padding: 6px 20px;
}
.controlpage .cpage4 .cpage44 .c4_left .duomo span {
    font-size: 14px;
}
}
</style>