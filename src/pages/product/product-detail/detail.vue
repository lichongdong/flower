<template>
  <div class="detail-image">
    <span>商品详情</span>
    <van-image
    fit="cover"
    v-for="(item,index) in info.detail_list"
    :src="item.content"
    :key="index"/>
  </div>
</template>
<script>
export default{
  props:{
    info:Object
  },
  data(){
    return{

    }
  }
}
</script>
<style lang="less" scoped>
.detail-image{
  span{
    display:block;
    font-size:33px;
    padding:50px 24px;
  }
}
</style>