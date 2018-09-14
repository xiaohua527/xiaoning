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
                        <a href="#"> 账户安全</a><br><br>
                        <a href="#"> 我的足迹</a><br><br>
                        <a href="#"> 售后管理</a>
                </div>             
            </div>
           
        </div>
        <div id="headers_buttom">
            <div id="header_input">
                <div>
                    <a href="">
                        <img src="http://static.xidibuy.com/static/global/images/1.0.0/logo-hd.png" alt="">
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
                <div id="header_input_right">
                    <a href="">
                        <span class="one"></span>
                        <span class="xian"> 海外进口</span>
                    </a>
                    <a href="">
                        <span class="two"></span>
                        <span class="xian"> 工厂直价</span>
                    </a>
                    <a href="">
                        <span class="three"></span>
                        <span class="xian"> 原产纯品</span>
                    </a>
                    <a href="">
                        <span class="four"></span>
                        <span class="xian">国内直邮</span>
                    </a>
                </div>
            </div>
            <div id="countries">
                <div class="countries_classify">
                    <span class="classify">商品分类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  
                </div>
                <div class="countries_country">
                    <div id="countries_box">
                        <a href="" v-for="(item,index) in counties_msg" :key="index" @click="shiliguo">{{item}}</a>
                    </div>
                </div>
                <div class="countries_side">
                    <div>
                        <a href="" class="article_box">
                            <span id="article"></span>
                            <span class="se">全部文章</span>
                        </a>
                    </div>
                    <div>
                        <a href="" class="article_box">
                            <span id="supermrket"></span>
                            <span  class="se">世界超市</span>
                        </a>
                    </div>
                </div>

            </div>
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
.xian:hover{
    display: inline-block;
    border-bottom: 1px solid #777;
}
.se:hover{
     color:rgb(78, 214, 209);
}
#countries_box>a:hover{
    color:rgb(78, 214, 209);
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
.two{
    height: 30px;
    margin-right: 10px;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    background-image: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png');
    background-repeat: no-repeat;
    width: 27px;
    top: 4px;
    width: 22px;
    background-position: -42px -100px;height: 30px;


}
.three{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    background-image: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png');
    background-repeat: no-repeat;
    top: 2px;
    margin-right: 10px;
    width: 25px;
    height: 30px;
    background-position: -81px -100px;
}
.four{
    height: 30px;
    margin-right: 10px;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    background-image: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png');
    background-repeat: no-repeat;
    top: 3px;
    width: 37px;
    background-position: -121px -100px;
}
    .one{
        margin-right: 10px;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        background-image: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png');
        width: 27px;
        height: 30px;
        background-position: 0 -100px;
        background-repeat: no-repeat;
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

    
@font-face {font-family: "iconfont";
  src:url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff')
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-gouwuchekong:before { content: "\f0179"; }

.icon-add_circle:before { content: "\e63c"; }

.icon-info:before { content: "\e67d"; }

.icon-changyonglogo28:before { content: "\e715"; }

.icon-shouji:before { content: "\e617"; }

.icon-xiajiantou:before { content: "\e731"; }

.icon-shangjiantou:before { content: "\e733"; }

.icon-shu:before { content: "\e632"; }





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

    /*constries分类 */
    #countries {
        width: 1210px;
        height: 60px;
        background-color: white;
        margin-top: 40px;
        display: flex;
        /* justify-content: space-between; */

    }

    .countries_classify {
        width: 168px;
        height: 60px;
        background-color: #92a9b9;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

    }

    .classify::after {
        display: block;
        position: absolute;
        right: 33px;
        top: 24px;
        content: '';
        width: 14px;
        height: 11px;
        background: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png')no-repeat -74px -300px;
        color: white;
    }

    .countries_country {
        width: 880px;
        height: 56px;
        background-color: white;
        margin-left: 20px;
    }

    .countries_side {
        width: 92px;
        /* background-color: orangered; */
        margin-left: 50px;
    }

    #countries_box {
        width: 880px;
        display: flex;
        flex-wrap: wrap;
    }

    #countries_box>a {
        color: #222;
        font-size: 14px;
        display: block;
        min-width: 48px;
        height: 22px;
        margin-right: 43px;
        margin-bottom: 6px;

    }

    #article {
        width: 26px;
        height: 24px;
        background-image: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png');
        background-position: -762px -250px;
        display: block;

    }

    #supermrket {
        width: 26px;
        height: 24px;
        background-image: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png');
        background-position: -761px -200px;
        display: block;
    }

    .article_box {
        display: flex;
        font-size: 14px;
        color: #222;
        margin-bottom: 6px;
        justify-content: space-between;


    }
</style>