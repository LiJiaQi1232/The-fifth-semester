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
    console.log("UserName创建");
  },
  destroyed() {
    console.log("UserName销毁");
  },
};
</script>

<style>
</style>