/* eslint-disable no-unused-vars */
import { getTickets, register } from '@/api';
import i18n from '@/lang/i18n';

export default {
  getTickets({ commit }) {
    return getTickets()
      .then(({ data }) => commit('SET_ITEMS', data));
  },
  updateTicket({ commit, dispatch }, payload) {
    return register(payload)
      .then(() => {
        dispatch('sendSucces', { title: i18n.t('notification.titleSuccess'), text: i18n.t('notification.uploadPdfSuccess') });
        dispatch('getTickets');
      })
      .catch(() => dispatch('sendError', { title: i18n.t('notification.titleError'), text: i18n.t('notification.uploadPdfError') }));
  },
};
