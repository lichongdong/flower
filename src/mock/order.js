/* eslint-disable no-useless-escape */
/**
 * @desc 订单列表
 * @param {*} requetst 
 * @param {*} response 
 */
 /**
 * @desc 获取商品列表
 * @param {*} request 
 * @param {*} response 
 */
const getUserShoppingOrderList = (request, response) => {
  let { page_size, index, } = request.body
  const count = 45 // 总数据 find({}).count() // mongoose 查询
  // post请求的参数 通过request.body 获取
  // console.log('body', request.body,'params', request.query)
  index = index + 1
  let list = [{
        "item_id": 289,
        "sku_id": 0,
        "product_name": "进口花伴手礼小花束",
        "product_price": 25800,
        "product_type": 2,
        "format_product_price": "258.00",
        "count": 2,
        "order_status":10,
        "created_timestamp": 1605630006,
        "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/eb209ef395fe09dc0db6a36ba2c2a5ca.jpeg"
      }, {
        "item_id": 363,
        "sku_id": 0,
        "product_name": "年宵花水泥盆蝴蝶兰设计",
        "product_price": 52000,
        "product_type": 2,
        "format_product_price": "520.00",
        "count": 1,
        "order_status":10,
        "created_timestamp": 1605787446,
        "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/7f0008089c9174ee43c81af2a25ce788.jpeg"
      }, {
        "item_id": 359,
        "sku_id": 0,
        "product_name": "进口花伴手礼小花束",
        "product_price": 25800,
        "product_type": 2,
        "format_product_price": "258.00",
        "count": 1,
        "order_status":20,
        "created_timestamp": 1605787749,
        "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/eb209ef395fe09dc0db6a36ba2c2a5ca.jpeg"
      },{
        "item_id": 331,
        "sku_id": 0,
        "product_name": "进口花伴手礼小花束",
        "product_price": 25800,
        "product_type": 2,
        "format_product_price": "258.00",
        "count": 1,
        "order_status":20,
        "created_timestamp": 1605788651,
        "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/eb209ef395fe09dc0db6a36ba2c2a5ca.jpeg"
      }, {
        "item_id": 302,
        "sku_id": 0,
        "product_name": "进口花伴手礼小花束",
        "product_price": 25800,
        "product_type": 2,
        "format_product_price": "258.00",
        "count": 1,
        "order_status":30,
        "created_timestamp": 1605858232,
        "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/eb209ef395fe09dc0db6a36ba2c2a5ca.jpeg"
      }, {
        "item_id": 289,
        "sku_id": 0,
        "product_name": "进口花伴手礼小花束",
        "product_price": 25800,
        "product_type": 2,
        "format_product_price": "258.00",
        "count": 1,
        "order_status":40,
        "created_timestamp": 1605859595,
        "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/eb209ef395fe09dc0db6a36ba2c2a5ca.jpeg"
      }, {
        "item_id": 243,
        "sku_id": 0,
        "product_name": "进口花伴手礼小花束",
        "product_price": 25800,
        "product_type": 2,
        "format_product_price": "258.00",
        "count": 1,
        "order_status":50,
        "created_timestamp": 1605859756,
        "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/eb209ef395fe09dc0db6a36ba2c2a5ca.jpeg"
      }, {
        "item_id": 400,
        "sku_id": 0,
        "product_name": "进口花伴手礼小花束",
        "product_price": 25800,
        "product_type": 2,
        "format_product_price": "258.00",
        "count": 1,
        "order_status":60,
        "created_timestamp": 1605859843,
        "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/eb209ef395fe09dc0db6a36ba2c2a5ca.jpeg"
      }, {
        "item_id": 316,
        "sku_id": 0,
        "product_name": "进口花伴手礼小花束",
        "product_price": 25800,
        "product_type": 2,
        "format_product_price": "258.00",
        "count": 1,
        "order_status":60,
        "created_timestamp": 1605875921,
        "main_image": "http:\/\/saidad.oss-cn-guangzhou.aliyuncs.com\/image\/eb209ef395fe09dc0db6a36ba2c2a5ca.jpeg"
      }]
  // 假设我们总共有45条数据， 也就是页面可以被加载五次，最后一次 只返回5条数据
  const has_more = index < 5 
  if (!has_more) {
    list = list.slice(0, 10)
  }
  const result = {
    "errorCode": 0,
    "errorMessage": "success",
    "data": {
      "order_list": list,
      "page_info": {
        page_size,
        index,
        has_more,
        count,
      }
    },
    "success": true
  }
  response.json(result)
}
/**
 * @desc 关闭订单
 */
const cancelOrder = (request, response) => {
    const res = {
        "errorCode": 0,
        "errorMessage": "success",
        data: {}
    }
    response.json(res)
}
/**
 * @desc 删除订单
 */
 const deleteOrder = (request, response) => {
    const res = {
        "errorCode": 0,
        "errorMessage": "success",
        data: {}
    }
    response.json(res)
}
/**
 * @desc 确认收货
 */
 const confirmOrder = (request, response) => {
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
const getUserOrderList = app => {
  app.post('/mock/order/order/getOrderList', getUserShoppingOrderList)
  app.post('/mock/order/order/cancelOrder', cancelOrder)
  app.post('/mock/order/order/deleteOrder', deleteOrder)
  app.post('/mock/order/order/confirmOrder', confirmOrder)
}
/**
 * @desc 导出api
 */
module.exports = getUserOrderList
