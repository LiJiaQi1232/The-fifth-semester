<!-- Modal.vue -->
<template>
  <div class="wrapper">
    <div class="content">
      <a class="close" href="javascript:">关闭</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
};
</script>
<style scoped>
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}
.content {
  width: 660px;
  height: 400px;
  background: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.close {
  position: absolute;
  right: 10px;
  top: 10px;
  color: #999;
  text-decoration: none;
}
</style>  