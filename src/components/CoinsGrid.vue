<template>
  <div class="pa-5">
    <v-container fluid>
      <v-row>
        <v-col class="pa-1" v-for="coin in this.coins" :key="coin.name" cols="5">
          <Card
            :title="coin.name"
            :value="Number(coin.buy.toFixed(2))"
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
    coins: {
      type: Array
    }
  }
};
</script>
