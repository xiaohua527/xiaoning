<template>

    <div id="login">
        <!-- email -->

        <div class="form_box">
            <form action="">
                <!-- <div class="tel_login">邮箱注册</div> -->
                <!-- 路由切换邮箱和手机 -->
                <div class="cut_box">
                    <div>
                        <div class="cut_box_kuang">
                            <input type="text" placeholder="请输入邮箱地址">
                        </div>
                        <!-- <div class="cut_box_two">
                            <div><input type="text" placeholder="请输入图片验证码"></div>
                            <div></div>
                        </div> -->
                        <div class="cut_box_two">
                            <div><input type="text" placeholder="请输入验证码"></div>
                            <div class="">获取验证码</div>
                        </div>
                        <div class="cut_box_kuang">
                                <input type="text" placeholder="请输入密码，6-16位字母、数字、符号的组合">
                            </div>
                        <div class="cut_box_kuang">
                            <input type="text" placeholder="请再次输入密码">
                        </div>
                    </div>

                    <div class="agreen">
                        <input type="submit" value="同意协议并注册">
                    </div>
                </div>
            </form>



        </div>


    </div>
</template>
<script>
    export default {
        name: "login"
    };
</script>
<style scoped>
    /* .form_box{
     width: 520px;
     height: 472px;
     padding: 0 80px;
     background-color: orangered;
     margin:  0 auto;
     box-sizing: border-box;
     
 } */
    .tel_login {
        text-align: right;
        margin-bottom: 11px;
        font-size: 12px;
        color: rgb(74, 130, 177);
    }

    .cut_box {
        width: 360px;
        height: 260px;
        /* background-color: palegoldenrod; */
    }

    .cut_box input {
        width: 80%;
        height: 22px;
        margin-left: 20px;
        border: transparent;
    }

    .cut_box_kuang {
        width: 360px;
        height: 50px;
        box-sizing: border-box;
        padding: 14px 10px 12px 0;
        margin-bottom: 20px;
        font-size: 14px;
        border: 1px solid #ddd;
    }

    .cut_box_two>div {
        width: 180px;
        height: 50px;
        box-sizing: border-box;
        padding: 14px 10px 12px 0;
        font-size: 14px;
        border: 1px solid #ddd;
        margin-bottom: 20px;
    }
    .cut_box_two>div:nth-child(2){
    text-align: center;
}       
    .cut_box_two {
        display: flex;
    }

    .agreen>input {
        border: transparent;

        width: 360px;
        height: 50px;
        background-color: rgb(78, 214, 209);
        margin-bottom: 20px;
        font-size: 18px;
        color: white;
        border: 1px solid #ddd;
        margin: 0;
        /* display: block; */
    }
</style>