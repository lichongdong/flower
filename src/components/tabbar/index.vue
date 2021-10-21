<template>
  <div class="tabbar-wrap">
    <van-tabbar
      v-model="active"
      route
    >
      <van-tabbar-item
        v-for="(tab, key) in tabs"   
        :key="key"   
        :icon="tab.icon"
        :to="tab.path"
      >{{tab.label}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabs: [
        {
          label: '首页',
          icon: 'home-o',
          path: '/',
        },
        {
          label: '发现',
          icon: 'eye-o',
          path: '/found',
        },
        {
          label: '个人中心',
          icon: 'user-o',
          path: '/user',
        }
      ]
    };
  },
};
</script>