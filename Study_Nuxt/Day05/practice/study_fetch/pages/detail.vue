<template>
  <div>
    <h1>详情页面</h1>
    <p>标题是:{{ detail.title }}</p>
    <p v-html="detail.content"></p>
  </div>
</template>

<script>
export default {
  async asyncData({ query, app }) {
    const {
      data: { data: detail },
    } = await app.$api.getTopicsDetail(`/topic/${query.id}`);
    console.log(detail);
    return {
      detail,
    };
  },
};
</script>

<style>
</style>