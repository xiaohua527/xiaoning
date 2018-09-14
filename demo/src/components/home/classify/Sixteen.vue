<template>
    <div id="sixteen">
        <div class="sixteen_box">
            <header>
                <div class="sixteen_box_left">
                    <span > 16国特品</span>
                    <span> &nbsp;|&nbsp;精选全球16国特色好物</span>
                </div>
                <div class="sixteen_box_right">
                    <a href=""> 英国骨瓷茶具&nbsp;/</a>
                    <a href="">意大利玻璃&nbsp;/</a>
                    <a href="">意大利皮具&nbsp;&nbsp;</a>
                    &nbsp;&nbsp;&nbsp;
                    <a href="">查看更多 ></a>
                </div>
            </header>
            <div>
                <a href="">
                    <img src="https://image.xidibuy.com/folder/folder.8e383668cc0d04cf6a5b176a1906bb7d77f9693695c7a623bf5aa4c4361a27fb.jpeg/1210x280"
                        alt="">
                </a>
            </div>
            <div class="sixteen_box_content">
                <div class="carousel_box_bar">
                    <a href="" class="carousel_box_item" v-for="(item,index) in newgoods" :key="index">
                        <div>
                                <!-- <a href="javascript:;"><img v-lazy="'/static/img/' + item.productImage"></a> -->
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
                    pic:"https://image.xidibuy.com/shop/shop.589b74716e6d259589ba613217fcbf43beb4bc25e9e808023500842dd515aa3d.jpeg/1080x1080/316",
                },{
                    title:"拉丝热塑，手工吹塑",
                    desc:"意大利原产ZECCHIN穆拉诺马赛克彩色玻璃杯...",
                    price:"¥186.85",
                    logo:"https://static.xidibuy.com/images/flags/icon-it.png",
                    country:"意大利",
                    pic:"https://image.xidibuy.com/shop/shop.f9fcdbfe855916b88dd79825485ad5c178aaa12bfe9a39823500842dd515aa3d.jpeg/1500x1500/316",
                },{
                    title:"家居小物，随心挂",
                    desc:"德国Koziol挂壁式收纳篮储物篮",
                    price:"¥87.00",
                    logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                    country:"德国",
                    pic:"https://image.xidibuy.com/shop/shop.813998ebdd7aa3894179c87d52b32541c85b6131a4e618173500842dd515aa3d.jpeg/895x895/316",
                },{
                    title:"家居小物，随心挂",
                    desc:"德国Koziol挂壁式收纳篮储物篮",
                    price:"¥87.00",
                    logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                    country:"德国",
                    pic:"https://image.xidibuy.com/shop/shop.4f5802b265b9c04f6e09e69d4dc80470861117cd4eae947b3500842dd515aa3d.jpeg/800x800/316",
                },{
                    title:"家居小物，随心挂",
                    desc:"德国Koziol挂壁式收纳篮储物篮",
                    price:"¥87.00",
                    logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                    country:"德国",
                    pic:"https://image.xidibuy.com/shop/shop.e72be242527be08fb20815f3b2858be26e81205c286ea8063500842dd515aa3d.jpeg/1500x1500/316",
                },{
                    title:"家居小物，随心挂",
                    desc:"德国Koziol挂壁式收纳篮储物篮",
                    price:"¥87.00",
                    logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                    country:"德国",
                    pic:"https://image.xidibuy.com/shop/shop.4e4549b1b17e310330c353f12c4c87029ac9e6409d30311f3500842dd515aa3d.jpeg/800x800/316"
                },{
                    title:"家居小物，随心挂",
                    desc:"德国Koziol挂壁式收纳篮储物篮",
                    price:"¥87.00",
                    logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                    country:"德国",
                    pic:"https://image.xidibuy.com/shop/shop.d2a2bc9d0bd39cc7735531202244f3135ff2343dafe1b9f03500842dd515aa3d.jpeg/1500x1500/316",
                },{
                    title:"家居小物，随心挂",
                    desc:"德国Koziol挂壁式收纳篮储物篮",
                    price:"¥87.00",
                    logo:"https://static.xidibuy.com/images/flags/icon-de.png",
                    country:"德国",
                    pic:"https://image.xidibuy.com/shop/shop.d2a2bc9d0bd39cc78dd79825485ad5c12b89e3d05eee21fc358afc5948f29150.jpeg/1500x1500/316",
                },]
            }
        },
       
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