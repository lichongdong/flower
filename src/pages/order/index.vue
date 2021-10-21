<template>
<div class="order">
	<MainHeader title="我的订单" />
	<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
       <van-tabs v-model="active">
        <van-tab 
        v-for="(tab,idx) in tabs"
        :title="tab.label"
        :key="idx"
        >
        <OrderList
        :currentTab="active"
        :refreshing="refreshing"
        :idx="idx"
        />
       </van-tab>
      </van-tabs>
    </van-pull-refresh>
</div>
</template>
<script>
import { entrys } from '../user/index/order-entry'
import OrderList from './index/order-list'
export default{
	data(){
		return{
           active:0,
           refreshing:false,
           tabs:[{label:'全部',key:'10',icon:''},...entrys]//tabs数据
		}
	},
	methods:{
		initActive(){
			// console.log(this.$route.query)
          const {tab} = this.$route.query;
          const tabs = {
              all: 0,
              10: 1,
              30: 2,
              40: 3,
              60: 4,
            }
            //设置默认展示的tab
            this.active = tabs[tab];
            // console.log(this.active);
		},
		onRefresh(){
			// console.log(123)
			this.refreshing = false
		}
 
	},
	components:{
		OrderList
	},

    mounted(){
       this.initActive()
    }
}
</script>
<style lang="less" scoped>
.order{
	padding-bottom:130px;
}
</style>