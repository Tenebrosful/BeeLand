<template>
  <div class="w-100 d-flex justify-content-center align-items-center">
    <div id="score">
      <table class="table border bg-white text-center">
        <thead>
          <th>Classement</th>
          <th>Joueur</th>
          <th>Score</th>
        </thead>
        <tbody>
          <tr v-for="(player, index) in orderedScore" :key="player.pseudo">
            <td class="border">{{ index + 1 }}</td>
            <td class="border">{{ player.pseudo }}</td>
            <td class="border">{{ player.score }} points</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    players: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      orderedScore: [],
    };
  },
  mounted() {
    this.orderedScore = this.players;
    this.orderedScore = this.orderedScore.sort((a, b) => b.score - a.score);
  },
};
</script>