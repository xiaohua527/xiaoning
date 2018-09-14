<template>
        <div id="speck">
            <div class="shop_box">
                <div class="shop_title">
                    <div class="shop_title_left">热门工厂</div>
                    <div class="shop_title_right">
                        查看更多>
                    </div>
                </div><br>
                <div class="shop_content">
                    <div class="fix">
                        <div  v-for="(item,index) in foctory_data" :key="index">
                            <a href="">
                                 <!-- :style="{backgroundImage: 'url(' + imgburl+item.moment.cover + ')'}" -->
                                <div class="shop_img" :style="{backgroundImage:'url('+item.bg + ')'}">
                                   
                                                                       
                                    <div class="factory_img">
                                        <img :src="new_item" alt="" v-for="(new_item,index) in item.four" :key="index">
                                        <!-- <img src="http://image.xidibuy.com/shop/shop.4e4549b1b17e3103fadf956cded5238d81a6d555470e3b623500842dd515aa3d.jpeg/800x800/316" alt="">
                                        <img src="https://image.xidibuy.com/shop/shop.4e4549b1b17e3103e5a567c466e8587573866634302cb332358afc5948f29150.jpeg/800x800/316" alt="">
                                        <img src="https://image.xidibuy.com/shop/shop.4e4549b1b17e3103e5a567c466e8587573866634302cb332358afc5948f29150.jpeg/800x800/316" alt=""> -->
                                    </div>
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

                    foctory_data:[{
                        bg:"https://image.xidibuy.com/folder/folder.8e383668cc0d04cf0df99889ce1691c798264282f6fe2f08bf5aa4c4361a27fb.jpeg/394x329",
                        four:['https://image.xidibuy.com/shop/shop.4e4549b1b17e3103e5a567c466e8587573866634302cb332358afc5948f29150.jpeg/800x800/316','https://image.xidibuy.com/shop/shop.4e4549b1b17e3103fadf956cded5238d81a6d555470e3b623500842dd515aa3d.jpeg/800x800/316','https://image.xidibuy.com/shop/shop.4e4549b1b17e3103fadf956cded5238d79d894ad45d5db533500842dd515aa3d.jpeg/800x800/316','https://image.xidibuy.com/shop/shop.9522656a0fbb51b0d95726c6ebbcae280dea76b70cbcb76b3500842dd515aa3d.jpeg/800x800/316']

                    },{
                        bg:"https://image.xidibuy.com/folder/folder.8e383668cc0d04cfc6c5bb1a5c6077368ca5a32305ec77febf5aa4c4361a27fb.jpeg/394x329",
                        four:['https://image.xidibuy.com/shop/shop.686c3638d64fcb97f06fea9bd7a572a9a82aebaeb8944f52358afc5948f29150.jpeg/1500x1500/316','https://image.xidibuy.com/shop/shop.1d7392670ceb61d101374000d5076e589811a00ada708df93500842dd515aa3d.jpeg/1200x1200/316','https://image.xidibuy.com/shop/shop.1d7392670ceb61d1dd8e112a9bfb5b06d5e9c07bad6fd7043500842dd515aa3d.jpeg/1500x1500/316','https://image.xidibuy.com/shop/shop.1d7392670ceb61d157d131fa56eeeb504088f39b308c19b63500842dd515aa3d.jpeg/1500x1500/316']

                    

                    },{
                        bg:"https://image.xidibuy.com/folder/folder.8e383668cc0d04cfb618d14f8d3b0c72a70456ce8e7f0047bf5aa4c4361a27fb.jpeg/394x329",
                        four:['https://image.xidibuy.com/shop/shop.8eb5466dc488c46f6f836a6669a630543b2cbab569f2a7533500842dd515aa3d.png/800x800/316','https://image.xidibuy.com/shop/shop.8eb5466dc488c46f7760d6243feb164504abd1aa7243c5dd3500842dd515aa3d.jpeg/800x800/316','https://image.xidibuy.com/shop/shop.8eb5466dc488c46f6ef898282ed8a50a28b330281401665f3500842dd515aa3d.jpeg/1500x1500/316','https://image.xidibuy.com/shop/shop.8eb5466dc488c46f7c29f87ba174f734e15e9d6a4003e6ac3500842dd515aa3d.jpeg/800x800/316']

                    

                    
                    }]

                //     shop_data:[{
                //         msg:"英国原产DUNOON丹侬骨瓷茶杯水杯茶具黄金饰面",
                //         price:"¥269.99",
                //         shop_src:'https://image.xidibuy.com/shop/shop.e42fe8a6caa54b21b9da71c61ee189b49fc0f69eb823ee123500842dd515aa3d.jpeg/1500x1500/316',
                //         desc:"英国产品不同于中国的青花瓷，凸显了瓷器表面图案的色彩，这一款比较炫目，不喜欢...",
                //         shop_user:"https://static.xidibuy.com/static/global/images/1.0.0/avator_01.jpg",
    
    
                //     },{
                //         msg:"英国原产DUNOON丹侬骨瓷茶杯水杯茶具黄金饰面",
                //         price:"¥269.99",
                //         shop_src:'https://image.xidibuy.com/shop/shop.53a7cbfbf394f430b8cd5f5f41f197e947dce5e2df6a6bff3500842dd515aa3d.jpeg/1500x1500/316',
                //         desc:"英国产品不同于中国的青花瓷，凸显了瓷器表面图案的色彩，这一款比较炫目，不喜欢...",
                //         shop_user:"https://static.xidibuy.com/static/global/images/1.0.0/avator_12.jpg",
    
                //     },{
                //         msg:"英国原产DUNOON丹侬骨瓷茶杯水杯茶具黄金饰面",
                //         price:"¥269.99",
                //         shop_src:'https://image.xidibuy.com/shop/shop.e72be242527be08f8dd79825485ad5c1aa441834f4058cfe358afc5948f29150.jpeg/1500x1500/316',
                //         desc:"英国产品不同于中国的青花瓷，凸显了瓷器表面图案的色彩，这一款比较炫目，不喜欢...",
                //         shop_user:"https://static.xidibuy.com/static/global/images/1.0.0/avator_09.jpg",
    
                //     },{
                //         msg:"英国原产DUNOON丹侬骨瓷茶杯水杯茶具黄金饰面",
                //         price:"¥269.99",
                //         shop_src:'https://image.xidibuy.com/shop/shop.b898da88e7cd463fb20815f3b2858be2b2be3f1ba1a098213500842dd515aa3d.jpeg/803x803/316',
                //         desc:"英国产品不同于中国的青花瓷，凸显了瓷器表面图案的色彩，这一款比较炫目，不喜欢...",
                //         shop_user:"https://static.xidibuy.com/static/global/images/1.0.0/avator_01.jpg",
    
                //     }]
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
        }
    
        .shop_box {
            width: 1210px;
            margin: 0 auto;
        }
    
        .shop_title_left {
            font-size: 24px;
            line-height: 24px;
            letter-spacing: 1px;
        }
    
        .shop_title_right {
            font-size: 13px;
            letter-spacing: 1px;
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
        }
    
        .fix {
            width: 1210px;
           display: flex;
           justify-content: space-between;    
        }
    
       
        .shop_item>a{
            text-decoration: none;
            height: 15px;
            display: block;
        }
        .shop_img{
            width: 394px;
            height: 394px;
            background: url('https://image.xidibuy.com/folder/folder.8e383668cc0d04cf0df99889ce1691c798264282f6fe2f08bf5aa4c4361a27fb.jpeg/394x329') no-repeat;

        }
      
        
       .factory_img{
           width: 340px;
           height: 80px;
           /* background-color: olivedrab; */
           margin: 0  auto;
           position: relative;
           top: 230px;
           display: flex;
           justify-content: space-between;

       }
       .factory_img>img{
           display: block;
           width: 80px;
           height: 80px;
           
       }
    </style>