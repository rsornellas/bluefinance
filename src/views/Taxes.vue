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
    if(!this.taxes) this.$store.dispatch('getFinances');
  },
  computed: mapState({
    taxes: state => state.taxes,
  }),
};
</script>
