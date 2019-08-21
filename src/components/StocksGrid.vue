<template>
  <div class="pa-5">
    <v-container fluid>
      <v-row>
        <v-col class="pa-1" v-for="stock in this.parsedStocks" :key="stock.name" cols="4">
          <Card
            :title="stock.name"
            :value="Math.round(stock.points)"
            :variation="stock.variation"
            sufix="pts"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  components: {
    Card
  },
  props: {
    stocks: {
      type: Array
    }
  },
  computed: {
    parsedStocks() {
      return this.stocks.filter(stock => stock.points) 
    }
  },
};
</script>
