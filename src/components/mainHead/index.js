import mainHeader from './index.vue'

/**
 * @desc 全局注册组件
 * @param {*} Vue 
 */
mainHeader.install = (Vue)=>{
  Vue.component(mainHeader.name, mainHeader)
}
/**
 * @desc 导出组件
 */
export default mainHeader