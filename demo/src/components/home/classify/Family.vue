<template>
        <div id="sixteen">
            <div class="sixteen_box">
                <header>
                    <div class="sixteen_box_left">
                        <span> 居家</span>
                        <span> &nbsp;|&nbsp; 小细节，让家更暖心</span>
                    </div>
                    <div class="sixteen_box_right">
                        <a href="">  家用电器&nbsp;/</a>
                        <a href="">装饰摆件&nbsp;/</a>
                        <a href="">  家用电器&nbsp;/</a>
                        <a href="">布艺家纺&nbsp;/</a>
                        <a href="">收纳整理&nbsp;&nbsp;</a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="">查看更多 ></a>
                    </div>
                </header>
                <div>
                    <a href="">
                        <img src="https://image.xidibuy.com/folder/folder.8e383668cc0d04cf9c5b75d543b475d83677f2bd62a72ab4bf5aa4c4361a27fb.jpeg/1210x280"
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
                    
    
       
        
       
        
        // 
        // 
        // 
        // 
        // 美浓和纸情侣摆件 ，精致可爱
        // 日本原产Ishikawa 美浓和纸纸质玩偶摆件球球...
        // ¥61.39
        // 日本
        // 黑森林布谷鸟钟，雕刻艺术的传承
        // 德国原产Engstler黑森林石英挂钟钟表海蒂的...
        // ¥209.54
        // 德国
        // 褶皱收纳艺术，荣获红点设计奖
        // 丹麦原产essey Wipy II创意褶皱纸巾盒抽纸盒 ...
        // ¥100.05
        // 丹麦
        // 《神探夏洛克》同款挂饰
        // 丹麦原产Flensted mobiles 手工房间装饰吊饰...
        // ¥214.61
        // 丹麦
        // 经典棱格包，搭配不用想
        // 意大利原产andrea cardone 真皮经典菱格挎包
        // ¥459.02
        // 意大利
        // 戴安娜王妃纪念款围巾
        // 英国原产LOCHCARRON of SCOTLAND戴安娜...
        // ¥158.77
        // 英国
    
    
                    newgoods:[{
                        title:" 日本指定传统工艺品",
                        desc:"日本原产kawai 传统漆器天然木漆筷 5双套装",
                        price:" ¥74.92",
                        logo:"https://static.xidibuy.com/images/flags/icon-jp.png",
                        country:"日本",
                        pic:"https://image.xidibuy.com/shop/shop.e4e2c96c12d45183215794fd71019a245caa6b41ad59c40c3500842dd515aa3d.jpeg/800x800/316",
                    },{
                        title:"拉丝热塑，手工吹塑",
                        desc:"意大利原产ZECCHIN穆拉诺马赛克彩色玻璃杯...",
                        price:"¥186.85",
                        logo:"https://static.xidibuy.com/images/flags/icon-it.png",
                        country:"意大利",
                        pic:"https://image.xidibuy.com/shop/shop.0a07510b8cf4a104a6edf417bcc13d9e057077bc25107be73500842dd515aa3d.jpeg/800x800/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.813998ebdd7aa3892adcb1a0a8483d864a52b46c218209ca358afc5948f29150.jpeg/800x800/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.813998ebdd7aa3891e65d4147975232099faac181e9853183500842dd515aa3d.jpeg/1500x1500/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.e7c5a4cb815e24aeb20815f3b2858be2e6b3b02c81c5daff3500842dd515aa3d.jpeg/800x800/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.efa1cb1635ccf6eaeaa8730f57cc91827d42bfd28e7f4bb53500842dd515aa3d.jpeg/800x800/316"
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.4f5802b265b9c04fa55d3ff7e524d3a3e57ed694553702a73500842dd515aa3d.jpeg/1500x1500/316",
                    },{
                        title:"家居小物，随心挂",
                        desc:"德国Koziol挂壁式收纳篮储物篮",
                        price:"¥87.00",
                        logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                        country:"德国",
                        pic:"https://image.xidibuy.com/shop/shop.4e4549b1b17e31034a4f0c70b1abd06f601324ee9d04f6953500842dd515aa3d.jpeg/800x800/316",
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