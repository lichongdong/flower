/**
 * @desc 首页及登录等路由
 */
import Home from '../pages/home'
const Login = () => import('../pages/login')
// 登录 首页路由
export default [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: Login
  }
]