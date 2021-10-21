<template>
  <div class="detail-footer">
      <van-badge :content="shoppingCount" class="shopping-cart">
          <van-icon name="shopping-cart-o" color="#1989fa" @click.stop="toShoppingCart"/>
      </van-badge>
      <div class="btn-wrap">
        <van-button type="primary" round @click.stop="addShoppingCart">加入购物车</van-button>
        <van-button type="info" round @click.stop="justToBuy">立即购买</van-button>
      </div>
  </div>

</template>
<script>
import { mapState } from 'vuex'
export default{
  data(){
    return{

    }
  },
  computed:{
     ...mapState('ShoppingCart',{
        shoppingCount:'count'
     })
  },

  methods:{
    addShoppingCart(){
        this.$bus.$emit('addShoppingCartShow',true)
    },
    toShoppingCart(){
      this.$router.push({
        path:'/shopping-cart'
      })
    },
    justToBuy(){
        this.$bus.$emit('justToBuyShow',true)
    }
  },
  mounted(){
  }
}
</script>
<style lang="less" scoped>
@import url('@/less/index.less');
.detail-footer{
  .flex(space-between);
  padding:0 20px;
  position: fixed;
  z-index:2;
  bottom:0;
  left:0;
  width:100vw;
  height:120px;
  box-shadow:10px 0px 10px #ccc;
  box-sizing:border-box;
  background-color: white;
  .shopping-cart{
    transform: translateY(25px);
    .van-icon{
      font-size:30px;
    }
  }
  .btn-wrap{
    .van-button {
      margin-left: 20px;
      //border-radius:20px;
      transform: translateY(8px);
      .padding2(0, 32px);
    }
  }
}
</style>