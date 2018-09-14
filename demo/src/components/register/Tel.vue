<template>
        <div id="tel">
            <form action="">
                    <div class="cut_tel">
                           
                            <div class="cut_tel_top">
                                    <div id="tel_logo"></div>
                                <input type="text" placeholder="请输入手机号">
                            </div>
                            <div class="cut_tel_buttom">
                                <div class="cut_tel_buttom_left">
                                    <div id="psw_logo"></div>
                                    <input type="text" placeholder="请输入动态码">
                                </div>
                                
                                <div></div>
                            </div>
                    </div>

            </form>
              

        </div>
    </template>
    <script>
    export default{
        name:"tel"
    }
    </script>
    <style scoped>
   .cut_tel{
       margin-top: 35px;
       width: 360px;
       height: 120px;
       /* background-color: orchid; */
   }
   .cut_tel_top{
       width: 360px;
       height: 50px;
       border: 1px solid #ddd;
      padding-left: 40px;
      box-sizing: border-box;
      /* position: absolute; */
      position: relative;
   }
   .cut_tel input{
       background-color: transparent;
       border: none
   }
   .cut_tel_top>input{
        width: 360px;
        height: 50px;
        border: none;
        background-color: transparent;
   }
   .cut_tel_buttom{
        width: 360px;
       height: 50px;
       border: 1px solid #ddd;
       margin-top: 18px;
      
   }
   .cut_tel_buttom_left{
        width: 180px;
        height: 50px;
        padding-left: 40px;
      box-sizing: border-box;
      position: relative;
      
   }
   .cut_tel_buttom_left>input{
       width: 180px;
       height: 50px;
       border: none;
        background-color: transparent;

   }
   #tel_logo{
       width: 22px;
       height: 22px;
       background: url('https://static.xidibuy.com/static/passport/images/1.0.0/login_tel.png') no-repeat 1px center;
       position: absolute;
       left: 10px;
       top: 13px
       
   }
   #psw_logo{
    width: 22px;
       height: 22px;
       background: url('https://static.xidibuy.com/static/passport/images/1.0.0/login_passwd.png') no-repeat 1px center;
        position: absolute;
       left: 10px;
       top: 13px
   }
    </style>