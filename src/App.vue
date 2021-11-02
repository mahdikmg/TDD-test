<template>
  <v-app v-resize="handleResize">
    <v-main>
      <router-view :windowWidth="windowWidth" :windowHeight="windowHeight" />
    </v-main>

    <v-overlay :opacity="0.3" :value="$loading.state.status" style="z-index: 9">
      <v-progress-circular indeterminate size="64" color="primary">
      </v-progress-circular>
    </v-overlay>

    <v-slide-x-reverse-transition
      v-for="(notif, index) in $notif.state.notifs"
      :key="index"
    >
      <v-snackbar
        :color="notif.color"
        left
        bottom
        :style="`bottom: ${index * 60}px;z-index: 999999;`"
        :absolute="true"
        v-if="notif.show"
        :value="notif.show"
        @input="() => $notif.remove(index)"
      >
        {{ notif.msg }}
      </v-snackbar>
    </v-slide-x-reverse-transition>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    windowWidth: 0,
    windowHeight: 0,
  }),
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    },
  },
  mounted() {
    this.handleResize();
  },
};
</script>
