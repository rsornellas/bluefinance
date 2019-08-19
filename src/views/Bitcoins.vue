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
    if(!this.bitcoins) this.$store.dispatch('getFinances');
  },
  computed: mapState({
    bitcoins: state => state.bitcoins,
  }),
};
</script>
