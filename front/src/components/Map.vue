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
        v-for="(location, index) in locations"
        :position="{ lat: location.lat, lng: location.lng }"
        :clickable="true"
        @click="openInfoWindow(location)"
      />
      <GMapInfoWindow
        v-if="selectedLocation !== null"
        :position="{ lat: selectedLocation.lat, lng: selectedLocation.lng }"
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
  data() {
    return {
      zoom: 17,
      center: { lat: 48.661039, lng: 6.15502 },
      selectedLocation: null,
      infoBoxOpen: false,
      locations: [
        {
          Id: 1,
          name: "Position 1",
          infoText: "info 1",
          lat: 48.662059,
          lng: 6.153682,
        },
        {
          Id: 2,
          name: "Position 2",
          infoText: "info 2",
          lat: 48.661317,
          lng: 6.153274,
        },
        {
          Id: 3,
          name: "Position 3",
          infoText: "info 3",
          lat: 48.659933,
          lng: 6.153771,
        },
        {
          Id: 4,
          name: "Position 4",
          infoText: "info 4",
          lat: 48.660375,
          lng: 6.157973,
        },
        {
          Id: 5,
          name: "Position 5",
          infoText: "info 5",
          lat: 48.660575,
          lng: 6.153999,
        },
      ]
    };
  },
  methods: {
    openInfoWindow(location) {
      this.selectedLocation = location;
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
