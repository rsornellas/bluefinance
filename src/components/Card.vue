<template>
  <div>
    <v-card>
      <v-card-title class="headline">{{title}}</v-card-title>
      <v-container>
        <v-row>
          <v-col class="pl-4">
            <div class="display-1">
              <strong>R$</strong>
              {{parsedValue}}
            </div>
          </v-col>
          <v-col :class="classVariation" class="subtitle-1 pt-6">{{parsedVariation}}%</v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-card-actions>
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
    }
  },
  computed: {
    classVariation() {
      return this.variation > 0 ? "positive" : "negative";
    },
    parsedVariation() {
      return this.variation.toFixed(2);
    },
    parsedValue() {
      return this.value.toFixed(2);
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