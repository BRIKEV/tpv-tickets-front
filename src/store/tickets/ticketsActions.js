import { getData, register, uploadPDF } from '@/api';
import i18n from '@/lang/i18n';

export default {
  getTickets({ commit }) {
    return getData()
      .then(({ data }) => commit('SET_ITEMS', data));
  },
  updateTicket({ commit, dispatch }, payload) {
    return register(payload)
      .then(() => {
        dispatch('sendSuccess', { title: i18n.t('notification.titleSuccess'), text: i18n.t('notification.updatePdfSuccess') });
        dispatch('getTickets');
      })
      .catch(() => dispatch('sendError', { title: i18n.t('notification.titleError'), text: i18n.t('notification.updatePdfError') }))
      .finally(() => commit('SET_LOADING', false));
  },
  sendPDF({ commit, dispatch }, payload) {
    commit('SET_LOADING', true);
    return uploadPDF(payload)
      .then(() => {
        dispatch('sendSuccess', { title: i18n.t('notification.titleSuccess'), text: i18n.t('notification.uploadPdfSuccess') });
        dispatch('getTickets');
      })
      .catch(() => dispatch('sendError', { title: i18n.t('notification.titleError'), text: i18n.t('notification.uploadPdfError') }))
      .finally(() => commit('SET_LOADING', false));
  },
};
