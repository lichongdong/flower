/* eslint-disable no-useless-escape */
/**
 * @desc 商品详情
 * @param {*} requetst 
 * @param {*} response 
 */
const getProductDetail = (requetst, response) => {

  let reslut = {
    "errorCode": 0,
    "errorMessage": "success",
    "data": {
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
      "specifications": "进口花伴手礼小花束",
      "galley_image_list": null,
      "brand_story": " AS Flower  Boutique 主要以花艺设计为主，为顾客定制属于自己的的专属花礼。创始人力求精致和品味，从花材的挑选、搭配、制作到包装，无一不注重细节\n AS Flower  Boutique环绕花卉与绿植，引入与自然相关的产品，提倡一种接近自然的生活方式，推出与花艺植物相关的课程和产品，并承接各种商务活动花艺布置。",
      "care_instructions": " 花束养护方法：花束收到后需要当天拆包装修根水养，水位10cm-20cm左右，尽量放在常温通风的地方\n前期-每天或者隔天换水修根一次，修根需要冲洗一下杆子，水一定要保持干净哦～水脏容易滋生细菌，杆子生病腐烂不吸水就造成了花的枯萎。\n中期-因为每一种甚至每一朵花的生命周期都不太一样，有的叶片会先枯萎，我们需要把不好的叶片处理掉，如果有花的花边碰撞损坏或者发霉就把不好的花瓣拔掉，避免感染好的，养护的得好是可以延长花期呢\n尾期：开始发现鲜花精神状态不佳之后继续剪根还能维持一段时间，越短越好，剪短之后不能维持原本的造型了可以分放置小杯子或者小瓶子里面，小小的几只放在洗手台、床头柜、窗户旁也是很可爱的～请务必让她们绽放到最后！",
      "special_note": "周四晚10:00前截止下一周的订单,超过支付时间的顺延下下周，特殊情况另请沟通。",
      "logistics_desc": "专人配送，一个师傅只送一束花。",
      "after_sale_instructions": "因鲜花商品的特殊属性,将不接受退货,如有质量问题,请在收货后24小时内联系客服。",
      "purchase_note": "1:鲜花是季节性商品，某些花材可能由于天气、运输等突发状况而出现缺货，特殊造型的花材和设计款花束是无法复制的，因为花材一直在变化，花材的大小曲线也是不同的，只能做相同色系风格，不能保证一模一样，如果图片花材已经下市或者缺货我们会用相同色系风格的花材代替。\n 2:节日和恶劣天气的情况下不支持指定时间配送，建议自行下单或自取。3:下单请务必保证收件人电话接听畅通，地址不详，电话无人接通，再次配送需要买家承担相关费用。\n4:客服时间：10:00-18:00，非本时间段内的留言我们将在工作时的第一件回复处理。",
      "detail": {
        "detail_list": [{
          "id": 0,
          "type": "image",
          "content": "http://www.lcdstudy.com/image11.jpeg"
        }, {
          "id": 1,
          "type": "image",
          "content": "http://www.lcdstudy.com/image3.jpeg"
        }, {
          "id": 2,
          "type": "image",
          "content": "http://www.lcdstudy.com/image4.jpeg"
        }, {
          "id": 3,
          "type": "image",
          "content": "http://www.lcdstudy.com/image5.jpeg"
        }, {
          "id": 4,
          "type": "image",
          "content": "http://www.lcdstudy.com/image6.jpeg"
        }]
      }
    },
    "success": true
  }

  response.json(reslut)
}
/**
 * @desc 商品相关mock api
 * @param { object } app express 实例
 */
const ProductMockApis = app => {
  app.post('/mock/product/FlowerProduct/getProductDetail', getProductDetail)
}
/**
 * @desc 导出api
 */
module.exports = ProductMockApis
