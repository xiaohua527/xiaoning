<template>
<div id="register">
       <div class="register_box">
            <div class="register_bg">
                
                    <form class="register_content"> 
                            <div class="twopsw">

                                </div>
                        <a class="register_logo">
                            <img src="https://static.xidibuy.com/static/passport/images/1.0.0/login_logo.jpg" alt="">
                        </a>
                        <div class="register_radio">
                            <div class="register_left">
                               <div class="register_radio_left" @click="puTong"></div>
                                <div class="putong" >&#x3000;普通登录</div> 
                            </div>
                            <div class="register_rigt">
                               <div class="register_radio_right" @click="shouji"></div>
                                <div class="shouji">&#x3000;手机号快速登录</div> 
                            </div>
                        </div>
                        <!-- <div class="register_input_box"> -->

                                <component :is="cut"></component>
                              
                                    <!-- <div class="register_input">
                                        <div><img src="https://static.xidibuy.com/static/passport/images/1.0.0/login_name.png" alt=""></div>
                                        <input type="text" name="" id="" placeholder="邮箱 / 手机 / 用户名" >
                                    </div>
                                    <div class="register_input1">
                                        <div>
                                            <img src="https://static.xidibuy.com/static/passport/images/1.0.0/login_passwd.png" alt="">
                                        </div>
                                        <input type="text" name="" id="" placeholder="请输入密码">
                                       <span class="eye"></span>
                                    </div> -->
                                    <!-- <router-view></router-view> -->
                                   
                               
                        <!-- </div>  -->
                       
                        <div class="remanber">
                            <div class="remanber_left">
                                <div class="remanber_kuang" @click="selectClick">

                                </div>
                                <div>
                                    &#x3000;记住用户名
                                </div>
                            </div>
                          
                            <div  class="remanber_psw" @click="findMyclick">找回密码</div>
                        </div>
                        <div id="login">
                            <input type="submit" value="登录">
                        </div>
                        <div class="link">
                            <div class="link_box">
                                <div>
                                    <a href="" class="wb"></a>
                                    <a href="" class="qq"></a>
                                    <a href="" class="wx"></a>
                                </div>
                                <div>
                                    <div id="not"> 没有账号? </div><a href="#" class="rg" @click="goRegister"> &nbsp;前往注册</a>
                                </div>
                            </div>
                            
                        </div>
                    </form>
            </div>
           
       </div>
       <div class="ft_box">
            <div class="ft_top">
                <a href="">
                        &#x3000;&#x3000;&#x3000;&#x3000;&#x3000;&#x3000;关于喜地 &nbsp;&nbsp; |&nbsp;&nbsp;
                        
                       
                        </a>
                <a href="">联系喜地&nbsp;&nbsp;|&nbsp;&nbsp;</a>
                <a href="">喜地首页</a>
            </div>
            <br>
            <div class="ft_bt">
                    ©2018 喜地电子商务有限公司 版权所有
                    &nbsp;&nbsp;&nbsp;
                    沪ICP备14024930号
            </div>
        </div>
       
</div>

</template>

<script>
    import plain from './Plain';//点击普通登录
    import tel from './Tel'//点击手机登录
    import goregister from './Goregister'//前往注册
    import findPsw from './findPsw'//找回密码

    export default{
        
        
        name:"register",
      
        data(){
                return{
                    isnot:true,
                    cut:"plain"
                }
        }, 
             
             
   
        components:{
            plain,
            tel,
            goregister,
            findPsw
        },
        methods:{
            // 点击普通
            puTong(){
                // alert('sss')
                this.cut = "plain"
                $('.register_radio_left').css({                 
                  background: `url('https://static.xidibuy.com/static/passport/images/1.0.0/loginSignup-icon.png') no-repeat -120px -40px`            
               })
                $('.putong').css({ 'color':'#222'})
                $('.shouji').css({ 'color':'#777'})
                $('.register_radio_right').css({                   
                    background: `url('https://static.xidibuy.com/static/passport/images/1.0.0/loginSignup-icon.png') no-repeat -80px -40px`            
               })
            },
            // 点击手机
            shouji(){
               console.log(this.cut);
               this.cut = "tel"
                // alert('sss')
                $('.register_radio_right').css({                   
                    background: `url('https://static.xidibuy.com/static/passport/images/1.0.0/loginSignup-icon.png') no-repeat -120px -40px`              
                })
                $('.shouji').css({ 'color':'#222'})
                $('.putong').css({ 'color':'#777'})
                $('.register_radio_left').css({
                    background: `url('https://static.xidibuy.com/static/passport/images/1.0.0/loginSignup-icon.png') no-repeat -80px -40px`              
               })
            },
            // 找回密码
            findMyclick(){
                // alert('找回密码')
                this.$router.push({
                    path:"/findpsw"
                })
            },
        // 记住用户
            selectClick(){
                // alert('sss')
                if(this.isnot == true){
                    // alert("1111")
                     $('.remanber_kuang').css({
                     background: `url('') no-repeat -80px -40px` 
                    })
                }
                else{
                    // alert('222')
                     $('.remanber_kuang').css({
                     background: `url('https://static.xidibuy.com/static/passport/images/1.0.0/loginSignup-icon.png') no-repeat -78px -116px`
                    })
                }
                this.isnot = !this.isnot
               
            },
            // 前往注册
            goRegister(){
                alert('4444')
                this.$router.push({
                    path:'/goRegister'
                })
            }
        }
           
     
        
    }

