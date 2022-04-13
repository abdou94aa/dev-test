export default {
    namespaced:true,
    state: {
        recherche: false,
    },
    mutations: {
        SET_RECHERCHE(state, bool) {
            state.recherche = bool;
        },

    },
    getters:{
        recherche(state){
          return {
            recherche:state.recherche,
          }
      }
    },
    actions:{
        change({commit},recherche ){
            
          commit('SET_RECHERCHE',recherche);
        },
    },

}