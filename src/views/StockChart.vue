<template>
  <div>
    <StockChart :stock="getBySymbol(id)" :id="id" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import StockChart from '../components/StockChart.vue'

  export default {
    components: {
      StockChart,
    },
    props: {
      id: {
        type: String,
      },
    },
    computed: mapState({
      stock: state => state.stock
    }),
    methods: {
      getBySymbol(id) {
        return this.stock.filter(x => x.symbol === id.toUpperCase())
      }
    },
  }
</script>