</script>
<style scoped> 
#register{
    width: 100%;
    height:944px;
    background-color: #f1f1ef
}
.register_box{
    width: 996px;
    height: 670px;
    /* background-color: red; */
    margin: 0 auto;     
    
}
.register_bg{
    background: url('https://static.xidibuy.com/static/passport/images/1.0.0/login_bg.jpg') no-repeat top center;
    width:996px;
    min-width: 775px;
    overflow: hidden;
   
}
.register_content{
    width: 500px;
    height: 482px;
    background-color: white;
    margin: 0 auto;
    margin-top: 70px;
    padding: 0 70px 40px 70px;
    box-sizing: border-box;
    position: relative;
}
.register_logo{
    width: 360px;
    height: 118px;
    display: block;
    text-align: center;
    padding-top: 40px;
    box-sizing: border-box;
 

}
.register_radio{
    width: 360px;
    height: 16px;
    /* background-color: orangered; */
    display: flex;
    justify-content: space-between;
}
.register_radio_left{
    display: block;
    width: 16px;
    height: 16px;
    background: url('https://static.xidibuy.com/static/passport/images/1.0.0/loginSignup-icon.png') no-repeat -120px -40px;
    cursor: pointer;
   
}
.register_radio_right{
    /* display: block; */
    width: 16px;
    height: 16px;
    background: url('https://static.xidibuy.com/static/passport/images/1.0.0/loginSignup-icon.png') no-repeat -80px -40px;
    cursor: pointer;
}
.register_left{
    display: flex;
}
.register_left>div:nth-child(2){
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    /* color: #777 */
    /* display: block; */
}
.register_rigt{
    display: flex;
}
.register_rigt>div:nth-child(2){
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    /* color: #777; */
    /* display: block; */
    /* vertical-align: middle; */
}
.register_input_box{
    width: 360px;
    height: 100px;
    background-color: orange;
    margin-top: 30px;
    border: 1px solid #ddd;
   
}

.register_input{
width: 100%;
height: 50px;
border-bottom: 1px solid #ddd;
padding: 14px 10px 12px 42px;
box-sizing: border-box;
position: relative;

}
.register_input1{
width: 100%;
height: 50px;
position: relative;
padding: 14px 10px 12px 42px;
box-sizing: border-box;
}
.eye{  
    position: absolute;
    background: url('https://static.xidibuy.com/static/passport/images/1.0.0/loginSignup-icon.png') no-repeat 0 -40px;
    top: 14px;
    right: 10px;
    width: 22px;
    height: 22px;
}
.register_input>div{
    width: 22px;
    height: 22px;
    /* background: url('https://static.xidibuy.com/static/passport/images/1.0.0/login_name.png') no-repeat 10px 14px; */
    position: absolute;
    left: 10px;
}
.register_input1>div{
    width: 22px;
    height: 22px;
    /* background: url('https://static.xidibuy.com/static/passport/images/1.0.0/login_passwd.png') no-repeat 10px 14px; */
    position: absolute;
    left: 10px;
}




.remanber{
    width: 360px;
    height: 13px;
    /* background-color: red; */
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
}
.remanber_kuang{
    width: 18px;
    height: 18px;
     border:1px solid  #58d9da;
     display: block;
    background: url('https://static.xidibuy.com/static/passport/images/1.0.0/loginSignup-icon.png') no-repeat -78px -116px;
}
.remanber_psw{
    width: 48px;
    height: 18px;
    font-size: 12px;
    color: #4a82b1;
}
.remanber_left{
    display: flex;
}
.remanber_left>div:nth-child(2){
    font-size: 14px;
}
#login{
    margin-top: 30px;
    width: 360px;
    height: 50px;
    background-color: #4ed6d1;
    margin-bottom: 20px;
    

}
#login>input{
    width: 360px;
    height: 50px;
    border: none;
    font-size: 18px;
    color: white;
    background-color: #4ed6d1;
}
.link{
    width: 360px;
    height: 40px;
    /* background-color: rebeccapurple; */
}
.link_box{
    display: flex;
    justify-content: space-between
}
.link_box>div{
display: flex;
}
#not{
    font-size: 12px;
    line-height: 40px;
    color :#ddd;
    
}
.rg{
font-size: 12px;
line-height: 40px;
text-decoration: none;
color: #4a82b1;


}

.wb{
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: url('https://static.xidibuy.com/static/passport/images/1.0.0/loginSignup-icon.png') no-repeat -80px 0;
    text-decoration: none;
}
.qq{
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: url('https://static.xidibuy.com/static/passport/images/1.0.0/loginSignup-icon.png') no-repeat -0 0;
    text-decoration: none;
    margin-left: 20px;


}
.wx{
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: url('https://static.xidibuy.com/static/passport/images/1.0.0/loginSignup-icon.png') no-repeat -160px 0;
    text-decoration: none;
    margin-left: 20px;

}
.twopsw{
    width: 100px;
    height: 100px;
    background: url('https://static.xidibuy.com/static/passport/images/1.0.0/login-change-pic.png') no-repeat 0 0;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;

}
.ft_box{
    width: 350px;
    height: 44px;
    /* background-color: orange; */
    margin: 0 auto;
    margin-top: 100px;
    
}

.ft_top a{
    font-size: 12px;
    text-decoration: none;
    color: #777;

}
.ft_bt{
    font-size: 12px;
    color: #777;
}
.shouji{
    color: #777;
}
</style>