// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import $ from 'jquery'
Vue.config.productionTip = false
import VueLazyload from 'vue-lazyload'//图片懒加载
Vue.use(VueLazyload)
import './assets/css/style.css'
import animate from 'animate.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
