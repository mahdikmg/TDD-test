<template>
  <div style="height: 100%; width: 100%">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%"
      @update:center="centerUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <!-- <l-marker :lat-lng="marker" /> -->
    </l-map>
    <v-icon color="primary" class="pin" size="50px"> mdi-map-marker </v-icon>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";

import "leaflet/dist/leaflet.css";

export default {
  name: "mapSection",
  data() {
    return {
      zoom: 15,
      center: latLng(35.699582, 51.33767),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(35.699582, 51.33767),
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
    };
  },
  methods: {
    centerUpdate(center) {
      this.marker = center;
    },
  },
  components: {
    LMap,
    LTileLayer,
  },
};
</script>

<style>
.pin {
  z-index: 999;
  position: fixed !important;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
}
</style>
