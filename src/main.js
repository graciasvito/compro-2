/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from "vue";
import App from "./App.vue";

// Vuesax Component Framework
import Vuesax from "vuesax";
import "material-icons/iconfont/material-icons.css"; //Material Icons
import "vuesax/dist/vuesax.css"; // Vuesax
Vue.use(Vuesax);

// axios
// import axios from "./axios.js"
// Vue.prototype.$http = axios

// axios
import { init, setAuthorizationHeader } from "./axios.js";
window.restApi = setAuthorizationHeader(init());
// window.restApi = init();

// Theme Configurations
import "../themeConfig.js";

// Globally Registered Components
import "./globalComponents.js";

// Styles: SCSS
import "./assets/scss/main.scss";

// Tailwind
import "@/assets/css/main.css";

// Vue Router
import router from "./router";

// Vuex Store

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from "vue2-hammer";
Vue.use(VueHammer);

// Phone Input
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

Vue.component("vue-phone-number-input", VuePhoneNumberInput);

//  Portal Vue
import PortalVue from "portal-vue";
Vue.use(PortalVue);
// PrismJS
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";

// Feather font icon
require("./assets/css/iconfont.css");

// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';

// Font Awesome
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import VueApexCharts from "vue-apexcharts";

/* add icons to the library */
library.add(faPerson);
library.add(faCar);
library.add(faMotorcycle);
library.add(faTruck);
library.add(faArrowUp);
library.add(faArrowDown);
library.add(faChartColumn);
library.add(faFileLines);

// other component
import VueQRCodeComponent from "vue-qrcode-component";
import "intersection-observer";

Vue.component("qr-code", VueQRCodeComponent);
import VueFlicking from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";
Vue.use(VueFlicking);
Vue.use(VueApexCharts);
/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("apexchart", VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
