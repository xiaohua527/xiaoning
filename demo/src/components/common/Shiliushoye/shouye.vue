<template>
    <div id="shouye">
     
        <div id="shouye_box">       
           <div id="shouye_content">
                <div id="bg">
                        <img src="https://image.xidibuy.com/tepin/tepin.e29e81bff967004af257d04044d040274ab87e50b74694c6bf5aa4c4361a27fb.png" alt="">
                       
                </div>
                <div id="content">
                    <div id="cousel">
                        
                            <div id="cousel_left">
                                    <a href=""></a>
                                    </div>
                            <div id="cousel_right"><a href="">
                                <img src="https://image.xidibuy.com/tepin/tepin.e29e81bff967004aa21bec8ac294ff549099f3e3462a7d4bbf5aa4c4361a27fb.jpeg" alt="">
                                <div class="japan">日本百年京烧·清水烧瓷器
                                </div>
                            </a>
                        </div>
                    </div>
                    <div id="one">
                        <a href="" class="one_item"  v-for="(item,index) in one_data" :key="index" v-Myhover='index'>
                            <div class="top">
                                <!-- v-lazy="item.pic" -->
                                <img  v-lazy="item.pic" alt="">
                                <div class="mask">
                                    <div class="mask_desc">进入</div>
                                </div>   
                            </div>  
                                                 
                            <div class="btm">{{item.desc}}</div>
                        </a>
                       
                    </div>
                    <div>
                        <img src="https://image.xidibuy.com/tepin/tepin.8e383668cc0d04cfe24d69163dbd6be76825a017a33dcae1bf5aa4c4361a27fb.jpeg" alt="">
                    </div>
                     
                    <Yingguo></Yingguo>
                </div>
               
           </div>
           
        </div>
       
    </div>
</template>

<script>
import Yingguo from './Yingguo'//
export default {
name:"shouye",
data(){
    return{
        one_data:[{
            pic:"https://image.xidibuy.com/tepin/tepin.8e383668cc0d04cf8ef0be7b4dad8982fc1753c95fbbbee7bf5aa4c4361a27fb.jpeg/396x180",
            desc:"特色厨房用品推荐",
        },{
            pic:"https://image.xidibuy.com/tepin/tepin.8e383668cc0d04cfc5c1407d56e2c9c25bd4613652a8279b0908ef4c15fe7ce1.jpeg",
            desc:"特色厨房用品推荐",
            
        },{
            pic:"https://image.xidibuy.com/tepin/tepin.8e383668cc0d04cf2ad9ed80c78ad5adfa08f6bea1d9a6eabf5aa4c4361a27fb.jpeg/396x180",
            desc:"特色厨房用品推荐",
        },{
            pic:"https://image.xidibuy.com/tepin/tepin.8e383668cc0d04cf02a6ff83d21deb2f0f572f99e47e9c13bf5aa4c4361a27fb.jpeg/396x180",
            desc:"特色厨房用品推荐",
        },{
            pic:"https://image.xidibuy.com/tepin/tepin.8e383668cc0d04cf7ba60c1d02d194cc54d2ade2935d1145bf5aa4c4361a27fb.jpeg/396x180",
            desc:"特色厨房用品推荐",
        },{
            pic:"https://image.xidibuy.com/tepin/tepin.8e383668cc0d04cf72b95bf3721cdf6101426733c284e5adbf5aa4c4361a27fb.jpeg/396x180",
            desc:"特色厨房用品推荐",
        }]
    }
},
components:{
Yingguo
},
directives:{
    'Myhover':{
        inserted:function(el,bindvalue){
           console.log('>>>',bindvalue);
          el.onmouseenter=function(){
            el.children[0].children[1].style.display="block"
           }
           el.onmouseleave=function(){
            el.children[0].children[1].style.display=""
           }
            

        }
    }
},
methods:{
    myMouseenter(e){
    //   e.target.children[]
    }
}
}
</script>

<style scoped>
    .fix{
        height: 50px;
        background-color: white;
    }

    #one{
        width: 1210px;
        height: 492px;
        background-color: orangered;
        margin-top: 14px;
        display: flex;
        justify-content:space-between;
        flex-wrap: wrap; 
    }
    .one_item{
        width: 396px;
        height: 230px;
        background-color: white;
        margin-bottom: 14px;
       position: relative;
       
        
       
    }
    .mask{
        width: 396px;
        height: 180px;
        background-color: rgba(34, 34, 34,0.5);
        position:absolute;
        top: 0;
        display: none;
    }
    .mask_desc{
        width: 80px;
        height: 40px;
        border: 1px solid #fff;
        border-radius: 3px;
        text-align: center;
        line-height: 40px;
        color: white;
        font-style: 12px;
       margin: 70px auto;
    }
    .top{
        width: 396px;
        height: 180px;
        /* background-color: salmon;    */
    }
    .btm{
        width: 396px;
        height: 50px;
        /* background-color: red; */
        line-height: 50px;
        text-align: center;
    }
    #shouye{
        width: 100%;
        background: #f3f3f3;
    }
    .japan{
        width: 290px;
        height: 40px;
        background-color: rgba(34, 34, 34,0.5);
        position: absolute;
        top: 275px;
        line-height: 40px;
        text-align: center;
        font-size: 13px;
        color: white;
    }
    .japan:hover{
        background-color: rgba(34, 34, 34,0.8)
       
    }
   #bg{
       text-align: center;
       width: 1440px;
        height: 334px;
       background-image: url('https://image.xidibuy.com/specialty/specialty.e29e81bff967004a8e73af55fb42556a9abae04e4af5e2e6bf5aa4c4361a27fb.jpeg');
       padding-top: 50px;
       box-sizing: border-box;
       margin: 0 auto;
   }
    
    #shouye_box{
        width: 100%;
        height: 100%;
        background: #f3f3f3;
    }
    #content{
        padding-top: 108px;
        width: 1210px;
        height: 10000px;
        background-color: white;
        margin: 0 auto;
        
        
    }
    #cousel{
        width: 1210px;
        height: 315px;
        display: flex;
        justify-content: space-between;
        background-color: yellow;

    }
    #cousel_left{
        width: 910px;
        height: 315px;
        background-color: olivedrab;
    }
    #cousel_right{
        width: 290px;
        height: 315px;
        background-color: rebeccapurple;
        position: relative;
    }
</style>
