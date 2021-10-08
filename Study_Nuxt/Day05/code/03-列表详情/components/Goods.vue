<template>
  <ul>
    <li v-for="item in $store.state.topics" :key="item.id">
      <nuxt-link to="/detail">{{ item.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {

//   只能用在页面组件
  asyncData () {
      console.log(111);
  },

    // 可以在组件使用
  async fetch() {
    const {
      data: { data: topics },
    } = await this.$api.getTopics("/topics");
    this.$store.commit("updateTopics", topics);
  },
};
</script>

<style>
</style>