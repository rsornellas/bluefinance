<template>
  <div class="pl-3">
    <h3 class="pl-3 pt-1">Bolsas</h3>
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  props: ['stocks'],
  data: function() {
    return {
      options: {
        chart: {
          id: "vuechart"
        },
        xaxis: {
          categories: this.setCategories()
        }
      },
      series: [
        {
          name: "series-1",
          data: this.setSeries()
        }
      ]
    };
  },
  methods: {
    setCategories() {
      let categories = this.stocks.map(stock => stock.name);
      return categories
    },
    setSeries() {
      let series = this.stocks.map(stock => stock.variation);
      return series
    }
  },
};
</script>
