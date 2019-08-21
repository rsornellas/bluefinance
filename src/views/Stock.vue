<template>
  <div>
    <StockGrid :stock="filter()" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import StockGrid from "../components/StockGrid";

export default {
  components: {
    StockGrid
  },
  data() {
    return {
      today: new Date().toLocaleDateString("pt-br"),
      stockParsed: null
    };
  },
  computed: mapState({
    stock: state => state.stock
  }),
  methods: {
    filter() {
      return this.stock.filter(x => x.updated_at === this.today);
    }
  }
};
</script>