/**
 * @description 购物车相关apis
 */
import request from '../../utils/request';
const pre = '/mock'
// const pre = 'http://zw63jjm.hn3.mofasuidao.cn/api'
// const pre = '/api'
/**
 * @desc 购物车信息
 * @returns 
 */
export const getShoppingDetail = () => request.post(`${pre}/shoppingCart/shoppingCart/getUserShoppingCartDetail`)

/**
 * @desc 获取商品数量
 * @returns 
 */
 export const getShoppingCartCunt = () => request.post(`${pre}/shoppingCart/shoppingCart/getUserShoppingCartDetail`)

/**
 * @desc 添加到购物车
 * @returns 
 */
 export const updateCart = (params) => request.post(`${pre}/shoppingCart/shoppingCart/updateCart`, params)
/**
 * @desc 购物车删除数据
 * @returns 
 */
 export const removeFromCart = (params) => request.post(`http://zw63jjm.hn3.mofasuidao.cn/api/shoppingCart/shoppingCart/removeShoppingCart`, params)