<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <div id="fix">
      <div class="fix_conent">
        <div class="left">
          <div class="classify">商品分类 &#x3000;<span></span></div>
          <div class="new_input">
             
                  <form action="">
                      <div id="input_box">
                          <input class="search_text" type="text" placeholder="更多2万个世界产品" @click="myFocus1">
                          <input class="search_button" type="button">
                    </div>                        
                  </form>
               
             
          </div>
          <div class="drop_inputbox1">
              <div>
                    <div class="drop_inputbox_left" style="width:230px; height:100%; padding: 5px 10px;box-sizing: border-box;border-right:1px solid #c4c4c4">
                            <li style="color:#c3c3c3; font-size: 12px">最近搜索 <span class="del"></span></li>
        
                            </div>
                        <div class="drop_inputbox_right" style=" padding: 5px 10px;box-sizing: border-box; width: 200px;">             
                                    <li style="color:#c3c3c3; font-size: 12px">热门搜索</li>
                                    <li><a href="" style="color:#222; font-size: 12px;" >清洁用品</a></li>
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
        <div class="right">
            <a href="" @mouseenter="gouwuche1"  >
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
      </div>
    </div>

  
    <Headers></Headers>
    <aside id="celan">
      <div class="kuang">
        <img src="http://static.xidibuy.com/static/global/images/1.0.0/ewm-mobile.png" alt="">
        <div>手机喜地</div>
        
      </div>
      <div class="celan_top">
         <a href="" class="font" @mouseenter="myMouseenter($event,1)" @mouseleave="myMouseleave($event)" >
           <div class="app_logo cut">              
           </div>
           <div class="desc">下载app</div>
         </a>
         <a href="" class="font" @mouseenter="myMouseenter($event)" @mouseleave="myMouseleave($event)">
            <div class="kefu_logo cut"></div>
            <div class="desc">喜地客服</div>
          </a>
      </div>
      
      <div class="yincang"  @click="huiding">
          <a href="javascript:;" class="font" @mouseenter="myMouseenter($event)" @mouseleave="myMouseleave($event)">
              <div class="huiding_logo cut" ></div>
              <div class="desc">回到顶部</div>
          </a>
      </div>
    </aside>
    <Home></Home>
    
    <sixteen></sixteen>
    <br><br>
    <kitchen></kitchen>
    <br><br>
    <personalcare></personalcare>
    <br><br>
    <mom></mom>
    <br><br>
    <family></family>
    <br><br>
    <acc></acc>
    <br><br>
    <work></work>
    <br><br>
    <speak></speak>
    <br>
    <shop></shop>
    <footers></footers>
  </div>
</template>

<script>

import Headers from '@/components/common/Headers'//头部导航
import footers from '@/components/common/Footer'//底部国家
import Home from '@/components/home/Home'
import sixteen from '@/components/home/classify/Sixteen'//16国特品
import kitchen from '@/components/home/classify/Kitchen'//餐厨
import personalcare from '@/components/home/classify/Personalcare'//洗护
import mom from '@/components/home/classify/Mom'//母婴
import family from '@/components/home/classify/Family'//居家
import acc from '@/components/home/classify/Acc'//配饰
import work from '@/components/home/classify/Work'//工作
import speak from '@/components/home/classify/Speak'//大家都在说
import shop from '@/components/home/classify/Shop'//热门门店

export default {
  name: 'App',
  components:{
    Headers,
    Home,
    sixteen,
    kitchen,
    personalcare,
    mom,
    family,
    acc,
    work,
    shop,
    speak,
    footers
   
    
  },
  
  mounted(){

$('.search_text').blur(function(){
    // alert('失去焦点')
    $('.drop_inputbox1').css('display','none')
}),
//监听滚轮事件
window.addEventListener('scroll',this.handleScroll)

//  $('.font').hover(function(e){
//    e.target.style.color="#222"
//  },function(e){
//   e.target.style.color="#777"
//  })

},
methods:{
    // input聚焦
    myFocus1(){
                // alert('input')
                $('.drop_inputbox1').css('display','block')
            },
            //    鼠标进入购物车
   gouwuche1(){
    $('.gouwuche_box').fadeIn(800)
       $('.gouwuche_box').css({"top":'41px',"z-index":"100"})
   },
//    鼠标离开购物车
likaigouwuche(){
    $('.gouwuche_box').fadeOut(800)
       $('.gouwuche_box').css("top",'61px')
},
handleScroll(){
        // alert('-----')
        var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // console.log(scroll);
        
          if (scroll>1000){

              $("#fix").css({'position':'fixed',"top":"0","height":"50px","display":"block"})
              $('.yincang').fadeIn()
              $('#celan').css({"top":"680px"})
             
          }
          else
          {
              $("#fix").hide()
              $('.yincang').show()
              $('#celan').css({"top":"780px"})
          }
       
      },

      myMouseenter(e,index){
        console.log(e);
        e.target.children[1].style.color="#222"
       
        if(index==1){
          $('.kuang').fadeIn().css({"top":"-20px"})
        }
       
        
       
       

      },
      myMouseleave(e){
        e.target.children[1].style.color="#777"
        $('.kuang').fadeOut().css({"top":"0px"})
      },
     
      huiding(){
        alert('huiding')
        // toTop.onclick = function(){ //点击图片时触发的点击事件
        // document.documentElement.scrollTop = document.body.scrollTop = 0; //页面移动到顶部
        $('body,html').animate({scrollTop:0},1000)
  // }
      }
}

  
}
</script>

