import request from "../utils/request";
const pre = '/mock'
// const pre = '/api'
/**
 * @desc 获取首页banner
 * @return { Promise } axios.request
 */
export const getAdveeristing = () => request.post(`${pre}/operation/Advertising/getAdvertisingList?id=123435&b=2222`)
/**
 * @desc mock 模拟数据接口
 * @returns 
 */
export const getMockList = () => request.post(`${pre}/data/getMockList`)