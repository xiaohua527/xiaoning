<template>
    <div id="home">
            <div class="content">
                    <!-- 头部banner切换 -->
                    <div id="banner_box">
                        <div id="banner_box_left">
                            <div class="banner_box_classify" v-for="(item,index) in banner_data" :key='index'  @mouseenter="myMouseenter(index)"  @mouseleave="myMouseleave">
                                <a href="" class="banner_box_classify_item">{{item.msg}}</a>
                            </div>
                            <div class="classify_box">
                                <div>
                                    <a class="item_box" v-for="(item,count) in items" :key="count">
                                        
                                         <img :src="item.src" alt=""  >
                                        
                                           
                                            <span >&nbsp;&nbsp;{{item.msg}}</span>
                                        </a>
                                </div>
                               


                               
                                
                            </div>
                        </div>
                        
                        <div id="banner_box_right">
                            <el-carousel :interval="5000" arrow="always" height="340px">
                                <el-carousel-item v-for="(carousel_item,index) in carousel_data" :key="index">
                                    <img :src="carousel_item" alt="">
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                    <!--专题精选  -->
                    <div class="recommend_box">
                        <div class="recommend_box_title">
                            <div class="recommend_box_left">
                                <div>专题精选</div>
                            </div>
                            <div class="recommend_box_right">
                                <a href="">专题回顾 ></a>
                            </div>
                        </div>
                        <div class="recommend_box_content">
                            <a href="" class="recommend_box_content_warp" v-for="(item,count) in recommend_data" :key="count">
                                <div class="recommend_box_content_img">
                                    <!-- <transition name="fade"> -->
                                      <img :src="item.src" alt="">
                                    <!-- </transition> -->
                                  
                                </div>
                                <div class="recommend_box_content_title">
                                    {{item.msg}}
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- 最新尖货 -->
                    <div class="newgoods_box">
                        <div class="newgoods_box_title">
                                <div class="recommend_box_left">
                                    <div>专题精选</div>
                                </div>
                                <div class="recommend_box_right">
                                    <a href="">专题回顾 ></a>
                                </div>
                        </div>

                        <div class="carousel_box">
                          
                            <div class="fix">
                              
                                <div class="carousel_box_bar">
                                    <a href="" class="carousel_box_item" v-for="(item,index) in newgoods" :key="index">
                                        <div>                                          
                                            <img :src="item.pic" alt="" class="germany_img" >
                                        </div>
                                        <div class="carousel_box_content ">
                                            <div class="carousel_box_title line">{{item.title}} </div>
                                            <div class="line"><a href="" class="carousel_box_describe ">{{item.desc}}</a></div>
                                            <div class="carousel_box_price line">
                                                    {{item.price}}
                                            </div>
                                            <div class="line">
                                                <img :src="item.logo" alt="" class="germany_logo">
                                                <span class="carousel_box_country">{{item.country}}</span>
                                            </div>
                                        </div>
                                    </a>
                                 
                                    <div class="carousel_box_bar">
                                            <a href="" class="(carousel_box_item,index)" v-for="(item,index) in newgoods" :key="index">
                                                <div>
                                                    <img :src="item.pic" alt="" class="germany_img">
                                                </div>
                                                <div class="carousel_box_content ">
                                                    <div class="carousel_box_title line">{{item.title}} </div>
                                                    <div class="line"><a href="" class="carousel_box_describe ">{{item.desc}}</a></div>
                                                    <div class="carousel_box_price line">
                                                            {{item.price}}
                                                    </div>
                                                    <div class="line">
                                                        <img :src="item.logo" alt="" class="germany_logo">
                                                        <span class="carousel_box_country">{{item.country}}</span>
                                                    </div>
                                                </div>
                                            </a>
                                    </div>
                                </div>
                               
                               
                            </div>
                             <a class="carsousel_btn_left" href="javascript:;" @click="leftbtn"></a>
                            <a class="carsousel_btn_right" href="javascript:;" @click="rigtbtn"></a>
                        </div>   
                    </div>

                </div>
    </div>
    

