<template>
  <nav>
    <router-link :to="{ name: 'home' }">
      <h1>Where in the world?</h1>
    </router-link>
    <ThemeToggle />
  </nav>
</template>

<script>
import ThemeToggle from './ThemeToggle.vue'

export default {
  components: {
    ThemeToggle
  }
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--elements-color);
  padding: 1rem 2rem;
}
h1 {
  margin: 0;
  padding: 0;
  font-weight: 800;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
