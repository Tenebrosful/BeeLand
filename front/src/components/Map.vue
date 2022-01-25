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
        <div class="justify-content-center align-items-center p-2">
          <div v-if="!showQR" class="w-100">
            <h3 id="infoWindow-location">
              Nom commun : {{ selectedLocation.french_name }}
            </h3>
            <h6>
              Nom latin : <i>{{ selectedLocation.latin_name }}</i>
            </h6>
            <img :src="selectedLocation.photo" alt="" />
            <h6>Hauteur : {{ selectedLocation.height }}</h6>
            <h6>Floraison : {{ selectedLocation.flowering }}</h6>
            <h6>Couleur : {{ selectedLocation.color }}</h6>
            <h6>Nectar : {{ selectedLocation.nectar }}</h6>
            <h6>Pollen : {{ selectedLocation.pollen }}</h6>
          </div>

          <div v-else class="w-100">
            <img :src="qrCodeUrl + selectedLocation.photo" alt="QR CODE" />
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
      this.showQR = false;
      this.selectedLocation = {
        french_name: plant.french_name,
        latin_name: plant.latin_name,
        height: plant.height,
        flowering: plant.flowering,
        color: plant.color,
        nectar: plant.nectar,
        pollen: plant.pollen,
        photo: plant.photo,
        position: plant.position,
      };
      this.infoBoxOpen = true;
    },
  },
};
</script>
