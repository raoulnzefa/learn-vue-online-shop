import Vue from 'vue';
import App from './App.vue';
import store from './vuex/store'
import router from './router/router'

import './assets/styles/scss/styles.scss';

Vue.config.productionTip = false; // What is it??

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
