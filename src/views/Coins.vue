<template>
  <CoinsGrid :coins="parsedCoins()" />
</template>

<script>
import { mapState } from 'vuex';
import CoinsGrid from '../components/CoinsGrid';

export default {
  components: {
    CoinsGrid,
  },
  mounted() {
    if (!this.coins) this.$store.dispatch('getFinances');
  },
  computed: mapState({
    coins: state => state.coins,
  }),
  methods: {
    parsedCoins() {
      if (this.coins) return this.coins.filter(coin => !coin.length);
    },
  },
};
</script>
