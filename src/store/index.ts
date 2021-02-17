import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loaded: [''],
    isLoaded: false,
  },
  mutations: {
    setLoadedItems(state, item) {
      state.loaded.push(item);
    },
    setLoaded(state, item) {
      state.isLoaded = item;
    },
  },
  actions: {
  },
  modules: {
  },
});
