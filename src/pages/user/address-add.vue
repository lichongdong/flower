<template>
<div class="address-add-wrap">
	<MainHeader title="添加收货地址"/>
	<van-address-edit
	show-postal
	show-delete
	show-set-default
	show-search-result
	:search-result="searchResult"
	@save="onSave"
	@delete="onDelete"
	@change-detail="onChangeDetail"
	/>
</div>
</template>
<script>
export default{
	data(){
		return{
			searchResult: [],
		}
	},
	methods:{
		onSave(){
			console.log('onSave')
		},
		onDelete(){
			console.log('onDelete')
		},
		onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
	}
}
</script>