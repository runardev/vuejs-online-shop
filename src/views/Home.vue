<template>
  <div class="home">
    <v-main-wrapper></v-main-wrapper>
  </div>
</template>

<script>
// @ is an alias to /src
import vMainWrapper from "@/components/v-main-wrapper";

export default {
  name: "Home",
  components: {
    vMainWrapper
  }
};
</script>
