import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions/actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import state from "@/vuex/state/state";

Vue.use(Vuex);
window.vue = Vue; // DELETE this
let store = new Vuex.Store( {
  state,
  // По правилам хорошего тона методы в 'mutations', 'actions' и 'getters' должны писаться большими буквами с нижним подчеркиванием.
  mutations,
  actions,
  getters,

})

window.storE = store; // DELETE this

export default store;
