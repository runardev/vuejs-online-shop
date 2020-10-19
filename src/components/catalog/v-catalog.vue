<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog__link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>
    <h1>Catalog</h1>
    <v-select
      :options="categories"
      @select="optionSelect"
      :selected="selected"
    />
    <p>Selected option goes here: {{ selected }}</p>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.id"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "@/components/catalog/v-catalog-item";
import vSelect from "@/components/v-select";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
    vSelect
  },
  props: {},
  data() {
    return {
      categories: [
        { name: "Все", value: "all" },
        { name: "Мужские", value: "m" },
        { name: "Женские", value: "f" }
      ],
      selected: "Все"
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"])
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    optionSelect(option) {
      this.selected = option.name;
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
  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 2;
    border: solid 1px #aeaeae;
  }
}
</style>
