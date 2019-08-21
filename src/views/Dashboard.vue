<template>
  <div class="pa-2">
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-card class="pl-5 pt-3">
            <TaxesChart :taxes="taxes" />
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="pl-5 pt-3">
            <StocksChart :stocks="stocks" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TaxesChart from "../components/TaxesChart.vue";
import StocksChart from "../components/StocksChart.vue";

export default {
  components: {
    TaxesChart,
    StocksChart
  },
  computed: mapState({
    taxes: state => state.taxes,
    stocks: state => state.stocks
  })
};
</script>
