import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/text/text.css";

import axios from "axios";
import VueAxios from "vue-axios";

import Loading from 'vue-loading-overlay';


// 引入 VeeValidate 元件跟功能
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
// 引入 VeeValidate 的驗證規則
import AllRules from '@vee-validate/rules';
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n';
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';


import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Tooltip from 'primevue/tooltip';

//loading
//import Loading from 'vue-loading-overlay';
//import 'vue-loading-overlay/dist/vue-loading.css';

//
import "bootstrap";
//import "./assets/main.css";
import "./assets/scss/all.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
//import Paginate from 'vuejs-paginate'


const app = createApp(App);
const pinia = createPinia()
// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');
//

app.use(createPinia());
app.use(VueAxios, axios);
app.use(PrimeVue);
app.use(VueSweetalert2);
// app.use(ConfirmationService);
// app.use(ToastService);
// app.use(DialogService);

// 掛載 Global 的 VeeValidate 元件
app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);
app.component('Loading', Loading);

//app.component('paginate', Paginate);

app.directive('tooltip', Tooltip);

app.use(router);
app.use(pinia)
app.mount("#app");
