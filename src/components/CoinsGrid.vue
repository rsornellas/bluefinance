<template>
  <div class="pa-5">
    <v-container fluid>
      <v-row>
        <v-col class="pa-1" v-for="coin in this.coins" :key="coin.name" cols="3">
          <Card :title="coin.name" :value="coin.buy" :variation="coin.variation" />
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