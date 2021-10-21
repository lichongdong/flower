<template>
<div class="order-status-wrap">
	<div class="status">{{STATUES[info.order_status]}}</div>
	<div class="order-desc">{{info.shipping_word}}</div>
</div>
</template>
<script>
import { STATUES } from '../order-config'
export default{
	name:'OrderStatus',
	props:{
      info:Object
	},
	data(){
		return{
           STATUES
		}
	}
}
</script>
<style lang="less" scoped>
@import url(@/less/index.less);
.order-status-wrap{
	height:360px;
	background: linear-gradient( #00b799 10%, #fff 80%);
	color:@white;
	font-size:@font-xl;
	.padding2(0px,30px);
	.status{
		font-size:@font-md;
        padding-top:20px;
        line-height:84px;
	}
}
</style>