<template>
  <div>首页</div>
</template>

<script>
export default {
  mounted() {
    // 保证dom加载完毕
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        //   关闭loading
        this.$nuxt.$loading.finish();
      }, 3000);
    });
  },
};
</script>

<style>
</style>