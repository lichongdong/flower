<template>
	<div class="user-info">
		<div class="info-box">
			<van-image 
			round 
			width="80"
			height="80"
			@click="PersonalDetail"
			class="avatar"
			src="https://img01.yzcdn.cn/vant/cat.jpeg"
			/>
			<h4 class="user-name  van-multi-ellipsis--l2">用户</h4>
		</div> 
		<div class="shopping-cart">
			<van-badge :content="5">
             <van-icon color="#fff" name="shopping-cart-o" />
			</van-badge>
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
		PersonalDetail(){
			this.$router.push({
				path:'/personal-info'
			})
		}
	}
}
</script>
<style lang="less" scoped>
@import url('@/less/index.less');
.user-info{
	.flex(space-between);
	.padding2(32px);
	background-color:@white;
	.info-box{
		.flex();
		max-width:(70vw);
		.avatar{
			min-width: 120px;
		}
		.user-name{
			margin-left:50px;
			font-weight: 400;
         color: @black65;
         font-size: @font-lg;
		}
	}
	.shopping-cart{
		min-width:140px;
		height:75px;
		line-height:75px;
		background-color: #00b799;
		.bR(36px);
		text-align:center;
		.van-badge__wrapper{
         transform:translateY(10px);
		} 
	}
}

</style>