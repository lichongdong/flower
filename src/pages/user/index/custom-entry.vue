<template>
  <div class="custom-entry-wrap">
    <div class="left">
      联系我们
    </div>
    <div class="right">
      <span class="small-text">客服电话</span>
      <a href="tel:10086">
        <van-icon name="arrow" class="more-arrow" size="16" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomEnry',
  components: {},
  props: {
  
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
  mounted(){},
  created() {},
}
</script>

<style lang="less" scoped>
@import url('@/less/index.less');
.custom-entry-wrap{
  .flex(space-between);
  .padding2(0, 24px);
  background-color: @white;
  .boxShadow();
  .bR();
  .margin2();
  height: 84px;
  line-height:84px;
  .left{
    font-size: @font-xl;
    color: @black85;
  }
  .right{
    font-size: @font-xs;
    color: @black65;
    .more-arrow{
      color: @black65;
      vertical-align: middle;
      transform: translateY(-2px);
    }
  }
}
</style>