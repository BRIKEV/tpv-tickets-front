import Vue from 'vue';
import Vuex from 'vuex';

import tickets from './tickets/ticketsStore';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tickets,
  },
});

export default store;
