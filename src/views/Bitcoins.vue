<template>
  <BitcoinsGrid :bitcoins="bitcoins" />
</template>

<script>
import { mapState } from "vuex";
import BitcoinsGrid from '../components/BitcoinsGrid'

export default {
  components: {
    BitcoinsGrid,
  },
  mounted() {
    if (!this.bitcoins) this.$store.dispatch("getFinances");
  },
  computed: mapState({
    bitcoins: state => state.bitcoins
  })
};
</script>
