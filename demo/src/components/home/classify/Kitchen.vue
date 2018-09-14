<template>
        <div id="sixteen">
            <div class="sixteen_box">
                <header>
                    <div class="sixteen_box_left">
                        <span> 餐厨</span>
                        <span> &nbsp;|&nbsp;一蔬一饭即生活</span>
                    </div>
                    <div class="sixteen_box_right">
                        <a href=""> 锅具     &nbsp;/</a>
                        <a href="">餐具 &nbsp;/</a>
                        <a href="">进口食品&nbsp;&nbsp;</a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="">查看更多 ></a>
                    </div>
                </header>
                <div>
                    <a href="">
                        <img src="https://image.xidibuy.com/folder/folder.8e383668cc0d04cf62a70f470c3baa7720363c2c323a4995bf5aa4c4361a27fb.jpeg/1210x280"
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
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.e4e2c96c12d451836c64135ce53a1c0a14e7525e403e063d3500842dd515aa3d.jpeg/800x800/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.4e4549b1b17e3103e5a567c466e8587573866634302cb332358afc5948f29150.jpeg/800x800/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.cd55055aa050f1c0b20815f3b2858be25623165aa4e093fa3500842dd515aa3d.jpeg/1500x1500/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.4e4549b1b17e3103a4b3f555cd3ce4bde70180b1585f40e93500842dd515aa3d.jpeg/1000x1000/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.ed2564cd841c8f89e0bab879c2e43764b75e1072c5323bfe3500842dd515aa3d.jpeg/1500x1500/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.f9fcdbfe855916b8ed0fd89801de71a5a2728ff815157ee43500842dd515aa3d.jpeg/800x800/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.9522656a0fbb51b0a9578a7f544a3d7185f17e39d280a8563500842dd515aa3d.jpeg/800x800/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.d2a2bc9d0bd39cc7c0ef575038d38a0c5c59571f94b1c1ea3500842dd515aa3d.jpeg/1200x1200/316",
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
            /* margin-bottom: 50px; */
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