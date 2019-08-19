/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
// eslint-disable-next-line import/no-cycle
import router from './router';

axios.defaults.baseURL = 'https://api.hgbrasil.com/finance?format=json-cors&key=f8ea8102';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    coins: null,
    stocks: null,
    taxes: null,
    bitcoins: null,
    user: {
      name: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')).name
        : null,
    },
  },
  mutations: {
    SET_FINANCES(state, finances) {
      state.coins = Object.values(finances.currencies);
      state.stocks = Object.values(finances.stocks);
      state.taxes = finances.taxes;
      state.bitcoins = Object.values(finances.bitcoin);

      const history = localStorage.getItem('state')
        ? JSON.parse(localStorage.getItem('state'))
        : null;

      localStorage.setItem('state', JSON.stringify({ ...history, [new Date().toLocaleDateString('pt-br')]: state }));
    },
    SAVE_USER(state, payload) {
      state.user.name = payload;
      localStorage.setItem('user', JSON.stringify(state.user));
      router.push({ name: '/' });
    },
  },
  actions: {
    async getFinances({ commit }) {
      try {
        const response = await axios.get();
        commit('SET_FINANCES', response.data.results);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
