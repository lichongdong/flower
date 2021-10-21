<template>
  <div class="feed-text">
    {{ info.content }}
  </div>
</template>

<script>
export default {
  name: 'FeedText',
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
.feed-text{
  margin-bottom: 20px;
  font-size: @font-md;
  color: @black85;
  line-height: 48px;
}
</style>
