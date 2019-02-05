<template lang="pug">
  div(class="content")
    div(class="chart-wrapper")
      div(class="axis-wrapper")
        canvas(id="axisCanvas", :width="axisCanvasWidth", :height="axisCanvasHeight")
      div(class="canvas-wrapper")
        canvas(id="chartCanvas", :width="chartCanvasWidth", :height="chartCanvasHeight")
</template>

<script>
import VitalChart from '../helpers/vitalChart'

const yAxisWidth = 55
const canvasHeight = 1000
const canvasWidth = 1200

export default {
  name: 'VitalsChart',
  data: function() {
    return {
      axisCanvasWidth: yAxisWidth,
      axisCanvasHeight: canvasHeight,
      chartCanvasWidth: canvasWidth,
      chartCanvasHeight: canvasHeight
    }
  },
  props: {
    vitals: { type: Array },
    vitalsModel: { type: Object }
  },
  computed: {
    // these arrays are magically updated by Vue when the vitals are changed
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
    // when the vitals are changed trigger a redraw
    vitals: function() {
      this.redraw()
    }
  },
  methods: {
    // Prototype only ....
    // add another row to the data table.
    addData() {
      this.vitalChart.addData(this.vitals.table)
    },
    redraw() {
      let vitalChart = this.vitalChart
      vitalChart.clear()
      // The first number is the origin of the chart relative to the top left
      // The second number is the height of the chart
      vitalChart.drawChart(this.dates, 0, 100)
      vitalChart.drawChart(this.temperatures, 120, 200)
      vitalChart.drawChart(this.bloodPressure, 350, 300)
      vitalChart.drawChart(this.respiratory, 680, 150)
    }
  },
  mounted: function() {
    let chartCanvas = document.getElementById('chartCanvas')
    let axisCanvas = document.getElementById('axisCanvas')
    this.vitalChart = new VitalChart(chartCanvas, axisCanvas)
    // draw to get empty chart
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
