<template>
  <div>
    <div v-if="!$store.state.auth">
      please <NuxtLink to="/login">Login </NuxtLink>
    </div>
    <div v-else>您已登陆，可以访问 <NuxtLink to="/my">我的页面 </NuxtLink></div>
  <p>
    <button @click="loginout">退出登录 </button>
  </p>
  </div>
</template>

<script>
import Cookie from "js-cookie"
export default {
  methods:{
    // 推出登录 清空数据
    loginout(){
      setTimeout(()=>{
        this.$store.commit('updateAuth',"")
        Cookie.remove("auth");
      })
    }
  }
};
</script>
