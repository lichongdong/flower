<template>
  <div class="order-result-wrap">
    <MainHeader title="订单结果页" :showBack="false" />
    <OrderStatus :info="info" />
    <InfoCard :info="orderInfo" class="order-result-info" />
    <div class="btn-group">
      <van-button type="primary" block @click="toOtherPage('/')">返回首页</van-button>
      <van-button type="primary" plain block @click="toOtherPage('/order-list')">我的订单</van-button>
    </div>
  </div>
</template>
<script>
import OrderStatus from './order-detail/order-status.vue'
import InfoCard from './order-detail/order-card.vue'
export default {
  name: 'OrderResult',
  components: {
    OrderStatus, // 订单状态
    InfoCard, // 信息卡片
  },
  props: {},
  data() {
    return {
      info: {
        order_status: 0,
        shipping_word: '订单状态描述文字'
      },
      // 订单状态信息
      orderInfo: {
        title: '订单信息',
        infoList: [
          {
            label: '订单号码',
            value: 'order_sn'
          },
          {
            label: '下单时间',
            value: 'timer'
          },
          {
            label: '支付方式',
            value: 'PAYCHANNELS[pay_channel]'
          }
        ]
      }
    }
  },
  computed: {},
  methods: {
    /**
     * @des 跳转页面
     */
    toOtherPage(path) {
      this.$router.replace({path})
    }
  },
  mounted(){},
  created() {},
}
</script>
<style lang="less" scoped>
@import url('@/less/index.less');
.order-result-wrap{
  .order-result-info{
    .margin3(-180px, 30px, 0);
  }
  .btn-group{
    .margin3(100px, 30px, 0);
    button{
      margin-bottom: 40px;
    }
  }
}
</style>
