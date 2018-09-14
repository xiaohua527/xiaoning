<template>
    <div id="shoujixidi">
      
                <Headers></Headers>
      
       
        <div id="shoujixidi_box">
            <div class="shoujixidi_conent">
                <div class="shoujixidi_conent_lf"></div>
                <div class="shoujixidi_conent_rt">
                    <div class="right_top">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="right_button">
                        <div></div>

                        <div class="ia" >
                            <div></div>

                            <div></div>
                        </div>
                        
                    </div>
                    <div id="sao">扫描二维码下载客户端 </div>
                </div>
            </div>
        </div>
        <div class="tian"></div>
        <ShoujiFooter></ShoujiFooter>
    </div>
</template>

<script>
   import Headers from '@/components/common/Headers'//头部导航
   import ShoujiFooter from '@/components/common/ShoujiFooter'//底部国家
export default {
name:"shoujixidi",
components:{
    Headers,
    ShoujiFooter
}
}
</script>

<style scoped>
  
#shoujixidi_box{
    width: 1903px;
    height: 600px;
    background: #f1f1ef url("https://static.xidibuy.com/static/global/images/1.0.0/mobile/download-bg.jpg") no-repeat center top;
    box-sizing: border-box;
    z-index: 100;
}
.shoujixidi_conent{
    width: 1210px;
    height: 600px;
    /* background-color: palegoldenrod; */
    margin: 0 auto;
    position: relative;
    display: flex;  
}
.shoujixidi_conent_lf{
    position: absolute;
    width: 578px;
    height: 617px;
    top: 64px;
    left: 126px;
    background: url("https://static.xidibuy.com/static/global/images/1.0.0/mobile/download-lf.png") no-repeat center top;
}
.shoujixidi_conent_rt{
    width: 500px;
    height: 600px;
    /* background-color: yellow; */
    margin-left: 650px;
    padding: 128px 0 100px 50px;
    box-sizing: border-box;
}
.right_top{
    width: 370px;
    height: 100px;
    /* background-color: yellowgreen; */
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
}
.right_top>div:nth-child(1){
    width: 100px;
    height: 100px;
    background: url("https://static.xidibuy.com/static/global/images/1.0.0/mobile/download-icon.png") no-repeat center top;

}
.right_top>div:nth-child(2){
    width: 218px;
    height: 90px;
    top: 4px;
    left: 134px;
    background: url("https://static.xidibuy.com/static/global/images/1.0.0/mobile/download-tit.png") no-repeat center top;
}
.right_button{
    width: 370px;
    height: 142px;
    display: flex;
    justify-content: space-between;   
}
.right_button>div:nth-child(1){
    width: 142px;
    height: 142px;
    background-image: url('https://static.xidibuy.com/static/global/images/1.0.0/mobile/download-erwm.png')
}

.ia>div:nth-child(1){
    width: 200px;
    height: 60px;
    background: url("https://static.xidibuy.com/static/global/images/1.0.0/mobile/download-iphone.png") no-repeat center top;
    cursor: pointer;
    margin-bottom: 20px;
}
.ia>div:nth-child(2){
    width: 200px;
    height: 60px;
    background: url("https://static.xidibuy.com/static/global/images/1.0.0/mobile/download-android.png") no-repeat center top;
    cursor: pointer;
}
#sao{
    margin-top: 8px;
    font-size: 14px;
    color: white;
}
.tian{
    width: 100%;
    height:80px;
    background-color: #ffffff;
}
</style>

