<template>
<div class="order-detail-wrap">
     <MainHeader title="订单详情"/>
     <OrderStatus :info="list"/>
     <OrderInfoCard 
      class="receiver-info" 
      :info="shoppingInfo"
      />
     <OrderInfoCard 
      class="order-info"
      :info="orderInfo"
     />
     <ProductDetailInfoCard 
     :info="list"
     />
     <OrderDetailFooter/>
</div>
</template>
<script>
import OrderStatus from './order-detail/order-status'//订单状态
import OrderInfoCard from './order-detail/order-card'
import ProductDetailInfoCard from './order-detail/product-info'
import OrderDetailFooter from './order-detail/detail-footer'
import * as apis from './apis'
import dayjs from 'dayjs'
import { PAYCHANNELS } from './order-config'
export default{
	data(){
		return{
            list:{}
		}
	},
	computed:{
       //收货信息
       shoppingInfo(){
		let res ={
		address:"",
		area:"",
		city:"",
		phone:"",
		province:"",
		receiver:""
        }
		const { list } = this
		res = list?.shipping_info ? list.shipping_info:res
		return {
			title:'收货信息',
			infoList:[
			{
				label:'收货人',
				value:res.receiver
			},
			{
				label:'手机号码',
				value:res.phone
			},
			{
				label:'收货地址',
				value:`${res.province} ${res.city} ${res.area} ${res.address}`
			}

			]
		}
		},
		//订单信息
		orderInfo(){
			const { order_sn = 0, created_timestamp = 0, pay_channel = 0} = this.list
			const timer = created_timestamp == 0 ? '':dayjs(created_timestamp*1000).format('YYYY-MM-DD HH:mm:ss')
			return {
				title:'订单信息',
				infoList:[
					{
						label:'订单号码',
						value:order_sn
					},
					{
						label:'下单时间',
						value:timer
					},
					{
						label:'支付方式',
						value:PAYCHANNELS[pay_channel]
					}
				]
			}
		}

	},
	methods:{
        async loadInfo(){
             const { item_id } = this.$route.params
             let res = await apis.getOrderDetail(item_id)
             // console.log('res',res,res.data)
             if(res && res.errorCode == 0 ){
                this.list = res.data
             }
        }
	},
	mounted(){
		this.loadInfo();
	},
	components:{
		OrderStatus,
		OrderInfoCard,
		ProductDetailInfoCard,
		OrderDetailFooter
	}
	
}
</script>
<style lang="less" scoped>
.order-detail-wrap{
	padding-bottom:150px;
	.receiver-info{
		margin:-180px 30px;
	}
	.order-info{
		margin:200px 30px 0px;
	}
}
</style>