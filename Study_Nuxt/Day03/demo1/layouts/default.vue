<template>
<!-- 路由嵌套 -->
  <div>
    <nav>
      <ul>
        <!-- <li><nuxt-link to="/">home</nuxt-link></li>
        <li><nuxt-link to="/parent">parent</nuxt-link></li> -->
        <li><a href="#" :class="{ active: flag }" @click="go('/')">Home</a></li>
        <li>
          <a href="#" :class="{ active: !flag }" @click="go('/parent')"
            >Parent</a
          >
        </li>
      </ul>
    </nav>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
    };
  },
  methods: {
    go(path) {
      this.flag = !this.flag;
      this.$router.push({ path });
    },
  },
};
</script>

<style>
:root {
  --primary-color: #00c58e;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
nav a:hover {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

main {
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 1rem;
  max-width: 1280px;
  text-align: center;
}

img {
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}

nav {
  padding: 0 1rem;
}
.nuxt-link-exact-active,
.active {
  color: #00c58e;
}
</style>