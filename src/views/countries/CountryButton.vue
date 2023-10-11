<template>
  <div>
    <router-link :to="{ name: 'CountryDetails', params: { id: code } }">
      <div class="button">{{ name }}</div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ['code'],
  async mounted() {
    const res = await fetch('https://restcountries.com/v3.1/alpha/' + this.code + '?fields=name')
    const country = await res.json()
    this.name = country.name.common
  },
  data() {
    return {
      name: ''
    }
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
.button {
  border: 1px solid red;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
