<template>
  <div
    class="product-item"
    @click="toDetail"
  >
    <van-image
      height="160"
      class="product-img"
      fit="cover"
      :src="info.base_info.main_image"
    />
    <h3 class="product-name van-multi-ellipsis--l2">
      {{info.base_info.product_name}}
    </h3>
    <div class="prdouct-price">
      &yen; {{info.base_info.format_sale_price}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    info: Object
  },
  methods: {
    /**
     * @desc 跳转至详情页面
     */
    toDetail() {
      const { item_id:id } = this.info.base_info

      // 使用query传递路由参数
      this.$router.push({
        path: '/product-detail',
        query: { id }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import url('@/less/index.less');
.product-item{
  width: calc(50% - 10px);
  margin-bottom: 20px;
  background-color: @white;
  .bR();
  .boxShadow();
  overflow: hidden;
  
  &:nth-child(odd) {
    margin-right: 20px;
  }
  .product-img{
    width: 100%;
  }
  .product-name{
    font-size: @font-md;
    line-height: 36px;
    height: 72px;
    .padding2(20px);
  }
  .prdouct-price{
    font-size: @font-md;
    .padding2(20px);
  }
}
</style>