</template>
<script>
// import
export default {
  name: "Home",
  //   props: ["index"],

  data() {
    return {
       
     show: true,
 
      index: 0,
      indexRight: 0,
      // 左侧tab的数据
      banner_data: [
        {
          msg: "饮食厨房",
          src:
            "https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png"
        },
        {
          msg: "母婴用品",
          src:
            "https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png"
        },
        {
          msg: "鞋包配饰",
          src:
            "https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png"
        },
        {
          msg: "卫浴个户",
          src:
            "https://image.xidibuy.com/folder/folder.8e383668cc0d04cf2555a0d5c2dfcc100f4ed79b888135bcbf5aa4c4361a27fb.jpeg"
        },
        {
          msg: "家居生活",
          src:
            "https://image.xidibuy.com/folder/folder.8e383668cc0d04cffb376920acf319ffe21fa78939b7816cbf5aa4c4361a27fb.jpeg"
        },
        {
          msg: "办公通勤",
          src:
            "https://image.xidibuy.com/folder/folder.8e383668cc0d04cfa471cc6d489930413a81197b6f1c891bbf5aa4c4361a27fb.jpeg"
        }
      ],

      // carousel的数据
      carousel_data: [
        "https://image.xidibuy.com/folder/folder.8e383668cc0d04cffc74b8f707ad0e9f028248c0cbdb63e6bf5aa4c4361a27fb.jpeg/1030x340",
        "https://image.xidibuy.com/folder/folder.8e383668cc0d04cf32bb15569ded25994a1b07e9039a04babf5aa4c4361a27fb.jpeg/1030x340",
        "https://image.xidibuy.com/folder/folder.8e383668cc0d04cff3baf8b581c202c736bdbf31c1589ecebf5aa4c4361a27fb.jpeg/1030x340",
        "https://image.xidibuy.com/folder/folder.8e383668cc0d04cfbc86b3e1aa7be6f7aaa68e402eebfb45bf5aa4c4361a27fb.jpeg/1030x340",
        "https://image.xidibuy.com/folder/folder.8e383668cc0d04cf6ebf995a9887508d52f77c1e8ae1d365bf5aa4c4361a27fb.jpeg/1030x340"
      ],

      // 专题推荐的数据
      recommend_data: [
        {
          src:
            "https://image.xidibuy.com/folder/folder.8e383668cc0d04cf782521f7a73aa864450472068555efb5bf5aa4c4361a27fb.jpeg/640x323",
          msg: "【生活家】第二十一期口碑榜"
        },
        {
          src:
            "https://image.xidibuy.com/folder/folder.8e383668cc0d04cf15d73da99bb580fd9d325ba9ffda5c70bf5aa4c4361a27fb.jpeg/690x348",
          msg: "【生活家】每周试用名单公告"
        },
        {
          src:
            "https://image.xidibuy.com/folder/folder.8e383668cc0d04cfbd49807532b2777323e279d53a685ae2bf5aa4c4361a27fb.jpeg/640x323",
          msg: "【生活家】购全球-意大利"
        },
        {
          src: require("../../assets/imgs/chumanji.jpg"),
          msg: "【种草】除螨剂"
        },
        {
          src: require("../../assets/imgs/kaixueji.jpg"),
          msg: "【种草】开学季"
        },
        {
          src: require("../../assets/imgs/jiuju.jpg"),
          msg: "【种草】酒具专场"
        }
      ],

      // 最新尖货的数据
      newgoods: [
        {
          id: "第一页",
          title: "家居小物，随心挂",
          desc: "德国Koziol挂壁式收纳篮储物篮",
          price: "¥87.00",
          logo: "https://static.xidibuy.com/images/flags/icon-de.png",
          country: "德国",
          pic:
            "https://image.xidibuy.com/shop/shop.8f2357f91885dcfb19a00b3047f44bc31d4644522612cd2c3500842dd515aa3d.jpeg/1000x1000/316"
        },
        {
          title: "家居小物，随心挂",
          desc: "德国Koziol挂壁式收纳篮储物篮",
          price: "¥87.00",
          logo: "https://static.xidibuy.com/images/flags/icon-de.png",
          country: "德国",
          pic:
            "https://image.xidibuy.com/shop/shop.b898da88e7cd463f77fcb5aa91794f1a90585ee10bdcd9a23500842dd515aa3d.jpeg/800x800/316"
        },
        {
          title: "家居小物，随心挂",
          desc: "德国Koziol挂壁式收纳篮储物篮",
          price: "¥87.00",
          logo: "https://static.xidibuy.com/images/flags/icon-de.png",
          country: "德国",
          pic:
            "https://image.xidibuy.com/shop/shop.9e99aa9a8ebd84c087a370f35601f38341c384304edc63c03500842dd515aa3d.jpeg/1500x1500/316"
        },
        {
          title: "家居小物，随心挂",
          desc: "德国Koziol挂壁式收纳篮储物篮",
          price: "¥87.00",
          logo: "https://static.xidibuy.com/images/flags/icon-de.png",
          country: "德国",
          pic:
            "https://image.xidibuy.com/shop/shop.4c8eaf353dfad262f3dcf6349d68d953021c52fb7e28808c358afc5948f29150.jpeg/1500x1500/316"
        },
        // 第二张
        {
          id: "第一页",
          title: "家居小物，随心挂",
          desc: "德国Koziol挂壁式收纳篮储物篮",
          price: "¥87.00",
          logo: "https://static.xidibuy.com/images/flags/icon-de.png",
          country: "德国",
          pic:
            "https://image.xidibuy.com/shop/shop.e42fe8a6caa54b212c0dfb80e4684acac5df4f7b571191683500842dd515aa3d.jpeg/800x800/316"
        },
        {
          title: "家居小物，随心挂",
          desc: "德国Koziol挂壁式收纳篮储物篮",
          price: "¥87.00",
          logo: "https://static.xidibuy.com/images/flags/icon-de.png",
          country: "德国",
          pic:
            "https://image.xidibuy.com/shop/shop.b898da88e7cd463f77fcb5aa91794f1a90585ee10bdcd9a23500842dd515aa3d.jpeg/800x800/316"
        },
        {
          title: "家居小物，随心挂",
          desc: "德国Koziol挂壁式收纳篮储物篮",
          price: "¥87.00",
          logo: "https://static.xidibuy.com/images/flags/icon-de.png",
          country: "德国",
          pic:
            "https://image.xidibuy.com/shop/shop.9e99aa9a8ebd84c087a370f35601f38341c384304edc63c03500842dd515aa3d.jpeg/1500x1500/316"
        },
        {
          title: "家居小物，随心挂",
          desc: "德国Koziol挂壁式收纳篮储物篮",
          price: "¥87.00",
          logo: "https://static.xidibuy.com/images/flags/icon-de.png",
          country: "德国",
          pic:
            "https://image.xidibuy.com/shop/shop.4c8eaf353dfad262f3dcf6349d68d953021c52fb7e28808c358afc5948f29150.jpeg/1500x1500/316"
        },
        // 第三张
        {
          id: "第一页",
          title: "家居小物，随心挂",
          desc: "德国Koziol挂壁式收纳篮储物篮",
          price: "¥87.00",
          logo: "https://static.xidibuy.com/images/flags/icon-de.png",
          country: "德国",
          pic:
            "https://image.xidibuy.com/shop/shop.14d337e91f577d1f4f48001910cab3784b9238ea448cc6883500842dd515aa3d.jpeg/1500x1500/316"
        },
        {
          title: "家居小物，随心挂",
          desc: "德国Koziol挂壁式收纳篮储物篮",
          price: "¥87.00",
          logo: "https://static.xidibuy.com/images/flags/icon-de.png",
          country: "德国",
          pic:
            "https://image.xidibuy.com/shop/shop.b898da88e7cd463f77fcb5aa91794f1a90585ee10bdcd9a23500842dd515aa3d.jpeg/800x800/316"
        },
        {
          title: "家居小物，随心挂",
          desc: "德国Koziol挂壁式收纳篮储物篮",
          price: "¥87.00",
          logo: "https://static.xidibuy.com/images/flags/icon-de.png",
          country: "德国",
          pic:
            "https://image.xidibuy.com/shop/shop.9e99aa9a8ebd84c087a370f35601f38341c384304edc63c03500842dd515aa3d.jpeg/1500x1500/316"
        },
        {
          title: "家居小物，随心挂",
          desc: "德国Koziol挂壁式收纳篮储物篮",
          price: "¥87.00",
          logo: "https://static.xidibuy.com/images/flags/icon-de.png",
          country: "德国",
          pic:
            "https://image.xidibuy.com/shop/shop.4c8eaf353dfad262f3dcf6349d68d953021c52fb7e28808c358afc5948f29150.jpeg/1500x1500/316"
        }
      ],

      items: [],
      classfiy_data: [
        [
          {
            id: "餐具",
            src:
              "https://image.xidibuy.com/shop/shop.b898da88e7cd463f50914c5d8b2828358bbb67b48ac1bf540b9ea2f179c2bb0b.jpeg/1500x1500/66",
            msg: "锅具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.b898da88e7cd463f0e5481da65cb0b050b36abb2c5dc4a5e3500842dd515aa3d.jpeg/1500x1500/66",
            msg: "餐具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.8c0602c6ef7be9d74f806593d320d6aa0a9b93739a306e2b3500842dd515aa3d.jpeg/1500x1500/66",
            msg: "锅具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.dbd81d50ce0d85ec9374074091e20061e7d62ebff62ed1c1358afc5948f29150.jpeg/1500x1500/66",
            msg: "餐具"
          },
          {
            id: "餐具",
            src:
              "https://image.xidibuy.com/shop/shop.b898da88e7cd463f50914c5d8b2828358bbb67b48ac1bf540b9ea2f179c2bb0b.jpeg/1500x1500/66",
            msg: "锅具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.b898da88e7cd463f0e5481da65cb0b050b36abb2c5dc4a5e3500842dd515aa3d.jpeg/1500x1500/66",
            msg: "餐具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.e42fe8a6caa54b215ede86b1f4527ea7bf27b3c55bb7658d3500842dd515aa3d.png/800x800/66",
            msg: "锅具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.ded4b533a6b01276e62b48d08044f928d6e4bd1ccd9101453500842dd515aa3d.jpeg/1000x1000/66",
            msg: "餐具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.53a7cbfbf394f430b8cd5f5f41f197e947dce5e2df6a6bff3500842dd515aa3d.jpeg/1500x1500/66",
            msg: "餐具"
          }
        ],

        [
          {
            id: "母婴",
            src:
              "https://image.xidibuy.com/shop/shop.b4659ef42dbb69b83052aed4ee3a36a8b6fafc9756708db63500842dd515aa3d.jpeg/1500x1500/66",
            msg: "喂养工具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.4831b40e5ad1745c53fcd790fd252655a425edb8f25382ad3500842dd515aa3d.jpeg/1500x1500/66",
            msg: "宝宝寝具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.4c8eaf353dfad26248eed947a6110aca11e2447911e30db83500842dd515aa3d.jpeg/800x800/66",
            msg: "宝宝寝具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.4831b40e5ad1745c53fcd790fd252655a425edb8f25382ad3500842dd515aa3d.jpeg/1500x1500/66",
            msg: "宝宝寝具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.b4659ef42dbb69b8afa92eb25cb498e40d2acdc3fc15245a3500842dd515aa3d.jpeg/1500x1500/66",
            msg: "宝宝寝具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.4831b40e5ad1745c53fcd790fd252655a425edb8f25382ad3500842dd515aa3d.jpeg/1500x1500/66",
            msg: "宝宝寝具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.4831b40e5ad1745cd50d0f245e1da37f36f2eb32ec2a5cf73500842dd515aa3d.jpeg/1500x1500/66",
            msg: "宝宝寝具"
          }
        ],
        [
          {
            id: "鞋包",
            src:
              "https://image.xidibuy.com/shop/shop.d2a2bc9d0bd39cc7c55e43ed6d113780cf102f50ef84d7093500842dd515aa3d.jpeg/800x800/66",
            msg: "喂养工具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.a2af7bd535babbcbd27eb853ba7eba7587aff5d8825552ff3500842dd515aa3d.jpeg/1500x1500/66",
            msg: "宝宝寝具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.d2a2bc9d0bd39cc7c55e43ed6d113780cf102f50ef84d7093500842dd515aa3d.jpeg/800x800/66",
            msg: "喂养工具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.8f8a0291f8e1729a63dd6dec646fe0eb94a9e82296eb3bd43500842dd515aa3d.jpeg/1000x1000/66",
            msg: "宝宝寝具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.d2a2bc9d0bd39cc7c55e43ed6d113780cf102f50ef84d7093500842dd515aa3d.jpeg/800x800/66",
            msg: "喂养工具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.a2af7bd535babbcbd27eb853ba7eba7587aff5d8825552ff3500842dd515aa3d.jpeg/1500x1500/66",
            msg: "宝宝寝具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.f9fcdbfe855916b852fd7087e6ef249d8e0ff5b46b91a4613500842dd515aa3d.jpeg/800x800/66",
            msg: "喂养工具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.6ad912e4e44d2a02672958adfab2467ecee77b2b1602c1903500842dd515aa3d.png/1200x1200/66",
            msg: "宝宝寝具"
          },
          {
            src: "",
            msg: ""
          }
        ],

        [
          {
            id: "卫浴",
            src:
              "https://image.xidibuy.com/shop/shop.da56cd3b6628d344dd14c4cbce3cf4c0c75b4435ff4eb3413500842dd515aa3d.jpeg/1500x1500/66",
            msg: "喂养工具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.5a081c4c1d0bbdcd8570c178350a5166a439537b0504a8f73500842dd515aa3d.jpeg/800x800/66",
            msg: "宝宝寝具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.a8eef4c6ef3cd6c99fa6cf856aad5be0bd0b5a7cf0e440523500842dd515aa3d.jpeg/1500x1500/66",
            msg: "宝宝寝具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.810844bb3d132a184c2b4c7259e1e98add57357b4bb97f093500842dd515aa3d.jpeg/1500x1500/66",
            msg: "宝宝寝具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.fd1c93030b5ed94e1dae22a828450168d9e609bb4e8fe6ac3500842dd515aa3d.jpeg/1500x1500/66",
            msg: "宝宝寝具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.ded4b533a6b01276335e6018a039b0e5ee76944d64652fdc3500842dd515aa3d.jpeg/1500x1500/66",
            msg: "宝宝寝具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.14d337e91f577d1fc39bd36c6a397b1f7cd100fd67be544d3500842dd515aa3d.jpeg/1500x1500/66",
            msg: "宝宝寝具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.e4e2c96c12d451831efeebf16e0d973b83a0478752790b303500842dd515aa3d.jpeg/1500x1500/66",
            msg: "宝宝寝具"
          },
          {
            src: "",
            msg: ""
          }
        ],
        [
          {
            id: "居家",
            src:
              "https://image.xidibuy.com/shop/shop.e72be242527be08fea49bb0d6110369a3f1a6e70cb5d5e173500842dd515aa3d.jpeg/800x800/66",
            msg: "喂养工具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.aed58972b9fcac843ee3b8cfec21ec68f4871b10795804053500842dd515aa3d.jpeg/1500x1500/66",
            msg: "宝宝寝具"
          },
          {
            id: "居家",
            src:
              "https://image.xidibuy.com/shop/shop.aed58972b9fcac841a78e56b6e0c6a9148ae3fc41073c74d0b9ea2f179c2bb0b.jpeg/800x800/66",
            msg: "喂养工具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.f27fd4ca713a24ecc776de0a6927884adef308d42c6238f6358afc5948f29150.jpeg/1500x1500/66",
            msg: "宝宝寝具"
          },
          {
            id: "居家",
            src:
              "https://image.xidibuy.com/shop/shop.7558c17aa6a38cf4226492f942d98268c934c1d3ec63ed3c3500842dd515aa3d.jpeg/1500x1500/66",
            msg: "喂养工具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.77f6c77da63db715c6f67833b26334a15e64e2579bb0cffb3500842dd515aa3d.jpeg/800x800/66",
            msg: "宝宝寝具"
          }
        ],
        [
          {
            id: "办公",
            src:
              "https://image.xidibuy.com/shop/shop.18bb4f5459583365f80051f35a63e19d29ecc8df7dd063d53500842dd515aa3d.jpeg/800x800/66",
            msg: "喂养工具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.4e4549b1b17e31034f76d3a26909d28ca3c2b35cfe1a4ef63500842dd515aa3d.jpeg/1134x1134/66",
            msg: "宝宝寝具"
          },
          {
            id: "办公",
            src:
              "https://image.xidibuy.com/shop/shop.de831d95139414ec26c94ff98692573f9ca563f1def996183500842dd515aa3d.png/1600x1600/66",
            msg: "喂养工具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.b6ece8bb3446f2f8dfd462e1b3937944214e982157a861253500842dd515aa3d.jpeg/800x800/66",
            msg: "宝宝寝具"
          },
          {
            id: "办公",
            src:
              "https://image.xidibuy.com/shop/shop.18bb4f5459583365486f57910b4d4c0eef7470619dad5f763500842dd515aa3d.jpeg/1000x1000/66",
            msg: "喂养工具"
          },
          {
            src:
              "https://image.xidibuy.com/shop/shop.1aa82f9e75094302bec6e9f884bb4a878cc4eb036e073dbc3500842dd515aa3d.jpeg/800x800/66",
            msg: "宝宝寝具"
          }
        ]
      ]
    };
  },
  //   mounted() {

  //     $(".carsousel_btn_left").on("click", function(){
  //       alert("sss",index);
  //       $(".fix").css({
  //         left: `-1240*${index}px`
  //       });
  //     });

  //   },
  methods: {
// ?动画
      jianbian(index){
         
         $('.bian').eq(index).addClass('fade-in-active  fade-leave-active')
        //  this.show = !show
      },
        likaijianbian(index){
        
         $('.bian').eq(index).addClass('fade-enter fade-leave-active')
      },
    myMouseenter(count) {
      //   alert("鼠标进入分类")
      console.log(count);

      $(".classify_box").css("display", "block");
      console.log(this.classfiy_data[count]);

      this.items = this.classfiy_data[count];
      console.log("++++", this.items);
    },
    myMouseleave() {
      $(".classify_box").css("display", "none");
    },

    leftbtn() {
      //   alert('向左')

      console.log(this.index);
      $(".carsousel_btn_left").css("cursor", "pointer");
      if (this.index >= 2) {
        // class="disabled"
        if ((this.index = 2)) {
          $(".carsousel_btn_left").css("cursor", "not-allowed");
        }
        //  else{
        //     $('.carsousel_btn_right').css('cursor','pointer')
        // }

        return;
      }
      this.index++;
      $(".fix").css({ left: "-1240" * this.index + "px" });
    },
    rigtbtn() {
      //   alert('向右')
      $(".carsousel_btn_right").css("cursor", "pointer");
      if (this.index <= 0) {
        // class="disabled"
        if (this.index == 0) {
          $(".carsousel_btn_right").css("cursor", "not-allowed");
        }
        // else{
        //     $('.carsousel_btn_right').css('cursor','pointer')
        // }

        return;
      }
      this.index--;
      $(".fix").css({ left: "-1240" * this.index + "px" });
    }
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0.5;
}

#home {
  height: 1500px;
}
/*头部banner切换 */
.content {
  width: 1210px;
  height: 500px;
  margin: 0 auto;
  /* background-color: palegoldenrod; */
}

