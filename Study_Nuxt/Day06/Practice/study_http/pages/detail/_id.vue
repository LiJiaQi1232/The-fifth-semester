    <template>
  <div>
    <h2>标题:{{ topic.title }}</h2>

    <p v-html="topic.content"></p>
  </div>
</template>

    <script>
export default {
  async asyncData({ $http }) {
    const { data: topic } = await $http.$get(
      `https://cnodejs.org/api/v1/topic/${params.id}`
    );
    return {
      topic,
    };
  },
};
</script>

    <style>
</style>    