<template>
  <div class="found-wrap">
     <MainHeader title="发现" :showBack="false"/>
      <van-list
        v-model="loading"
        :finished="!pageInfo.has_more"
        finished-text="没有更多了"
        @load="loadInfo"
      >
      <div class="feed-list">
        <FeedItem 
        v-for="(feed,idx) in list"
        :key="idx"
        :info="feed"/>
      </div>
      </van-list>
  </div>
</template>
<script>
import * as apis from './api'
import FeedItem from './index/feed-item.vue'
export default{
  data(){
    return{
      list:[],
      loading:false,
      pageInfo:{
        index:0,
        page_size:10,
        count:10,
        has_more:true
      }
    }
  },
  methods:{
    async loadInfo(){
      let res = await apis.getFeedList(this.pageInfo);
      this.loading = false
      if(res && res.errorCode ==0){
        const {feed_info_list,page_info} = res.data
        this.pageInfo = page_info
        this.list = [...feed_info_list,...this.list]
      }
    }

  },
  mounted(){
    this.loadInfo()
  },
  components:{
    FeedItem
  }
}
</script>
<style lang="less" scoped>
.found-wrap{
  padding-bottom:100px;
}
.feed-list{
  padding-top:20px;
  padding-bottom:160px;
}
</style>