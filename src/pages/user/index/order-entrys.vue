<template>
<div class="order-entry-wrap">
	<div class="order-entry">
		<span class="order-title">我的订单</span>
		<van-icon name="arrow"  @click="toOrderList('all')"/>
	</div>
	<ul class="entry-list">
		<li class="entry-item" 
		v-for="entry in entrys"
		:key="entry.key"
        @click="toOrderList(entry.key)"
		>
			<div class="icon-wrap">
				<van-icon :name="entry.icon" color="#00b799" size="26"/>
			</div>
			<p class="label">{{entry.label}}</p>
		</li>
	</ul>
</div>
</template>
<script>
import { entrys } from './order-entry'
export default{
	data(){
		return{
           entrys
		}
	},
    methods:{
        toOrderList(tab=0){
            this.$router.push({
                path:'/order-list',
                query:{tab}
            })
        }
    }
}
</script>
<style lang="less" scoped>
@import url('@/less/index.less');
.order-entry-wrap{
    &{
    .margin2(20px, 32px);
    background-color: @white;
    .bR();
    .boxShadow();
    .padding(20px);
    }
    .order-entry{
       .flex(space-between);
       font-size:@font-md;
    }
    .entry-list{
        list-style:none;
        .flex(space-around);
        margin-top:30px;
    }
    .icon-wrap{
       text-align: center;
    }
    .label{
       font-size:@font-md;
       margin-top:20px;
    }
  

}
</style>
<style lang="less">
.order-entry-wrap{
  .entry-list{
    .van-icon{
      transform: translateY(3px);
    }
  }
}
</style>