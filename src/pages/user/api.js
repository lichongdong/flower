import request from '../../utils/request'
const pre ='/mock'
/**
 * @desc 获取收货地址列表
 * @returns 
 */
export const getAddressList = () => request.post(`${pre}/user/shippingAddress/getShippingAddressList`)