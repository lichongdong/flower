import request from '../../utils/request'

const pre ='/mock'


//订单列表
export const getOrderList = params => request.post(`${pre}/order/order/getOrderList`, params)
//订单详情
export const getOrderDetail = params => request.post(`${pre}/order/order/queryOrderDetailInfo`, params)
//关闭订单
export const cancelOrder = params => request.post(`${pre}/order/order/cancelOrder`,params)
//删除订单
export const deleteOrder = params => request.post(`${pre}/order/order/deleteOrder`,params)
//确认收货
export const confirmOrder = params => request.post(`${pre}/order/order/confirmOrder`,params)