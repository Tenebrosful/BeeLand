<template>
  <div>
    <GMapMap
      :center="center"
      :zoom="zoom"
      :options="{
        mapTypeControl: false,
      }"
      ref="map"
    >
      <GMapMarker
        :key="index"
        v-for="(plant, index) in plants"
        :position="{ lat: plant.position.lat, lng: plant.position.lng }"
        :clickable="true"
        @click="openInfoWindow(plant)"
      />
      <GMapInfoWindow
        v-if="selectedLocation !== null"
        :position="{
          lat: selectedLocation.position.lat,
          lng: selectedLocation.position.lng,
        }"
        :opened="infoBoxOpen"
        @closeclick="infoBoxOpen = false"
      >
        <div class="infoWindow">
          <h2 id="infoWindow-location">
            {{ selectedLocation.name }}
          </h2>
          <p>{{ selectedLocation.infoText }}</p>
        </div>
      </GMapInfoWindow>
    </GMapMap>
  </div>
</template>

<script>
export default {
  props: {
    plants: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      zoom: 17,
      center: { lat: 48.661039, lng: 6.15502 },
      selectedLocation: null,
      infoBoxOpen: false,
    };
  },
  methods: {
    openInfoWindow(plant) {
      this.selectedLocation = {
        name: plant.french_name,
        infoText: plant.flowering,
        position: plant.position,
      };
      this.infoBoxOpen = true;
    },
  },
};
</script>

<style>
.vue-map-container {
  height: 95vh;
}
</style>
