import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/text/text.css";

import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
//
import "bootstrap";
//import "./assets/main.css";
import "./assets/scss/all.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);
const pinia = createPinia()

app.use(createPinia());
app.use(VueAxios, axios);
app.use(PrimeVue);
app.use(VueSweetalert2);
// app.use(ConfirmationService);
// app.use(ToastService);
// app.use(DialogService);
app.use(router);
app.use(pinia)
app.mount("#app");
