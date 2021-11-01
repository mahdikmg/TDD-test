import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
Vue.use(Vuetify);

export default new Vuetify({
    defaultAssets: {
        font: {
            family: "YekanBakh",
        },
    },
    treeShake: true,
    rtl: true,
    theme: {
        themes: {
          light: {
            primary: '#2483b3'
          },
        },
    },
});