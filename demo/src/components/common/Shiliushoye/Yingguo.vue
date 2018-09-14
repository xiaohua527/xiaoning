<template>
    <div id="Yingguo">
        <div class="yingguo_box">
            <div class="yingguo_item" v-for="item in 8" :key="8">
                <div class="yingguo_pic">
                    <a href="">
                        <img src="https://image.xidibuy.com/shop/shop.6feaf1baf6e294573682b0df345a67225cbfd9fefc21ffac3500842dd515aa3d.jpeg/1500x1500/316"
                            alt="">
                    </a>
                </div>
                <div class="yingguo_title">
                    <a href="" class="yingguo_title">三位皇室成员认证骨瓷 纯手绘图案</a>
                    <a href="" class="yingguo_title_desc">英国原产HALCYON DAYS宫廷御用镀金骨瓷...</a>
                </div>
                <div class="yingguo_logo">
                    <span>
                        <img src="https://static.xidibuy.com/images/flags/icon-uk.png" alt="">
                    </span>
                    <span>英国</span>
                </div>
            </div>




        </div>
    </div>
</template>

<script>
    export default {
        name: "Yingguo",
        data(){
            return{
                yingguo_data:[{
                    pic:"https://image.xidibuy.com/shop/shop.6feaf1baf6e294573682b0df345a67225cbfd9fefc21ffac3500842dd515aa3d.jpeg/1500x1500/316"
                },{
                    pic:"https://image.xidibuy.com/shop/shop.6feaf1baf6e294573682b0df345a67225cbfd9fefc21ffac3500842dd515aa3d.jpeg/1500x1500/316"
                },{
                    pic:"https://image.xidibuy.com/shop/shop.6feaf1baf6e294573682b0df345a67225cbfd9fefc21ffac3500842dd515aa3d.jpeg/1500x1500/316"
                },{
                    pic:"https://image.xidibuy.com/shop/shop.6feaf1baf6e294573682b0df345a67225cbfd9fefc21ffac3500842dd515aa3d.jpeg/1500x1500/316"
                },{
                    pic:"https://image.xidibuy.com/shop/shop.6feaf1baf6e294573682b0df345a67225cbfd9fefc21ffac3500842dd515aa3d.jpeg/1500x1500/316"
                },{
                    pic:"https://image.xidibuy.com/shop/shop.6feaf1baf6e294573682b0df345a67225cbfd9fefc21ffac3500842dd515aa3d.jpeg/1500x1500/316"
                },{
                    pic:"https://image.xidibuy.com/shop/shop.6feaf1baf6e294573682b0df345a67225cbfd9fefc21ffac3500842dd515aa3d.jpeg/1500x1500/316"
                },{
                    pic:"https://image.xidibuy.com/shop/shop.6feaf1baf6e294573682b0df345a67225cbfd9fefc21ffac3500842dd515aa3d.jpeg/1500x1500/316"
                }]
            }
        }
    }
</script>

<style scoped>
    .yingguo_pic>a>img{
        width: 275px;
        height: 275px;

    }
    .yingguo_box {
        width: 1210px;
        height: 850px;
        background-color: aqua;

    }
    .yingguo_item{
        width: 275px;
        height: 395px;
        background-color: yellowgreen;
    }
    .yingguo_title1{
        font-style: 16px;
        color: #222
    }
    .yingguo_title_desc{
        font-size: 13px;
        color: #777;
    }
   .yingguo_title>a{
       display: inline-block;
   }
   .yingguo_logo>span{
    font-size: 13px;
        color: #777;
   }
</style>