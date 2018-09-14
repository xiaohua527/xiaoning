<template>
    <div id="Nfooter">
        <footer>
            <!-- <div class="footer_box">
                <a href="" v-for="(item,index) in 18" :key="index" class="country_item">
                    <img src="http://static.xidibuy.com/static/global/images/1.0.0/stroll/stroll-de.jpg" alt="">
                    <div>{{item}}</div>
                </a>
            </div> -->
            <div class="footer_outer">
                <div class="footer_outer_content">
                    <a href="">
                        <div class="ft_bg"></div>
                        <div class="ft_name">海外进口</div>
                        <div class="ft_desc">欧美厂家直采</div>
                    </a>
                    <a href="">
                        <div class="ft_bg1"></div>
                        <div class="ft_name"> 工厂直价 </div>
                        <div class="ft_desc">低于当地店头价</div>
                    </a>
                    <a href="">
                        <div class="ft_bg2"></div>
                        <div class="ft_name">原产纯品</div>
                        <div class="ft_desc"> 杜绝假货入侵</div>
                    </a>
                    <a href="">
                        <div class="ft_bg3"></div>
                        <div class="ft_name"> 国内直邮</div>
                        <div class="ft_desc">海购享受次日达</div>
                    </a>
                </div>
            </div>

            <div class="footer_link">
                <div class="ft_content">
                    <div class="ft_content_desc">
                        <div class="ft_shop">
                            <strong>购物指南</strong>
                            <a href="">常见问题</a>
                            <a href="">购物流程</a>
                            <a href="">跨境购须知</a>
                            <a href=""> 所有商品</a>
                        </div>
                        <div class="ft_shop">
                            <strong> 支付配送 </strong>
                            <a href=""> 支付方式 </a>
                            <a href="">配送方式</a>

                        </div>
                        <div class="ft_shop">
                            <strong> 售后服务 </strong>
                            <a href=""> 退货规则 </a>
                            <a href=""> 退款规则 </a>
                            <a href="">意见反馈</a>
                            <a href=""> 投诉</a>
                            <a href=""> 论坛</a>
                        </div>
                        <div class="ft_shop">
                            <strong> 招商合作</strong>
                            <a href="">成为代表商</a>
                            <a href="">工厂入驻</a>
                            <a href="">推荐商品</a>
                        </div>
                        <div class="ft_code">
                            <div class="ft_code_item">
                                <img src="https://static.xidibuy.com/static/global/images/1.0.0/ewm-mobile-footer.png"
                                    alt="">
                                <div>
                                    手机喜地
                                </div>
                            </div>
                            <div class="ft_code_item">
                                <img src="https://static.xidibuy.com/static/global/images/1.0.0/ewm-weixin-footer.png"
                                    alt="">
                                <div>
                                    喜地微信
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ft_address">
                        <div class="ft_address_left">
                            <a href="" class="ft_address_logo"></a>
                            <div class="ft_address_des"> © 2018 喜地电子商务有限公司&nbsp; 版权所有</div>
                        </div>
                        <div class="ft_address_right">
                            <div class="ft_address_box"> 
                                <img src="https://static.xidibuy.com/static/global/images/1.0.0/copy-hubeian-footer.png" alt=""> 
                                <a href=""> 沪公网安备 31011502004484号&#x3000;&#x3000;沪ICP备14024930 号&#x3000;&#x3000; </a> 
                                <a href="">了解喜地&#x3000;&#x3000;|&#x3000;&#x3000; </a>
                                <a href="">加入喜地 &#x3000;&#x3000;|&#x3000;&#x3000;</a>
                                <a href="">法律声明 &#x3000;&#x3000;|&#x3000;&#x3000;</a>
                                <a href=""> 联系喜地</a>    
                                <span class="tel"></span> 021-38473528 
                            </div>
                            <div class="ft_right_top"> 增值电信业务经营许可证：沪B2-20160183 | 食品流通许可证：SP3101151414200025 | 网络文化经营许可证：沪网文【2014】0579-129号
                            </div>
                        </div>
                    </div>
                    <div class="connet">
                        <div>友情链接&nbsp;:</div>
                        <div >
                            <a href="" class="connet_item" v-for="(item,index) in connet_data" :key="index">
                            {{item}}
                            </a>
                        
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>
<script>
    export default {
        name: "Nfooter",
        data(){
            return{
                connet_data:['喜地官网' ,'八达网转运' ,'中环转运' ,'哪里在打折' ,'德购商城', '海淘实验室' ,'新西兰海淘网站', '爱淘转运', '捎客转运', '返利', '海淘优惠码',' 51返利网' ,'日本海淘', '日本转运领先速递','九块邮',' 转运公司', '卷皮网' ,'家居饰品批发' ,'青龙商城', '|购物网站' ,'京东返利', '平返利' ,'夏魅时' ,'久禾快运', '日本转运' ,'服装批发', '米兰站', '互联网运营' ,'中老年服装']
            }
        }
    }

