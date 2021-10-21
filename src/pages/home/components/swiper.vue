<template>
  <div class="swiper-wrap">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="swiper in swipers"
        :key="swiper.id"
      >
        <van-image
          height="180"
          fit="cover"
          class="swiper-img"
          :src="swiper.image"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import * as apis from '../api'
export default {
  data() {
    return {
      swipers: []
    }
  },
  methods: {
    /**
     * @desc 加载banner
     */
    async loadSwiper() {
      let res = await apis.getAdvertisingList()
      // 判断请求时否成功
      if (res && res.errorCode == 0) {
        this.swipers = res.data.advertising_list
      }
    }
  },
  created() {
    this.loadSwiper()
  }
}
</script>
<style lang="less" scoped>
.swiper-wrap {
  .van-swipe-item {
    .swiper-img{
      width: 100vw;
    }
  }
}

</style>