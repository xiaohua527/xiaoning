<template>
    <div id="login">
       <nav id="nav_bar">
        <div>
            <div class="nav_logo"  @click="huizhuye">
                <img src="https://static.xidibuy.com/static/passport/images/1.0.0/signup_logo.png" alt="">
            </div>
            <div class="nav_login">
                <div>
                   您好，欢迎光临喜地！
                </div>
                <a href="#"  @click="myDenglu" >&nbsp;登录</a>
            </div>
        </div>
       </nav>
       <div  id="welcome">欢迎注册</div>
       <div class="form_box">
           <form action="">
                <div class="tel_login" @click="cutClick">邮箱注册</div>
                <component :is="cut"></component>
                <!-- 路由切换邮箱和手机 -->
                <!-- <div class="cut_box">
                    <div>
                            <div class="cut_box_kuang"><input type="text" placeholder="请输入11位手机号码"></div>
                    <div  class="cut_box_two">
                       
                        <div><input type="text" placeholder="请输入图片验证码"></div>
                        <div></div>
                    </div>
                    <div  class="cut_box_two">
                            <div><input type="text" placeholder="请输入短信验证码"></div>
                            <div>获取验证码</div>
                    </div>
                    <div class="cut_box_kuang">
                            <input type="text"  placeholder="请输入密码，6-16位字母、数字、符号的组合">
                    </div>
                    </div>
                    
                    <div  class="agreen">
                            <input type="submit" value="同意协议并注册" >
                        </div>
                </div> -->
           </form>

           <div id="link">
                <div id="link_left">
                        <a href="" class="wb"></a>
                        <a href="" class="qq"></a>
                        <a href="" class="wx"></a>
                </div>
                <div  id="link_right" >
                    <div>
                        <a href="">喜地服务协议</a>
                    </div>
                    <div>
                        <span>已有账号?  <a href="" >直接登录</a></span>
                       
                    </div>
                </div>
           </div>

       </div>
        <div class="ft">
            <div class="ft_box">
                <div>
                        ©2018喜地电子商务有限公司版权所有沪ICP备14024930号
                </div>
                <div>
                    <a href="">      
                            关于喜地&nbsp;&nbsp; | &nbsp;&nbsp;
                            </a>
                    <a href="">联系喜地&nbsp;&nbsp;|&nbsp;&nbsp;</a>
                    <a href="">喜地首页</a>
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>
import cutemail from "./Cutemail";
import cutphone from "./Cutphone";
import register from "./Register";
export default {
  name: "login",
  data() {
    return {
      cut: "cutemail",
      // isnot:0
      isnot: true
    };
  },
  methods: {
    cutClick() {
      // 切换手机和邮箱登录
      // alert(a)
      // if(this.isnot % 2 == 0){
      //     this.cut = cutphone
      // }
      // else{
      //     this.cut = cutemail
      // }
      // this.isnot++

      if (this.isnot == true) {
        this.cut = cutphone;
      } else {
        this.cut = cutemail;
      }
      this.isnot = !this.isnot;
    },
    myDenglu() {
      // alert('登录')
      this.$router.push({ path: "/register" });
    },
    huizhuye() {
      // alert('sss')
     
      this.$router.push({ path: "/" });
    }
  },
  components: {
    cutemail,
    cutphone
  }
};
</script>
<style scoped>
#login {
  width: 100%;
  height: 100%;
}
#nav_bar {
  width: 100%;
  height: 60px;
  background-color: #4e4e4e;
  
}
#nav_bar > div {
  width: 996px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.nav_logo {
  width: 126px;
  height: 60px;
  padding: 13px 0 12px 4px;
  box-sizing: border-box;
  cursor: pointer;
}
.nav_login {
  width: 160px;
  height: 60px;
  font-size: 12px;
  color: #c5c5c5;
  display: flex;
  line-height: 60px;
}
.nav_login > a {
  color: #c5c5c5;
  text-decoration: none;
  display: block;
}

#welcome {
  font-size: 24px;
  color: #222;
  margin-bottom: 27px;
  text-align: center;
  margin-top: 50px;
}

.form_box {
  width: 520px;
  height: 472px;
  padding: 0 80px;
  /* background-color: orangered; */
  margin: 0 auto;
  box-sizing: border-box;
}
.tel_login {
  text-align: right;
  margin-bottom: 11px;
  font-size: 12px;
  color: rgb(74, 130, 177);
}

.cut_box {
  width: 360px;
  height: 260px;
  /* background-color: palegoldenrod;    */
}
.cut_box input {
  width: 80%;
  height: 22px;
  margin-left: 20px;
  border: transparent;
}
.cut_box_kuang {
  width: 360px;
  height: 50px;
  box-sizing: border-box;
  padding: 14px 10px 12px 0;
  margin-bottom: 20px;
  font-size: 14px;
  border: 1px solid #ddd;
}
.cut_box_two > div {
  width: 180px;
  height: 50px;
  box-sizing: border-box;
  padding: 14px 10px 12px 0;
  font-size: 14px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
}
.cut_box_two {
  display: flex;
}
.agreen > input {
  border: transparent;

  width: 360px;
  height: 50px;
  background-color: rgb(78, 214, 209);
  margin-bottom: 20px;
  font-size: 18px;
  color: white;
  border: 1px solid #ddd;
  margin: 0;
  /* display: block; */
}

#link {
  width: 360px;
  height: 40px;
  /* background-color: rgb(13, 99, 13); */
  margin-top: 85px;
  display: flex;
  justify-content: space-between;
}
#link_left {
  width: 160px;
  height: 40px;
  /* background-color: palegreen; */
  display: flex;
}
#link_right {
  width: 106px;
  height: 40px;
  /* background-color: palegreen; */
}

.wb {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: url("https://static.xidibuy.com/static/passport/images/1.0.0/loginSignup-icon.png")
    no-repeat -80px 0;
  text-decoration: none;
}
.qq {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: url("https://static.xidibuy.com/static/passport/images/1.0.0/loginSignup-icon.png")
    no-repeat -0 0;
  text-decoration: none;
  margin-left: 20px;
}
.wx {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: url("https://static.xidibuy.com/static/passport/images/1.0.0/loginSignup-icon.png")
    no-repeat -160px 0;
  text-decoration: none;
  margin-left: 20px;
}
#link_right > div:nth-child(2) > span {
  font-size: 12px;
  color: #222;
  text-align: right;
}
#link_right > div:nth-child(2) > span > a {
  font-size: 12px;
  color: #4a82b1;
  text-decoration: none;
}
#link_right > div:nth-child(1) > a {
  font-size: 12px;
  color: #4a82b1;
  text-align: right;
  display: inline-block;
  width: 106px;
  text-decoration: none;
}
.ft {
  width: 100%;
  height: 53px;
  border-top: 1px solid #ddd;
  margin-top: 250px;
}
.ft_box {
  width: 996px;
  height: 53px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.ft_box * {
  line-height: 53px;
  font-size: 12px;
  color: rgb(119, 119, 119);
}
.ft_box > div:nth-child(1) {
  width: 365px;
  height: 100%;
}
.ft_box > div:nth-child(2) {
  width: 236px;
  height: 100%;
}
.ft_box > div:nth-child(2) > a {
  text-decoration: none;
}
</style>

