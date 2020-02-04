import Vue from 'vue';
import Vuex from 'vuex';

import tickets from './tickets/ticketsStore';
import notification from './notification/notificationsStore';
import loading from './loading/loadingStore';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tickets,
    notification,
    loading,
  },
});

export default store;
