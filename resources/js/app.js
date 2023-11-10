import Vue from "vue";
import axios from "axios";

//Main pages
import App from "./views/app.vue";
Vue.prototype.$axios = axios;
const app = new Vue({
    el: "#app",
    components: { App },
});
