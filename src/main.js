import { createApp } from 'vue'
import App from './index.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import axios from 'axios'
import VueAxios from 'vue-axios'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

createApp(App).use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCCfld0seEmoVxj0ZRr7AAT_206D96d2QU',
        libraries: "places",
        region: "uk,en"
    },
}).use(VueAxios, axios).mount('#app')
