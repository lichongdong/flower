/**
 * @desc 订单相关路由
 */
const ShoppingCart = ()=> import('../pages/shopping-cart')
const OrderList = ()=> import('../pages/order')
const OrderDetail = ()=> import('../pages/order/order-detail')
const OrderResult = ()=> import('../pages/order/order-result')
export default[
    {
        path:'/shopping-cart',
        name:'ShoppingCart',
        meta:{
            title:'购物车'
        },
        component:ShoppingCart
    },
    {
        path:'/order-list',
        name:'OrderList',
        meta:{
            title:'我的订单'
        },
        component:OrderList
    },
    {
        path:'/order-detail/:item_id',
        name:'OrderDetail',
        meta:{
            title:'订单详情'
        },
        component:OrderDetail
    },
    {
        path:'/order-result',
        name:'OrderResult',
        meta:{
            title:'订单结果页'
        },
        component:OrderResult
    }
]
