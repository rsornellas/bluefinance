<template>
  <div class="pl-3">
    <h3 class="pl-3 pt-1">{{id}}</h3>
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  props: ['stock', 'id'],
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
      let categories = this.stock.map(stock => stock.updated_at);
      return categories
    },
    setSeries() {
      let series = this.stock.map(stock => stock.price);
      return series
    }
  },
};
</script>
