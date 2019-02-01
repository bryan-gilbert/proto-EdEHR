var height = 200
var maxT = 40
var minT = 29
var vScale = height / (maxT - minT)
var dataSet = {
  data: [34.8, 37.3, 39, 35, 40.5, 29.9, 30]
}
var gridX = {
  steps: dataSet.data.length,
  stepSize: 75
}
var gridY = {
  steps: maxT - minT,
  stepSize: height / (maxT - minT)
}

function doSomething() {}

function vitalChartLoad() {
  var chartCanvas = document.getElementById('chartCanvas').getContext('2d')
  var axisCanvas = document.getElementById('axisCanvas').getContext('2d')

  function go() {
    drawYGrid(chartCanvas)
    drawXGrid(chartCanvas)
    drawData(chartCanvas)
    yAxisLabel(axisCanvas)
    drawYLabels(axisCanvas)
  }
  go()
}

function drawData(context) {
  context.fillStyle = '#999'
  let data = dataSet.data
  for (var i = 0; i < data.length; i++) {
    let x = (i + 1) * gridX.stepSize
    let t = data[i]
    let y = height - (t - minT - 1) * vScale
    //  console.log('data', i,t,y)
    context.beginPath()
    context.fillStyle = '#200'
    context.arc(x, y, 5, 0, 2 * Math.PI)
    context.fill()
    context.font = '16px Helvetica'
    context.fillStyle = '#222'
    context.fillText(t, x + 10, y)
  }
}

function drawYLabels(context) {
  context.beginPath()
  for (var i = 0; i < gridY.steps; i++) {
    let y = (i + 1) * gridY.stepSize
    let w = 30
    let t = maxT - i
    // uncomment to show the index
    // t += ' ' + i
    context.fillText(t, w, y)
  }
  context.stroke()
}

function drawYGrid(context) {
  let x = 0
  let width = context.canvas.width
  let lw = context.lineWidth
  context.lineWidth = 0.4
  context.beginPath()
  for (var i = 0; i < gridY.steps; i++) {
    let y = (i + 1) * gridY.stepSize
    context.moveTo(x, y)
    context.lineTo(width, y)
  }
  context.stroke()
  context.lineWidth = lw
}

function drawXGrid(context) {
  context.beginPath()
  for (var i = 0; i < gridX.steps; i++) {
    let x = (i + 1) * gridX.stepSize
    context.moveTo(x, 0)
    context.lineWidth = 0.4
    context.lineTo(x, height)
  }
  context.stroke()
}

function yAxisLabel(context) {
  let newx = 20
  let newy = 100
  let labelXposition = 10
  context.save()
  context.translate(newx, newy)
  context.rotate(-Math.PI / 2)
  context.textAlign = 'center'
  context.font = '16px Helvetica'
  context.fillStyle = '#222'
  context.fillText('Temperature', labelXposition, 0)
  context.restore()
}
