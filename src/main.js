import { createApp } from 'vue'
import App from './index.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

createApp(App).use(VueAxios, axios).mount('#app')