
/**
 * @desc 订单状态
 */
 import { Dialog } from 'vant';
 import * as apis from './apis';

//设置回调
 let  RESOLVE = () =>{}
 let REJECT = () =>{}
 export const STATUES = {
    10:'待付款',
    20:'已付款',
    30:'已付款',
    40:'已付款',
    50:'已付款',
    60:'交易完成',
 }
 /**
 * @desc 操作type
 * @property { string } CANCEL 关闭订单
 * @property { string } TOPAY 去支付
 * @property { string } RUSTTOSHIP 催发货
 * @property { string } CONFIRMORDER 确认收货
 * @property { string } DELETEORDER 删除订单
 */
 const ACTIONTYPES = {
   CANCEL:'CANCEL',//关闭订单
   TOPAY:'TOPAY',//去支付
   RUSTTOSHIP:'RUSTTOSHIP',//催发货
   CONFIRMORDER:'CONFIRMORDER',//确认收货
   DELETEORDER:'DELETEORDER',//删除订单
 }
 /**
 * @desc 不同状态tag
 */
 export const STATUESTAG = {
    10:'primary',
    20:'warning',
    30:'warning',
    40:'warning',
    50:'warning',
    60:'success',
 }  
  /**
 * @desc 不同状态对应的操作按钮
 */
 export const OPERATIONBTNS = {
   10:[
     {
        text:'取消',
        type:'default',
        action:ACTIONTYPES.CANCEL
     },
     {
        text:'去支付',
        type:'primary',
        action:ACTIONTYPES.TOPAY
     }
   ],
   20:[
     {
        text:'催发货',
        type:'info',
        action:ACTIONTYPES.RUSTTOSHIP
     }
   ],
   30:[
     {
        text:'催发货',
        type:'info',
        action:ACTIONTYPES.RUSTTOSHIP
     }
   ],
   40:[
     {
        text:'确认收货',
        type:'primary',
        action:ACTIONTYPES.CONFIRMORDER
     }
   ],
   50:[
     {
        text:'确认收货',
        type:'primary',
        action:ACTIONTYPES.CONFIRMORDER
     }
   ],
    60:[
     {
        text:'删除订单',
        type:'warning',
        action:ACTIONTYPES.DELETEORDER
     }
   ],
 }
 export const ORDERAPIS = {
   [ACTIONTYPES.CANCEL](info){
      Dialog.alert({
        title: '提示',
        message: '你确定要关闭当前订单么?',
      }).then(() => {
        ORDERAPIS.cancelOrder(info)
      });
   },
    //关闭订单
    async cancelOrder(info){
      const { order_sn } = info 
      let res = await apis.cancelOrder(order_sn)
      if(res && res.errorCode == 0){
        RESOLVE(res)
      }else{
        REJECT(res)
      }
    },
      // 去支付
     [ACTIONTYPES.TOPAY](info) {
       console.log(ACTIONTYPES.TOPAY, info)
       if(info){
         RESOLVE(info)
       }else{
        REJECT(info)
       }
     },
       // 催发货
     [ACTIONTYPES.RUSTTOSHIP]() {
       Dialog.alert({
         message: '已经催促店家发货了',
       }).then(() => {
         // on close
       });
     },
      // 确认收货
     [ACTIONTYPES.CONFIRMORDER](info) {
       Dialog.confirm({
         title: '提示',
         message: '你确定已经收到商品了么？',
       })
         .then(() => {
           ORDERAPIS.confirm(info)
         })
     }, 
       // 确认
     async confirm(info) {
       // console.log('confirm', info)
       const { order_sn } = info
       let  res = await apis.confirmOrder(order_sn)
       if(res && res.errorCode == 0 ){
          RESOLVE(res) 
       }else{
          REJECT(res)
       }
     },
       // 删除订单
     [ACTIONTYPES.DELETEORDER](info) {
       Dialog.confirm({
         title: '提示',
         message: '你确定要删除当前订单么？',
       })
         .then(() => {
           ORDERAPIS.delOrder(info)
         })
     },
     // 删除订单
     async delOrder(info) {
       const { order_sn } = info
       let res = await apis.deleteOrder(order_sn)
       if(res && res.errorCode == 0){
          RESOLVE(res)
       }else{
          REJECT(res)
       }
     }
 }
 /**
  * @desc 支付渠道
*/
export const PAYCHANNELS = {
  0:'支付宝支付',
  1:'微信支付',//微信h5支付
  2:'微信支付',//微信jdk支付
}
 /**
 * 
 * @param { string } actionType 操作类型
 */
 export const ACTIONS = (actionType,orderInfo)=> {
    return new Promise((resolve,reject)=>{
          RESOLVE = resolve
          REJECT = reject
          ORDERAPIS[actionType](orderInfo)
    })

 }
