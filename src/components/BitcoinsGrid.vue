<template>
  <div class="pa-5">
    <v-container fluid>
      <v-row>
        <v-col class="pa-1" v-for="coin in this.parsedBitcoins" :key="coin.name" cols="4">
          <Card
            :title="coin.name"
            :value="Math.floor(coin.buy)"
            :variation="Number(coin.variation.toFixed(2))"
            prefix="R$"
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
    bitcoins: {
      type: Array
    }
  },
  computed: {
    parsedBitcoins() {
      return this.bitcoins.filter(coin => coin.buy)
    }
  },
};
</script>
