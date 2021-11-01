import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import api from "./api/api";
import loader from "./plugins/loader";
import notif from "./plugins/notification";

Vue.use(loader, {
  store: new loader.Store(),
});
Vue.use(notif, {
  store: new notif.Store(),
});

Vue.config.productionTip = false;

// access api globally
Vue.prototype.api = api;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
