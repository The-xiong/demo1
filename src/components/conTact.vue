<template>
  <div class="contact">
    <div class="contact_t">
      <p>联系我们</p>
      <p>Contact us</p>
    </div>
    <form action id="nav_sub">
      <div class="contact_m">
        <input type="text" v-model="name" placeholder="姓名" />
        <input type="text" v-model="email" placeholder="邮箱" />
        <input type="text" v-model="phone" placeholder="电话" />
      </div>
      <div class="contact_mm">
        <textarea v-model="content" placeholder="内容"></textarea>
      </div>
      <div class="contact_b" @click="submitForm()">
        <span>提交</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      content: ""
    };
  },
  methods: {
    // getax(){
    //       this.$axios
    // .get("/Srv/Article.svc/MsgAdd?name="+this.name+"&phone="+this.name+"&email="+this.name+"&content="+this.content)
    // .then(res => {
    //     console.log(res)

    // })
    // .catch(error => console.log(error));
    // }
    submitForm() {
      this.$axios
        .get("/Srv/Article.svc/MsgAdd", {
          params: {
            name: this.name,
            phone: this.phone,
            email: this.email,
            content: this.content
          }
        })
        .then(res => {
          //邮箱验证
          var regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
          //验证手机号码部分
          var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
          if (this.name == "") {
            alert(res.data.d.Msg);
          } else if (this.email == "") {
            alert("邮箱不能为空");
          } else if (!regEmail.test(this.email)) {
            alert("邮箱格式不正确");
          } else if (this.phone == "") {
            alert("手机号不能为空");
          } else if (!reg.test(this.phone)) {
            alert("手机号格式不正确");
          } else if (this.content == "") {
            alert(res.data.d.Msg);
          } else {
            alert("提交成功!");
            this.name = "";
            this.email = "";
            this.phone = "";
            this.content = "";
          }
        })
        .catch(error => console.log(error));
    },
  },
  mounted() {
    // this.getax()
  }
};
</script>

<style>
input,
button,
select,
textarea {
  outline: none;
}
.contact {
  text-align: center;
  padding-top: 60px;
  padding-bottom: 60px;
  max-width: 1920px;
  min-width: 1200px;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.contact .contact_t {
  text-align: center;
  padding-bottom: 40px;
}
.contact .contact_t p:first-child {
  font-size: 30px;
  padding-bottom: 10px;
}
.contact .contact_t p:last-child {
  font-size: 20px;
}
.contact .contact_m {
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.contact .contact_m input:nth-child(1),
.contact .contact_m input:nth-child(2),
.contact .contact_m input:nth-child(3) {
  width: 383px;
  height: 36px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #979797;
}
/* .contact .contact_m input:nth-child(1),
.contact .contact_m input:nth-child(2){
    margin-right: 1px;
} */
/* .contact .contact_m input::-webkit-input-placeholder{
    padding-left: 20px;
    } */
.contact .contact_mm textarea {
  width: 100%;
  height: 128px;
  resize: none;
  padding: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  border: 1px solid #979797;
}
/* .contact .contact_mm textarea::-webkit-input-placeholder{
    padding-top: 10px;
    padding-left: 20px;
    } */
.contact .contact_b {
  padding-top: 40px;
}

.contact .contact_b span {
  display: block;
  width: 160px;
  height: 40px;
  background: rgba(216, 216, 216, 1);
  border-radius: 4px;
  margin: 0 auto;
  line-height: 40px;
  font-size: 14px;
  cursor: pointer;
  background: #56a4ff;
  color: #fff;
}
/* .contact .contact_b span:hover{
  background: #56A4FF;
    color: #fff;
} */
@media (max-width: 1200px) {
  .contact {
    text-align: center;
    padding-top: 60px;
    padding-bottom: 60px;
    min-width: 1200px;
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media (max-width: 1024px) {
  .contact {
    min-width: 100%;
    text-align: center;
    padding-top: 60px;
    padding-bottom: 60px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
  }
  .contact .contact_m {
    padding-bottom: 20px;
    width: 100%;
    display: block;
    justify-content: space-between;
  }
  .contact .contact_m input:nth-child(1),
  .contact .contact_m input:nth-child(2),
  .contact .contact_m input:nth-child(3) {
    width: 100%;
    height: 36px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #979797;
    margin-bottom: 10px;
  }
}
@media (max-width: 414px) {
  .contact .contact_m input:nth-child(1),
  .contact .contact_m input:nth-child(2),
  .contact .contact_m input:nth-child(3) {
    width: 100%;
    height: 50px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #979797;
    margin-bottom: 10px;
  }
  .contact .contact_t p:first-child {
    font-size: 20px;
    padding-bottom: 10px;
  }
  .contact .contact_t p:last-child {
    font-size: 16px;
  }
}
</style>