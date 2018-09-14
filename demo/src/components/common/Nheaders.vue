<template>
    <header>
        <div id="headers">
            <div id="headers_box">
                <div id="header_left">
                    <a href="javascript:;" class="header_drop" @click="shoujixidi" @mouseenter="ShoujiXidi" @mouseleave="likaishoujixidi">
                       <span id="tel"></span>
                        <span class="jiantou"> &nbsp;手机喜地&nbsp;&nbsp;</span>                       
                    </a>
                  
                    <div class="shouji_box">
                        <img src="https://static.xidibuy.com/static/global/images/1.0.0/ewm-mobile.png" alt="">
                        <div style="color:#222; ">&nbsp;&nbsp;&nbsp;手机逛喜地</div>
                    </div>
                    <div class="header_drop" @mouseenter="guanzhu" @mouseleave="likaiguanzhu">
                        <span class="guanzhuxidi"></span>                        
                        <span class="jiantou">关注喜地</span>
                    </div>
                    <div class="guanzhu_box">
                        <img src="https://static.xidibuy.com/static/global/images/1.0.0/ewm-weixin.png" alt="">
                        <div style="color:#222; ">&nbsp;&nbsp;&nbsp;手机逛喜地</div>
                    </div>
                    <div class="header_drop"  @mouseenter="kufu" @mouseleave="likaikufu">                     
                        <span class="kuhufuwu"></span>
                        <span class="jiantou">客户服务 </span>                                              
                    </div>
                    <div class="kefu_box">
                        <a href="#">联系客服 </a><br><br>
                        <a href="#">常见问题</a><br><br>
                        <a href="#">在线客服</a><br><br>
                        <a href="#">意见反馈</a>
                    </div>
                    <a href="" class="header_drop">
                      <span class="gaozhishu"></span>
                        <span>消费者告知书</span>
                    </a>                   
                    <a href="">
                        <span>全场满98包邮</span>
                    </a>
                </div>
                <div id="header_right">
                    <div @click="myRegister">登录</div>
                    <a href="" @click="myLogin">注册</a>
                    <span>|</span>
                    <a href="">我的订单</a>
                    <a href="" class="header_drop jiantou" @mouseenter="geren" @mouseleave="likaigeren">
                        个人中心
                    </a>                  
                    <a href="" @mouseenter="gouwuche" @mouseleave="likaigouwuche">
                        <span class="gouwuche"></span>
                        <span class="jishu">0</span>
                    </a>

                  
                </div>  
                <div class="gouwuche_box">
                   
                    <div style="margin-top:12px; width: 80px;">
                          
                        <span style="color:#222">总计&nbsp;:&nbsp;</span><span style="color:#4ed6d1;font-size: 14px">￥0.00</span>
                    </div>
                   <div style="display:inline-block; width: 150px;margin-left: 48px; ">
                        <a href="" style="display:inline-block; background-color:#4ed6d1; height: 35px;  width: 150px; line-height: 35px;font-size: 14px;text-align: center; color: white; border-radius: 2px">去购物车结算 （<span>0</span>）</a>
                   </div>
                   
                </div>
                <div class="geren_box">
                        <a href="#"> 我的优惠 </a><br><br>
                        <a href="#"> 我的喜欢</a><br><br>
                        <a href="#"> 我的足迹</a><br><br>
                        <a href="#"> 我的喜欢</a><br><br>
                        <a href="#"> 我的评价</a><br><br>
                        <a href="#">  账户安全</a><br><br>
                        <a href="#"> 我的足迹</a><br><br>
                        <a href="#"> 售后管理</a>
                </div>             
            </div>
           
        </div>
        <div id="headers_buttom">
            <div id="header_input">
                <div>
                    <a href="">
                        <img src="https://static.xidibuy.com/static/global/images/1.0.0/logo-tp.png?t=20171103" alt="">
                    </a>
                </div>
                <div>
                    <form action="">
                        <div id="input_box">
                            <input class="search_text" type="text" placeholder="更多2万个世界产品" @click="myFocus">
                            <input class="search_button" type="button">
                      </div>                        
                    </form>
                 
                </div>
                <div class="drop_inputbox">
                    <div>
                        <div class="drop_inputbox_left" style="width:230px; height:100%; padding: 5px 10px;box-sizing: border-box;border-right:1px solid #c4c4c4">
                                <li style="color:#c3c3c3; font-size: 12px">最近搜索 <span class="del"></span></li>
            
                        </div>
                        <div class="drop_inputbox_right" style=" padding: 5px 10px;box-sizing: border-box; width: 200px;">             
                            <li style="color:#c3c3c3; font-size: 12px">热门搜索</li>
                            <li><a href="" style="color:#222; font-size: 12px">清洁用品</a></li>
                            <li><a href="" style="color:#222; font-size: 12px"> 家居装饰</a></li>
                            <li><a href="" style="color:#222; font-size: 12px"> Mathos Loreley</a></li>
                            <li><a href="" style="color:#222; font-size: 12px">雪平锅</a></li>
                            <li><a href="" style="color:#222; font-size: 12px">nepia妮飘</a></li>
                            <li><a href="" style="color:#222; font-size: 12px"> cocolico</a></li>                           
                            <li><a href="" style="color:#222; font-size: 12px"> 滤水壶</a></li>
                            <li><a href="" style="color:#222; font-size: 12px"> el-cemed</a></li>
                            <li><a href="" style="color:#222; font-size: 12px">  保鲜盒</a></li>             
                        </div>
                    </div>                 
                </div>
            </div>
            <div id="Classify">
               <a href="/shouye" style="color: #00bebf; border-bottom: 2px solid #6cd8db;">16国特品首页 </a>
               <a href="/Chufang" > 特色厨房用品</a>
               <a href="/Xiebao"> 特色鞋包配饰</a>
               <a href=""> 特色儿童用品</a>
               <a href="">  特色个护家纺</a>
               <a href="">  特色个护家纺</a>
               <a href="">  特色摆件</a>
               <a href="">  北欧设计</a>
                
            </div>
            <div id="clear"></div>
        </div>

    </header>
