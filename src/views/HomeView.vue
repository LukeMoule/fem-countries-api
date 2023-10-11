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
      allCountries: {},
      filteredCountries: {}
    }
  },

  methods: {
    searchFilter(filter) {
      console.log(filter)
      this.filteredCountries = this.filterCountries(this.allCountries, filter)
      console.log(this.countries)
    },
    filterCountries(countries, searchString) {
      searchString = searchString.toLowerCase()
      return countries.filter((country) => {
        // Check common and official names
        if (
          country.name.common.toLowerCase().includes(searchString) ||
          country.name.official.toLowerCase().includes(searchString)
        ) {
          return true
        }

        // Check native names
        for (let language in country.name.nativeName) {
          if (
            country.name.nativeName[language].official.toLowerCase().includes(searchString) ||
            country.name.nativeName[language].common.toLowerCase().includes(searchString)
          ) {
            return true
          }
        }

        // Check alternative spellings
        for (let altSpelling of country.altSpellings) {
          if (altSpelling.toLowerCase().includes(searchString)) {
            return true
          }
        }

        return false
      })
    }
  },

  async mounted() {
    console.warn('making api request')
    const res = await fetch('https://restcountries.com/v3.1/all')
    let countriesList = await res.json()
    this.allCountries = countriesList.sort((a, b) => {
      if (a.name.common < b.name.common) {
        return -1
      }
      if (a.name.common > b.name.common) {
        return 1
      }
      return 0
    })
    this.searchFilter('')
  }
}
</script>

<template>
  <SearchFilters @search-changed="searchFilter" />
  <div class="country-list">
    <CountryCard
      v-for="country in filteredCountries"
      :key="country.name.common"
      :countryObj="country"
    />
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
