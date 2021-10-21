<template>
  <div class="shopping-cart">
      <MainHeader title="购物车"/>
    <van-tabs title-active-color="#00b900" >
      <van-tab
      v-model="active"
      v-for="(tab,idx) in tabs"
      :title="tab.label"
      :key="tab.product_type">
        <ProductList
        :info="infoList[idx]"
        :infoList="infoList"
        :idx="idx"
        :isEdit="isEdit"
        @update="update"
        @updateInfoList="updateInfoList"
        />
      </van-tab>
    </van-tabs>
    <ShoppingCartFooter
     :isEdit="isEdit"
     :selected="currentSelected"
    />
  </div>
</template>
<script>
import ProductList from './index/product-list.vue'
import ShoppingCartFooter from './index/footer-component.vue'
import * as apis from './api'
export default{
  data(){
    return{
      active:0,
      isEdit:false,
      tabs:[
        {
          label:'包月鲜花',
          product_type:1
        },
        {
          label:'礼品鲜花',
          product_type:2
        }
      ],
      infoList:[
        {//包月鲜花数据
          format_total_price: '0.00',
          total_price:0,
          shopping_cart_product_list:[]//数据列表
        },
        {//礼品鲜花数据
          format_total_price: '0.00',
          total_price:0,
          shopping_cart_product_list:[]//数据列表
        }
      ]
    }
  },
  computed:{
    //当前tab中的值
     currentSelected(){
         const { infoList,active } = this
         const list = infoList[active].shopping_cart_product_list
         return list.filter(item => item.checked)
     }
  },
  methods:{
    update(key,val){
      // console.log(key,val)
      this[key] = val;
      this.$forceUpdate();//触发更新方法
    },
    updateInfoList(infoList){
       // this.infoList = infoList
       this.infoList = JSON.parse(JSON.stringify(infoList))
       // console.log(this.infoList)
       // this.$forceUpdate()//触发更新方法

    },
    async loadInfo(){
      let res = await apis.getShoppingDetail();
      // console.log(res)
      if(res && res.errorCode == 0){
        //加载完数据后,给每条数据添加是否选中的属性 默认为false
        const list = res.data.shopping_cart_product_list.map( item=> ({...item,checked:false}))
        this.infoList[0] = {
           ...this.infoList[0],
           ...res.data,
          shopping_cart_product_list:list
        }
        // console.log(this.infoList[0])
        this.$forceUpdate();//触发更新方法
      }
    }


  },
  mounted(){
     this.loadInfo();
  },
  components:{
    ProductList,
    ShoppingCartFooter
  }
}
</script>
<style lang="less">

</style>