<template>
  <div id="score">
      <table class="table border bg-white text-center">
        <thead>
          <th>Classement</th>
          <th>Joueur</th>
          <th>Score</th>
        </thead>
        <tbody>
          <tr v-for="(player, index) in $parent.players" :key="player.pseudo">
            <td class="border">{{index + 1}}</td>
            <td class="border">{{player.pseudo}}</td>
            <td class="border">{{player.score}} points</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
