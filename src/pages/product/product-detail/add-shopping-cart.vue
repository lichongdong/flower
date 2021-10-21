<template>
   <van-popup
   v-model="show"
   position="bottom"
   round
   >
     <div class="addShoppingCart">
       <div class="product-info">
         <van-image width="80" height="80" radius="10" :src="info.base_info.main_image"/>
         <div class="right">
           <span class="product-title">{{info.base_info.product_name}}</span>
           <p class="product-price">&yen;{{info.base_info.format_sale_price}}</p>
         </div>
       </div>
       <div class="content-wrap">
         <ProductCount @change="countChange"/>
         <van-button 
          type="primary" 
          v-show="!toBuy"
          block 
          @click="addToShoppingCart">
          加到购物车
         </van-button>
         <van-button
          type="primary"
          v-show="toBuy"
          block  
          @click="loadAddress">
          立即购买
        </van-button>
       </div>
     </div>
   </van-popup>

</template>
<script>
import { mapActions } from 'vuex'
// import * as apis from '../../shopping-cart/api'
import * as typs from '../../../typing'
import {updateCart} from "../../shopping-cart/api";
import { getAddressList } from "../../user/api"
export default{
  props:{
    info:Object,//当前商品详情信息
  },
  data(){
    return{
       show:false,
       count:1,
       toBuy:false,//判断是加入购物车还是立即购买按钮
    }
  },
  methods:{
    ...mapActions('ShoppingCart', [typs.UPDATESHOPPINGCOUNT]),
    //count 变化 更新当前count
    countChange(count){
      this.count = count
      // console.log(this.count)
    },
    //加数据到购物车
   async addToShoppingCart() {
     const {count, info} = this
     const params = {count, item_id: info.base_info.item_id}
     let res = await updateCart(params)
     // console.log('res',res)
     if (res && res.errorCode == 0) {
       //添加成功关闭当前弹窗
       this.$notify({
         type: 'success',
         message: '加入购物车成功!'
       })
     }
     this[typs.UPDATESHOPPINGCOUNT]()
      //调用添加到购物车接口
      this.reset()
    },
    //添加成功后关闭当前弹窗
    reset(){
      this.show = false
      this.count = 1
      this.toBuy = false
    },

     /**
     * @desc 获取商品信息
     */
     getProductInfo(info){
        const { 
          item_id,
          sku_id,
          product_name,
          sale_price,
          format_sale_price,
          main_image
        } = info.base_info
        return {
          item_id,
          sku_id,
          product_name,
          product_price:sale_price,
          format_product_price:format_sale_price,
          "count":1,
          main_image
        }
     },
     /**
      * @desc 获取地址信息
      */
      async loadAddress(){
          let res = await getAddressList();
          // console.log('res',res)
          if( res && res.errorCode == 0){
            const { shipping_address_list } = res.data
            // 地址列表第一个就是默认地址
            this.createOrder(shipping_address_list[0])
          }
      },
      /**
       * @desc 创建订单
       */
      createOrder(shipping_info){
          // console.log(shipping_info)
          const { info,count } = this
          //商品的价格
          const { original_price,sale_price,shipping_price} = info.base_info
          //商品信息
          const product = this.getProductInfo(info)
           const params = {
              product_list: [
                product
              ],
              shipping_info,
              count,
              discount_price: (original_price - sale_price) * count,
              shipping_price,
              pay_price: (sale_price * count),
              order_status: 0, // 订单未创建，默认为0
              pay_status: 0,
              product_total_price: (original_price - sale_price) * count,
              total_product_count: count,
              shipping_word: '',
              close_countdown: ''
           }
           console.log('params',params)
      }

  },
  created(){
    this.$bus.$on('addShoppingCartShow',(show)=>{
      this.show = show
      this.toBuy = false
    })
    this.$bus.$on('justToBuyShow',(show)=>{
      this.show = show
      //显示立即购买按钮
      this.toBuy = true
    })
  }
}
</script>
<style lang="less" scoped>
@import url('@/less/index.less');
.addShoppingCart{
   .product-info{
      .flex();
     padding:50px 30px;
     font-size:40px;
     border-bottom:1px solid #ccc;
     //box-shadow:5px 0px 5px #ccc;
     .right{
       margin-left:30px;
       display:flex;
       flex-direction:column;
       justify-content:space-between;
     }
   }
  .content-wrap{
    .van-button{
      //width:100%;
    }
  }
}
</style>