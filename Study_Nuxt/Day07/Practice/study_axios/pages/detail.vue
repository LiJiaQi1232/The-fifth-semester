<template>
  <div>
  <h2>{{detail.title}}</h2>
  <p v-html="detail.content"></p>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, query }) {
    const { data: detail } = await $axios.$get(
      `https://cnodejs.org/api/v1/topic/${query.id}`
    );
    return {
      detail,
    };
  },
};
</script>

<style>
</style>