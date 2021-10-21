<template>
  <div class="main-header">
    <slot name="left">
      <div class="left">
        <van-icon
        name="arrow-left"
        v-show="showBack"
        @click="goBack"
        />
      </div>
    </slot>
   
    <div class="main-title">
      {{title}}
    </div>
    <slot name="right">
      <div class="right">

      </div>
    </slot>
    
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  props:{
    title:{
      type:String,
      default:'东哥商城'
    },
    showBack:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return {

    }
  },
  methods:{
    //返回上一页
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.main-header{
  height: 120px;
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 36px;
  color: rgba(0, 0, 0, .85);
}
</style>