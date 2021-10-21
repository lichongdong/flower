<template>
  <div class="feed-image">
    <van-image
      class="content"
      height="220"
      fit="cover"
      :src="info.image"
    />
  </div>
</template>

<script>
export default {
  name: 'FeedImage',
  components: {},
  props: {
    info: Object
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
.feed-image{
  margin-bottom: 20px;
  .content{
    width: 100%;
  }
}
</style>
