<template>
  <div>
    <v-card v-if="type === undefined">
      <v-card-title class="headline">{{title}}</v-card-title>
      <v-container>
        <v-row>
          <v-col class="pl-4">
            <div v-if="value" class="display-1">
              <strong v-if="prefix">{{prefix}}</strong>
              {{value}}
              <strong v-if="sufix">{{sufix}}</strong>
            </div>
          </v-col>
          <v-col :class="classVariation" class="subtitle-1 pt-6">{{variation}}%</v-col>
        </v-row>
        <v-card-actions v-if="symbol">
          <v-btn icon :to="`/stock/${symbol}`">
            <v-icon>mdi-chart-line</v-icon>
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
    <v-card v-else>
      <v-container fluid>
        <v-row>
          <v-col>
            <v-text-field
              class="pa-3"
              label="Preencha o código do ativo"
              v-model="stock"
              @keyup.enter="emit"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    value: {
      type: Number,
      default: 0.0
    },
    variation: {
      type: Number,
      default: 0.0
    },
    prefix: {
      type: String
    },
    sufix: {
      type: String
    },
    type: {
      type: String
    },
    symbol: {
      type: String
    }
  },
  data() {
    return {
      stock: null
    };
  },
  computed: {
    classVariation() {
      return this.variation > 0 ? "positive" : "negative";
    }
  },
  methods: {
    emit() {
      if (this.stock)
        this.$store.dispatch("getStock", {
          stock: this.stock
        });
      this.stock = null;
    }
  }
};
</script>

<style scoped>
.positive {
  color: green;
}

.negative {
  color: red;
}
</style>
