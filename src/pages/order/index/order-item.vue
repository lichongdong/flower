<template>
<div class="order-item" @click="toDetail">
	<div class="order-header">
        <div class="order-time">{{ dayjs(info.created_timestamp).format('YYYY-MM-HH hh:mm:ss') }}</div>

        <div class="order-status">
            <van-tag 
            plain 
            :type="initTag(info.order_status)" 
            size="medium"
            >{{initStatus(info.order_status)}}
        </van-tag>
        </div>
	</div>
	<ul class="product-wrap">
		<li class="product-item">
			<van-image 
			width="50"
			height="50"
			src="https://img01.yzcdn.cn/vant/cat.jpeg"
			/>
			<div class="right">
				<p>{{info.product_name}}</p>
				<div class="product-more">
					<span class="price">&yen;{{info.format_product_price}}元</span>
					<span class="count">x{{info.count}}</span>
				</div>
			</div>
		</li>
	</ul>
	<div class="order-info">
		<div class="order-desc">共1件商品,共计&yen;180</div>
        <div class="btn-wrap">
		<van-button 
		plain 
		size="mini"
		class="operation-btn"
        v-for="(item,idx) in initBtns(info.order_status)"
        :key="idx"
		:type="item.type"
        @click.stop="trigger(item.action)"
        >
       {{item.text}}</van-button>
       </div>
	</div>
</div>
</template>
<script>
import dayjs from 'dayjs'
import * as config from '../order-config'
export default{
    props:{
       info:Object
    },
	data(){
		return{
          dayjs
		}
	},
    methods:{
        //状态文字
        initStatus(status){
          if(!status) return ''
          return config.STATUES[status]
        },
        //不同状态tag
        initTag(status){
          if(!status) return 'default'
           return config.STATUESTAG[status]
        },
        //不同状态对应的操作按钮
        initBtns(status){
          if(!status) return []
          return config.OPERATIONBTNS[status]
        },
        //关闭当前订单弹窗
       async trigger(action){
           const { info } = this
           let res = config.ACTIONS(action,info)
           if(res){
             this.$emit('refresh')//执行完成后刷新页面数据
           }
        },
        //跳转到订单详情页面
        toDetail(){
            const {info} = this
            // console.log(info.item_id)
           this.$router.push({
              path:`/order-detail/${info.item_id}`
           })
        }
    }
}
</script>
<style lang="less" scoped>
@import url('@/less/index.less');
.order-item{
   .bR();
   .boxShadow();
   .margin2(24px,24px);
   background-color:@white;
   .order-header{
      .flex(space-between);
      .padding2();
      border-bottom:1px solid #ccc;
      height:84px;
      font-size:@font-xl;
      line-height:84px;
   }
    .product-item{
      .flex();
      .padding();
      .right{
         flex:1;
         height:100px;
         margin-left:50px;
        font-size:@font-xl;
        .flex(space-between);
        flex-direction: column;
        .product-more{
             .flex(space-between)
        }
      }
    }
    .order-info{
        .flex(space-between);
        height:84px;
        .padding2();
        font-size:@font-xl;
        line-height:84px;
        border-top:1px solid #ccc;
        .btn-wrap{
           .operation-btn{
           margin-left:20px;
          }
        }
       
    }



}
</style>