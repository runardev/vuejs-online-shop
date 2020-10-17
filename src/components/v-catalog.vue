<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.id"
        :product_data="product"
        @send-data-to-parent="showDataChildArticleInConsole"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "@/components/v-catalog-item";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS"])
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
    showDataChildArticleInConsole(data) {
      console.log(data);
    }
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    this.GET_PRODUCTS_FROM_API().then(response => {
      console.log("Data arrived!");
    });
  }
};
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
