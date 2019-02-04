<template lang="pug">
  div(class="content")
    // div temperatures {{temperatures}}
    div(class="chart-wrapper")
      div(class="axis-wrapper")
        canvas(id="axisCanvas", width="55", height="1200")
      div(class="canvas-wrapper")
        canvas(id="chartCanvas", width="1200", height="1200")
</template>

<script>
import VitalChart from './vitalChart5'

export default {
  name: 'VitalsChart',
  props: {
    vitals: {type: Array},
    vitalsModel: {type: Object}
  },
  computed: {
    temperatures() {
      return this.vitalsModel.getTemperature(this.vitals)
    },
    dates() {
      return this.vitalsModel.getDates(this.vitals)
    },
    bloodPressure() {
      return this.vitalsModel.getBloodPressure(this.vitals)
    },
    respiratory() {
      return this.vitalsModel.getRespiratory(this.vitals)
    }
  },
  watch: {
    vitals: function() {
      console.log('watch sees new vitals')
      this.redraw()
    }
  },
  methods: {
    addData() {
      this.vitalChart.addData(this.vitals.table)
    },
    redraw() {
      var chartCanvas = document.getElementById('chartCanvas').getContext('2d')
      var axisCanvas = document.getElementById('axisCanvas').getContext('2d')
      let vitalChart = this.vitalChart

      let chartData
      chartData = this.dates
      chartData.originY = 0
      vitalChart._drawChart(chartCanvas, axisCanvas, chartData)

      chartData = this.temperatures
      chartData.originY = 150
      vitalChart._drawChart(chartCanvas, axisCanvas, chartData)

      chartData = this.bloodPressure
      chartData.originY = 350
      vitalChart._drawChart(chartCanvas, axisCanvas, chartData)

    chartData = this.respiratory
    chartData.originY = 700
    vitalChart._drawChart(chartCanvas, axisCanvas, chartData)

    }
  },
  created: function() {
    this.vitalChart = new VitalChart()
  },
  mounted: function() {
    this.redraw()
  }
}
</script>

<style scoped>
.canvas-wrapper {
  flex: 1 0 auto;
  max-width: 500px;
  padding: 10px 0 10px 0;
  overflow-x: auto;
  border: 1px dotted black;
}
canvas {
  border: 1px dotted black;
}

.axis-wrapper {
  flex: 0 1 auto;
  padding: 10px 0 10px 0;
  border: 1px dotted black;
}

.chart-wrapper {
  display: flex;
  margin: 1rem;
}
</style>
