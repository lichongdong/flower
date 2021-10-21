<template>
  <div class="page-a">
    <h2 class="title">page a</h2>
    <div class="count">
      count: {{ countA }} <br />
      moduleB-count: {{ bCount }}
    </div>
    <div class="btn-wrap">
      <van-button type="primary" @click="increase(countA+1)">增加</van-button>&nbsp;
      <van-button  @click="decrease()">减少</van-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import * as types from '../typing'
import * as apis from './api'
export default {
  data(){
    return {
      count: 0
    }
  },
  computed: {
    // 将store对象映射到this上 a 是模块名称，对应创建模块modules里的名称
    // ...mapState('a', ['count']) // 直接讲store.a.count 属性映射到this.count
    ...mapState('a', {
      // 将store.a.count 属性映射到this.countA
      countA: state => state.count
    }),
    // 需要使用多个模块的数据时，可以注入多次
    ...mapState('moduleB', {
      // 将store.a.count 属性映射到this.countA
      bCount: state => state.count
    }) 

  },
  methods: {
    // 多个mutations和actions的注入方式和mapState一样
    ...mapMutations('a', ['increase', types.DECREASE]),
    // ...mapActions('a', ['decrease'])
    ...mapActions('a', {
      // 更改映射当前实例的key
      moduleADecrease: 'decrease'
    }),
    /**
     * @desc 获取banner
     */
    async loadAdversiting() {
      let res = await apis.getAdveeristing()
      if (res.errorCode == 0) {
        console.log('loadAdversiting', res)
      } 
    },
    async getMockList() {
      let data = await apis.getMockList()
      console.log('data', data)
    }
  },
  mounted() {
    // console.log('this. a', this)
    this.getMockList()
    // this.loadAdversiting()
  }
}
</script>

<style lang="less" scoped>
.page-a{
  .title{
    font-size: 32px;
  }
}

</style>