</template>

<script>
    
    export default {
        name: 'Headers',
        path_data:[],
        data() {
            return {
                counties_msg: [
                    '16国特品', '德国', '日本', '韩国', '英国', '意大利', '法国', '西班牙', '希腊', '澳大利亚', '新西兰', '瑞典', '丹麦', '芬兰', '比利时', '美国', '奥地利', '巴西',]
            }

        },
       mounted(){

            $('.search_text').blur(function(){
                // alert('失去焦点')
                $('.drop_inputbox').css('display','none')
            })
        },
        methods:{

            chufang(){
                this.$router.push({
                    path:"/shouye"
                })
            },
                // 点击十六国货品 
            shiliguo(){
                alert('sss')
                this.$router.push({
                    path:"/Shiliuguo"
                })
            },
     

            // 失去焦点
            myBlur(){
                alert('sss')
            },
            // input聚焦
            myFocus(){
                // alert('input')
                $('.drop_inputbox').css('display','block')
            },
            // 登录
            myRegister(){
                // alert('xxx')
             this.$router.push({ path: '/register', query: {  id: "a" } });
                // console.log(routeData);
            //  const href = this.$router.resolve({
            //         name:"Register"

            //     })
                // console.log(href);
                // window.open('href.href','_blank')
               
            },
    // 注册
    myLogin(){
        this.$router.push({path:'/login'})
    },
    // 鼠标进入手机洗地

    ShoujiXidi(){
        // alert('手机洗地')
        $('.shouji_box').fadeIn(800)
        $('.shouji_box').css({"top":'41px',"z-index":"100"})
    },
    // 鼠标离开手机喜地
    likaishoujixidi(){
        $('.shouji_box').fadeOut(500)
        $('.shouji_box').css("top",'61px')
    },
    // 鼠标进入关注
    guanzhu(){
        $('.guanzhu_box').fadeIn(800)
        $('.guanzhu_box').css({"top":'41px',"z-index":"100"})
    },
     // 鼠标离开关注
    likaiguanzhu(){
         $('.guanzhu_box').fadeOut(500)
        $('.guanzhu_box').css("top",'61px')
    },
    // 鼠标进入客户服务
    kufu(){
       
        $('.kefu_box').fadeIn(800)
        $('.kefu_box').css({"top":'41px',"z-index":"100"})
    },
    // 鼠标离开客户服务
    likaikufu(){
        $('.kefu_box').fadeOut(800)
        $('.kefu_box').css("top",'41px')
    },
    // 鼠标进入个人中心
    geren(){
       
       $('.geren_box').fadeIn(800)
       $('.geren_box').css({"top":'41px',"z-index":"100"})
   },
   // 鼠标离开个人中心
   likaigeren(){
       $('.geren_box').fadeOut(800)
       $('.geren_box').css("top",'61px')
   },
//    鼠标进入购物车
   gouwuche(){
    $('.gouwuche_box').fadeIn(800)
       $('.gouwuche_box').css({"top":'41px',"z-index":"100"})
   },
//    鼠标离开购物车
likaigouwuche(){
    $('.gouwuche_box').fadeOut(800)
       $('.gouwuche_box').css("top",'61px')
},
    // 点击手机洗地
    shoujixidi(){
  
    this.$router.push({
    path:"/ShoujiXidi"
})
    }
        }


    }
