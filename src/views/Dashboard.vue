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
    console.log(this.coins);
  },
  computed: mapState({
    coins: state => state.coins,
  }),
};
</script>
