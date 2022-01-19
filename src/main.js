//import { createApp } from 'vue'
import App from './home.vue'
//import App from './descPlant.vue'
//import App from './index.vue'

//import axios from 'axios'
//import VueAxios from 'vue-axios'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyCCfld0seEmoVxj0ZRr7AAT_206D96d2QU",
        libraries: "places",
        region: "uk,en"
    }
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");

//createApp(App).use(VueAxios, axios).mount('#app')