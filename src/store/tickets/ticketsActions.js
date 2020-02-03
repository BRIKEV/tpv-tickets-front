/* eslint-disable no-unused-vars */
import { getTickets, register } from '@/api';

export default {
  getTickets({ commit }) {
    return getTickets()
      .then(({ data }) => commit('SET_ITEMS', data));
  },
  updateTicket({ commit, dispatch }, payload) {
    return register(payload)
      .then(() => dispatch('sendSucces', { title: 'SUCCESS', text: 'Ticket check successfully' }))
      .catch(() => dispatch('sendError', { title: 'ERROR', text: 'The ticket could not be checked' }));
  },
};
