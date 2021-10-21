<template>
  <div class="user-wrap">
      <MainHeader :showBack="false" />
      <UserInfo/>
      <Entry/>
      <OrderEntry/>
      <CustomEntry/>
  </div>
</template>
<script>
import UserInfo from './index/user-info'
import Entry from './index/entry'
import OrderEntry from './index/order-entrys'
import CustomEntry from './index/custom-entry'
export default{
    data(){
      return{

      }
    },
    components:{
       UserInfo,
       Entry,
       OrderEntry,
       CustomEntry
    }
  }
</script>
<style lang="less" scoped>
  
</style>