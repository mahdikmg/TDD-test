import Vue from "vue";
class Notif {
  constructor() {
    this.VM = new Vue({
      data: () => ({
        notifs: [],
      }),
    });
  }
  get state() {
    return this.VM.$data;
  }
  push(msg, color) {
    this.state.notifs.push({
      msg,
      color:
        color === "danger"
          ? "red darken-3"
          : color === "success"
          ? "green darken-3"
          : "",
      show: false,
    });
    setTimeout(
      () => (this.state.notifs[this.state.notifs.length - 1].show = true),
      500
    );
  }
  remove(index) {
    this.state.notifs[index].show = false;
    this.state.notifs.splice(index, 1);
  }
}

const notif = {
  Store: Notif,
  install(Vue, options) {
    Vue.mixin({
      beforeCreate() {
        this.$notif = options.store;
      },
    });
  },
};
export default notif;
