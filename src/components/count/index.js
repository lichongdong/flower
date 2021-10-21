import ProductCount from './index.vue'

/**
 * @desc 全局注册组件
 * @param {*} Vue
 */
ProductCount.install = (Vue)=>{
    Vue.component(ProductCount.name, ProductCount)
}
/**
 * @desc 导出组件
 */
export default ProductCount