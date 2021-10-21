<template>
<div class="product-info">
	<header>商品信息</header>
	<div 
	class="info-line"
	v-for="(item,idx) in infoList"
	:key="idx"
	>
		<span class="label">{{item.label}}</span>
		<span class="value">&yen;{{item.value}}</span>
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
	computed:{
		//商品信息
		infoList(){
			const { 
				format_product_total_price = 0,
				format_discount_price = 0,
				format_shipping_price = 0,
				format_pay_price = 0
			} = this.info
			let res = [
				{
					label:'商品总额',
					value:format_pay_price
				},
				{
					label:'优惠',
					value:format_discount_price
				},
				{
					label:'运费',
					value:format_shipping_price
				},
				{
					label:'订单总额',
					value:format_product_total_price 
				}
			]
			return res
		}
	}
}
</script>
<style lang="less" scoped>
@import url(@/less/index.less);
.product-info{
	background-color:@white;
    .bR();
    .boxShadow();
    margin:20px 30px;
    header{
        .padding2();
        font-size:@font-md;
        line-height: 72px;
        border-bottom:1px solid #ccc;
        margin-bottom:20px;
    } 
     .info-line{
      .padding2();
      .flex(space-between);
      font-size:@font-xl;
      line-height: 64px;
      .value{
        display:inline-block;
        color:@black85;
        font-weight:900;
      }
  }
}	
</style>