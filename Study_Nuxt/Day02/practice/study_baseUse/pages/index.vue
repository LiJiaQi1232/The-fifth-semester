<template>
  <div>
    <Goods />
    <h1>{{ msg }}</h1>
    <h3>{{ name }}</h3>
    <h3>async运行在{{ server }}</h3>
    <nuxt-link to="/about">go about</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "哇哈哈",
    };
  },
  asyncData() {
    console.log("asyncData函数执行");
    const server = process.server ? "服务端" : "客户端";
    return {
      msg: "hello nuxters",
      server,
    };
  },
};
</script>
