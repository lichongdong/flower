<template>
  <div class="feed-detail">
    <MainHeader title="文章详情" />
    <van-image
      fit="cover"
      height="220"
      class="main-image"
      :src="info.feed_detail.content_list[0].image"
    />
    <h3 class="feed-title">{{ info.feed_detail.title }}</h3>
    <div class="content-wrap">
      <!-- 动态组件的写法 -->
      <component
        v-for="(item, idx) in info.feed_detail.content_list"
        :key="idx"
        :info="item"
        :is="getComponent(item.type)"
      />
    </div>
  </div>
</template>

<script>
import * as apis from './api'
import TextComponent from './feed-detail/text-component.vue'
import ImageComponent from './feed-detail/image-component.vue'
import LinkComponent from './feed-detail/link-component.vue'
export default {
  name: 'FeedDetail',
  components: {
    TextComponent, // 文本组件
    ImageComponent, // 图片文本组件
    LinkComponent, // 链接
  },
  props: {},
  data() {
    return {
      component: 'TextComponent',
      info: {
        feed_detail: {
          content_list:[{image: ''}]
        }
      }, // 文章详情
    }
  },
  computed: {},
  methods: {
    /**
     * @desc 加载页面数据
     */
    async loadInfo() {
      const params = this.$route.query
      let res = await apis.getFeedDetail(params)
      if (res && res.errorCode == 0) {
        this.info = res.data
      }
    },
    getComponent(type) {
      if (!type) return ''
      // console.log('type', type)
      
      const coms = {
        'text': TextComponent, // 文本组件
        'image': ImageComponent, // 图片文本组件
        'link': LinkComponent, // 链接
      }

      return coms[type]
    }
  },
  mounted(){},
  created() {
    this.loadInfo()
  },
}
</script>

<style lang="less" scoped>
@import url('@/less/index.less');
.feed-detail{
  .main-image{
    width: 100%;
  }
  .feed-title{
    font-size: @font-md;
    color: @black85;
    .padding2(24px);
  }
  .content-wrap{
    .padding3(20px, 24px, 160px);
  }
}
</style>
