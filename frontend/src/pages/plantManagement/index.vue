<template>
  <div class="bg-radial-grey p-3">
    <!--<router-link
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
    </router-link>-->
    <h1 class="text-center title">Gestion des plantes</h1>

    <div class="mt-4 d-flex justify-content-center">
        <button type="button" class="btn btn-primary"><i class="fas fa-plus"></i>&nbsp;Ajouter une plante</button>
    </div>

    <div class="mt-4 d-flex justify-content-center">
        <table class="table table-striped bg-white" style="width:80%">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Nom latin</th>
                    <th>localisation</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>érable champêtre</td>
                    <td>Acer campestris</td>
                    <td>collection historique</td>
                    <td><i class="fas fa-trash text-danger pointer"></i></td>
                </tr>
                <tr>
                    <td>érable champêtre</td>
                    <td>Acer campestris</td>
                    <td>collection historique</td>
                    <td><i class="fas fa-trash text-danger pointer"></i></td>
                </tr>
                <tr>
                    <td>érable champêtre</td>
                    <td>Acer campestris</td>
                    <td>collection historique</td>
                    <td><i class="fas fa-trash text-danger pointer"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
//import FormAddPlant from "../../components/FormAddPlant.vue";


export default {
    data(){
    return {
      
    }
  },
  components: {
   // FormAddPlant,
  },
  
};
</script>

<style scoped>

.bg-radial-grey{
    height: 100%;
    background: radial-gradient(#b6b6b6, #d1d1d1);
}

.title{
    width: 30%;
    background-color: #797979;
    height: 10%;
    color: rgb(238, 238, 238);
    border-radius: 10px;
    font-family: cursive;
    font-weight: bolder;
}

.btn{
    border-radius:8px;
}

.pointer{
    cursor: pointer;
}

</style>
