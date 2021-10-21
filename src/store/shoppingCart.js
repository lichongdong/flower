import * as types from '../typing'
import * as apis from '../pages/shopping-cart/api'
/**
 * @description 购物车store
 */
export default {
    namespaced: true,
    state: {
        count: 0, // 当前购物车数量
        format_total_price: '',
        total_price: 0,
    },
    mutations: {
        // 同步更新state
        updateState(state, payload) {
            // console.log('payload',payload)
            // 赋值
            // state.count = payload.count
            // state.format_total_price = payload.format_total_price
            // state.total_price = payload.total_price
            Object.keys(payload).map(key => state[key] = payload[key])
            // 在store中不能使用展开运算符，否则会导致store更新错误
            // state = {
            //   ...state,
            //   ...payload
            // }
        }
    },
    actions: {
        // 异步更新state
        async [types.UPDATESHOPPINGCOUNT]({commit}){
            let res = await apis.getShoppingCartCunt()
            // console.log('res',res,commit)
            if (res && res.errorCode == 0) {
                const { count } = res.data
                commit('updateState',{ count })
                // const { format_total_price, total_price,  shopping_cart_product_list } = res.data
                // const count = shopping_cart_product_list.reduce((prev, info) => {
                //     prev = prev + info.count
                //     return prev
                // }, 0)
                // commit('updateState', {format_total_price, total_price, count})
            }

        }
    }
}

