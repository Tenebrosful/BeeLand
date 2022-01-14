<template>
  <div>
    <div class="w-100 d-flex align-items-center justify-content-center">
      <h1>BeeLand</h1>
    </div>
    <Map />
  </div>
</template>

<script>
import Map from "./components/Map.vue";

export default {
  components: {
    Map,
  },
};
</script>
