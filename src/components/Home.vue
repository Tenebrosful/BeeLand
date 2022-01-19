<template>
<div>
    <div class="d-flex justify-content-center mt-5">
    <img src="../assets/bee.png" alt="">
    </div>
    <div class="d-flex justify-content-center">
      <h3 class="mt-5">Commencer le jeu</h3>
    </div>
    <div class="d-flex justify-content-center">
          <p class="texte text-center mt-5">Visitez le jardin botanique en réalisant un ou plusieurs de nos jeux. <br><br>

L'application sera sous la forme d'une carte du parc où l'on devra se placer physiquement à divers endroits à la manière afin d'aller scanner des QR code et en apprendre à propos des plantes et des abeilles.</p>
    </div>
  <footer class="d-grid gap-2">
    <button class="btn btn-primary" type="button">Jouer</button>
  </footer>
</div>

</template>

<style scoped>
  img{
    width: 50%;
  }

  .texte{
    font-size: 10px;
    width: 75%;
    font-family: cursive;
  }

  footer{
    position:absolute;
    bottom:0;
    width: 100%;
  }

  .btn{
    border-radius: 0px;
  }

  h3{
    font-family: cursive;
  }

</style>