<template>
  <div class="aboutus">
    <div class="usuuu">
      <img src="../assets/images/images/about.png" alt="">
    </div>
    <div class="aboutuuu">
      <div class="abus">
        <span>关于我们</span>
        <span>About us</span>
      </div>
      <div class="p">
        <p>海森博格是一家年轻的公司专注于视觉安全，运动控制，电源和系统集成。</p>
        <p>我们的工程师均是各自领域的和专家，积累了多年经验，对产品和客户应用具有充分的理解，项目成功应用于铁路，机场，以及工厂自动化</p>
        <p class="eownw">海森博格是一家年轻的公司专注于视觉安全，运动控制，电源和系统集成。我们的工程师均是各自领域的和专家，积累了多年经验，对产品和客户应用具有充分的理解，项目成功应用于铁路，机场，以及工厂自动化</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.aboutus {
  /* background: url(../assets/images/images/about.png) center center no-repeat; */
  clear: both;
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
    min-width: 1200px;
    max-width: 1920px;
    text-align: center;
}
.aboutus .usuuu{
  width: 100%;
  height: auto;
}
.aboutus .usuuu img{
  max-width: 100%;
  display: block;
}
.aboutus .aboutuuu{
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  padding-top: 180px;
}
.aboutus .abus {
  padding-bottom: 30px;
}
.aboutus .abus span {
  display: block;
}
.aboutus .abus span:first-child {
  font-size: 30px;
  padding-bottom: 10px;
}
.aboutus .abus span:last-child {
  font-size: 20px;
}
.aboutus .p {
  font-size: 16px;
  padding-left: 10px;
  padding-right: 10px;
}
.aboutus .p .eownw{
  display: none;
}
@media (max-width: 1400px) {
  .aboutus .aboutuuu{
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  padding-top: 140px;
}
}
@media (max-width: 1200px) {
  .aboutus .aboutuuu{
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  padding-top: 100px;
}
}
@media (max-width: 1024px) {
  .aboutus {
  /* background: url(../assets/images/images/about.png) center center no-repeat; */
  clear: both;
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
    min-width: 100%;
    max-width: 1920px;
    text-align: center;
}
  .aboutus .aboutuuu{
        width: 100%;
    height: auto;
    position: inherit;
    left: 0;
    top: 0;
    padding: 20px 0 20px 0;
  }
  .aboutus .p p{
  display: none;
  font-size: 14px;
}
.aboutus .p .eownw{
  display: block;
  text-align: left;
}
}
@media (max-width: 414px) {
    .aboutus .abus span:first-child {
  font-size: 20px;
}
.aboutus .abus span:last-child {
  font-size: 16px;
}
}
</style>