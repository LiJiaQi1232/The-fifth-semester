<template>
<!-- 过渡和动画 -->
  <div>
    <nav>
      <ul>
        <li><nav-link to="/">Home </nav-link></li>
        <li><nav-link to="/fade">Fade</nav-link></li>
        <li><nav-link to="/bounce">Bounce</nav-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

nav a {
  color: inherit;
  text-decoration: none;
}

a.nuxt-link-exact-active {
  color: #00c58e;
}

main {
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 1rem;
  max-width: 1280px;
  text-align: center;
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
</style>
