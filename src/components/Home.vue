<template>
  <div>
    <div class="d-flex justify-content-center mt-5">
      <img class="w-50" src="../assets/bee.png" alt="" />
    </div>
    <div class="d-flex justify-content-center">
      <h3 class="mt-3">BeeLand</h3>
    </div>
    <div class="d-flex flex-column justify-content-center">
      <p class="texte text-center">
        Visitez le jardin botanique en jouant à notre jeu.<br /><br />
        Vous êtes une abeille et votre but est de récolter du pollen.<br />
        En partant de la ruche, vous devez chercher les plantes autour de vous
        et récolter leur pollen.<br /><br />
        Sur les plantes, vous pouvez aussi récupérer du nectar qui servira à
        vous ravitailler en énergie.<br />
        Vous récupèrerez vos trésors grâce aux QR codes qui se trouvent près des
        plantes.<br /><br />
        Attention car toutes les plantes n'ont pas la même quantité de pollen et
        de nectar !<br /><br />
        À vos téléphones. C'est parti !!!
      </p>
    </div>
    <footer class="d-grid gap-2">
      <router-link class="btn btn-outline-dark" to="/map">Jouer</router-link>
    </footer>
  </div>
</template>

<style scoped>
@media (orientation: landscape) {
  img {
    width: 20%;
  }
}
</style>