</script>
<style scoped>
  
    .country_item {
        display: block;
        width: calc(100%/9);
        height: calc(100%/2);
        /* margin-right: 5px; */
        text-align: center;
    }

    .country_item>img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-top: 25px;

    }

    .footer_outer {
        width: 1903px;
        height: 185px;
        /* background-color: orchid; */
    }

    .footer_link {
        width: 1903px;
        height: 455px;
        background-color: #474747
    }

    .footer_outer_content {
        width: 1210px;
        height: 185px;
        /* background-color: yellow; */
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .ft_bg {
        width: 52px;
        height: 45px;
        background: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png') no-repeat;
        margin: 0 auto;
        background-position: 0 -150px;


    }

    .ft_bg1 {
        display: block;
        width: 52px;
        height: 45px;
        margin: 0 auto;
        background: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png') no-repeat;
        background-position: -61px -149px;


    }

    .ft_bg2 {
        display: block;
        width: 52px;
        height: 45px;
        margin: 0 auto;
        background: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png') no-repeat;
        background-position: -119px -150px;


    }

    .ft_bg3 {
        display: block;
        width: 68px;
        height: 45px;
        margin: 0 auto;
        background: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png') no-repeat;
        background-position: -184px -148px;


    }

    .ft_name {
        display: block;
        margin-top: 15px;
        font-size: 18px;
        line-height: 30px;
        color: #222;
    }

    .ft_desc {
        display: block;
        font-size: 14px;
        line-height: 28px;
        color: #777;
    }

    .footer_outer_content>a {
        text-decoration: none;
        display: block;
        width: 250px;
        /* background-color: orangered; */
        text-align: center;
        padding-top: 30px;
    }

    .ft_content {
        width: 1210px;
        height: 100%;
        /* background-color: yellowgreen; */
        margin: 0 auto;
        padding: 40px 0 20px 0;
        box-sizing: border-box;

    }

    .ft_content_desc {
        width: 1210px;
        height: 192px;
        /* background-color: rebeccapurple; */
        display: flex;
    }

    .ft_address {
        width: 1210px;
        height: 77px;
        /* background-color: blue; */
        margin-top: 15px;
        display: flex;
        justify-content: space-between;

    }

    .ft_shop {
        width: 135px;
        font-size: 16px;
        display: inline-block;
        margin-right: 66px;

    }

    .ft_shop>strong {
        line-height: 32px;
        font-weight: normal;
        color: #fff;
    }

    .ft_shop>a {
        display: block;
        text-decoration: none;
        font-size: 13px;
        line-height: 32px;
        color: #c5c5c5;

    }

    .ft_code {
        width: 240px;
        height: 140px;
        /* background-color: rebeccapurple; */
        display: flex;
        justify-content: space-between;
        margin-left: 170px;

    }

    .ft_code_item {
        width: 100px;
        height: 100px;
    }

    .ft_code_item>div {
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        color: #c5c5c5;
    }

    .ft_address_logo {
        display: block;
        width: 100px;
        height: 40px;
        margin-right: 20px;
        background: url('https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png') no-repeat -179px -100px;
    }

    .ft_address_des {
        font-size: 12px;
        color: #c5c5c5;
        line-height: 12px;
        margin-top: 16px;
    }

    .tel {
        width: 12px;
        height: 16px;
        position: relative;
        vertical-align: middle;
        background-image: url('https://static.xidibuy.com/static/passport/images/1.0.0/loginSignup-icon.png');
        background-repeat: no-repeat;
        background-position: -103px 0;
        /* margin-right: 5px */
    }
    .ft_address_left{
        height: 68px;

    }
    .ft_address_right>*{
        font-size: 12px;
        color: #c5c5c5;
        text-decoration: none;
    }
    .ft_address_right{
        margin-top: 10px;
    }
    .ft_address_box>a{
        text-decoration: none;
        color: #c5c5c5;
       
    }
   .ft_address_box{
    margin-bottom:15px;
   }
   .connet{
       width: 1210px;
       height: 101px;
       /* background-color: yellow; */
       margin: 0 auto;
       display: flex;
       font-size: 12px;
       color: #777;
       border-top: 1px solid #5a5a5a;
       margin-top: 10px;
        padding-top: 10px;
   }
   .connet>div:nth-child(1){
       width: 60px;
       line-height: 30px;
       margin-right: 8px;
   }
   .connet>div:nth-child(2){
       width: 1140px;
       height: 90px;
     
   }
   .connet>div:nth-child(2)>a{
    color: #777;
    text-decoration: none;
    /* margin: 20px; */
    /* margin-top: 10px; */
    line-height: 30px;
   }
   .connet_item::after{
       content: "|";
       margin: 11px;
   }
   .connet_item:last-child::after{
       content: "";
      
   }
   
</style>