<template>
  <div class="type-entry">
    <div class="month-flower">
      <van-icon name="calendar-o" color="#00b799" size="24" />包月鲜花
    </div>
    <div class="gift-flower">
      <van-icon name="gift-o" color="#00b799" size="24" />礼品鲜花
    </div>
  </div>
</template>
<style lang="less" scoped>
@import url('@/less/index.less');
.type-entry{
  height: 160px;
  .flex;
  // display: flex;
  // justify-content: space-between;
  // margin: 20px 24px;
  .margin2(20px);
  font-size: @font-md;
  color: @black65;
  
  .month-flower,
  .gift-flower{
    padding-left: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    height: 100%;
    background: #fff;
  }
  .month-flower {
    margin-right: 16px;
    .bR4(16px, 0, 0, 16px)
  }
  .gift-flower{
    .bR4(0, 16px, 16px, 0);
  }
  .van-icon{
    margin-right: 6px;
  }
}
</style>

