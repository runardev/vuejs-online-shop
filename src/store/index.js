import Vue from "vue";
import Vuex from "vuex";

import mutations from "@/store/mutations/mutations";
import commonActions from "@/store/actions/actions";
import apiRequests from "@/store/actions/api-requests";
import getters from "@/store/getters/getters";

const actions = { ...commonActions, ...apiRequests };

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations,
  actions,
  getters,
  modules: {}
  // strict: debug
});
