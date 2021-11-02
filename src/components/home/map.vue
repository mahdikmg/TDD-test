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
      <l-tile-layer :url="url" />
    </l-map>
    <v-icon color="primary" class="pin" size="60px">
      mdi-map-marker-outline
    </v-icon>
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
      center: latLng(this.initialCenter.lat, this.initialCenter.lng),
      url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      mapOptions: {
        zoomSnap: 0.5,
        zoomControl: false,
        attributionControl: false,
      },
      showMap: true,
    };
  },
  methods: {
    centerUpdate(center) {
      this.$emit("centerUpdated", center);
    },
  },
  props: {
    initialCenter: Object,
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
  top: calc(50% - 50px);
  left: calc(50% - 30px);
}
</style>
