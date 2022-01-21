<template>
  <div>
    <div class="d-flex justify-content-center mt-5">
      <img class="w-50" src="../assets/bee.png" alt="" />
    </div>
    <div class="d-flex justify-content-center">
      <h3 class="mt-5">Commencer le jeu</h3>
    </div>
    <div class="d-flex flex-column justify-content-center">
      <small class="text-center mt-5">
        Visitez le jardin botanique en réalisant un ou plusieurs de nos jeux.
      </small>
      <small class="text-center mx-5">
        L'application se présente sous la forme d'une carte du parc où vous
        devez vous rendre physiquement à divers endroits à la manière d'une
        abeille afin d'aller scanner des QR code et apprendre à propos des
        plantes et des abeilles.
      </small>
    </div>
    <footer class="d-grid gap-2">
      <router-link class="btn btn-outline-dark" to="/map">Jouer</router-link>
    </footer>
  </div>
</template>
