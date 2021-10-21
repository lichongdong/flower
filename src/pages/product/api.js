import request from '../../utils/request';

const pre = '/mock'
/**
 * @description 获取商品详情
 * @param { Object } data post请求参数
 * @param { string } id 商品id
 * @return { Promise } axios requst
 * 
 * @example getProductDetail({ id: 商品id })
 */
export const getProductDetail = data => request.post(`${pre}/product/FlowerProduct/getProductDetail`, data)