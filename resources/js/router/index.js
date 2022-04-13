import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from '../components/App'
import Accueil from '../components/accueil'
import Signin from '../components/Signin'
import Signup from '../components/Signup'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: App,
    },
    {
        path: '/accueil',
        name: 'Accueil',
        component: Accueil,
    },
    {
        path: '/signin',
        name: 'signin',
        component: Signin,
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup,
    },
];

export default new VueRouter({routes})
