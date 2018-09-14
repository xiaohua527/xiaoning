<template>
        <div id="plain">
                <div class="register_input_box">
                                
                        <div class="register_input">
                            <div><img src="https://static.xidibuy.com/static/passport/images/1.0.0/login_name.png" alt=""></div>
                            <input type="text" name="" id="" placeholder="邮箱 / 手机 / 用户名" >
                        </div>
                        <div class="register_input1">
                            <div>
                                <img src="https://static.xidibuy.com/static/passport/images/1.0.0/login_passwd.png" alt="">
                            </div>
                            <input type="text" name="" id="" placeholder="请输入密码">
                           <span class="eye"></span>
                        </div>
                       
                   
                </div>
        </div>
    </template>
    <script>
    export default{
        name:"plain"
    }
    </script>
    <style scoped>
    
    .register_input_box{
    width: 360px;
    height: 100px;
    /* background-color: orange; */
    margin-top: 30px;
    border: 1px solid #ddd;
   
}

.register_input_box input{
    border: none;
    background-color: transparent;
}
.register_input{
width: 100%;
height: 50px;
border-bottom: 1px solid #ddd;
padding: 14px 10px 12px 42px;
box-sizing: border-box;
position: relative;

}
.register_input1{
width: 100%;
height: 50px;
position: relative;
padding: 14px 10px 12px 42px;
box-sizing: border-box;
}
.eye{  
    position: absolute;
    background: url('https://static.xidibuy.com/static/passport/images/1.0.0/loginSignup-icon.png') no-repeat 0 -40px;
    top: 14px;
    right: 10px;
    width: 22px;
    height: 22px;
}
.register_input>div{
    width: 22px;
    height: 22px;
    /* background: url('https://static.xidibuy.com/static/passport/images/1.0.0/login_name.png') no-repeat 10px 14px; */
    position: absolute;
    left: 10px;
}
.register_input1>div{
    width: 22px;
    height: 22px;
    /* background: url('https://static.xidibuy.com/static/passport/images/1.0.0/login_passwd.png') no-repeat 10px 14px; */
    position: absolute;
    left: 10px;
}
    </style>