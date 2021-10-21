<template>
  <div class="product-detail-wrap">
    <MainHeader title="详情页"/>
    <van-image
    class="product-main-image"
    fit="cover"
    height="320"
    :src="info.base_info.main_image"/>
    <DetailContent :info="info"/>
    <DetailFooter :info="info"/>
    <AddShoppingCart :info="info"/>
  </div>
</template>

<script>
import * as apis from './api'
import DetailContent from './product-detail/detail-content'//详情信息
import DetailFooter from './product-detail/footer'//底部信息
import AddShoppingCart from './product-detail/add-shopping-cart'//购物车弹出框
export default {
  name: 'ProductDetail',
  data(){
    return{
      info:{//给它默认值,这样不会一进来就报错
        base_info: {
          main_image:''
        },
        detail:{
          detail_list: {}
        }
      }
    }
  },
  methods:{
   async  productDetail(){
      const  { id } = this.$route.query;
      let res = await apis.getProductDetail({id});
      if(res && res.errorCode == 0){
        this.info = res.data
      }
      // console.log(this.info);


    }
  },
  created(){
    this.productDetail();
  },
  components:{
    DetailContent,
    DetailFooter,
    AddShoppingCart
  }
}
</script>
<style lang="less">
.product-detail-wrap{
  padding-bottom:200px;
}
</style>