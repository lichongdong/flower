/* eslint-disable no-useless-escape */
/**
 * @desc 商品详情
 * @param {*} requetst 
 * @param {*} response 
 */
 const getUserShoppingCartDetail = (requetst, response) => {

  let reslut = {
    "errorCode": 0,
    "errorMessage": "success",
    "data": {
      "shopping_cart_product_list": [{
        "item_id": 378,
        "sku_id": 0,
        "product_name": "进口花伴手礼小花束",
        "product_price": 25800,
        "product_type": 2,
        "format_product_price": "258.00",
        "count": 2,
        "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/eb209ef395fe09dc0db6a36ba2c2a5ca.jpeg"
      }, {
        "item_id": 393,
        "sku_id": 0,
        "product_name": "年宵花水泥盆蝴蝶兰设计",
        "product_price": 52000,
        "product_type": 2,
        "format_product_price": "520.00",
        "count": 1,
        "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/7f0008089c9174ee43c81af2a25ce788.jpeg"
      }, {
        "item_id": 379,
        "sku_id": 0,
        "product_name": "进口花伴手礼小花束",
        "product_price": 25800,
        "product_type": 2,
        "format_product_price": "258.00",
        "count": 1,
        "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/eb209ef395fe09dc0db6a36ba2c2a5ca.jpeg"
      }],
      "total_price": 129400,
      "format_total_price": "1294.00"
    },
    "success": true
  }

  response.json(reslut)
}
/**
 * @desc 加入购物车
 */
 const addUpdateCart = (request, response) => {
    const res = {
        "errorCode": 0,
        "errorMessage": "success",
        data: {}
    }
    response.json(res)
}
/**
 * @desc 购物车数量增加
 */
 const getShoppingCartCunt = (request, response) => {
    const res = {
        "errorCode": 0,
        "errorMessage": "success",
        data: {}
    }
    response.json(res)
}
/**
 * @desc 商品相关mock api
 * @param { object } app express 实例
 */
const ShoppingCartMockApis = app => {
  app.post('/api/shoppingCart/shoppingCart/getUserShoppingCartDetail', getUserShoppingCartDetail)
  app.post('/mock/shoppingCart/shoppingCart/updateCart', addUpdateCart)
  app.post('/mock/shoppingCart/shoppingCart/getUserShoppingCartDetail', getShoppingCartCunt)
}
/**
 * @desc 导出api
 */
module.exports = ShoppingCartMockApis
