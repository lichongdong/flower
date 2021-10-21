// vuex 模块化
const moduleB = {
  namespaced: true, // 通过这个数据配置module，
  state: {
    count: 100
  },
  mutations: {
    // 同步更新state
  },
  actions: {
    // 异步更新state
  }
}

export default moduleB