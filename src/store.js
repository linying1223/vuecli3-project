import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import mystorage from '@/utils/storage';
export default new Vuex.Store({
  state: {
    token: '',
    userAccount: ''
  },
  mutations: {
    loginIn(state, val) {
      state.token = val.token
      state.userAccount = val.userAccount
      mystorage.set('token', val.token);
      mystorage.set('userAccount', val.userAccount);
    },
    loginOut(state) {
      state.token = ''
      state.userAccount = ''
      mystorage.set('token', null);
      mystorage.set('userAccount', null);
    }
  },
  actions: {

  }
})