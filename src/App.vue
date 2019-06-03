/* eslint-disable vue/require-v-for-key */
<template>
  <div id="App">
    <header-vue />
    <notification-vue v-show="showNotification">
      <p slot="body">
        No se encontraron resultados
      </p>
    </notification-vue>
    <loader-vue v-show="isLoading" />
    <section
      v-show="!isLoading"
      class="section"
    >
      <nav class="nav has-shadow">
        <div class="container">
          <input
            v-model="searchQuery"
            class="input is-large"
            type="text"
            placeholder="Buscar"
          >
          <a
            class="button is-info is-large"
            @click="search"
          >
            Buscar
          </a>
          <a class="button is-danger is-large">
            &times;
          </a>
          <p>
            <small>
              {{ searchMessage }}
            </small>
          </p>
        </div>
      </nav>
      <div class="container">
        <div class="columns is-multiline">
          <div
            v-for="t in tracks"
            :key="t.id"
            class="column is-one-quarter"
          >
            <track-vue
              :class="{ 'is-active': t.id === selectedTrack}"
              :track="t"
              @select="setSelectedTrack"
            />
          </div>
        </div>
      </div>
    </section>
    <footer-vue />
  </div>
</template>

<script>
import trackServices from './services/track'
import footerVue from './components/Footer.vue'
import headerVue from './components/Header.vue'
import trackVue from './components/Track.vue'
import loaderVue from './components/shared/Loader.vue'
import notificationVue from './components/shared/Notification.vue'
export default {
  name: 'App',
  components: {
    footerVue,
    headerVue,
    trackVue,
    loaderVue,
    notificationVue
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    }
  },
  computed: {
    searchMessage () {
      return 'Encontrados: ' + this.tracks.length
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) {
        return
      }
      this.isLoading = true
      trackServices.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  .is-active {
    border: 3px #23d160 solid;
  }
</style>
