<template>
<div class="order-detail-footer">
	<div class="price-wrap">
		<small>&yen;180</small>
	</div>
	<div class="btn-wrap">
		<van-button round type="primary">删除订单</van-button>
	</div>
</div>
</template>
<script>
export default{
	data(){
		return{

		}
	}
}
</script>
<style lang="less" scoped>
@import url(@/less/index.less);
.order-detail-footer{
	position: fixed;
	bottom:0;
	left:0;
	width:100%;
	height:120px;
	z-index:2;
	background-color:white;
    .flex(space-between);
    .padding2();
    .boxShadow();
    .price-wrap{
		background-color:white;
		line-height: 120px;
    }
    .btn-wrap{
		line-height: 90px;
        margin-right:50px;
    }
}
</style>