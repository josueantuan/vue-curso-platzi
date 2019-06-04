<template>
  <div>
    <section class="hero is-success">
      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <div class="nav-item">
                <strong>
                  Platzi Music
                </strong>
              </div>
            </div>
            <div class="nav-right nav-menu" />
          </div>
        </header>
      </div>
      <div class="hero-body">
        <div class="container has-ext-center">
          <h1 class="title">
            Platzi Music
          </h1>
          <player-vue />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import playerVue from './Player.vue'
export default {
  components: {
    playerVue
  }
}
</script>
