<template>
  <div class="product-item">
      <div class="left">
           <van-checkbox v-model="checked" @change="change"></van-checkbox>
      </div>
      <div class="product-info">
          <van-image
          class="product-img"
          width="80"
          height="80"
          :src="info.main_image"/>
          <div class="product-more-info">
              <h3 class="product-name" van-multi-ellipsis--l2>{{info.product_name}}</h3>
              <div class="product-desc">
                  <span class="product-price">&yen;{{info.format_product_price}}</span>
                  <span class="product-num">x1</span>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default{
  props:{
    info:Object
  },
  data(){
    return{
      checked:false
    }
  },
  methods:{
    changeChecked(){
        const { info } = this
        // console.log('info',info)
        this.checked = info.checked
    },
     change(checked){
        const { info } = this
        // console.log('checked',checked,info)
        this.$emit('selected',{...info,checked})
     }
  },
  watch:{
     info:{
        deep:true,
        handler(){
          //当数据发生变化时，更新选中状态
          this.$nextTick(this.changeChecked)
        }
     }
  },
  mounted(){
     this.changeChecked();
  }
}
</script>
<style lang="less" scoped>
@import url('@/less/index.less');
.product-item{
  .padding(24px);
  .flex(flex-start);
  align-items:center;
   .product-info{
     flex:1;
     .flex(flex-start);
     margin-left:20px;
     .product-more-info{
        margin-left:20px;
        flex:1;
        flex-direction:column;
        justify-content:space-between;
        display: flex;
     }
     .product-name{
       font-size: @font-md;
       color: @black85;
       line-height: 44px;
       height: 88px;
     }
     .product-desc{
       .flex(space-between);
       font-size: @font-md;
       color: @black65;
     }
   }

}
</style>
<style>
.van-image__error, .van-image__img, .van-image__loading{
   border-radius:8px;
}
</style>