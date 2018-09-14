<template>
        <div id="sixteen">
            <div class="sixteen_box">
                <header>
                    <div class="sixteen_box_left">
                        <span>配饰</span>
                        <span> &nbsp;|&nbsp;好的配件也会是大的焦点</span>
                    </div>
                    <div class="sixteen_box_right">
                        <a href=""> 海外箱包&nbsp;/</a>
                        <a href="">精致饰品 &nbsp;/</a>
                        <a href="">服饰鞋帽 &nbsp;/</a>
                        <a href="">服饰配件&nbsp;&nbsp;</a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="">查看更多 ></a>
                    </div>
                </header>
                <div>
                    <a href="">
                        <img src="https://image.xidibuy.com/folder/folder.8e383668cc0d04cf7bd23f022b9a1a493744cd38a0bba82bbf5aa4c4361a27fb.jpeg/1210x280"
                            alt="">
                    </a>
                </div>
                <div class="sixteen_box_content">
                    <div class="carousel_box_bar">
                        <a href="" class="carousel_box_item" v-for="(item,index) in newgoods" :key="index">
                            <div>
                                <img v-lazy="item.pic" alt="" class="germany_img">
                            </div>
                            <div class="carousel_box_content ">
                                <div class="carousel_box_title line">{{item.title}} </div>
                                <div class="line"><a href="" class="carousel_box_describe ">{{item.desc}}</a></div>
                                <div class="carousel_box_price line">
                                    {{item.price}}
                                </div>
                                <div class="line">
                                    <img v-lazy="item.logo" alt="" class="germany_logo">
                                    <span class="carousel_box_country">{{item.country}}</span>
                                </div>
                            </div>
                        </a>
    
                    </div>
                </div>
            </div>
    
        </div>
    </template>
    <script>
        export default {
            name: "Classify",
            data(){
                return{
                    newgoods:[{
                        title:" 日本指定传统工艺品",
                        desc:"日本原产kawai 传统漆器天然木漆筷 5双套装",
                        price:" ¥74.92",
                        logo:"https://static.xidibuy.com/images/flags/icon-jp.png",
                        country:"日本",
                        pic:"https://image.xidibuy.com/shop/shop.d2a2bc9d0bd39cc78dd79825485ad5c1988d5fbdd0378a0f3500842dd515aa3d.jpeg/1500x1500/316",
                    },{
                        title:"拉丝热塑，手工吹塑",
                        desc:"意大利原产ZECCHIN穆拉诺马赛克彩色玻璃杯...",
                        price:"¥186.85",
                        logo:"https://static.xidibuy.com/images/flags/icon-it.png",
                        country:"意大利",
                        pic:"https://image.xidibuy.com/shop/shop.cf71ab42821c59c37787f21e081c4023267c375a57fdd0503500842dd515aa3d.jpeg/800x800/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.d2a2bc9d0bd39cc7c2d142c7b2e318c4247bf3e9869cb3b3358afc5948f29150.jpeg/1000x1000/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.9c52be25d99425743dd1566ff8509b61e8d7d8c8c834d3023500842dd515aa3d.jpeg/2000x2000/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.de831d95139414ecb20815f3b2858be28fad9daba277574f3500842dd515aa3d.jpeg/1500x1500/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.a31ef370ce26e865a9803c64816976ad2460cd7b7872615b358afc5948f29150.jpeg/2000x2000/316"
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.d2a2bc9d0bd39cc73e1fc200d2c360e0484852b75851f2e5358afc5948f29150.jpeg/1500x1500/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.766b93c5e56bb459b20815f3b2858be26014b5936a346f78358afc5948f29150.jpeg/1000x1000/316",
                    },]
                }
            }
        }
    </script>
    <style scoped>
        #sixteen {
            width: 1210px;
            height: 1198px;
            /* background-color: orangered; */
            margin: 0 auto;
        }
    
        .sixteen_box>header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }
    
        .sixteen_box_left>span:nth-child(1) {
            font-size: 24px;
            line-height: 24px;
            letter-spacing: 1px;
            color: #222;
        }
    
        .sixteen_box_left>span:nth-child(2) {
            font-size: 13px;
            line-height: 13px;
            letter-spacing: 1px;
            color: #222;
        }
    
        .sixteen_box_right>a {
            font-size: 13px;
            line-height: 13px;
            letter-spacing: 1px;
            color: #222;
            text-decoration: none;
        }
    
        .sixteen_box_content {
            margin-top: 30px;
            width: 1210px;
            height: 834px;
            /* background-color: palegoldenrod; */
            margin-bottom: 20px;
        }
    
        /* 16国每一个小成员*/
        .carousel_box_item {
            text-decoration: none;
            margin-bottom: 30px;
        }
    
        .germany_img {
            width: 280px;
            height: 280px;
    
        }
    
        .germany_logo {
            width: 20px;
            height: 14px;
        }
    
        .carousel_box_title {
            font-size: 16px;
            line-height: 18px;
            color: #222;
        }
    
        .carousel_box_describe {
            font-size: 13px;
            line-height: 15px;
            color: #777;
            text-decoration: none;
        }
    
        .carousel_box_price {
            font-size: 18px;
            line-height: 18px;
            color: #00bebf;
        }
    
        .carousel_box_country {
            font-size: 13px;
            color: #777;
        }
    
        .carousel_box_bar {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .line{
            margin-top: 10px;
        }
    </style>