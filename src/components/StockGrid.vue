<template>
  <div class="pa-5">
    <v-container fluid>
      <v-row>
        <v-col class="pa-1" v-for="stock in this.stock" :key="stock.name" cols="4">
          <Card
            :title="stock.name"
            :value="Math.round(stock.price)"
            :variation="stock.change_percent"
            :symbol="stock.symbol"
            prefix="R$"
          />
        </v-col>
        <v-col class="pa-1" cols="4">
          <Card type="stock"/>
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
  props: ['stock'],
};
</script>