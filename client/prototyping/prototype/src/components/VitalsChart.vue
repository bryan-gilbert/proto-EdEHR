<template lang="pug">
  div(class="content")
    button(id="doSomething") Do Something
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
  mounted: function() {
    let vitalChart = new VitalChart()
      var chartCanvas = document.getElementById('chartCanvas').getContext('2d')
      var axisCanvas = document.getElementById('axisCanvas').getContext('2d')

      let chartData
      chartData = vitalChart.createDates()
      chartData.originY = 0
    vitalChart._drawChart(chartCanvas, axisCanvas, chartData)

      chartData = vitalChart.createTemperature()
      chartData.originY = 150
    vitalChart._drawChart(chartCanvas, axisCanvas, chartData)

      chartData = vitalChart.createBloodPressure()
      chartData.originY = 300
    vitalChart._drawChart(chartCanvas, axisCanvas, chartData)

      chartData = vitalChart.createRespiratory()
      chartData.originY = 700
    vitalChart._drawChart(chartCanvas, axisCanvas, chartData)
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
