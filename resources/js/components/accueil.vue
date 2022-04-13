<template>
    <v-form v-if="items.length == 0">
            <v-container>
              <v-row justify="center">
                <v-col
                  cols="8"
                >
                <center>
                  <img
                    max-height="150"
                    max-width="250"
                    src="../../../public/logo.png"
                  >
                </center>
                  <v-text-field
                    v-model="recherche"
                    label="Rechercher"
                    outlined
                    clearable
                  ></v-text-field>
                  
                  <center>
                    <v-btn
                      rounded
                      dark
                      v-on:click="rechercher"
                    >
                      Rechercher
                    </v-btn>
                  </center>
                </v-col>
              </v-row>
            </v-container>
    </v-form>
    <v-card
    class="mx-auto"
    v-else
  >
    <v-container>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <img :src="item.artworkUrl100">
              </v-avatar>
              <div>
                <v-card-title
                  v-text="item.trackName"
                ></v-card-title>

                <v-card-subtitle v-text="item.collectionName"></v-card-subtitle>
                <v-card-subtitle v-text="item.artistName"></v-card-subtitle>

              </div>
                <v-card-actions>
                  <v-btn
                    class="ml-2 mt-5"
                    rounded
                    large
                    v-on:click="ajouterPanier(item)"
                    v-if="!panier.panier.includes(item)"
                  >
                    ajouter au panier
                  </v-btn>
                  <v-btn
                    class="ml-2 mt-5"
                    rounded
                    color="red"
                    large
                    dark
                    v-on:click="supprimerPanier(item)"
                    v-else
                  >
                    Supprimer du panier
                  </v-btn>
                </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
    data() {
        return {
            recherche: '', 
            items: []
        }
    },
    computed: {
        panier() {
            return this.$store.getters['panier/panier'];
        },
    },
    methods: {
      rechercher()
      {
        axios.post('https://itunes.apple.com/search?term='+this.recherche).then((res) => {
            console.log(res.data)
            this.$store.dispatch('recherche/change', true);
              this.items = res.data.results;
        }).catch((err) => {});
      },
      ajouterPanier(item)
      {
          this.$store.dispatch('panier/ajoute', item);
      },
      supprimerPanier(item)
      {
          this.$store.dispatch('panier/supprimer', item);
      },
    },
    mounted() 
    {
        this.$store.dispatch('recherche/change', false);
        console.log(this.panier);
    },
}
</script>