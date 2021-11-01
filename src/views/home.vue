<template>
  <div class="vh-100">
    <div class="title">
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
    <MapSection />
  </div>
</template>

<script>
import MapSection from "@/components/home/map.vue";

export default {
  name: "homepage",
  components: {
    MapSection,
  },
};
</script>

<style>
.title {
  position: fixed !important;
  z-index: 9999;
  right: 0;
}
</style>
