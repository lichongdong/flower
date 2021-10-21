const Mock = require('mockjs')
/**
 * @desc 首页相关mock
 */
const getAdveeristing = (request, response) => {
  // url传递过来的参数通过 request.query 获取
  // post请求的参数 通过request.body 获取
  const result = {
    "errorCode": 0,
    "errorMessage": "success",
    "data": {
      "advertising_list": [{
        "id": "27",
        "title": "特供",
        "link": "\/pages\/productDetail\/index?id=295",
        "image": "http://www.lcdstudy.com/image11.jpeg",
        "type": "image"
      }, {
        "id": "28",
        "title": "520情人节",
        "link": "\/pages\/productDetail\/index?id=295",
        "image": "http://www.lcdstudy.com/image2.jpeg",
        "type": "image"
      }, {
        "id": "29",
        "title": "七夕情人节",
        "link": "\/pages\/productDetail\/index?id=295",
        "image": "http://www.lcdstudy.com/image3.jpeg",
        "type": "image"
      }]
    },
    "success": true
  }
  // express 提供的方法
  response.json(result)
}
/**
 * @desc 获取商品列表
 * @param {*} request 
 * @param {*} response 
 */
const getProductList = (request, response) => {
  let { page_size, index, } = request.body
  const count = 45 // 总数据 find({}).count() // mongoose 查询
  // post请求的参数 通过request.body 获取
  // console.log('body', request.body,'params', request.query)
  index = index + 1
  let list = [{
    "base_info": {
      "product_name": "进口花伴手礼小花束",
      "publish_status": "1",
      "summary": "进口花伴手礼小花束",
      "product_type": 2,
      "stock": 99990,
      "sale": 13,
      "sale_price": 25800,
      "format_sale_price": "258.00",
      "original_price": 29800,
      "format_original_price": "298.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1610858927,
      "item_id": 378,
      "sku_id": 0,
      "sort": 37,
      "main_image": "http://www.lcdstudy.com/image1.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "年宵花水泥盆蝴蝶兰设计",
      "publish_status": "1",
      "summary": "年宵花水泥盆蝴蝶兰设计",
      "product_type": 2,
      "stock": 99994,
      "sale": 7,
      "sale_price": 52000,
      "format_sale_price": "520.00",
      "original_price": 68000,
      "format_original_price": "680.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1612086744,
      "item_id": 393,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http://www.lcdstudy.com/image2.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "年宵花蝴蝶兰盆栽设计",
      "publish_status": "1",
      "summary": "年宵花蝴蝶兰盆栽设计",
      "product_type": 2,
      "stock": 99998,
      "sale": 2,
      "sale_price": 52000,
      "format_sale_price": "520.00",
      "original_price": 68000,
      "format_original_price": "680.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1612086177,
      "item_id": 392,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http://www.lcdstudy.com/image3.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "红色系定制",
      "publish_status": "1",
      "summary": "红色系定制",
      "product_type": 2,
      "stock": 99999,
      "sale": 0,
      "sale_price": 68000,
      "format_sale_price": "680.00",
      "original_price": 88000,
      "format_original_price": "880.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1612085978,
      "item_id": 391,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http://www.lcdstudy.com/image4.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "进口寸寸金90cm（含花器挂件）",
      "publish_status": "1",
      "summary": "进口寸寸金90cm（含花器挂件）",
      "product_type": 2,
      "stock": 99999,
      "sale": 16,
      "sale_price": 98000,
      "format_sale_price": "980.00",
      "original_price": 108000,
      "format_original_price": "1080.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1612085810,
      "item_id": 390,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http://www.lcdstudy.com/image5.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "何其美",
      "publish_status": "1",
      "summary": "何其美",
      "product_type": 2,
      "stock": 99995,
      "sale": 19,
      "sale_price": 52000,
      "format_sale_price": "520.00",
      "original_price": 68000,
      "format_original_price": "680.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": 1612085437,
      "created_timestamp": 1612085305,
      "item_id": 389,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http://www.lcdstudy.com/image6.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "紫色恋人",
      "publish_status": "1",
      "summary": "紫色恋人",
      "product_type": 2,
      "stock": 99999,
      "sale": 14,
      "sale_price": 128000,
      "format_sale_price": "1280.00",
      "original_price": 158000,
      "format_original_price": "1580.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1612085138,
      "item_id": 388,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http://www.lcdstudy.com/image7.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "情人节圆筒礼盒",
      "publish_status": "1",
      "summary": "情人节圆筒礼盒",
      "product_type": 2,
      "stock": 99999,
      "sale": 13,
      "sale_price": 39800,
      "format_sale_price": "398.00",
      "original_price": 52000,
      "format_original_price": "520.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1611829185,
      "item_id": 387,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http://www.lcdstudy.com/image8.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "巨型亚克力枪炮礼盒",
      "publish_status": "1",
      "summary": "巨型亚克力枪炮礼盒",
      "product_type": 2,
      "stock": 99997,
      "sale": 14,
      "sale_price": 158000,
      "format_sale_price": "1580.00",
      "original_price": 188000,
      "format_original_price": "1880.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1611828887,
      "item_id": 386,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http://www.lcdstudy.com/image9.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
  }, {
    "base_info": {
      "product_name": "透视亚克力a级玫瑰花盒",
      "publish_status": "1",
      "summary": "透视亚克力a级玫瑰花盒",
      "product_type": 2,
      "stock": 99999,
      "sale": 11,
      "sale_price": 39800,
      "format_sale_price": "398.00",
      "original_price": 52000,
      "format_original_price": "520.00",
      "shipping_price": 0,
      "format_shipping_price": "0.00",
      "updated_timestamp": null,
      "created_timestamp": 1611827886,
      "item_id": 385,
      "sku_id": 0,
      "sort": 36,
      "main_image": "http://www.lcdstudy.com/image10.jpeg"
    },
    "specifications": null,
    "galley_image_list": null,
    "brand_story": null,
    "care_instructions": null,
    "special_note": null,
    "logistics_desc": null,
    "after_sale_instructions": null,
    "purchase_note": null,
    "detail": null
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
      "product_list": list,
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
 * @desc 使用mock模拟数据
 * @param {*} request 
 * @param {*} response 
 */
const getMockList = (request, response) => {
  const result = {
    errorCode: 0,
    errorMessage: 'success', 
    data: Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|10': [{
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1,
          'date': Mock.Random.date(),
          'name': Mock.Random.cname(),
          'desc': Mock.Random.cparagraph()
      }]
  })
  }
  response.json(result)
}
/**
 * @desc 注册首页相关路由
 * @param {*} app 
 */
const HomeMockApis = app => {
  // 注册路由
  app.post('/mock/operation/Advertising/getAdvertisingList', getAdveeristing)
  /**
   * @desc 获取首页商品列表
   */
  app.post('/mock/product/FlowerProduct/getProductList', getProductList)
  // 使用mockjs 模拟数据
  app.post('/mock/data/getMockList', getMockList)
}
// 导出路由
module.exports = HomeMockApis
