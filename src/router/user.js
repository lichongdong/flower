/**
 * @desc 用户相关路由
 */

const User = () => import(/* webpackChunkName: "user" */ '../pages/user')
const PersonalInfo = () => import ('../pages/user/personal-info')
const AddressList = () =>import('../pages/user/address-list')
const AddressAdd = () =>import('../pages/user/address-add')
/**
 * @desc 导出路由
 */
export default [
  {
    path: '/user',
    name: 'User',
    meta: {
      title: '用户中心'
    },
    component: User
  },
  {
    path:'/personal-info',
    name:'PersonalInfo',
    meta:{
      title:'个人资料'
    },
    component:PersonalInfo
  },
  {
    path:'/address-add',
    name:'AddressAdd',
    meta:{
      title:'添加收货地址'
    },
    component:AddressAdd
  },
  {
    path:'/addressList',
    name:'AddressList',
    meta:{
      title:'收货地址列表'
    },
    component:AddressList
  }
]