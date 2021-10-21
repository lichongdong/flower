<template>
  <div class="product-list">
    <van-list
      v-model="loading"
      :finished="!pageInfo.has_more"
      finished-text="没有更多了"
      @load="loadInfo"
    >
    <h3 class="title">新品推荐</h3>
    
    <div class="list-wrap">
      <template>
        <ProductItem
          v-for="(info, key) in list"
          :key="key" 
          :info="info"
        />
      </template>
    </div>
    </van-list>
  </div>
</template>
<script>
import ProductItem from './product-item.vue'
import * as apis from '../api'
export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  data() {
    return {
      loading: false,
      refreshing: false,
      // 多页加载参数
      pageInfo: {
        index: 0,
        page_size: 10,
        has_more: true,
        count: 0
      },
      // 保存商品列表
      list: []
    }
  },
  methods: {
    /**
     * @desc 加载商品数据
     */
    async loadInfo() {
      let res = await apis.getProductList(this.pageInfo)
      this.loading = false
      // this.refreshing = false
      // 更新父组件的刷新状态
      // this.$emit('update', 'refreshing', false)
      // 发布事件
      // this.$bus.$emit('updateRefresh', false)
      this.$event.$emit('updateRefresh', false)
      // 请求成功，将信息保存
      if (res && res.errorCode == 0) {
        this.pageInfo = res.data.page_info
        // console.log(this.pageInfo.length)
        this.list = this.list.concat(res.data.product_list)
      }
    },
    /**
     * @desc 重新加载数据
     */
    onRefresh() {
      this.list = []
      this.pageInfo = {
        index: 0,
        page_size: 10,
        has_more: true,
        count: 0
      }
      this.loadInfo()
    }
  },
  created() {
    // this.loadInfo()
  }
}
</script>
<style lang="less" scoped>
@import url('@/less/index.less');
.product-list {
  margin-top: 20px;
  padding-bottom: 180px;
  .title{
    .margin2(60px);
    text-align: center;
    font-size: @font-lg;
    color: @black85;

  }
  .list-wrap{
    .flex();
    padding: 0 24px;
    flex-wrap: wrap;
  }
}
</style>