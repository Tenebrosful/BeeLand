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
  },
};
</script>
