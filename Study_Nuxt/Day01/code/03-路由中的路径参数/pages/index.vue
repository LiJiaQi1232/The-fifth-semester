<template>
    <div>
         <h1>Home Page</h1>
          <ul>
              <!-- 路径参数传递 -->
              <li><nuxt-link to="/goods/100">goods/100</nuxt-link></li>
              <li><nuxt-link to="/goods/100/200">goods/100/200</nuxt-link></li>
          </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>