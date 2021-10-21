import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersistedstate from 'vuex-persistedstate'
import createLogger from 'vuex/dist/logger'
import a from './a'
import moduleB from './b'
import ShoppingCart from './shoppingCart'
// 注入vueX
Vue.use(Vuex)

// 定义modules
const modules = {
  a, // 模块名称，在页面使用胡数据的时候会用到
  moduleB,
  ShoppingCart
}
// 创建vuex 实例
const stroe = new Vuex.Store({
  modules,
  state: {
    global:{
      userInfo: {
        name: 'leo',
        age: 12
      },
      token: 'token'
    }
  },
  plugins: [
    createLogger(),
    vuexPersistedstate({key: '$store'})
  ]
})
// 导出store对象
export default stroe

