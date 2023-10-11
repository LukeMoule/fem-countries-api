<template>
  <div>
    <h1>{{ name }}</h1>

    <dl>
      <div>
        <dt>Population:</dt>
        <dd>{{ population }}</dd>
      </div>
      <div>
        <dt>Region:</dt>
        <dd>{{ region }}</dd>
      </div>
      <div>
        <dt>Sub Region:</dt>
        <dd>{{ subRegion }}</dd>
      </div>
      <div v-if="capitals">
        <dt v-if="capitals.length === 1">Capital:</dt>
        <dt v-else>Capitals:</dt>
        <dd v-for="capital in capitals" :key="capital">{{ capital }}</dd>
      </div>
      <div>
        <dt>Top Level Domain:</dt>
        <dd v-for="t in tld" :key="t">{{ t }}</dd>
      </div>
      <div>
        <dt>Currencies:</dt>
        <dd v-for="currency in currencies" :key="currency">{{ currency.name }}</dd>
      </div>
      <div>
        <dt>Languages:</dt>
        <dd v-for="language in languages" :key="language">{{ language }}</dd>
      </div>
    </dl>
    <div v-if="borderCountries">
      <h3>Border Countries:</h3>
      <div class="border-countries-container">
        <CountryButton
          v-for="country in borderCountries"
          :key="country"
          :code="country"
        ></CountryButton>
      </div>
    </div>
  </div>
</template>
<script>
import CountryButton from './CountryButton.vue'

export default {
  props: ['id'],
  async mounted() {
    const res = await fetch('https://restcountries.com/v3.1/alpha/' + this.id)
    const country = await res.json()
    this.countryObj = country[0]
    this.name = this.countryObj.name.common
    this.population = this.countryObj.population.toLocaleString('en-US')
    this.region = this.countryObj.region
    this.subRegion = this.countryObj.subregion
    this.capitals = this.countryObj.capital
    this.tld = this.countryObj.tld
    this.currencies = this.countryObj.currencies
    this.languages = this.countryObj.languages
    this.borderCountries = this.countryObj.borders
  },
  data() {
    return {
      countryObj: {},
      name: '',
      population: 0,
      region: '',
      subRegion: '',
      capitals: [],
      tld: [],
      currencies: {},
      languages: {},
      borderCountries: []
    }
  },
  components: { CountryButton }
}
</script>
<style>
.border-countries-container {
  display: flex;
}
</style>
