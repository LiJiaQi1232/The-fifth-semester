<template>
  <div class="my-header" :style="{ backgroundColor: background, color }">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    background: String,
    color: {
      type: String,
      default: "#fff", //默认值
    },
    title: {
      type: String,
      // 必须传入的值
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>