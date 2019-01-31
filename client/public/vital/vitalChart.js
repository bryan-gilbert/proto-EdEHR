function vitalChartLoad(Chart) {
  function generateLabels() {
    console.log("generateLabels")
    var chartLabels = []
    for (let x = 0; x < 100; x++) {
      chartLabels.push('Label' + x)
    }
    return chartLabels
  }

  function generateData() {
    console.log("generateData")
    var chartData = []
    for (let x = 0; x < 100; x++) {
      chartData.push(Math.floor(Math.random() * 100 + 1))
    }
    return chartData
  }

  function addData(numData, chart) {
    console.log("addData")
    for (var i = 0; i < numData; i++) {
      chart.data.datasets[0].data.push(Math.random() * 100)
      chart.data.labels.push('Label' + i)
      var scrollChartAreaWrapper2 = document.getElementById('scrollChartAreaWrapper2')
      var newwidth = scrollChartAreaWrapper2.offsetWidth + 60
      scrollChartAreaWrapper2.style.width = newwidth + 'px'
    }
  }

  var chartData = {
    labels: generateLabels(),
    datasets: [
      {
        label: 'Test Data Set',
        data: generateData()
      }
    ]
  }
  console.log("chart data ready")

  function go() {
    console.log("create chart")
    var rectangleSet = false
    var canvasTest = document.getElementById('chart-Test').getContext('2d')
    var targetCtx = document.getElementById('axis-Test').getContext('2d')
    var chartTest = new Chart(canvasTest, {
      type: 'bar',
      data: chartData,
      maintainAspectRatio: false,
      responsive: true,
      options: {
        tooltips: {
          titleFontSize: 0,
          titleMarginBottom: 0,
          bodyFontSize: 12
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontSize: 12,
                display: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontSize: 12,
                beginAtZero: true
              }
            }
          ]
        },
        animation: {
          onComplete: function() {
            console.log("on complete")
            if (!rectangleSet) {
              var scale = window.devicePixelRatio
              var sourceCanvas = chartTest.chart.canvas
              var sourceCtx = sourceCanvas.getContext('2d')
              var yscale = chartTest.scales['y-axis-0']
              var copyWidth = yscale.width - 10
              var copyHeight = yscale.height + yscale.top + 10
              targetCtx.scale(scale, scale)
              let dw = copyWidth * scale
              let dh = copyHeight * scale
              targetCtx.canvas.width = dw
              targetCtx.canvas.height = dh
              targetCtx.canvas.style.width = `${copyWidth}px`
              targetCtx.canvas.style.height = `${copyHeight}px`
              targetCtx.drawImage(sourceCanvas, 0, 0, dw, dh, 0, 0, dw, dh)
              // Normalize coordinate system to use css pixels.
              sourceCtx.clearRect(0, 0, copyWidth * scale, copyHeight * scale)
              rectangleSet = true
            }
          },
          onProgress: function() {
            if (rectangleSet === true) {
              var yscale = chartTest.scales['y-axis-0']
              var copyWidth = yscale.width
              var copyHeight = yscale.height + yscale.top + 10
              var sourceCanvas = chartTest.chart.canvas
              var sourceCtx = sourceCanvas.getContext('2d')
              sourceCtx.clearRect(0, 0, copyWidth, copyHeight)
            }
          }
        }
      }
    })
    addData(5, chartTest)
  }
  go()
}
