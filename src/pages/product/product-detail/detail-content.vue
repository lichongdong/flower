<template>
  <div class="detail-content">
      <div class="product-info">
        <h3>{{info.base_info.product_name}}</h3>
        <div class="product-more-info">
            <span class="product-price">&yen;{{info.base_info.format_sale_price}}</span>
            <span class="sales-count">{{info.base_info.sale}}人购买</span>
        </div>
      </div>
      <Detail :info="info.detail"/>
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="规格参数" name="1">{{info.specifications}}</van-collapse-item>
      <van-collapse-item title="品牌故事" name="2">{{info.brand_story}}</van-collapse-item>
      <van-collapse-item title="购买须知" name="3">{{info.purchase_note}}</van-collapse-item>
      <van-collapse-item title="保养说明" name="4">{{info.care_instructions }}</van-collapse-item>
      <van-collapse-item title="运输说明" name="5">{{info.logistics_desc }}</van-collapse-item>
      <van-collapse-item title="退换货说明" name="6">{{info.after_sale_instructions }}</van-collapse-item>
    </van-collapse>

  </div>
</template>
<script>
import Detail from './detail'
export default{
  props:{
    info:Object
  },
  data(){
    return{
      activeName:['1','2','3','4','5','6']
    }
  },
  components:{
    Detail
  }
}
</script>
<style lang="less" scoped>
.detail-content{
  .product-info{
    padding:24px 24px;
    border-bottom:1px solid #ccc;
    .product-more-info{
      margin-top:30px;
      padding-bottom:15px;
      span{
        margin-right:20px;
      }
    }
  }
}
</style>
<style>
.van-collapse-item{
  padding:0 10px;
  /*box-shadow:0px 0px 2px 1px #ccc;*/
}
.van-cell {
  margin-top:10px;
  border-radius:10px;
  padding:10px 24px;
}
</style>