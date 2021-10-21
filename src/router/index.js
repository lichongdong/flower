import Vue from 'vue';
import VueRouter from 'vue-router';
// import demo from './demo' // 项目demo展示路由
import home from './home' // 首页及登录页面路由
import user from './user' // 用户信息相关路由
import found from './found' // 发现页面路由
import product from './prudcut' // 商品相关路由
import order from './order' // 订单相关路由

Vue.use(VueRouter)
// 保存所有的路由
const routes = [
  // ...demo,
  ...home,
  ...user,
  ...found,
  ...product,
  ...order
]
/**
 * @desc 创建路由
 */
const router = new VueRouter({
  routes,
  mode: 'history'
})
/**
 * @desc 路由守卫函数
 */
router.beforeEach((to, from, next) => {
  // 统一处理页面title
  document.title = to.meta.title
  
  // 必须调用next 函数，否无法跳转页面\
  next()
})
//  导出路由对象
export default router