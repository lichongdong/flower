<template>
<div class="user-entry">
	<div 
	class="entry-item"
	v-for="(entry,idx) in entrys"
	:key="idx"
	>
		<van-icon :name="entry.icon" size="26" color="#00b799"/>
		<span>{{entry.label}}</span>
	</div>
</div>
</template>
<script type="text/javascript">
export default{
data() {
	return {
		entrys: [
           {
             label: '收花日历',
             icon: 'send-gift-o',
             path: ''
           },
           {
             label: '近期福利',
             icon: 'gift-card-o',
             path: ''
           }
		]
		}
	}
}

</script>
<style lang="less" scoped>
@import url(@/less/index.less);
.user-entry{
   .flex();
   .padding();
   background-color:@white;
   .entry-item{
     .flex();
     flex:1;
     .padding();
     .bR();
     box-sizing:border-box;
     height:130px;
     .boxShadow();
     align-items:center;
     font-size:@font-md;
       span{
          margin-left:20px;
       }
   }
}
</style>