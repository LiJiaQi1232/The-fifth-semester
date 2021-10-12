<template>
  <div>
    <h1>我的页面</h1>
    <nuxt-link to="/">go Home</nuxt-link>
  </div>

</template>

<script>
export default {
  middleware:'auth'
}
</script>

<style>

</style>