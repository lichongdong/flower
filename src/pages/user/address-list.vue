<template>
<div class="address-list-wrap">
	<MainHeader title="收货地址"/>
	<div class="address">
		<van-image
		width="80"
		height="80"
		round
		src="https://img01.yzcdn.cn/vant/cat.jpeg"
		/>
		<p>请填写你的收货地址</p>
		<van-button type="primary" size="large" @click="toAddressAdd">新增</van-button>
	</div>
</div>
</template>
<script>
export default{
	data(){
		return{

		}
	},
	methods:{
		toAddressAdd(){
			this.$router.push({
				path:'/address-add'
			})
		}
	}
}
</script>
<style lang="less">
.address-list-wrap{
	text-align: center;
	.address{
		margin-top:60px;
		.van-button{
			position:fixed;
			bottom:0;
			left: 0;
			z-index:2;
		}
	}
}
</style>