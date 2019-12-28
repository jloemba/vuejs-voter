<template>
  <div>
      <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import Vue from 'vue'

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

export default {
  
  name:"PieChart",
  props:{
    results: {
        type: Array
    }
  },
  data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ["Pour", "Contre"]
          }
        },
        series: [{
          name: 'series-1',
          data: [ this.results.filter(el => el === "Pour" || el === "POUR").length , this.results.filter(el => el === "Contre" || el === "CONTRE").length]
        }]
        
      }
    },
    created(){
      console.log(this.results)
      console.log(this.results.filter(el => el === "Pour" || el === "POUR").length)
      console.log(this.results.filter(el => el === "Contre" || el === "CONTRE").length)
    }

  
}
</script>

<style scoped>


</style>