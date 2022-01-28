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
      let { data } = await this.axios.get(
        process.env.VUE_APP_SERVER_URL + "/plant"
      );
      let newData = [];
      data.forEach((element) => {
        newData.push({
          ...element,
          position: JSON.parse(element.coordinates),
        });
      });
      this.plants = newData;
    },
  },
};
</script>
