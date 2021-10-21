import Vue from 'vue'
import './vant' // 引入UI库
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible' // 处理px 自动转化rem

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
