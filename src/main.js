import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import api from './api/api'

Vue.config.productionTip = false;

// access api globally
Vue.prototype.api = api

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
