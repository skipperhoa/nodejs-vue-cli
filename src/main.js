import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios';
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import axios from 'axios';
Vue.use(VueAxios,axios);
//import template vuejs
import App from './App.vue';
import Home from  './components/Home.vue'
import Category from './components/Category.vue'
import PostContent from './components/PostContent.vue'
Vue.use(VueRouter)
const routes = [
    {
        name:"Home",
        path: '/',
        component: Home
    },
     {
        name:"Category",
        path: '/tag/:tag', 
        component: Category,
    },
    {
        name:"PostContent",
        path: '/tag/:tag/:link_url', 
        component: PostContent,
    }
    
];
const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
