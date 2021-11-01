import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import api from "./api/api";
import loader from "./plugins/loader";
import notif from "./plugins/notification";

import "./assets/css/custom.css";
import "./assets/css/yekanbakh.css";

// fix leaflet marker not showing
import { Icon } from "leaflet";
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

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
