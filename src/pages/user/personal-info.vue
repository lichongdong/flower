<template>
<div class="personal-info-wrap">
	<MainHeader title="个人资料"/>
	<div class="personal-info">
		<div class="list-wrap">
			<van-uploader :after-read="afterRead">
				<van-image width="80" height="80" round ref="img" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
				<span>修改头像</span>
				<van-icon name="arrow" color="#969799" size="16"/>
			</van-uploader>
		</div>
		<div class="list" @click="editName">
			<van-cell title="修改昵称" is-link/>
		</div>
		<div class="list" @click="editSexShow">
			<van-cell title="性别" is-link/>
		</div>
		<div class="list" >
			<van-cell title="生日" is-link @click="editDate"/>
		</div>
		<div class="list" @click="toAddress">
			<van-cell title="收货地址" is-link/>
		</div>		
		<van-button type="primary" size="large" @click="toLogin">退出登录</van-button>
	</div>
	<!-- 修改昵称弹出框 -->
	<van-action-sheet  class="name-list" v-model="show">
		<span class="name">修改昵称</span>
		<input type="text" width="100vw" autofocus />
		<div class="btn-wrap">
			<van-button type="primary" plain>取消</van-button>
			<van-button type="primary">确定</van-button>
		</div>
	</van-action-sheet>
	<!-- 性别选择弹出框 -->
	<van-action-sheet
	v-model="sexShow"
	:actions="actions"
	cancel-text="取消"
	close-on-click-action
	@cancel="onCancel"
	/>
	<!-- 生日选择 -->
	<van-popup v-model="isShowDate" position="bottom">
	<van-datetime-picker
	v-model="currentDate"
	v-show="isShowDate"
	type="date"
	title="选择年月日"
	:min-date="minDate"
	:max-date="maxDate"
	/>
	</van-popup>

</div>
</template>
<script>
export default {
	data(){
		return{
			image:"",
			show:false,//修改昵称弹出框
			sexShow:false,//性别选择弹出框
			actions: [{ name: '男' }, { name: '女' }],
			minDate: new Date(1930, 0, 1),
			maxDate: new Date(2025, 10, 1),
			currentDate: new Date(2021, 9, 18),
			isShowDate:false
		}
	},
	methods:{
		afterRead(file){
			this.$refs.img.src = file.content
		},
		editName(){
			this.show = !this.show
		},
		editSexShow(){
			this.sexShow = !this.sexShow
		},
		onCancel() {
			console.log('取消了')
		},
		// 选择出生日期
		editDate(){
			this.isShowDate = !this.isShowDate
		},
		toAddress(){
			this.$router.push({
				path:'/addressList'
			})
		},
		//退出登录
		toLogin(){
			this.$router.push({
				path:'/login'
			})
		}
	},
	mounted(){
		
	}
}
</script>
<style lang="less" scoped>
@import url(@/less/index.less);
.personal-info{
	background-color:white;
	.list-wrap{
		.flex(space-between);
		padding:20px 24px;
		align-items:center;
		border-bottom:1px solid #e6e6e6;
		.van-cell{
			margin-left:20px
		}
	}
	.list{
		padding:20px 0px 20px 15px;
		border-bottom:1px solid #e6e6e6;
		.flex();
		.edit{
			flex:4;
			align-items:center;
		}
	}

}
.name-list{
	font-size:@font-md;
	.flex();
	.btn-wrap{
		width:100vw;
		position: fixed;
		bottom:35px;
		left:0;
		.flex(space-around);
		text-align: center;
		.van-button{
			width:160px;
		}
	}
	.name{
		margin-top:30px;
		margin-left:12px;
	}
}
.content {
    padding: 16px 16px 160px;
 }
</style>
<style lang="less">
@import url(@/less/index.less);
.van-uploader,.van-uploader__wrapper{
	width:100%;
}
.van-uploader__input-wrapper{
	width:100%;
	.flex();
	align-items:center;
	span{
		flex:1;
		line-height:80px;
		font-size:16px;
		display:block;
		margin-left:20px;
	}
}
.van-popup--bottom.van-popup--round{
	height:30%;
}

.van-action-sheet__content{
	.flex();
	flex-direction:column;
	input{
		margin-top:30px;
		border:none;
		border-bottom:1px solid #efefef;
	}

}
</style>