<template>
  <div>
    <div v-if="$store.state.auth">
      您已登录，可以访问<nuxt-link to="/my">我的页面</nuxt-link>
      <p>
        <button @click="logout">退出登录</button>
      </p>
    </div>
    <div v-else>please <NuxtLink to="/login">Login</NuxtLink></div>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
  methods: {
    logout() {
      setTimeout(() => {
        this.$store.commit("updateAuth", "");
        Cookie.remove('auth');
      }, 1000);
    },
  },
};
</script>
