<template>
  <CoinsGrid :coins="parsedCoins()" />
</template>

<script>
import CoinsGrid from "../components/CoinsGrid";
import { mapState } from 'vuex'

export default {
  components: {
    CoinsGrid
  },
  mounted() {
    if(!this.coins) this.$store.dispatch('getFinances');
  },
  computed: mapState({
    coins: state => state.coins,
  }),
  methods: {
    parsedCoins() {
      if(this.coins)
        return this.coins.filter(coin => !coin.length);
    }
  },
};
</script>