<template>
  <div class="feed-link">
    <p class="content">{{ info.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'FeedLink',
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
.feed-link{
  margin-bottom: 10px;
  .content{
    font-size: @font-xl;
    // color: @primary-color;;
  }
}
</style>
