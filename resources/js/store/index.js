import Vue from 'vue';
import Vuex from 'vuex';

import theme from './modules/theme';
import panier from './modules/panier';
import recherche from './modules/recherche';

Vue.use(Vuex);



const store = new Vuex.Store({
    modules: {
        theme: theme,
        panier: panier,
        recherche: recherche,
    }
})


export default store;