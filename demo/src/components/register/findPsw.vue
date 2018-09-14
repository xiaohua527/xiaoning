<template>
    <div id="findpsw">
       <nav id="nav_bar">
        <div>
            <div class="nav_logo">
                <img src="https://static.xidibuy.com/static/passport/images/1.0.0/signup_logo.png" alt="">
            </div>
            <div class="nav_login">
                <div>
                   您好，欢迎光临喜地！
                </div>
                <a href="#"  @click="myDenglu" >&nbsp;登录</a> <a href="#"  @click="myZhuce" >&nbsp;&nbsp;&nbsp;注册</a>
            </div>
        </div>
       </nav>
       

                <div class="findpsw_box">
                    <div class="findpsw_conent">
                            <div  id="welcome">找回密码</div>
                            <div class="line">
                                
                            </div>
                            <div class="line_desc">
                                <span>确认账户信息</span>
                                <span> 设置新密码</span>
                            </div>
                         
                            <form action="">
                                <div class="cut_box">
                                    <div>
                                        <div class="cut_box_kuang"><input type="text" placeholder="请输入11位手机号码"></div>
                                        <div class="cut_box_two">
                                
                                            <div><input type="text" placeholder="请输入图片验证码"></div>
                                            <div></div>
                                        </div>
                                    </div>                                  
                                    <div class="agreen">
                                        <input type="submit" value="确认">
                                    </div>
                                    <div class="tel">忘记注册信息？请联系客服：021-38473528</div>
                                </div>
                                
                            </form>
                           
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
  
  
    import register from './Register';
    import Goregister from './Goregister';
export default{
    name:"findpsw",
    data(){
        return{
          
        }
    },
    methods:{
       
      
        myZhuce(){
            alert('注册')
            this.$router.push({
                path:"/goRegister"
            })
        }
    },
    components:{
        
        Goregister
    }
}
    
</script>
<style scoped>
    #findpsw{
        width: 100%;
       height: 100%;
        
    }
    #nav_bar{
        width: 100%;
        height: 60px;
        background-color: #4e4e4e;
    }
 #nav_bar>div{
     width: 996px;
     margin: 0 auto;
     display: flex;
     justify-content: space-between;    

 }
 .nav_logo{
     width: 126px;
     height: 60px;
     padding: 13px 0 12px 4px;
     box-sizing: border-box;
     
 }
 #welcome{
    font-size: 24px;
    color: #222;
    margin-bottom: 50px;
    text-align: center;
    margin-top: 50px;
 }
 .nav_login{
width: 200px;
height: 60px;
font-size: 12px;
color: #c5c5c5;
display: flex;
line-height: 60px;
 }
 .nav_login>a{
     color: #c5c5c5;
     text-decoration: none;
     display: block;
 }

.findpsw_box{
    width: 996px;
    height: 600px;
    /* background-color: orangered; */
    margin: 0 auto;
}
.findpsw_conent{
    width: 492px;
    height: 404px;
    /* background-color: yellow; */
    margin: 0 auto;
    
}
.line{
    width: 492px;
    height: 16px;
    padding-top: 24px;

    background: url('https://static.xidibuy.com/static/passport/images/1.0.0/findpw_progress.jpg') no-repeat top;

}
.line_desc{
    width: 492px;
    height: 16px;
    padding: 0 80px;
    box-sizing: border-box;

    height: 16px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 44px;
    line-height: 16px;
    font-size: 16px;

}
.line_desc>span:nth-child(1){
    color: #ff6b58
}
.line_desc>span:nth-child(2     ){
    color: #777
}
.findpw .progress-wrap span {

    height: 16px;
    line-height: 16px;
    font-size: 16px;
}
.form_box{
     width: 520px;
     height: 472px;
     padding: 0 80px;
     /* background-color: orangered; */
     margin:  0 auto;
     box-sizing: border-box;
     
 }
 .tel{
    line-height: 12px;
margin-top: 20px;
text-align: right;

color: #777;
font-size: 12px;
 }
.tel_login{
     text-align:right;
     margin-bottom: 11px;
     font-size: 12px;
     color: rgb(74, 130, 177);
 }

 .cut_box{
     width: 360px;
     height: 260px;
     /* background-color: palegoldenrod;    */
     margin: 0 auto; 
     
 }
 .cut_box>div:nth-child(1){
     margin-bottom: 20px;
 }
.cut_box input{
    width: 80%;
    height: 22px;
    margin-left: 20px;
    border: transparent;    
   

}
 .cut_box_kuang{
     width: 360px;
     height: 50px;
    box-sizing: border-box;
     padding: 14px 10px 12px 0;
     margin-bottom: 20px;
    font-size: 14px;
    border: 1px solid #ddd;


 }
.cut_box_two>div{
    width: 180px;
    height: 50px;
    box-sizing: border-box;
     padding: 14px 10px 12px 0;
    font-size: 14px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    
}
.cut_box_two{
    display: flex;
}
.agreen>input{
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


#link{
    width: 360px;
    height: 40px;
    /* background-color: rgb(13, 99, 13); */
    margin-top: 85px;
    display: flex;
    justify-content: space-between;
}
#link_left{
    width: 160px;
    height: 40px;
    /* background-color: palegreen; */
    display: flex;
}
#link_right{
    width: 106px;
    height: 40px;
    /* background-color: palegreen; */
}


.ft{
    width: 100%;
    height: 53px;
    border-top:1px solid #ddd;
    margin-top: 178px;

}
.ft_box{   
    width: 996px;
    height: 53px;
    display: flex;
    justify-content: space-between;
    margin:  0 auto;
}
.ft_box *{
    line-height: 53px;
    font-size: 12px;
    color: rgb(119, 119, 119);
}
.ft_box>div:nth-child(1){
width: 365px;
height: 100%;
}
.ft_box>div:nth-child(2){
width:236px;
height: 100%;
}
.ft_box>div:nth-child(2)>a{
    text-decoration: none;
}
</style>

