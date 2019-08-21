/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
// eslint-disable-next-line import/no-cycle
import router from './router';

const today = new Date().toLocaleDateString('pt-br');

axios.defaults.baseURL = 'https://api.hgbrasil.com/finance';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    stock: localStorage.getItem('stock')
      ? JSON.parse(localStorage.getItem('stock'))
      : [],
    coins: null,
    stocks: null,
    bitcoins: null,
    taxes: null,
    user: {
      name: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')).name
        : null,
      created_at: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')).created_at
        : null,
    },
  },
  mutations: {
    SET_FINANCES(state, finances) {
      state.coins = Object.values(finances.currencies);
      state.stocks = Object.values(finances.stocks);
      state.bitcoins = Object.values(finances.bitcoin);
      state.taxes = Object.values(finances.taxes);
    },
    SET_STOCK(state, stock) {
      const date = stock.updated_at.split(' ')[0].split('-');
      const parsedDate = `${date[2]}/${date[1]}/${date[0]}`;

      stock.updated_at = parsedDate;

      state.stock.push(stock);
      localStorage.setItem('stock', JSON.stringify(state.stock));
    },
    SAVE_USER(state, payload) {
      state.user.name = payload;
      state.user.created_at = today;
      localStorage.setItem('user', JSON.stringify(state.user));
      router.push({ name: 'Coins' });
    },
    RESET_USER(state) {
      state.user = {
        name: null,
        created_at: null,
      };
    },
  },
  actions: {
    async getFinances({ commit }) {
      try {
        const response = await axios.get('?format=json-cors&key=f8ea8102');
        commit('SET_FINANCES', response.data.results);
      } catch (error) {
        console.log(error);
      }
    },
    async getStock({ commit }, payload) {
      try {
        const response = await axios.get(`/stock_price?format=json-cors&key=f8ea8102&symbol=${payload.stock}`);
        commit('SET_STOCK', Object.values(response.data.results)[0]);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
