<script>
import SearchFilters from '../components/SearchFilters.vue'
import CountryCard from './countries/CountryCard.vue'

export default {
  components: {
    SearchFilters,
    CountryCard
  },

  data() {
    return {
      countries: {}
    }
  },

  async mounted() {
    console.warn('making api request')
    const res = await fetch('https://restcountries.com/v3.1/all')
    let countriesList = await res.json()
    this.countries = countriesList.sort((a, b) => {
      if (a.name.common < b.name.common) {
        return -1
      }
      if (a.name.common > b.name.common) {
        return 1
      }
      return 0
    })
  }
}
</script>

<template>
  <SearchFilters />
  <div class="country-list">
    <CountryCard v-for="country in countries" :key="country.name.common" :countryObj="country" />
  </div>
</template>

<style>
.country-list {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
</style>
