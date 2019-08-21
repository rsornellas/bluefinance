<template>
  <div>
    <h3 class="pl-3 pt-1">Taxas</h3>
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  props: ['taxes'],
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
      delete this.taxes[0].date;
      return Object.keys(this.taxes[0])
    },
    setSeries() {
      delete this.taxes[0].date;
      this.taxes[0].daily_factor = Math.floor(this.taxes[0].daily_factor);
      return Object.values(this.taxes[0])
    }
  },
};
</script>
