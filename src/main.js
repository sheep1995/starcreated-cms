import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/text/text.css";
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";

import "bootstrap";
//import "./assets/main.css";
import "./assets/scss/all.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(PrimeVue);

app.mount("#app");
