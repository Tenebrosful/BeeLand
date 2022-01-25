<template>
  <div>
    <router-link
      class="card backButton d-flex justify-content-center"
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
    <Map :plants="plants" />
    <div
      class="card scoreBoardButton d-flex justify-content-center cursor-pointer"
      @click="showScoreBoard = !showScoreBoard"
    >
      <img
        class="w-100"
        src="../../assets/icons/trophy-solid.svg"
        height="40"
        width="40"
      />
    </div>

    <Score v-if="showScoreBoard" :players="players" />
  </div>
</template>

<script>
import Map from "../../components/Map";
import Score from "../../components/Score";

export default {
  data() {
    return {
      test: "test",
      players: [
        { pseudo: "Wecko", score: 25 },
        { pseudo: "Lamastico", score: 5 },
        { pseudo: "John Macmanaman", score: 12 },
        { pseudo: "Raoudy", score: 18 },
      ],
      plants: [],
      showScoreBoard: false,
    };
  },
  components: {
    Map,
    Score,
  },
  mounted() {
    this.getPlants();
  },
  methods: {
    async getPlants() {
      let { data } = await this.axios.get(process.env.VUE_APP_SERVER_URL + "/plant");
      let newData = [];
      data.forEach((element) => {
        newData.push({
          ...element,
          position: this.getPositionByPlaceName(element.location),
        });
      });
      this.plants = newData;
    },
    getPositionByPlaceName(place) {
      let lat = null;
      let lng = null;
      switch (place) {
        case "collection historique":
          lat = 48.661535;
          lng = 6.154234;
          break;
        case "forêt":
          lat = 48.659767;
          lng = 6.156138;
          break;
        case "étang":
          lat = 48.660104;
          lng = 6.15293;
          break;
        case "collection ornementale":
          lat = 48.661897;
          lng = 6.154988;
          break;
        case "secteur arboreteum Chine":
          lat = 48.662623;
          lng = 6.15745;
          break;
        case "secteur terre de bruyère":
          lat = 48.659029;
          lng = 6.154923;
          break;
        case "secteur arboreteum Europe":
          lat = 48.661729;
          lng = 6.156998;
          break;
        case "secteur arboretum Europe":
          lat = 48.658751;
          lng = 6.155337;
          break;
        case "arboretum, secteur Chine":
          lat = 48.662623;
          lng = 6.157454;
          break;
        case "secteur arboretum Chine":
          lat = 48.659637;
          lng = 6.157311;
          break;
        case "arboretum,secteur chine":
          lat = 48.659637;
          lng = 6.157912;
          break;
        case "pelouse":
          lat = 48.659955;
          lng = 6.156835;
          break;
        case "pelouses":
          lat = 48.660041;
          lng = 6.158373;
          break;
        case "collection de dahlias":
          lat = 48.659715;
          lng = 6.154457;
          break;
        case "ruisseau":
          lat = 48.66111;
          lng = 6.153801;
          break;
        case "vert tendre, forêt":
          lat = 48.659381;
          lng = 6.154408;
          break;
        case "potager":
          lat = 48.660902;
          lng = 6.153436;
          break;
        case "potager écologique":
          lat = 48.660377;
          lng = 6.152832;
          break;
        case "roseraie":
          lat = 48.662801;
          lng = 6.156054;
          break;
        case "étang pavillon d'accueil":
          lat = 48.662122;
          lng = 6.15539;
          break;
        case "pelouse prairie":
          lat = 48.66052;
          lng = 6.15774;
          break;
        case "jardin écologique, potager":
          lat = 48.660909;
          lng = 6.153318;
          break;
        case "jardin écologique,potager":
          lat = 48.661168;
          lng = 6.15553;
          break;
        case "arboretum":
          lat = 48.662702;
          lng = 6.157363;
          break;
        case "collection historique ornementale":
          lat = 48.661312;
          lng = 6.154313;
          break;
        case "arboreteum, secteur Chine":
          lat = 48.660268;
          lng = 6.15633;
          break;
        case "secteur Amérique du nord":
          lat = 48.6625;
          lng = 6.156673;
          break;
        case "parcelle Emile Gallé":
          lat = 48.659786;
          lng = 6.153636;
          break;
        case "":
          lat = 48.661777;
          lng = 6.156013;
          break;
      }
      if (!lat && !lng) console.log(place);
      else return { lat, lng };
    },
  },
};
</script>
