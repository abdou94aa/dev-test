<template>
  <div>
    <v-app-bar
      absolute
      color="white"
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title></v-toolbar-title>
            <v-row justify="center" v-if="recherche.recherche">
              <v-col
                cols="6"
                style="margin-top: 30px;padding-right:0px;"
              >
                <v-text-field
                  v-model="rechercher"
                  label="Rechercher"
                  outlined
                  clearable
                ></v-text-field>
              </v-col>
              <v-col
                cols="2"
                style="margin-top: 30px;padding-left:0px;"
              >
              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              </v-col>
            </v-row>

      <v-spacer></v-spacer>


      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              <router-link to="/signin" style="color: black;text-decoration: auto;">
                  Sign In
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link to="/signup" style="color: black;text-decoration: auto;">
                  Sign Up
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
    data() {
      return {
        rechercher: '',
      } 
    },
    computed: {
        recherche() {
            return this.$store.getters['recherche/recherche'];
        },
    },
    methods: {
      
    },
    mounted() {
      console.log(this.recherche)
    },
}
</script>
