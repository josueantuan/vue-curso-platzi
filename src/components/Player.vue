<template>
  <div
    v-if="track && track.album"
    class="content"
  >
    <p class="is-128x128">
      <img :src="track.album.images[0].url">
    </p>
    <p>
      <strong>
        {{ track.name }}
      </strong>
      <small>
        {{ track.furation_ms }}
      </small>
    </p>
    <p>
      <audio
        controls
        :src="track.preview_url"
      >
        {{}}
      </audio>
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      track: {}
    }
  },
  created () {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  }
}
</script>
<style lang="scss" scoped>
img {
  width: 124px;
  border-radius: 50%;
}
</style>