#banner_box {
  width: 100%;
  height: 340px;
  /* background-color: olive; */
  display: flex;
  justify-content: space-between;
}

#banner_box_left {
  width: 168px;
  height: 340px;
  background-color: rgba(103, 117, 130, 0.99);
  position: relative;
}

.classify_box {
  width: 614px;
  height: 340px;
  /* background-color: rgb(126, 16, 16); */
  background-color: white;
  position: absolute;
  z-index: 100;
  left: 168px;
  top: 0;
  padding-top: 30px;
  padding-left: 30px;
  box-sizing: border-box;
  display: none;
  /* border-bottom:  */
}
.classify_box > div {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item_box > span {
  vertical-align: middle;
  line-height: 65px;
}
.item_box > img {
  vertical-align: middle;
}

.item_box {
  width: 190px;
  height: 65px;
  margin-bottom: 40px;
  /* background-color: orangered; */
  display: block;
}

#banner_box_right {
  width: 1030px;
  height: 340px;
  /* background-color: purple; */
}

/* 垂直导航tab@import "../../assets/css/tabs/tabs-vertical.css"; */

.banner_box_classify {
  width: 168px;
  height: 54px;
  position: relative;
}

.banner_box_classify_item {
  width: 100%;
  height: 100%;
  display: block;
  color: white;
  text-decoration: none;
  font-size: 14px;
  line-height: 54px;
  text-indent: 32px;
}

