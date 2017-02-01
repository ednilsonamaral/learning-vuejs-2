<template>
  <div id="app">
      <RootHeader></RootHeader>

      <div class="container">
          <router-view></router-view> <!-- é onde eu quero que exiba as minhas rotas -->
      </div>
  </div>
</template>

<script>
import RootHeader from './components/RootHeader.vue'

export default {
  name: 'app',
  components: { RootHeader }
}
</script>

<style lang="sass" src="assets/sass/app.scss"></style>
