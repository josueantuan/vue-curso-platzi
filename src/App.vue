<template>
  <div id="App">
    <header-vue />
    <router-view />
    <footer-vue />
  </div>
</template>

<script>
import footerVue from './components/Footer.vue'
import headerVue from './components/Header.vue'
export default {
  name: 'App',
  components: {
    footerVue,
    headerVue
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  .is-active {
    border: 3px #23d160 solid;
  }
</style>
