<template>
  <div>
    <router-link
      class="fixed-top card backButton d-flex justify-content-center"
      title="Retour à l'accueil"
      to="/"
    >
      <img
        class="w-100"
        src="../../assets/icons/arrow-left-solid.svg"
        height="40"
        width="40"
      />
    </router-link>
    <Map />
    <Score></Score>
  </div>
</template>

<script>
import Map from "../../components/Map";
import Score from "../../components/Score";

export default {
  data() {
    return {
      test:"test",
      players: [
        {pseudo: "Wecko", score:25},
        {pseudo: "Lamastico", score:5},
        {pseudo: "John Macmanaman", score:12},
        {pseudo: "Raoudy", score:18}
      ]
    }
  },

  components: {
    Map,
    Score
  },
  mounted() {
    this.getPlants();
  },
  data() {},
  methods: {
    async getPlants() {
      const { data } = await this.axios.get(process.env.VUE_APP_SERVER_URL);
      console.log(data);
    },
    getPositionByPlaceName(place) {
      let { lat, lng } = null;
      switch (place) {
        case "collection historique":
          // 48.661535, 6.154234
          lat = 48.661535;
          lng = 6.154234;
          break;
        case "forêt":
          // 48.659767, 6.156138
          lat = 48.659767;
          lng = 6.156138;
          break;
        case "étang":
          // 48.660104, 6.152930
          lat = 48.660104;
          lng = 6.15293;
          break;
        case "collection ornementale":
          // 48.661897, 6.154988
          lat = 48.661897;
          lng = 6.154988;
          break;
        case "secteur arboreteum Chine":
          // 48.662623, 6.157450
          lat = 48.662623;
          lng = 6.157450;
          break;
        case "secteur terre de bruyère":
          // 48.659029, 6.154923
          lat = 48.659029;
          lng = 6.154923;
          break;
        case "secteur arboreteum Europe":
          // 48.661729, 6.156998
          lat = 48.661729;
          lng = 6.156998;
          break;
        case "arboretum, secteur Chine":
          // 48.662623, 6.157450
          lat = 48.662623;
          lng = 6.157450;
          break;
        case "pelouse":
          // 48.659955, 6.156835
          lat = 48.659955;
          lng = 6.156835;
          break;
        case "collection de dahlias":
          // 
          lat = 48.659955;
          lng = 6.156835;
          break;
        case "ruisseau":
          break;
        case "vert tendre, forêt":
          break;
        case "potager":
          break;
        case "potager écologique":
          break;
        case "roseraie":
          break;
        case "étang pavillon d'accueil":
          break;
        case "pelouse praierie":
          break;
        case "jardin écologique, potager":
          break;
        case "parcelle Emile Gallé":
          break;
        case "arboretum":
          break;
      }
      return { lat, lng };
    },
  },
};
</script>
