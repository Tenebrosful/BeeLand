import { createApp } from 'vue'
import * as VueRouter from 'vue-router'

import App from './App.vue'
import Home from './pages/index.vue'
import Map from './pages/map/index.vue'
import Plant from './pages/plant/index.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import axios from 'axios'
import VueAxios from 'vue-axios'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "./assets/style/main.css"

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/map',
            name: 'Map',
            component: Map
        },
        {
            path: '/plant',
            name: 'Plant',
            component: Plant
        }
    ]
})

createApp(App).use(router).use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCCfld0seEmoVxj0ZRr7AAT_206D96d2QU',
        libraries: "places",
        region: "uk,en"
    }
}).use(VueAxios, axios).mount('#app')
