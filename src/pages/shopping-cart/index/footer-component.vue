<template>
  <div class="shopping-cart-footer">
    <span 
    class="total-price"
    v-show="showPrice"
    >&yen;{{formatPrice(totalPrice/100)}}</span>
    <van-button 
    class="btn" 
    type="primary" 
    round  
    :disabled="!showPrice" 
    v-show="!isEdit"
    >立即购买
  </van-button>
    <van-button  
    class="btn" 
    type="danger" 
    round 
    v-show="isEdit"
    @click="removeProduct"
    >删除</van-button>
  </div>
</template>
<script>
import { formatPrice } from '../../../utils/utils'
import * as apis from '../api'
export default{
  props:{
    isEdit:Boolean,
    selected:Array
  },
  data(){
    return{
      
    }
  },
  computed:{
    //是否展示价格
     showPrice(){
        //编辑状态不显示价格
        const { isEdit } = this
        let res = false
        if(this.selected.length && !isEdit){
           res = true
        }
        return res

     },
     totalPrice(){
        let total = this.selected.reduce((prev,item) =>{
             prev = prev + (item.product_price - 0)
             return prev
        },0) 
        return total
     }
  },
  methods:{
    formatPrice,
    /**
     * @desc 删除数据
    */
    async removeProduct(){
      const ids = this.selected.map(item => item.item_id)
      let res = await apis.removeFromCart({ids});
      console.log('res',res,ids)
               
    }

  }
}
</script>
<style lang="less" scoped>
@import url('@/less/index.less');
.shopping-cart-footer{
  position: fixed;
  bottom:0;
  left:0;
  width:100vw;
  background-color:white;
  z-index:2;
  .boxShadow();
  .padding();
  .flex(flex-end, center);
  box-sizing: border-box;
  .btn{
    width:180px;
    margin-left:20px;
  }
}
</style>