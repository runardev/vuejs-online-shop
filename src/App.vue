<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Catalog</router-link> |
      <router-link :to="{ name: 'cart', params: { cart_data: CART } }"
        >Cart</router-link
      >
      |
      <router-link to="/about">About</router-link>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CART"])
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
