<template>
<div class="order-info-wrap">
	<header>{{info.title}}</header>
	<div 
	class="address"
	v-for="(item,idx) in info.infoList"
	:key="idx"
	>
		<span class="address-label">{{item.label}}:</span>
		<span class="address-value">{{item.value}}</span>
	</div>
	<div></div>
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
	}
}
</script>
<style lang="less" scoped>
@import url(@/less/index.less);
.order-info-wrap{
	background-color:white;
    .boxShadow();
    .bR();
    header{
        .padding2();
        font-size:@font-md;
        line-height: 72px;
        border-bottom:1px solid #ccc;
        margin-bottom:20px;
    }
    .address{
      .padding2();
      font-size:@font-xl;
      line-height: 64px;
      .address-value{
        display:inline-block;
        color:@black85;
        font-weight:900;
      }
  }
}
</style>