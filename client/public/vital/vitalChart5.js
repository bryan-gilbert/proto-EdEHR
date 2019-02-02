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

let options = {
  pointColour: '#222',
  pointRadius: 5,
  pointLabelFont: '16px Helvetica',
  pointFillColour: '#222',
  outOfBoundPointFontColour: '#F00',
  defaultAxisLineWidth: 0.2,
  defaultAxisLineColour: '#333',
  labelOffset: 20, // offset from left edge of canvas
  yLabelOffset: 30, // offset from left edge of canvas
  yAxisLabelColour: '#222',
  yAxisLabelFont: '16px Helvetica'
}

function createTemperature() {
  let min = 28
  let max = 42
  let ht = 150
  let vScale = ht / (max - min)
  let values = [34, 36, 40, 28, 42.1, 27.9, 55]
  let chartData = {
    originY: 100,
    height: ht,
    label: 'Temperature',
    labelOffsetFromBottom: 20, // vertical adjust label relative to chart bottom
    min: min,
    max: max,
    vScale: vScale,
    gridY: {
      scales: [
        { v: max, clr: 'red' },
        { v: 40, clr: 'rgb(200,100,100)' },
        { v: 38, lw: 0.5, clr: 'rgb(200,100,100)' },
        { v: 37, clr: 'rgb(100,100,100)' },
        { v: 36, clr: 'rgb(100,100,100)' },
        { v: 35, clr: 'rgb(100,100,100)' },
        { v: 34, clr: 'rgb(100,100,100)' },
        { v: 32.5, lw: 0.5, clr: 'rgb(100,100,200)' },
        { v: 30, clr: 'blue' },
        { v: min, clr: 'blue' }
      ]
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
  let min = 5
  let max = 40
  let ht = 150
  let vScale = ht / (max - min)
  let values = [40, 36, 42, 13, 21, 31, 30]
  let sf = 4
  let chartData = {
    originY: 100,
    height: ht,
    label: 'Respiratory rate',
    labelOffsetFromBottom: 20, // vertical adjust label relative to chart bottom
    min: min,
    max: max,
    vScale: vScale,
    gridY: {
      scales: [
        { v: max, clr: 'red' },
        { v: 40, clr: 'rgb(200,100,100)' },
        { v: 35, clr: 'rgb(200,100,100)' },
        { v: 30, clr: 'rgb(100,100,100)' },
        { v: 25, clr: 'rgb(100,100,100)' },
        { v: 20, clr: 'rgb(100,100,100)' },
        { v: 15, clr: 'rgb(100,100,100)' },
        { v: 10, clr: 'rgb(100,100,200)' },
        { v: min, clr: 'blue' }
      ]
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
  let max = data.max
  let mid = (max - min) / 2 + min
  let vScale = data.vScale
  let height = data.height
  let gridX = data.gridX
  let labelOffsetX = 10
  let pointRadius = options.pointRadius
  let values = data.dataSet.values
  context.save()
  for (let i = 0; i < values.length; i++) {
    let x = (i + 1) * gridX.stepSize - gridX.stepSize / 2
    let t = values[i]
    if (min <= t && t <= max) {
      let y = originY + height - (t - min) * vScale
      context.beginPath()
      context.fillStyle = options.pointColour
      context.arc(x, y, pointRadius, 0, 2 * Math.PI)
      context.fill()
      context.font = options.pointLabelFont
      context.fillStyle = options.pointFillColour
      context.fillText(t, x + labelOffsetX, y)
    } else {
      let yMin = originY + height - (0) * vScale
      let yMax = originY + height - (max - min) * vScale
      let y = t < min ? yMin : yMax
      console.log('out of bounds', t, y, min, max)
      context.fillStyle = options.outOfBoundPointFontColour
      context.fillText(t, x, y)
    }
  }
  context.restore()
}

function _drawYLabels(context, data) {
  let originY = data.originY
  let gridY = data.gridY
  let min = data.min
  let vScale = data.vScale
  let height = data.height
  context.save()
  for (let i = 0; i < gridY.scales.length; i++) {
    let scale = gridY.scales[i]
    let v = scale.v
    let y = originY + height - (v - min) * vScale
    context.beginPath()
    let x = options.yLabelOffset
    context.fillStyle = scale.clr || doptions.efaultAxisLineColour
    context.fillText(v, x, y)
    context.stroke()
  }
  context.restore()
}

function _drawYGrid(context, data) {
  let originY = data.originY
  let min = data.min
  let gridY = data.gridY
  let vScale = data.vScale
  let height = data.height
  let x = 0
  let width = context.canvas.width
  context.save()
  for (let i = 0; i < gridY.scales.length; i++) {
    let scale = gridY.scales[i]
    let v = scale.v
    let y = originY + height - (v - min) * vScale
    context.beginPath()
    context.lineWidth = scale.lw || options.defaultAxisLineWidth
    context.strokeStyle = scale.clr || options.defaultAxisLineColour
    context.moveTo(x, y)
    context.lineTo(width, y)
    context.stroke()
  }
  context.restore()
}

function _drawXGrid(context, data) {
  let originY = data.originY
  let height = data.height
  let gridX = data.gridX
  context.save()
  context.beginPath()
  context.lineWidth = options.defaultAxisLineWidth
  for (var i = 0; i < gridX.steps; i++) {
    let x = (i + 1) * gridX.stepSize
    let y1 = originY
    let y2 = originY + height
    context.moveTo(x, y1)
    context.lineTo(x, y2)
  }
  context.stroke()
  context.restore()
}

function _yAxisLabel(context, data) {
  let originY = data.originY
  let height = data.height
  let label = data.label
  let labelX = data.labelOffsetFromBottom
  let x = options.labelOffset
  let y = originY + height // bottom of chart
  context.save()
  context.translate(x, y)
  context.rotate(-Math.PI / 2)
  context.textAlign = 'left'
  context.font = options.yAxisLabelFont
  context.fillStyle = options.yAxisLabelColour
  context.fillText(label, labelX, 0)
  context.restore()
}
