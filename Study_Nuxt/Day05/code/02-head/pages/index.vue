<template>
  <div>首页</div>
</template>

<script>
export default {
  // 页面中配置TDK
  head() {
    return {
      title: '首页标题',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
  // mounted() {
  //   // 保证dom加载完毕
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start();
  //     setTimeout(() => {
  //       //   关闭loading
  //       this.$nuxt.$loading.finish();
  //     }, 3000);
  //   });
  // },
};
</script>

<style>
</style>