<template>
  <div id="app">

    <router-view />
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from './components/tabbar'
import * as typs from './typing'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    Tabbar
  },
  methods:{
    ...mapActions('ShoppingCart', [typs.UPDATESHOPPINGCOUNT]),
    // 初始化
    init() {
      this[typs.UPDATESHOPPINGCOUNT]('i\'m payload!')
    }
  },
  mounted(){
    this.init()
  }
}

</script>

<style lang="less">
#app {
  background: #f8f8f8;
  min-height: 100vh;
}
</style>
