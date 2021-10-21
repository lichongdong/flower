// 导入谢到的mock文件
const home = require('./home')
const product = require('./proudct')
const ShoppingCartMockApis = require('./shopping-cart')
const OrderList = require('./order')
const OrderDetail = require('./order-detail')
const UserAddress = require('./user')
const Found = require('./found')
/**
 * @desc mock注册入口
 * @param { Object } app express 实例
 */
module.exports = app => {
  // 注册首页相关路由
  home(app)
  //注册商品相关路由
  product(app)
  // 购物车相关mock
  ShoppingCartMockApis(app)
  //订单列表
  OrderList(app)
  //订单详情
  OrderDetail(app)
  //收货地址信息
  UserAddress(app)
  //发现页
  Found(app)
}
