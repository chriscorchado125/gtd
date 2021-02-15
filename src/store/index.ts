import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loaded: [''],
  },
  mutations: {
    setLoadedItems(state, item) {
      state.loaded.push(item);
    },
  },
  actions: {
  },
  modules: {
  },
});
