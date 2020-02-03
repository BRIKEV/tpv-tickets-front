import { getTickets } from '@/api';

export default {
  getTickets({ commit }) {
    return getTickets()
      .then(({ data }) => commit('SET_ITEMS', data));
  },
};