<style scoped>
 .kuang{
   width: 140px;
   height: 170px;
   border:  1px solid #ddd;
   position: absolute;
  padding-top: 20px;
  box-sizing: border-box;
  text-align: center;
   left: -150px;
   background-color: white;
   top:-20px;
   display: none;
   z-index: 9999;
   transition:all 0.5s;
   font-size: 13px;
   color: #222
   
 }
 .kuang>div{
   padding-top: 5px;
 }
  .app_logo:hover{
    background-position: -60px -180px;
  }
  .kefu_logo:hover{
    background-position: -60px -60px;
  }
  .huiding_logo:hover{
    background-position: -60px 0px;
  }
  .celan_top>a{
    width: 60px;
    height: 78px;
    /* background-color: orange; */
    display:inline-block；
  }
  
  
  .celan_top{
    width: 60px;
    height: 156px;
    /* background-color: red; */
  }
  
  .yincang{
    display: none
  }
  #celan{
    width: 60px;
    height: 234px;
   /* background-color: orchid;  */
   position:absolute;
   right:270px;
   top: 770px;
   /* top: 680px; */
   position: fixed;
   
  
   
  }
.app_logo{
    width: 60px;
    height: 60px;
    background: url('https://static.xidibuy.com/static/global/images/1.0.0/sidebar.png?v=0001') no-repeat;
    background-position: 0 -180px;

   
}
.kefu_logo{
   width: 60px;
    height: 60px;
    background: url('https://static.xidibuy.com/static/global/images/1.0.0/sidebar.png?v=0001') no-repeat;
    background-position: 0 -60px;
}
.huiding_logo{
    background-position: 0 0;
    width: 60px;
    height: 60px;
    background: url('https://static.xidibuy.com/static/global/images/1.0.0/sidebar.png?v=0001') no-repeat;
}
.desc{
  font-size: 13px;
  color: rgb(153, 153, 153);
  text-align: center;
}
  #app{
    position: relative;
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
        transition: top 1s;
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
.search_text {
        border: none;
        width: 376px;
        padding-left: 10px;

    }
.new_input{
  padding-top: 5px;
  box-sizing: border-box;
}
   #input_box {
        width: 431px;
        height: 34px;
        border: 2px solid #4ed6d1;
        display: flex;
        justify-content: space-between;


    }
    .drop_inputbox_left>li{
        list-style: none;
       
    }
    .drop_inputbox_right>li{
        list-style: none;

        margin-bottom: 8px;
       
    }
  
    .drop_inputbox1{
        width: 433px;
        height: 300px;
        /* background-color: rgb(224, 35, 35); */
        position: absolute;
        top: 43px;
        left: 577px;
        z-index: 100;  
        border: 1px solid #c4c4c4;
        display: none;
       
         
       
    }
    .drop_inputbox1>div{
        width: 433px;
        height: 300px;
        background-color:white;
        display: flex;
       
    }
  .classify{
    width: 168px;
    height: 50px;
    background-color: #92a9b9;
    font-size: 16px;
    color: white;
    padding-left: 30px;
    box-sizing: border-box;
    line-height: 50px;
   
  }
 
  .classify>span{
    display: inline-block;
    /* position: absolute;
    right: 33px;
    top: 24px; */
    width: 14px;
    height: 11px;
    background: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png') no-repeat -74px -300px;
  }
#fix{
  width: 1903px;
  /* height: 50px; */
  background-color: white;
  box-shadow: 2px 4px 6px lavender;
  position: absolute;
  /* top: 800px; */
  z-index: 101;
  display: none;
  transition: all 0.9s;
 
  
}
.fix_conent{
  width: 1210px;
  height: 50px;
  margin: 0 auto;
  /* background-color: palegoldenrod; */
  display: flex;
  justify-content: space-between; 
}
.left{
  width: 55%;
  /* background-color: yellow; */
 height: 50px;
  display: flex;
  justify-content: space-between;
  
}
.right{
  width: 74px;
  /* background-color: rgb(255, 0, 179); */
  padding-top: 15px;
  box-sizing: border-box;
}
</style>
