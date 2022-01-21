<template>
  <div>
    <div class="d-flex justify-content-center mt-5">
      <img class="w-50" src="../assets/bee.png" alt="" />
    </div>
    <div class="d-flex justify-content-center">
      <h3 class="mt-3">Commencer le jeu</h3>
    </div>
    <div class="d-flex flex-column justify-content-center texte">
      <small class="text-center mt-3">
        Visitez le jardin botanique en réalisant un ou plusieurs de nos jeux.
      </small><br><br>
      <small class="text-center mx-5 mt-4">
        Vous êtes une abeille est votre objectif est d'être la plus productive possible.<br><br>
        À l'aide des QR code qui se trouvent à proximité des plantes, vous devez récolter un maximum de pollen possible.
        Le nectar sur les plantes vous permet de vous ravitailler en énergie.<br><br>
        Attention, toutes les plantes n'ont pas la même quantité de nectar et de pollen.<br><br>
        À vos téléphones. C'est partie !!!
      </small>
    </div>
    <footer class="d-grid gap-2">
      <router-link class="btn btn-outline-dark" to="/map">Jouer</router-link>
    </footer>
  </div>
</template>

<style>
  .texte{
    padding: 2%;
  }

  footer{
      position: relative;
      bottom: 0%;
      background-color:white;
      display: block;
  }

</style>
