<template>
  <div>Hello {{ countryObj }}</div>
</template>
<script>
export default {
  props: ['id'],

  async mounted() {
    const res = await fetch('https://restcountries.com/v3.1/alpha/' + this.id)
    let country = await res.json()
    this.countryObj = country[0]
  },

  data() {
    return {
      countryObj: {}
    }
  },
}
</script>
<style></style>
