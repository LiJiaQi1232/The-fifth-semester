<template>
  <div>
    <div>
      <span>人生格言:</span>
      <input type="text" />
    </div>
    <div>
      <span>个人简介:</span>
      <textarea></textarea>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log("02-UserInfo-创建");
  },
  destroyed() {
    console.log("02-UserInfo-销毁");
  },
  // 组件缓存下 - 多了2个钩子函数
  activated() {
    console.log("02-UserInfo-激活");
  },
  deactivated() {
    console.log("02-UserInfo-失去激活");
  },
};
</script>

<style>
</style>