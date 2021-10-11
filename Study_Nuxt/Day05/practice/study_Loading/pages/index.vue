<template>
  <div>首页</div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 2000);

      
    });
  },
};
</script>
