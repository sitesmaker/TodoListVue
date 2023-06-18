import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import Todo from "@/store/modules/Todo";

export default new Vuex.Store({
  namespaced: true,
  modules: {
    Todo: Todo,
  },
});