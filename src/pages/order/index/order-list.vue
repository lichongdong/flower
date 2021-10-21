<template>
<van-list
  v-model="loading"
  :finished="!pageInfo.has_more"
  finished-text="没有更多了"
  @load="loadInfo"
>
    <div class="order-list">
    <OrderItem
    v-for="(item,index) in list"
    :key="index"
    :info="item"
    @refresh="onRefreshing"
    />
</div>
</van-list>

</template>
<script>
import OrderItem from './order-item'
import * as apis from '../apis'
// import * as apis from '../api'
export default {
	props:{
		currentTab:Number,//显示的tab
		refreshing:Boolean,
    idx:Number,//当前list的下标
	},
	data(){
		return{
      list:[],//订单列表
      loading:false,
      pageInfo:{//页面加载参数
        index:0,
        page_size:10,
        count:10,
        has_more:true,
     }
		}
	},

	methods:{
       async loadInfo(){
        const {pageInfo,status} = this
          let res  = await apis.getOrderList({...pageInfo,order_type:status});
          // console.log('res',res)
          this.loading = false;
         if(res && res.errorCode == 0){
          this.list = [...this.list,...res.data.order_list]
          this.pageInfo = res.data.page_info
         }
       },
       //刷新数据
       onRefreshing(){
         this.list = []//清空之前的数据
          // 重置分页参数
         this.pageInfo = {
            index: 0,
            page_size: 10,
            count: 10,
            has_more: true
          }
           // 重新加载数据
        this.loadInfo()
       }
	},
  watch:{
    //子组件根据父组件传递过来的参数刷新页面
      refreshing(refreshing){
       //判断只有当前页面的数据显示的时候才刷新页面
       if(this.idx == this.currentTab && refreshing){
           this.onRefreshing()
       }
      }
  },
	mounted(){
       this.loadInfo();
	},
	components:{
		OrderItem
	}
}
</script>
<style lang="less" scoped>
	
</style>