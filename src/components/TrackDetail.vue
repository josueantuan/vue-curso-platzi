<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4">
        <track-vue :track="track" />
      </div>
    </div>
  </div>
</template>
<script>
import trackVue from './Track.vue'
import trackService from '../services/track'
export default {
  components: {
    trackVue
  },
  data () {
    return {
      track: {}
    }
  },
  created () {
    const id = this.$route.params.id

    trackService.getById(id)
      .then(res => {
        this.track = res
      })
  }
}
</script>
<style lang="scss" scoped>
.columns {
  margin: 20px;
}
</style>
