/*
var oldheight = 200
var maxT = 40
var minT = 29
var oldvScale = oldheight / (maxT - minT)
var dataSet = {
  data: [34.8, 37.3, 39, 35, 40.5, 29.9, 30]
}
var gridX = {
  steps: dataSet.data.length,
  stepSize: 75
}
var gridY = {
  steps: maxT - minT,
  stepSize: 150 / (maxT - minT)
}
*/

function doSomething() {}

function createTemperature() {
  let min = 29
  let max = 40
  let ht = 150
  let vScale = ht / (max - min)
  let values = [34.8, 37.3, 39, 35, 40.5, 29.9, 30]
  let chartData = {
    originY: 100,
    height: ht,
    label: 'Temperature',
    labelOffsetFromBottom: 20, // vertical adjust label relative to chart bottom
    min: min,
    max: max,
    vScale: vScale,
    gridY: {
      steps: max - min,
      stepSize: vScale
    },
    gridX: {
      steps: values.length,
      stepSize: 75
    },
    dataSet: {
      values: values
    }
  }
  return chartData
}

function createRespiratory() {
  let min = 6
  let max = 40
  let ht = 150
  let vScale = ht / (max - min)
  let values = [34.8, 30, 24, 13, 21, 31, 30]
  let chartData = {
    originY: 100,
    height: ht,
    label: 'Respiratory rate',
    labelOffsetFromBottom: 20, // vertical adjust label relative to chart bottom
    min: min,
    max: max,
    vScale: vScale,
    gridY: {
      steps: max - min,
      stepSize: vScale
    },
    gridX: {
      steps: values.length,
      stepSize: 75
    },
    dataSet: {
      values: values
    }
  }
  return chartData
}

/**
 * This is the main public entry point
 */
function vitalChartLoad() {
  var chartCanvas = document.getElementById('chartCanvas').getContext('2d')
  var axisCanvas = document.getElementById('axisCanvas').getContext('2d')

  let chartData = createTemperature()
  chartData.originY = 0
  chartData.originY = 100
  _drawChart(chartCanvas, axisCanvas, chartData)
  chartData = createRespiratory()
  chartData.originY = 300
  _drawChart(chartCanvas, axisCanvas, chartData)
}

function _drawChart(chartCanvas, axisCanvas, chartData) {
  _drawYGrid(chartCanvas, chartData)
  _drawXGrid(chartCanvas, chartData)
  _drawData(chartCanvas, chartData)
  _yAxisLabel(axisCanvas, chartData)
  _drawYLabels(axisCanvas, chartData)
}

function _drawData(context, data) {
  let originY = data.originY
  let min = data.min
  let vScale = data.vScale
  let height = data.height
  let gridX = data.gridX
  context.fillStyle = '#999'
  let values = data.dataSet.values
  for (var i = 0; i < values.length; i++) {
    let x = (i + 1) * gridX.stepSize
    let t = values[i]
    let y = originY + height - (t - min - 1) * vScale
    context.beginPath()
    context.fillStyle = '#200'
    context.arc(x, y, 5, 0, 2 * Math.PI)
    context.fill()
    context.font = '16px Helvetica'
    context.fillStyle = '#222'
    context.fillText(t, x + 10, y)
  }
}

function _drawYLabels(context, data) {
  let originY = data.originY
  let gridY = data.gridY
  let max = data.max
  context.beginPath()
  for (var i = 0; i < gridY.steps; i++) {
    let y = originY + (i + 1) * gridY.stepSize
    let w = 30
    let t = max - i
    // uncomment to show the index
    // t += ' ' + i
    context.fillText(t, w, y)
  }
  context.stroke()
}

function _drawYGrid(context, data) {
  let originY = data.originY
  let gridY = data.gridY
  let x = 0
  let width = context.canvas.width
  let lw = context.lineWidth
  context.lineWidth = 0.4
  context.beginPath()
  context.moveTo(x, originY)
  context.lineTo(width, originY)
  for (var i = 0; i < gridY.steps; i++) {
    let y = originY + (i + 1) * gridY.stepSize
    context.moveTo(x, y)
    context.lineTo(width, y)
  }
  context.stroke()
  context.lineWidth = lw
}

function _drawXGrid(context, data) {
  let originY = data.originY
  let height = data.height
  let gridX = data.gridX
  context.beginPath()
  for (var i = 0; i < gridX.steps; i++) {
    let x = (i + 1) * gridX.stepSize
    let y1 = originY
    let y2 = originY + height
    context.moveTo(x, y1)
    context.lineWidth = 0.4
    context.lineTo(x, y2)
  }
  context.stroke()
}

const labelOffset = 20 // offset from left edge of canvas

function _yAxisLabel(context, data) {
  let originY = data.originY
  let height = data.height
  let label = data.label
  let labelOffsetFromBottom = data.labelOffsetFromBottom
  let newx = labelOffset
  let newy = originY + height // bottom of chart
  let labelXposition = labelOffsetFromBottom // vertical adjust relative to chart
  context.save()
  context.translate(newx, newy)
  context.rotate(-Math.PI / 2)
  context.textAlign = 'left'
  context.font = '16px Helvetica'
  context.fillStyle = '#222'
  context.fillText(label, labelXposition, 0)
  context.restore()
}
