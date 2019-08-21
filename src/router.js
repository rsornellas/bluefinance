/* eslint-disable import/no-cycle */
import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Coins from './views/Coins.vue';
import Login from './views/Login.vue';
import Stocks from './views/Stocks.vue';
import Bitcoins from './views/Bitcoins.vue';
import Stock from './views/Stock.vue';
import StockChart from './views/StockChart.vue';
import store from './store';

Vue.use(Router);

const today = new Date().toLocaleDateString('pt-br');

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '/',
      beforeEnter: (to, from, next) => {
        const { user } = store.state;

        return user.name == null
          ? next({ name: 'Login' })
          : next({ name: 'Dashboard' });
      },
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/stocks',
      name: 'Stocks',
      component: Stocks,
    },
    {
      path: '/stock',
      name: 'Stock',
      component: Stock,
    },
    {
      path: '/stock/:id',
      name: 'StockChart',
      component: StockChart,
      props: true,
    },
    {
      path: '/bitcoins',
      name: 'Bitcoins',
      component: Bitcoins,
    },
    {
      path: '/coins',
      name: 'Coins',
      component: Coins,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        const { user } = store.state;

        return user.name == null ? next() : next({ name: 'Dashboard' });
      },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const { user } = store.state;

  if (to.path !== '/login') {
    if (user.created_at === today) {
      await store.dispatch('getFinances');

      return next();
    }

    localStorage.removeItem('user');
    store.commit('RESET_USER');

    return next({ name: 'Login' });
  }

  return next();
});

export default router;
