<template>
  <div class="cart-shopping-num">
      <div class="num">
           <span>购买数量</span>
           <van-stepper
            v-model="value"
            :min="min"
            :max="max"
           @change="change"/>
      </div>
  </div>
</template>
<script>

export default {
  name:'ProductCount',
  data(){
    return{
        value:1,
        min:1,
        max:99
    }
  },
  methods:{
    change(count){
      // console.log(count)
       // 通知父组件，当前数据发生了变化
      this.$emit('change',count)
    }

  }
}

</script>
<style lang="less" scoped>
@import url('@/less/index.less');
.cart-shopping-num{
  .num{
    .flex();
    justify-content: space-between;
    border-radius:10px;
    padding:20px 30px;
    margin:30px 20px;
    font-size:@font-xl;
    box-shadow:0px 0px 10px 5px #ccc;
  }

}
</style>