</script>

<style scoped>
    #clear{
      
        clear: both;
       
    }
    .search_button{
        border: none;
        background-color: transparent;
        border-left: 2px solid #4ed6d1;
        text-align: center;
        background-color: #4ed6d1;
        color: white;
        width: 38px;
        /* height: 38px; */
        cursor: pointer;
        background: #4ed6d1 url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png') no-repeat -276px 10px;
    }

    /* input */
    .del{
        width: 11px;
        height: 14px;
        display: inline-block;
        vertical-align: middle;
        background-image: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png');
        background-repeat: no-repeat;
        background-position: -480px -50px;
        margin-left: 130px;
        color:#c3c3c3 
    }
    .drop_inputbox_left>li{
        list-style: none;
       
    }
    .drop_inputbox_right>li{
        list-style: none;
        margin-bottom: 8px;
       
    }
  
    .drop_inputbox{
        width: 433px;
        height: 300px;
        /* background-color: rgb(224, 35, 35); */
        position: absolute;
        top: 91px;
        left: 254px;
        z-index: 100;  
        border: 1px solid #c4c4c4;
        display: none;
         
       
    }
    .drop_inputbox>div{
        width: 433px;
        height: 300px;
        background-color:white;
        display: flex;
    }
    .kefu_box{
        width: 95px;
        height: 152px;
        border: 1px solid #ddd;
        background-color: white;
        text-align: center;
        position: absolute;
        top: 61px;
        left: 200px;
        padding-top: 10px;
        box-sizing: border-box;
        display: none;
        transition: top 0.8s;

    }
    .gouwuche_box{
        padding: 12px 10px;
        box-sizing: border-box;
        display: flex;
        /* justify-content: space-around; */
        width: 300px;
        height: 100px;
        border: 1px solid #ddd;
        background-color: white;     
        position: absolute;
        top: 61px;
        right: 340px;
        padding-top: 10px;
        box-sizing: border-box;
        display: none;
        transition: top 0.8s;
    }
    .geren_box{
        width: 95px;
        height:270px;
        border: 1px solid #ddd;
        background-color: white;
        text-align: center;
        position: absolute;
        top: 61px;
        right: 430px;
        padding-top: 10px;
        box-sizing: border-box;
        display: none;
        transition: top 0.8s;   
        z-index: 100;
    }
    .kefu_box>a,.geren_box>a{
        color: #777;
    }
    .shouji_box{
        width: 152px;
        height: 152px;
        border: 1px solid #ddd;
        background-color: white;
        text-align: center;
        position: absolute;
        top: 61px;
        left: 0;
        padding-top: 10px;
        box-sizing: border-box;
        display: none;
        transition: top 0.8s;      
    }
    .guanzhu_box{
         width: 152px;
        height: 152px;
        border: 1px solid #ddd;
        background-color: white;
        text-align: center;
        position: absolute;
        top: 61px;
        left: 100px;
        padding-top: 10px;
        box-sizing: border-box;
        display: none;
        transition: top 0.8s;      
    }
    .jishu{
        width: 30px;
        height: 20px;
        font-size: 15px;
        text-align: center;
        color: white;
        background-color: #4ed6d1;
        display: inline-block;
        border-radius: 15px;
    }
    .gouwuche{
        width: 22px;
        height: 24px;
        margin-left: 5px;
        margin-right: 5px;
        background-position: -174px 0;
        text-indent: -9999px;
        background-position: -137px 0;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        background-image: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png');
        background-repeat: no-repeat;
    }
    .gaozhishu{
        margin-right: 5px;
        width: 11px;
        height: 15px;
        background-position: -768px 0;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        background-image: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png');
        background-repeat: no-repeat;
    }
    .kuhufuwu{
        margin-right: 5px;
        width: 13px;
        height: 16px;
        background-position: -35px 0;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        background-image: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png');
        background-repeat: no-repeat;
    }
    .guanzhuxidi{
        position: relative;
        display: inline-block;
        vertical-align: middle;
        background-image: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png');
        background-repeat: no-repeat;
        margin-right: 5px;
        width: 16px;
        height: 16px;
        background-position: -66px 0;
}
    .jiantou::after{
        content: "";
        position: relative;
        right: -4px;
        top: -1px;
        width: 9px;
        height: 6px;
        background-position: -72px -50px;
        display: inline-block;
        vertical-align: middle;
        background-image: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png');
        background-repeat: no-repeat;
    }
    .jiantou:hover::after{
        content: "";
        position: relative;
        right: -4px;
        top: -1px;
        width: 9px;
        height: 6px;
        background-position: -107px -50px;
        display: inline-block;
        vertical-align: middle;
        background-image: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png');
        background-repeat: no-repeat;
        /* background-color: red */
    }
    #tel{
       
        width: 9px;
        height: 15px;
        background-position: 0 -250px;
        position: relative;
        display: inline-block;
        vertical-align: middle;
       
        width: 9px;
        height: 15px;
        background-image: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png');
        background-repeat: no-repeat;
    }
    a {
        text-decoration: none;
    }

    





    #headers {
        width: 100%;
        height: 40px;
        background-color: #505050;
        border-bottom: 4px solid #4ed6d1;
    }

    #headers_box {
        width: 1210px;
        height: 100%;
        /* background-color: orchid; */
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: rgb(197, 197, 197);
    }

    #header_left {
        width: 600px;
        height: 40px;
        /* background-color: #4ed6d1; */
        display: flex;
        align-items: center;
        position: relative;

    }

    #header_left span {
        color: rgb(197, 197, 197);
    }

    #header_right {
        width: 350px;
        height: 40px;
        /* background-color: aqua; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

    }

    #header_right a {
        color: rgb(197, 197, 197);
    }

    .header_drop {
        margin-right: 20px;
    }

    /* 喜地的样式 */
    #header_input {
        width: 1210px;
        height: 109px;
        padding-top: 35px;
        box-sizing: border-box;
        /* background-color: #679179; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }

    #headers_buttom {
        width: 1210px;
        /* background-color: aquamarine; */
        height: 100%;
        margin: 0 auto;
    }

    #input_box {
        width: 431px;
        height: 34px;
        border: 2px solid #4ed6d1;
        display: flex;
        justify-content: space-between;


    }

    .search_text {
        border: none;
        width: 376px;
        padding-left: 10px;

    }

    

    #header_input_right {
        width: 465px;
        height: 30px;
        display: flex;
        justify-content: space-between;


    }

    #header_input_right a {
        color: #777;
        font-size: 14px;

    }

   
   
    #Classify{
        width: 757px;
        height: 35px;
       
        /* background-color: orchid; */
        float: right;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      
        
}

   #Classify>a{
       font-size: 13px;
       color: rgb(34, 34, 34);
       display: inline-block;
        min-width: 52px;
       height: 35px;
       /* background-color: rebeccapurple; */
       text-align: center;
        line-height: 35px;
      
       
   }
   #Classify>a:hover{
       transition: color 0.4s;
       color: #4ed6d1;
       border-bottom: 2px solid #4ed6d1;
       /* transition: border-bottom 2px solid #4ed6d1 0.4s; */
   }

   

   


</style>