import request from "../../utils/request";
// 前缀 通过这个变量切换mock或者后台接口
const pre = '/mock'
/**
 * @desc 获取swiper
 * @returns 
 */
export const getAdvertisingList = () => request.post(`${pre}/operation/Advertising/getAdvertisingList`)
/**
 * @desc 获取首页商品列表
 * @return { Promise } axios reponse
 */
export const getProductList = data => request.post(`${pre}/product/FlowerProduct/getProductList`, data)