/**
 * @desc 商品相关路由
 */

const ProductDetail = () => import(/* webpackChunkName: "ProductDetail" */ '../pages/product/product-detail')
/** 
 * 导出路由
*/
export default [
  {
    name: 'ProductDetail',
    path: '/product-detail',
    meta: {
      title: '商品详情'
    },
    component: ProductDetail
  }
]