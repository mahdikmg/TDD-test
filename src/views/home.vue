<template>
  <div class="h-100">
    <div class="vh-100" v-if="step === 1">
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
      <MapSection
        @centerUpdated="(payload) => (this.location = payload)"
        :initialCenter="location"
      />
      <div class="footer w-100">
        <v-btn
          color="success"
          x-large
          :width="windowWidth > 768 ? '300px' : '100%'"
          @click="handleNext"
          data-test="confirmBtn"
        >
          <div class="text-h6">تاییـد موقعــیت</div>
        </v-btn>
      </div>
    </div>
    <Request v-if="step === 2" :location="location" @back="handleBack" />
  </div>
</template>

<script>
export default {
  name: "homepage",
  data() {
    return {
      location: {
        lat: 35.699582,
        lng: 51.33767,
      },
      step: 1,
    };
  },
  methods: {
    handleNext() {
      localStorage.setItem("location", JSON.stringify(this.location));
      this.step = 2;
    },
    handleBack() {
      if (localStorage.getItem("location")) {
        this.location = JSON.parse(localStorage.getItem("location"));
        localStorage.removeItem("location");
      }
      this.step = 1;
    },
  },
  components: {
    MapSection: () => import("@/components/home/map.vue"),
    Request: () => import("./request.vue"),
  },
  props: {
    windowWidth: Number,
    windowHeight: Number,
  },
  mounted() {
    if (localStorage.getItem("location")) {
      this.location = JSON.parse(localStorage.getItem("location"));
      this.step = 2;
    }
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
