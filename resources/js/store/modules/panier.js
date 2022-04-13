export default {
    namespaced:true,
    state: {
        panier: [],
    },
    mutations: {
        SET_PANIER(state, items) {
            state.panier.push(items);
        },
        DELETE_PANIER(state, items) {
            var myIndex = state.panier.indexOf(items);
            state.panier.splice(myIndex, 1);
        },

    },
    getters:{
      panier(state){
          return {
              panier:state.panier,
          }
      }
    },
    actions:{
        ajoute({commit},panier ){
            
          commit('SET_PANIER',panier);
        },
        supprimer({commit},panier ){
            
          commit('DELETE_PANIER',panier);
        }
    },

}