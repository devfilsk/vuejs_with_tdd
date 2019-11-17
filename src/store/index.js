import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state';
import mutations from '@/store/mutations';
import * as actions from '@/store/actions';

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  // modules: {
  // }
})
