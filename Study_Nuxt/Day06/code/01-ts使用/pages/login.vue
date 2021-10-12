<template>
  <div>
    <p>用户名： <input type="text" name="" id="" /></p>
    <p>密码：<input type="password" name="" id="" /></p>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import  Cookie from 'js-cookie';
export default {
  methods: {
    login() {
      setTimeout(()=>{
          const auth = "askjbdsajkdbasjkdbasjhkhdbasjhdbajdbasjhdbas";
          // 存储用户数据到vuex中
          this.$store.commit('updateAuth', auth);
          // 存储Cookie
          Cookie.set('auth', auth);
          // 跳转首页
          this.$router.push('/');   
      }, 1000);
    },
  },
};
</script>

<style>
</style>