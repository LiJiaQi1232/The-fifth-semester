<template>
    <div>
         <nav>
             <ul>
                 <li><nuxt-link to="/"> Home </nuxt-link></li>
                 <li><nuxt-link to="/about"> About </nuxt-link></li>
             </ul>
         </nav>
         <main>
             <Nuxt />
         </main>
    </div>
</template>

<script>
export default {

}
</script>

<style>
a {
  text-decoration: none;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

main {
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 100px;
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

a.nuxt-link-active {
    font-weight: 700;
}

a.nuxt-link-exact-active {
    color: aqua;
}
</style>