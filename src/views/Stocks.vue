<template>
  <StocksGrid :stocks="stocks" />
</template>

<script>
import { mapState } from 'vuex';
import StocksGrid from '../components/StocksGrid'

export default {
  components: {
    StocksGrid,
  },
  created() {
    if (!this.stocks) this.$store.dispatch('getFinances');
  },
  computed: mapState({
    stocks: state => state.stocks,
  }),
};
</script>
