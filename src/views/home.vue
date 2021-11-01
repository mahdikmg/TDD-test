<template>
  <div class="vh-100">
    <div :class="[windowWidth > 768 ? '' : 'w-100', 'title']">
      <v-card outlined min-width="350px">
        <v-list-item>
          <v-list-item-content>
            <div>موقعیت روی نقشه</div>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <v-card flat min-width="350px" color="rgba(256,256,256,.8)">
        <v-list-item>
          <v-list-item-content>
            <div class="subtitle-1">موقعیت خود را روی نقشه مشخص کنید.</div>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
    <MapSection @centerUpdated="(payload) => (this.location = payload)" />
    <div class="footer w-100">
      <v-btn
        color="success"
        x-large
        :width="windowWidth > 768 ? '300px' : '100%'"
        @click="handleNext"
      >
        <div class="text-h6">تاییـد موقعــیت</div>
      </v-btn>
    </div>
  </div>
</template>

<script>
import MapSection from "@/components/home/map.vue";

export default {
  name: "homepage",
  data() {
    return {
      location: {
        lat: 35.7023,
        lng: 51.338424,
      },
    };
  },
  methods: {
    handleNext() {
      this.$router.push({ name: "request", params: this.location });
    },
  },
  components: {
    MapSection,
  },
  props: {
    windowWidth: Number,
    windowHeight: Number,
  },
};
</script>

<style>
.title {
  position: fixed !important;
  z-index: 9999;
  right: 0;
}
.footer {
  position: fixed !important;
  z-index: 9999;
  bottom: 0;
  padding: 10px;
}
</style>
