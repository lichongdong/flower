<template>
  <div class="feed-item-wrap" @click="toDetail">
      <van-image 
      fit="cover"
      height="220"
      width="100vw"
      class="feed-image"
      :src="info.feed_detail.image_list[0].image"
      />
      <h6 class="feed-desc"  style="padding:20px 20px;">{{ info.feed_detail.description }}</h6>
      <div class="feed-more-info">
        <div class="left">
          小编精选 {{ info.feed_base_info.publish_time_str }}
        </div>
        <div class="right">
          <van-icon name="eye-o" size="18" />
          {{ info.feed_base_info.view_num_str }}
        </div>
      </div>
  </div>
</template>
<script>
export default{
  props:{
    info:Object
  },
  data(){
    return{

    }
  },
  methods:{
    toDetail(){
      const { feed_id } = this.info.feed_base_info
      this.$router.push({
        path:'/feed-detail',
        query:{ feed_id }
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import url('@/less/index.less');
.feed-list-wrap{
  background-color:white;
  .bR();
  .boxShadow();
  overflow: hidden;
    .feed-image{
      width:100%;
    }
}
.feed-desc{
  color: @black85;
  margin-top:20px;
}

.feed-more-info{
   display:flex;
   justify-content:space-between;
   font-size:20px;
   color: @black65;
   padding:20px 20px;
}
</style>