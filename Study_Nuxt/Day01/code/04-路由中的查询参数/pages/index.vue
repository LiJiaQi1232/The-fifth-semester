<template>
    <div>
         <h1>Home Page</h1>
          <ul>
              <!-- 路径参数传递 -->
              <li><nuxt-link to="/goods?cid=100">goods?cid=100</nuxt-link></li>
              <li><nuxt-link to="/goods?cid=100&gid=200">goods?cid=100&gid=200</nuxt-link></li>
          </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>