<template>
  <v-app id="app">
    <Nav />
    <v-main>
      <v-container fluid style="padding:0px; padding-top:200px">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Nav from './Nav.vue';

export default {
    data() {
      return {
      }
    },
    computed: {
        recherche() {
            return this.$store.getters['recherche/recherche'];
        },
    },
    components: {
      Nav
    },
    mounted() {
      this.$router.push('/accueil');
    },
}
</script>

<style>

</style>