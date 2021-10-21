
/**
 * @desc 获取地址列表
 */
const getAddressList = (request, response) => {
  const res = {
    "errorCode": 0,
    "errorMessage": "success",
    "data": {
      "shipping_address_list": [{
        "id": "304",
        "user_id": "1000130",
        "address": "这个是测出地址，不付款",
        "receiver": "测试账号",
        "province": "上海市",
        "city": "上海城区",
        "area": "长宁区",
        "is_default": "1",
        "phone": "16678991123",
        "created_timestamp": "1608558573",
        "updated_timestamp": "1608615734"
      }],
      "page_info": {
        "page_size": 1,
        "index": 1,
        "has_more": false,
        "count": 0
      }
    },
    "success": true
  }
  response.json(res)
}

module.exports = app => {
  app.post('/mock/user/shippingAddress/getShippingAddressList', getAddressList)
}

