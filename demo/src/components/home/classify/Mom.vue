<template>
        <div id="sixteen">
            <div class="sixteen_box">
                <header>
                    <div class="sixteen_box_left">
                        <span>母婴</span>
                        <span> &nbsp;|&nbsp;用心挑选世界好物</span>
                    </div>
                    <div class="sixteen_box_right">
                        <a href=""> 喂养用品&nbsp;/</a>
                        <a href="">宝宝寝居 &nbsp;/</a>
                        <a href="">服饰鞋帽 &nbsp;/</a>
                        <a href="">益智玩具 &nbsp;/</a>
                        <a href="">孕妈用品&nbsp;&nbsp;</a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="">查看更多 ></a>
                    </div>
                </header>
                <div>
                    <a href="">
                        <img src="https://image.xidibuy.com/folder/folder.8e383668cc0d04cf5490293a040b8091564d006b2ab8334bbf5aa4c4361a27fb.jpeg/1210x280"
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
                        pic:"https://image.xidibuy.com/shop/shop.61636a59fa313b05b20815f3b2858be2ca06ad41630cc5f63500842dd515aa3d.jpeg/1500x1500/316",
                    },{
                        title:"拉丝热塑，手工吹塑",
                        desc:"意大利原产ZECCHIN穆拉诺马赛克彩色玻璃杯...",
                        price:"¥186.85",
                        logo:"https://static.xidibuy.com/images/flags/icon-it.png",
                        country:"意大利",
                        pic:"https://image.xidibuy.com/shop/shop.424d7655052b840f20900820f225ce11baa10583bbe1b8c03500842dd515aa3d.jpeg/800x800/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.ee365721b214421e0702ebcdb5ddfe527945000157801ae63500842dd515aa3d.jpeg/1500x1500/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.e4e2c96c12d451830a01b56de13a514b139624d7affcbb233500842dd515aa3d.jpeg/1500x1500/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.2f9d67347b8e03b63ec7072d39ad5bb07dbe689990ba22803500842dd515aa3d.jpeg/800x800/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.b4659ef42dbb69b887c4db26ef88ef2f28e4fef1af431f533500842dd515aa3d.jpeg/1500x1500/316"
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.79bf97d9af0b8c117dde236ea77e6d26dc0aa017b6ae14c93500842dd515aa3d.jpeg/800x800/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.fea925ef35cb0855b3a8cd6fae951c0accf3d6ad91eda2373500842dd515aa3d.jpeg/1000x1000/316",
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