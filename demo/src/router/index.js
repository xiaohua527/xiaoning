import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/page/Homepage'
import register from '@/components/register/Register'//登录页面
import plain from '@/components/register/Plain'//登录
import tel from '@/components/register/Tel'//手机登录
import login from '@/components/register/Login'//注册页面
import goRegister from '@/components/register/Goregister'//点击前往注册页面
import findPsw from '@/components/register/findPsw'//找回密码页面
import ShoujiXidi from '@/components/home/ShoujiXidi'//找回密码页面
import Shiliuguo from '@/components/common/Shiliuguo'//16国首页挂载的大组件
import shouye from '@/components/common/Shiliushoye/shouye'//十六国首页
import Chufang from '@/components/common/Shiliushoye/Chufang'//厨房
import Xiebao from '@/components/common/Shiliushoye/Xiebao'//鞋包

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
     {
      path: '/',
      name: 'homepage',
      component: homepage,
   },
   {
     path:"/login",
     name: 'login',
     component: login,
   },
  {
    path:"/goRegister",
    name: 'goRegister',
    component: goRegister,
    
  },
  // 十六国首页
  {
    path:"/Shiliuguo",
    name: 'Shiliuguo',
    component: Shiliuguo,
    redirect:'shouye',
    children:[{
      path:"/shouye",
      name: 'shouye',
      component: shouye,
  
    },{
      path:"/Chufang",
      name: 'Chufang',
      component: Chufang,
  
    },{
      path:"/Xiebao",
      name: 'Xiebao',
      component: Xiebao,
  
    },]
    
  },
  {
    path:"/ShoujiXidi",
    name: 'ShoujiXidi',
    component: ShoujiXidi,

  },
  {
    path:"/findpsw",
    name: 'findpsw',
    component: findPsw,

  },
  // 16国首页组件
  
  
   {
    path: '/register',
    name: 'register',
    component: register,  
    children:[
      {
        path: 'plain',
        name: 'plain',
        component: plain,
    },
    {
      path: 'tel',
      name: 'tel',
      component: tel,
    }
    ]
 },
 
  ]
})
