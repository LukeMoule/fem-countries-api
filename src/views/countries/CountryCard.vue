<template>
  <router-link
    :to="{ name: 'CountryDetails', params: { id: countryObj.cca3 } }"
    class="country-card"
  >
    <h2>{{ name }}</h2>
    <dl>
      <div>
        <dt>Population:</dt>
        <dd>{{ population }}</dd>
      </div>
      <div>
        <dt>Region:</dt>
        <dd>{{ region }}</dd>
      </div>
      <div v-if="capitals">
        <dt v-if="capitals.length === 1">Capital:</dt>
        <dt v-else>Capitals:</dt>
        <dd v-for="capital in capitals" :key="capital">{{ capital }}</dd>
      </div>
    </dl>
  </router-link>
</template>
<script>
export default {
  props: ['countryObj'],
  data() {
    return {
      name: '',
      population: 0,
      region: '',
      capitals: []
    }
  },
  mounted() {
    this.name = this.countryObj.name.common
    this.population = this.countryObj.population.toLocaleString('en-US')
    this.region = this.countryObj.region
    this.capitals = this.countryObj.capital
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
.country-card {
  padding: 1rem 1rem 2rem 1rem;
  width: 300px;
  border-radius: 5px;
  background-color: var(--elements-color);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
}
h2 {
  padding: 0;
  margin: 0 0 1rem 0;
  font-weight: 800;
}

dl {
  padding: 0;
  margin: 0;
}

dt {
  display: inline;
  font-weight: 600;
}

dt::after {
  content: ' ';
}

dd {
  display: inline;
  margin: 0;
}
</style>
