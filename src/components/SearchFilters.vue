<template>
  <div>
    <input
      type="text"
      name="country-search"
      id="country-search"
      placeholder="Search for a country..."
      @keyup="emitSearch"
    />
    <select name="region-select" id="region-select">
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
</template>
<script>
export default {
  emits: ['search-changed'],
  methods: {
    emitSearch(e) {
      this.$emit('search-changed', e.target.value)
    }
  }
}
</script>
<style></style>
