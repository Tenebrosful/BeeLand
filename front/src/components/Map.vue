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
        :position="{
          lat: parseFloat(plant.position.lat),
          lng: parseFloat(plant.position.lng),
        }"
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
        <div class="justify-content-center align-items-center">
          <div v-if="!showQR" class="w-100">
            <h3 id="infoWindow-location">Nom : {{ selectedLocation.name }}</h3>
            <p>{{ selectedLocation.infoText }}</p>
          </div>

          <div v-else class="w-100">
            <img :src="qrCodeUrl + selectedLocation.name" alt="QR CODE" />
          </div>

          <button
            class="btn btn-secondary rounded w-100"
            @click="showQR = !showQR"
          >
            {{ showQR ? "Afficher le texte" : "Afficher le QR Code" }}
          </button>
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
      qrCodeUrl: "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=",
      showQR: false,
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
