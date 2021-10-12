<template>
  <div>
    <ul>
      <li v-for="item in topics" :key="item.id">
        <nuxt-link :to="`/detail/?id=${item.id}`">{{item.title}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}){
    const {data:topics}=await $axios.$get('https://cnodejs.org/api/v1/topics')
    return{
      topics
    }
  }
}
</script>
