<template>
  <div class="home-wrap">
    <MainHeader :showBack="false"/>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <Swiper />
    <TypeEntry />
    <ProductList ref='prudcuList' @update="update" />
    </van-pull-refresh>
  </div>
</template>

<script>
import Swiper from './components/swiper.vue' // banner
import TypeEntry from './components/type-entry.vue' // 分类入口
import ProductList from './components/product-list.vue' // 商品列表
export default {
  name: 'HomePage',
  components: {
    Swiper,
    TypeEntry,
    ProductList
  },
  data() {
    return {
      refreshing: false
    }
  },
  methods: {
    /**
     * @desc 更改当前实例属性
     * @param { string } key 当前实力上的属性key
     * @param { any } val 需要更新的值
     */
    update(key, val) {
      this[key] = val
    },
    /**
     * @desc 刷新页面
     */
    onRefresh() {
      this.$refs.prudcuList.onRefresh()
    }
  },
  mounted() {
    // console.log('123123', this)
    // 订阅事件
    // this.$bus.$on('updateRefresh', refreshing => {
    //   this.refreshing = refreshing
    // })
    this.$event.$on('updateRefresh', refreshing => {
      this.refreshing = refreshing
    })
  }
}
</script>