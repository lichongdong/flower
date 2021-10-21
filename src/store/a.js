import * as types from "../typing"

// vuex 模块化
const moduleA = {
  namespaced: true, // 通过这个数据配置module，
  state: {
    count: 0
  },
  mutations: {
    // 同步更新state
    /**
     * @desc 更新count的值
     * @param { Object } state moduleA state 对象 
     * @param { number } payload 最新的count的值
     * @return void
     */
    increase(state, payload) {
      state.count = payload
    },
    [types.DECREASE](state, payload) {
      state.count = payload
      console.log('payload', payload)
    }
  },
  actions: {
    // 异步更新state
    decrease({commit, state}) {
      let count = state.count - 1
      setTimeout(() => {
        commit(types.DECREASE, count)
      }, 2000)
    }
  }
}

export default moduleA