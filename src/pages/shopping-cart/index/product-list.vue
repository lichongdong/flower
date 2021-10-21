<template>
  <div class="product-list-wrap">
       <div class="tool-bar">
            <div class="left">
                 <van-checkbox v-model="checkedAll" @change="checkedAllChange">全选</van-checkbox>
            </div>
            <div class="right-button">
              <span class="button btn-eidt" v-show="!isEdit" @click="changeEdit">编辑</span>
              <span class="button btn-finsh" v-show="isEdit" @click="changeEdit">完成</span>
            </div>
       </div>
       <ProductItem
        v-for="(item,idx) in info.shopping_cart_product_list"
        :key="idx"
        :info="item"
        @selected="childrenChange"
       />
  </div>
</template>
<script>
import ProductItem from './product-item.vue'
export default{
  props:{
    isEdit:Boolean,
    infoList:Array,//所有tab 的数据
    info:Object,//当前tab对应的数据
    idx:Number//当前tab对应的下标
  },
  data(){
    return{
      checkedAll:false,
      triger:false//子元素触发状态的时候改为true
    }
  },
  methods:{
    changeEdit(){
       // this.isEdit = !this.isEdit
      //切换编辑状态
      this.$emit('update','isEdit',!this.isEdit)
    },
    //切换全选
    changeCheckedAll(){
       
       const {idx,infoList} = this
       const { shopping_cart_product_list:list } = infoList[idx]
       // console.log(list)
       if(list.length){
        //当选中的列表和数据的长度相同时，表示全选，否则没有全选中
         this.checkedAll = list.every(item => item.checked)
       }
    },
    //处理全选状态
    checkedAllChange(checkedAll){
          if(this.triger){
            // 处理子元素状态发生变化，也会导致全选状态变化，但是不需要更新子元素的选中状态
            this.triger = !this.triger
            return false
          }

         const { idx,infoList } = this
         const { shopping_cart_product_list:list } = infoList[idx]
         infoList[idx].shopping_cart_product_list = list.map(item => ({...item,checked:checkedAll}))
        console.log('checkedAll',checkedAll,infoList)
          
         this.$emit('updateInfoList',infoList)
         // this.$forceUpdate()
    },
    //切换子节点数据选中状态
    childrenChange(info){
       
        const {idx,infoList} = this
        let list = infoList[idx].shopping_cart_product_list

        //子元素的选中状态发生变化，覆盖原来的数据
        infoList[idx].shopping_cart_product_list = list.map(item =>{
          return info.item_id == item.item_id ? info : item
        })
        this.triger = true
        this.$emit('updateInfoList',infoList)
        //维护全选中状态
        this.$nextTick(()=>{
           this.changeCheckedAll();
        })
    }


  },
  created(){
    this.changeCheckedAll()
  },
  components:{
    ProductItem
  }
}
</script>
<style lang="less" scoped>
@import url('@/less/index.less');
.product-list-wrap{
   .margin3(24px,24px,0);
   .bR(16px);
   background-color:white;
   .boxShadow();
   overflow:hidden;
  .tool-bar{
    .flex();
    justify-content:space-between;
    padding:20px 24px;
    //height:80px;
    font-size:28px;
    border-bottom:1px solid #f5f5f5;
    .button {
      color: @black45;
    }
  }
}
</style>