<template>
    <div id="speck">
        <div class="shop_box">
            <div class="shop_title">
                <div class="shop_title_left">大家都在说</div>
                <div class="shop_title_right">
                    <span class="shopleft_btn btn">
                     </span> &nbsp; <span class="shopright_btn btn">>
                    </span>
                </div>
            </div><br>
            <div class="shop_content">

                <div class="fix">
                    <div class="shop_item"  v-for="(item,index) in shop_data" :key="index">
                        <a href="">
                            <div class="shop_img"><img v-lazy="item.shop_src"
                                    alt=""></div>
                            <div class="shop_t">英国原产DUNOON丹侬骨瓷茶杯水杯</div>
                            <div class="shop_p">¥269.99</div>
                            <div class="shop_user">
                                <span class="shop_logo">
                                    <img src="https://static.xidibuy.com/static/global/images/1.0.0/avator_01.jpg" alt="">
                                    <span class="shop_date">x***0</span>
                                </span>
                                <span class="shop_date">2018-06-19 07:45</span>
                            </div>
                            <div class="shop_desc"> 
                                英国产品不同于中国的青花瓷，凸显了瓷器表面图案的色彩，这一款比较炫目，不喜欢...
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "speck",
        data(){
            return{
                shop_data:[{
                    msg:"英国原产DUNOON丹侬骨瓷茶杯水杯茶具黄金饰面",
                    price:"¥269.99",
                    shop_src:'https://image.xidibuy.com/shop/shop.e42fe8a6caa54b21b9da71c61ee189b49fc0f69eb823ee123500842dd515aa3d.jpeg/1500x1500/316',
                    desc:"英国产品不同于中国的青花瓷，凸显了瓷器表面图案的色彩，这一款比较炫目，不喜欢...",
                    shop_user:"https://static.xidibuy.com/static/global/images/1.0.0/avator_01.jpg",


                },{
                    msg:"英国原产DUNOON丹侬骨瓷茶杯水杯茶具黄金饰面",
                    price:"¥269.99",
                    shop_src:'https://image.xidibuy.com/shop/shop.53a7cbfbf394f430b8cd5f5f41f197e947dce5e2df6a6bff3500842dd515aa3d.jpeg/1500x1500/316',
                    desc:"英国产品不同于中国的青花瓷，凸显了瓷器表面图案的色彩，这一款比较炫目，不喜欢...",
                    shop_user:"https://static.xidibuy.com/static/global/images/1.0.0/avator_12.jpg",

                },{
                    msg:"英国原产DUNOON丹侬骨瓷茶杯水杯茶具黄金饰面",
                    price:"¥269.99",
                    shop_src:'https://image.xidibuy.com/shop/shop.e72be242527be08f8dd79825485ad5c1aa441834f4058cfe358afc5948f29150.jpeg/1500x1500/316',
                    desc:"英国产品不同于中国的青花瓷，凸显了瓷器表面图案的色彩，这一款比较炫目，不喜欢...",
                    shop_user:"https://static.xidibuy.com/static/global/images/1.0.0/avator_09.jpg",

                },{
                    msg:"英国原产DUNOON丹侬骨瓷茶杯水杯茶具黄金饰面",
                    price:"¥269.99",
                    shop_src:'https://image.xidibuy.com/shop/shop.b898da88e7cd463fb20815f3b2858be2b2be3f1ba1a098213500842dd515aa3d.jpeg/803x803/316',
                    desc:"英国产品不同于中国的青花瓷，凸显了瓷器表面图案的色彩，这一款比较炫目，不喜欢...",
                    shop_user:"https://static.xidibuy.com/static/global/images/1.0.0/avator_01.jpg",

                }]
            }
        }
    }
</script>
<style scoped>
    .shop_title {
        display: flex;
        justify-content: space-between;
    }

    #speck {
        width: 100%;
        height: 587px;
        padding: 50px 0;
        background-color: #f3f3f3;

    }

    .shop_box {
        width: 1210px;
        height: 567px;
        /* background-color: orangered; */
        margin: 0 auto;
    }

    .shop_title_left {
        font-size: 24px;
        line-height: 24px;
        letter-spacing: 1px;
    }

    .shop_title_right {
        display: flex;
    }

    .btn {
        display: block;
        width: 30px;
        height: 30px;
        border: 1px solid #dbdbdb;
        font-size: 12px;
        line-height: 30px;
        text-align: center;
        color: #777;
        background: #fff;
        font-family: "Simsun";
    }

    .shop_content {
        width: 1210px;
        height: 513px;
        /* background-color: yellow; */
        padding-bottom: 24px;
        /* overflow: hidden; */

    }

    .fix {
        width: 1210px;
        height: 513px;
       display: flex;
       justify-content: space-between;
        /* background-color: rgb(255, 0, 170); */

    }

    .shop_item {
        width: 290px;
        height: 513px;
        background-color: white;
        
         
       
    }
    .shop_item>a{
        text-decoration: none;
        height: 15px;
        display: block;
    }
    .shop_t{
        margin: 14px 20px 0 ;
        font-size: 13px;
        line-height: 15px;
        color: #222;
    }
    .shop_img>img{
        width: 290px;
        height: 290px;
    }
    .shop_p{
        font-size: 18px;
        line-height: 18px;
        color: #00bebf;
        margin: 14px 20px 0 ;
    }
    .shop_logo>img{
            width: 24px;
            height: 24px;
            border-radius: 50%;
            vertical-align: middle;
           
    }
    .shop_date{
        font-size: 12px;
        line-height: 24px;
        color: #a9a9a9;
    }
    .shop_user{
        display: flex;
        justify-content: space-between;
        margin: 14px 20px 0 ;
    }
    .shop_desc{
        height: 75px;
        margin-top: 19px;
        font-size: 13px;
        line-height: 25px;
        margin: 14px 20px 0 ;
        color: #222;
    }
   
</style>