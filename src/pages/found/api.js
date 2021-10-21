
import request from '../../utils/request'
const pre = '/mock'
/**
 * @des 获取发现列表
 * @param {*} params 
 * @returns 
 */
export const getFeedList = params => request.post(`${pre}/feed/FlowerFeed/getFeedList`, params)

/**
 * @des 文章详情
 * @param {*} params 
 * @returns 
 */
 export const getFeedDetail = params => request.post(`${pre}/feed/FlowerFeed/getFeedDetail`, params)

