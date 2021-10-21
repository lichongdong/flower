const express = require('express')
/**
 * @desc 发现页面列表 
 */
const getFoundList = (request, response) => {
  // 列表
  const list = [{
    "feed_detail": {
      "image_list": [{
        "image": "http://www.lcdstudy.com/image11.jpeg",
        "width": 1349,
        "height": 1799
      }],
      "description": "希望你不是假装坚强",
      "title": null,
      "content_tag_list": null
    },
    "feed_base_info": {
      "feed_id": 1001556,
      "collect_status": 0,
      "feed_status": 1,
      "feed_status_name": null,
      "feed_status_img": null,
      "feed_type": 1,
      "template_type": 1,
      "detail_url": null,
      "view_num": 222,
      "view_num_str": "222",
      "publish_time_str": "7个月前",
      "publish_timestamp": 1610866157
    },
    "author_info": {
      "user_id": 1,
      "user_type": 1,
      "nick_name": "小编精选",
      "avatar": "https://ipxcdn.jfshare.com/image/6c8e4245a5e2abe65d668f1300a41873.jpeg",
      "user_medal_list": []
    },
    "interactive_info": null,
    "decoration_info": null,
    "advertising_info": null
  }, {
    "feed_detail": {
      "image_list": [{
        "image": "http://www.lcdstudy.com/image10.jpeg",
        "width": 4032,
        "height": 3024
      }],
      "description": "心存感激，所遇即温柔♠️",
      "title": null,
      "content_tag_list": null
    },
    "feed_base_info": {
      "feed_id": 1001555,
      "collect_status": 0,
      "feed_status": 1,
      "feed_status_name": null,
      "feed_status_img": null,
      "feed_type": 1,
      "template_type": 1,
      "detail_url": null,
      "view_num": 226,
      "view_num_str": "226",
      "publish_time_str": "7个月前",
      "publish_timestamp": 1610846972
    },
    "author_info": {
      "user_id": 1,
      "user_type": 1,
      "nick_name": "小编精选",
      "avatar": "https://ipxcdn.jfshare.com/image/6c8e4245a5e2abe65d668f1300a41873.jpeg",
      "user_medal_list": []
    },
    "interactive_info": null,
    "decoration_info": null,
    "advertising_info": null
  }, {
    "feed_detail": {
      "image_list": [{
        "image": "http://www.lcdstudy.com/image9.jpeg",
        "width": 1080,
        "height": 1349
      }],
      "description": "爱要让她知道",
      "title": null,
      "content_tag_list": null
    },
    "feed_base_info": {
      "feed_id": 1001554,
      "collect_status": 0,
      "feed_status": 1,
      "feed_status_name": null,
      "feed_status_img": null,
      "feed_type": 1,
      "template_type": 1,
      "detail_url": null,
      "view_num": 230,
      "view_num_str": "230",
      "publish_time_str": "7个月前",
      "publish_timestamp": 1610846319
    },
    "author_info": {
      "user_id": 1,
      "user_type": 1,
      "nick_name": "小编精选",
      "avatar": "https://ipxcdn.jfshare.com/image/6c8e4245a5e2abe65d668f1300a41873.jpeg",
      "user_medal_list": []
    },
    "interactive_info": null,
    "decoration_info": null,
    "advertising_info": null
  }, {
    "feed_detail": {
      "image_list": [{
        "image": "http://www.lcdstudy.com/image8.jpeg",
        "width": 1666,
        "height": 1250
      }],
      "description": "长路漫漫 终有归途",
      "title": null,
      "content_tag_list": null
    },
    "feed_base_info": {
      "feed_id": 1001553,
      "collect_status": 0,
      "feed_status": 1,
      "feed_status_name": null,
      "feed_status_img": null,
      "feed_type": 1,
      "template_type": 1,
      "detail_url": null,
      "view_num": 241,
      "view_num_str": "241",
      "publish_time_str": "7个月前",
      "publish_timestamp": 1610343187
    },
    "author_info": {
      "user_id": 1,
      "user_type": 1,
      "nick_name": "小编精选",
      "avatar": "https://ipxcdn.jfshare.com/image/6c8e4245a5e2abe65d668f1300a41873.jpeg",
      "user_medal_list": []
    },
    "interactive_info": null,
    "decoration_info": null,
    "advertising_info": null
  }, {
    "feed_detail": {
      "image_list": [{
        "image": "http://www.lcdstudy.com/image7.jpeg",
        "width": 3024,
        "height": 4032
      }],
      "description": "黑马",
      "title": null,
      "content_tag_list": null
    },
    "feed_base_info": {
      "feed_id": 1001552,
      "collect_status": 0,
      "feed_status": 1,
      "feed_status_name": null,
      "feed_status_img": null,
      "feed_type": 1,
      "template_type": 1,
      "detail_url": null,
      "view_num": 278,
      "view_num_str": "278",
      "publish_time_str": "8个月前",
      "publish_timestamp": 1609644378
    },
    "author_info": {
      "user_id": 1,
      "user_type": 1,
      "nick_name": "小编精选",
      "avatar": "https://ipxcdn.jfshare.com/image/6c8e4245a5e2abe65d668f1300a41873.jpeg",
      "user_medal_list": []
    },
    "interactive_info": null,
    "decoration_info": null,
    "advertising_info": null
  }, {
    "feed_detail": {
      "image_list": [{
        "image": "http://www.lcdstudy.com/image6.jpeg",
        "width": 4032,
        "height": 3024
      }],
      "description": "我们有过各种创伤，但今天应该快活",
      "title": null,
      "content_tag_list": null
    },
    "feed_base_info": {
      "feed_id": 1001551,
      "collect_status": 0,
      "feed_status": 1,
      "feed_status_name": null,
      "feed_status_img": null,
      "feed_type": 1,
      "template_type": 1,
      "detail_url": null,
      "view_num": 333,
      "view_num_str": "333",
      "publish_time_str": "8个月前",
      "publish_timestamp": 1608628236
    },
    "author_info": {
      "user_id": 1,
      "user_type": 1,
      "nick_name": "小编精选",
      "avatar": "https://ipxcdn.jfshare.com/image/6c8e4245a5e2abe65d668f1300a41873.jpeg",
      "user_medal_list": []
    },
    "interactive_info": null,
    "decoration_info": null,
    "advertising_info": null
  }, {
    "feed_detail": {
      "image_list": [{
        "image": "http://www.lcdstudy.com/image5.jpeg",
        "width": 1334,
        "height": 750
      }],
      "description": "霸道总裁专属......",
      "title": null,
      "content_tag_list": null
    },
    "feed_base_info": {
      "feed_id": 1001550,
      "collect_status": 0,
      "feed_status": 1,
      "feed_status_name": null,
      "feed_status_img": null,
      "feed_type": 1,
      "template_type": 1,
      "detail_url": null,
      "view_num": 387,
      "view_num_str": "387",
      "publish_time_str": "8个月前",
      "publish_timestamp": 1608555162
    },
    "author_info": {
      "user_id": 1,
      "user_type": 1,
      "nick_name": "小编精选",
      "avatar": "https://ipxcdn.jfshare.com/image/6c8e4245a5e2abe65d668f1300a41873.jpeg",
      "user_medal_list": []
    },
    "interactive_info": null,
    "decoration_info": null,
    "advertising_info": null
  }, {
    "feed_detail": {
      "image_list": [{
        "image": "http://www.lcdstudy.com/image4.jpeg",
        "width": 3995,
        "height": 2996
      }],
      "description": "圣诞快乐，祝你快乐",
      "title": null,
      "content_tag_list": null
    },
    "feed_base_info": {
      "feed_id": 1001549,
      "collect_status": 0,
      "feed_status": 1,
      "feed_status_name": null,
      "feed_status_img": null,
      "feed_type": 1,
      "template_type": 1,
      "detail_url": null,
      "view_num": 414,
      "view_num_str": "414",
      "publish_time_str": "8个月前",
      "publish_timestamp": 1608551324
    },
    "author_info": {
      "user_id": 1,
      "user_type": 1,
      "nick_name": "小编精选",
      "avatar": "https://ipxcdn.jfshare.com/image/6c8e4245a5e2abe65d668f1300a41873.jpeg",
      "user_medal_list": []
    },
    "interactive_info": null,
    "decoration_info": null,
    "advertising_info": null
  }, {
    "feed_detail": {
      "image_list": [{
        "image": "http://www.lcdstudy.com/image3.jpeg",
        "width": 4608,
        "height": 3456
      }],
      "description": "生活要有仪式感",
      "title": null,
      "content_tag_list": null
    },
    "feed_base_info": {
      "feed_id": 1001548,
      "collect_status": 0,
      "feed_status": 1,
      "feed_status_name": null,
      "feed_status_img": null,
      "feed_type": 1,
      "template_type": 1,
      "detail_url": null,
      "view_num": 467,
      "view_num_str": "467",
      "publish_time_str": "8个月前",
      "publish_timestamp": 1608543499
    },
    "author_info": {
      "user_id": 1,
      "user_type": 1,
      "nick_name": "小编精选",
      "avatar": "https://ipxcdn.jfshare.com/image/6c8e4245a5e2abe65d668f1300a41873.jpeg",
      "user_medal_list": []
    },
    "interactive_info": null,
    "decoration_info": null,
    "advertising_info": null
  }, {
    "feed_detail": {
      "image_list": [{
        "image": "http://www.lcdstudy.com/image2.jpeg",
        "width": 1920,
        "height": 2560
      }],
      "description": "阳光与花",
      "title": null,
      "content_tag_list": null
    },
    "feed_base_info": {
      "feed_id": 1001547,
      "collect_status": 0,
      "feed_status": 1,
      "feed_status_name": null,
      "feed_status_img": null,
      "feed_type": 1,
      "template_type": 1,
      "detail_url": null,
      "view_num": 542,
      "view_num_str": "542",
      "publish_time_str": "8个月前",
      "publish_timestamp": 1608471283
    },
    "author_info": {
      "user_id": 1,
      "user_type": 1,
      "nick_name": "小编精选",
      "avatar": "https://ipxcdn.jfshare.com/image/6c8e4245a5e2abe65d668f1300a41873.jpeg",
      "user_medal_list": []
    },
    "interactive_info": null,
    "decoration_info": null,
    "advertising_info": null
  }]
  const { index } = request.body
  const has_more = index <= 3 // 只给三页 
   const res = {
    "errorCode": 0,
    "errorMessage": "success",
    "data": {
      "feed_info_list": list,
      "page_info": {
        "page_size": 10,
        "index": index + 1,
        has_more,
        "count": 10
      }
    },
    "success": true
  }
   response.json(res)
}
/**
 * @desc 文章详情页
 */
 const getFeedDetail = (request, response) => {
  // 列表
   const res = {
    "errorCode": 0,
    "errorMessage": "success",
    "data": {
      "feed_detail": {
        "content_list": [
          {
            "type": 'image',
            "image": "http://saidad.oss-cn-guangzhou.aliyuncs.com/image/5fb3733984292e37b7c29e72f9e4e766.jpeg",
            "width": 1349,
            "height": 1799
          },
          {
            "type": 'link',
            "content": '更多信息',
            "src": '/',
          },
          {
            "type": 'text',
            "content": ` AS Flower  Boutique 主要以花艺设计为主，为顾客定制属于自己的的专属花礼。创始人力求精致和品味，从花材的挑选、搭配、制作到包装，无一不注重细节
            AS Flower  Boutique环绕花卉与绿植，引入与自然相关的产品，提倡一种接近自然的生活方式，推出与花艺植物相关的课程和产品，并承接各种商务活动花艺布置。 `
          }
        ],
        "description": "希望你不是假装坚强",
        "title": '热爱生活，收集时光',
        "content_tag_list": null
      },
      "feed_base_info": {
        "feed_id": 1001556,
        "collect_status": 0,
        "feed_status": 1,
        "feed_status_name": null,
        "feed_status_img": null,
        "feed_type": 1,
        "template_type": 1,
        "detail_url": null,
        "view_num": 222,
        "view_num_str": "222",
        "publish_time_str": "7个月前",
        "publish_timestamp": 1610866157
      },
      "author_info": {
        "user_id": 1,
        "user_type": 1,
        "nick_name": "小编精选",
        "avatar": "https://ipxcdn.jfshare.com/image/6c8e4245a5e2abe65d668f1300a41873.jpeg",
        "user_medal_list": []
      },
      "interactive_info": null,
      "decoration_info": null,
      "advertising_info": null
    }
  }
   response.json(res)
}

module.exports = app => {
  app.post('/mock/feed/FlowerFeed/getFeedList', express.json(), getFoundList)
  app.post('/mock/feed/FlowerFeed/getFeedDetail', getFeedDetail)
}