<template>
  <div class="v-main-wrapper">
    <v-catalog />
  </div>
</template>

<script>
import vCatalog from "./v-catalog";
export default {
  name: "v-main-wrapper",
  components: {
    vCatalog
  }
};
</script>

<style lang="scss">
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