.banner_box_classify_item::after {
  content: "";
  position: absolute;
  right: 20px;
  top: 21px;
  width: 6px;
  height: 12px;
  background: url("https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png")
    no-repeat -151px -300px;
}

.banner_box_classify_item:hover {
  background-color: #4ed6d1;
}

/* 轮播图样式 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.carousel {
  width: 100%;
  height: 340px;
}

/* 专题推荐 */
.recommend_box {
  width: 1210px;
  height: 571px;
  /* background-color: orchid; */
}

.recommend_box_title {
  width: 100%;
  height: 24px;
  /* background-color: palegoldenrod; */
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 20px;
}

.recommend_box_left > div {
  margin: 0;
  font-size: 24px;
  letter-spacing: 1px;
  color: #222;
  height: 24px;
  line-height: 24px;
}

.recommend_box_right > a {
  font-size: 13px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #222;
}

.recommend_box_right > a:hover {
  color: #4ed6d1;
}

.recommend_box_content {
  width: 100%;
  height: 527px;
  /* background-color: orange; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.recommend_box_content_img > img {
  width: 396px;
  height: 200px;
  display: block;
  opacity: 1;
  transition: opacity 0.5s;
}
recommend_box_content_img>img:hover{
  opacity: 0.3;
}

.recommend_box_content_warp {
  display: block;
  text-decoration: none;
  color: #222;
  margin-bottom: 25px;
}

.recommend_box_content_title {
  width: 394px;
  height: 50px;
  text-align: center;
  border: 1px solid #ddd;
  border-top: none;
  line-height: 51px;
  font-size: 14px;
}

/* 最新尖货 */
.carousel_box {
  width: 1210px;
  height: 402px;
  /* background-color: orchid; */
  position: relative;
  overflow: hidden;
}
.newgoods_box {
  width: 1210px;
  height: 456px;
  /* background-color: red; */
}
.newgoods_box_title {
  width: 100%;
  height: 24px;
  /* background-color: palegoldenrod; */
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
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
.carousel_box_item {
  text-decoration: none;
  margin-right: 30px;
}
.carousel_box_content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.line {
  margin-top: 10px;
}
.carousel_box_bar {
  display: flex;
  justify-content: space-between;
}
.fix {
  position: relative;
  left: 0;
  transition: all 0.5s;
  transition-timing-function: ease-in-out;
}
.carsousel_btn_left {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #ededed;
  background: url("https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png")
    no-repeat -299px -100px;
  opacity: 3;
  position: absolute;
  top: 170px;
}
.carsousel_btn_right {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #ededed;
  background: url("https://static.xidibuy.com/static/global/images/1.0.0/sprite_icons.png")
    no-repeat -385px -100px;
  opacity: 3;
  position: absolute;
  top: 170px;
  right: 0px;
}
</style>