import Vue from 'vue'
// import Vant from 'vant'
import './assets/css/reset.css'
import 'vant/lib/index.css' // 引入样式

import MainHeader from './components/mainHead'
import ProductCount from './components/count'
import bus from './utils/bus'
import event from './utils/event'

// ui 库按需引入
// import {
//   Button,
// } from 'vant'

// Vue.use(Button)
// 事件发布订阅
Vue.prototype.$bus = bus;
// 手写发布订阅
Vue.prototype.$event = event;
// UI组件全部引入
import Vant from 'vant';
Vue.use(Vant)
// 全局注册main header组件
Vue.use(MainHeader)
// console.log('ProductCount',ProductCount)
// 商品计数器
Vue.use(ProductCount)


