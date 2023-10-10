<template>
  <div>
    <button @click="toggleTheme" class="btn-toggle">
      <i class="fa-moon" :class="[userTheme == 'theme-light' ? 'fa-regular' : 'fa-solid']"> </i>
      Dark Mode
    </button>
  </div>
</template>

<script>
export default {
  mounted() {
    const initUserTheme = this.getTheme()
    this.setTheme(initUserTheme)
  },
  data() {
    return {
      userTheme: 'theme-light'
    }
  },
  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem('user-theme')
      if (activeTheme == 'theme-light') {
        this.setTheme('theme-dark')
      } else {
        this.setTheme('theme-light')
      }
    },
    getTheme() {
      return localStorage.getItem('user-theme') ?? this.getMediaPreference()
    },
    setTheme(theme) {
      localStorage.setItem('user-theme', theme)
      this.userTheme = theme
      document.documentElement.className = theme
    },
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (hasDarkPreference) {
        return 'theme-dark'
      } else {
        return 'theme-light'
      }
    }
  }
}
</script>

<style>
.btn-toggle {
  color: inherit;
  background-color: inherit;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-family: inherit;
}
</style>
