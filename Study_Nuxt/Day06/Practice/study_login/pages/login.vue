<template>
  <div>
    <p>用户名：<input type="text" name="" id="" /></p>
    <p>密码<input type="password" name="" id="" /></p>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import Cookie from "js-cookie"
export default {
  methods: {
    login() {
      setTimeout(() => {
        // 存储用户数据到vuex中
        const auth = "sdasdadsfwerwerw";
        this.$store.commit("updateAuth", auth);
        // 存储cookie
        Cookie.set('auth',auth)
        // 跳转到首页
        this.$router.push("/");
      }, 1000);
    },
  },
};
</script>

<style>
</style>