import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/home.vue"),
  },
  // {
  //   path: "/request/:lat/:lng",
  //   name: "request",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/request.vue"),
  // },
  {
    path: "/requests",
    name: "requests",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/requests.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.VUE_APP_PUBLIC_PATH,
  routes,
});

export default router;
