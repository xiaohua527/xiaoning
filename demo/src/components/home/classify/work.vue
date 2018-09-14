<template>
        <div id="sixteen">
            <div class="sixteen_box">
                <header>
                    <div class="sixteen_box_left">
                        <span>办公</span>
                        <span> &nbsp;|&nbsp;好文具，工作更高效</span>
                    </div>
                    <div class="sixteen_box_right">
                        <a href=""> 文具&nbsp;/</a>
                        <a href="">办公收纳 &nbsp;/</a>                        
                        <a href="">数码配件&nbsp;&nbsp;</a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="">查看更多 ></a>
                    </div>
                </header>
                <div>
                    <a href="">
                        <img src="https://image.xidibuy.com/folder/folder.e29e81bff967004ae07537b9f953cfbeabc62828c204cc8abf5aa4c4361a27fb.jpeg"
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
                        pic:"https://image.xidibuy.com/shop/shop.f573dc4ed19a4a83215794fd71019a24e11e80428d982cb6358afc5948f29150.jpeg/1500x1500/316",
                    },{
                        title:"拉丝热塑，手工吹塑",
                        desc:"意大利原产ZECCHIN穆拉诺马赛克彩色玻璃杯...",
                        price:"¥186.85",
                        logo:"https://static.xidibuy.com/images/flags/icon-it.png",
                        country:"意大利",
                        pic:"https://image.xidibuy.com/shop/shop.e4e2c96c12d45183215794fd71019a24fe1e6febc32bfb3e3500842dd515aa3d.jpeg/1500x1500/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.40ba0e2ea59750dd02b787a84ce739dd3b02bd76c3a574343500842dd515aa3d.jpeg/1500x1500/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.7afca799c93e8376ee080faba538a622d1d8a4c19316877a3500842dd515aa3d.jpeg/1500x1500/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.7afca799c93e83761bece4ca61642a1d617362bba1f4bcc2358afc5948f29150.jpeg/1000x1000/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.5d97e73f144d250df6bfa6aa60950b662ad6ce69aa44f93f3500842dd515aa3d.jpeg/1500x1500/316"
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.4f5802b265b9c04f91c77622fc7ec3652ae1a82a4d6c79113500842dd515aa3d.jpeg/800x800/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.744c2955043c32f5b2956b0925671c94842fe309ca1b31e73500842dd515aa3d.jpeg/1500x1500/316",
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