<template>
<div class="login-wrap">
    <h3 class="title">东哥商城</h3>
    <div class="input-wrap">
        <input type="text" class="phone" placeholder="请输入手机号码"/>
        <input type="text" class="pwd" placeholder="请输入密码"/>
    </div>
    <div class="btn-wrap">
        <van-button class="button"  >登录</van-button>
    </div>
</div>
</template>
<script>
export default{
  data(){
    return{

    }
  }
}
</script>
<style lang="less" scoped>
.login-wrap{
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  height:100vh;
  overflow: hidden;
  background: linear-gradient(-45deg, #3879c9, #6cc9b7);
}
.title{
    color:white;
    font-size: 60px;
    font-weight: 500;
}
.input-wrap{
    margin-top:70px;
    text-align:center;
}
input{
    border:1px solid white;
    border-radius:42px;
    width:70vw;
    height:84px;
    background-color:transparent;
    padding:0 40px;
    margin:10px 0;
}
.btn-wrap{
    margin-top:40px;
    .button{
      width:200px;
      height:84px;
      background: linear-gradient(-45deg, #3879c9, #6cc9b7);
      border-radius: 42px;
      color:white;
      font-size:28px;
      border:0;
    }
}
</style>