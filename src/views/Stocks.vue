<template>
  <HelloWorld />
</template>

<script>
import HelloWorld from '../components/HelloWorld';
import { mapState } from 'vuex'

export default {
  components: {
    HelloWorld,
  },
  mounted () {
    if(!this.stocks) this.$store.dispatch('getFinances');
  },
  computed: mapState({
    stocks: state => state.stocks,
  }),
};
</script>
