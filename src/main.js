import Vue from 'vue';
import App from './App.vue';
import i18n from '@/lang/i18n';
import './registerServiceWorker';
import router from '@/router/routes';
import './assets/reset.css';

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
