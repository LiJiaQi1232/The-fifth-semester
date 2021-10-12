<template>
  <div>
    <ul>
      <li v-for="item in topics" :key="item.id">
        <nuxt-link :to="`/detail/item.id`">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $http }) {
    const { data: topics } = await $http.$get(
      "https://cnodejs.org/api/v1/topics"
    );
    return{
      topics
    }
  },
};
</script>
