<template>
  <div>
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
    <Plant />
  </div>
</template>

<script>
import Plant from "../../components/DescPlant";

export default {
  components: {
    Plant,
  },
};
</script>
