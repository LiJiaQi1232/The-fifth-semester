<template>
  <div>
      <ul>
          <li v-for="item in $store.state.topics" :key="item.id">
              <nuxt-link :to="`/detail?id=${item.id}`">{{
                  item.title
              }}</nuxt-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {

  async fetch({ $api, store }) {
    const {
      data: { data: topics },
    } = await $api.getTopics("/topics");
    store.commit("updateTopics", topics);
  }
};
</script>

<style>
</style>