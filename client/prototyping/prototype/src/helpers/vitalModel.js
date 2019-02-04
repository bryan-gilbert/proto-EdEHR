const POINT_TYPES = {
  POINT: 'point',
  DOWN_CHEVRON: 'downChevron',
  UP_CHEVRON: 'upChevron',
  TEXT: 'text'
}

function round_number(num, dec) {
  return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)
}

function random(min, max, decimals) {
  // min and max included
  decimals = decimals || 0
  let val = Math.random() * (max - min + 1) + min
  val = decimals > 0 ? round_number(val, decimals) : Math.floor(val)
  return val
}

const vitalRanges = {
  bloodPressure: { min: 40, max: 190, normal: { systolic: [90, 130], diastolic: [60, 85] } },
  oxygenSaturation: { min: 50, max: 100 },
  pulseRate: { min: 30, max: 140, normal: { adult: [59, 99] } },
  respiratory: { min: 5, max: 40 },
  temperature: { min: 28, max: 42 }
}

let lastDay = 0
let lastTime = 8
let cnt = 0

let options = {
  pointColour: '#222',
  pointMediumColour: 'orange',
  pointHighColour: 'red',
  pointLowColour: 'blue',
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

export default class VitalChart {
  getTemperature(table) {
    let values = table.map(element => {
      return element.temperature
    })
    let min = vitalRanges.temperature.min
    let max = vitalRanges.temperature.max
    let ht = 150
    let vScale = ht / (max - min)
    // let values = [34, 36, 40, 28, 42.1, 27.9, 55]
    let chartData = {
      originY: 100,
      height: ht,
      label: 'Temperature',
      labelOffsetFromBottom: 20, // vertical adjust label relative to chart bottom
      dMin: min,
      dMax: max,
      vScale: vScale,
      gridY: {
        scalePoints: [
          { spv: max, clr: 'red' },
          { spv: 40, clr: 'rgb(200,100,100)' },
          { spv: 38, lw: 0.5, clr: 'rgb(200,100,100)' },
          { spv: 37, clr: 'rgb(100,100,100)' },
          { spv: 36, clr: 'rgb(100,100,100)' },
          { spv: 35, clr: 'rgb(100,100,100)' },
          { spv: 34, clr: 'rgb(100,100,100)' },
          { spv: 32.5, lw: 0.5, clr: 'rgb(100,100,200)' },
          { spv: 30, clr: 'blue' },
          { spv: min, clr: 'blue' }
        ]
      },
      gridX: {
        steps: values.length,
        stepSize: 75
      },
      dataSet: [
        {
          pointStyle: POINT_TYPES.POINT,
          pointRadius: options.pointRadius,
          pointColor: options.pointColour,
          pointLabelFont: options.pointLabelFont,
          pointFillColour: options.pointFillColour,
          outOfBoundPointFontColour: options.outOfBoundPointFontColour,
          values: values
        }
      ]
    }
    return chartData
  }
  addData(table) {
    cnt++
    lastTime += 4
    if (lastTime > 24) {
      lastTime -= 24
      lastDay++
    }
    let diastolic, systolic, pulseRate
    if (cnt <= 3) {
      let normal = vitalRanges.bloodPressure.normal
      diastolic = random(normal.diastolic[0], normal.diastolic[1])
      systolic = random(normal.systolic[0], normal.systolic[1])
      let normalPulse = vitalRanges.pulseRate.normal.adult
      pulseRate = random(normalPulse[0], normalPulse[1])
    } else {
      diastolic = random(vitalRanges.bloodPressure.min, 100)
      systolic = random(diastolic, vitalRanges.bloodPressure.max)
      pulseRate = random(vitalRanges.pulseRate.min, vitalRanges.pulseRate.max)
    }
    // random(diastolic, vitalRanges.bloodPressure.max)
    table.push({
      name: 'Test',
      day: lastDay,
      time: lastTime,
      temperature: random(vitalRanges.temperature.min, vitalRanges.temperature.max, 1),
      profession: 'nurse',
      source: 'axilla',
      rate: pulseRate,
      rhythm: 'regular',
      strength: 'strong',
      systolic: systolic,
      diastolic: diastolic,
      patientPosition: 'lying',
      respirationRate: random(vitalRanges.respiratory.min, vitalRanges.respiratory.max),
      respirationEffort: 'easy',
      oxygenSaturation: random(vitalRanges.oxygenSaturation.min, vitalRanges.oxygenSaturation.max),
      oxygenMode: 'nasal prongs',
      flowRate: '3'
    })
  }

  getDates(table) {
    let values = table.map(element => {
      return element.day + ' ' + element.time
      // return 'Day ' + element.day + '\n' + element.time + ':00';
    })

    let ht = 100
    let chartData = {
      chartType: POINT_TYPES.TEXT,
      originY: 0,
      height: ht,
      noLabel: true,
      gridX: {
        steps: values.length,
        stepSize: 75
      },
      dataSet: [
        {
          pointStyle: POINT_TYPES.TEXT,
          pointLabelFont: options.pointLabelFont,
          values: values
        }
      ]
    }
    return chartData
  }

  getBloodPressure(table) {
    let v1 = [],
      v2 = [],
      v3 = []
    table.forEach(element => {
      let pointColor = options.pointColour
      let v = element
      if (v.systolic < 90 || v.diastolic < 60) {
        pointColor = options.pointLowColour
      }
      if (v.systolic > 130 || v.diastolic > 85) {
        pointColor = options.pointMediumColour
      }
      if (v.systolic >= 140 || v.diastolic >= 90) {
        pointColor = options.pointHighColour
      }
      v1.push({ value: v.systolic, pointColor: pointColor })
      v2.push({ value: v.diastolic, pointColor: pointColor })
      v3.push({ value: v.rate, pointColor: pointColor })
    })

    /*
  https://en.wikipedia.org/wiki/Blood_pressure

  From https://en.wikipedia.org/wiki/Pulse  pulse rate ranges from 39 to 149
     */
    let min = vitalRanges.bloodPressure.min
    let max = vitalRanges.bloodPressure.max
    let ht = 300
    let vScale = ht / (max - min)
    let chartData = {
      originY: 100,
      height: ht,
      label: 'Blood pressure and rate',
      labelOffsetFromBottom: 20, // vertical adjust label relative to chart bottom
      dMin: min,
      dMax: max,
      vScale: vScale,
      gridY: {
        scalePoints: (function() {
          let pts = []
          for (let i = max; i >= min; i -= 10) {
            pts.push({ spv: i })
          }
          return pts
        })()
      },
      gridX: {
        steps: v1.length, // need to compute this based on values === values.length
        stepSize: 75
      },
      dataSet: [
        {
          label: 'Systolic',
          pointStyle: POINT_TYPES.DOWN_CHEVRON,
          pointRadius: options.pointRadius,
          pointColor: options.pointColour,
          pointLabelFont: options.pointLabelFont,
          pointFillColour: options.pointFillColour,
          outOfBoundPointFontColour: options.outOfBoundPointFontColour,
          values: v1
        },
        {
          label: 'Diastolic',
          pointStyle: POINT_TYPES.UP_CHEVRON,
          pointRadius: options.pointRadius,
          pointColor: options.pointColour,
          pointLabelFont: options.pointLabelFont,
          pointFillColour: options.pointFillColour,
          outOfBoundPointFontColour: options.outOfBoundPointFontColour,
          values: v2
        },
        {
          label: 'Pulse rate',
          pointStyle: POINT_TYPES.POINT,
          labelOffsetX: -30,
          pointRadius: options.pointRadius,
          pointColor: options.pointColour,
          pointLabelFont: options.pointLabelFont,
          pointFillColour: options.pointFillColour,
          outOfBoundPointFontColour: options.outOfBoundPointFontColour,
          values: v3
        }
      ]
    }
    return chartData
  }

  getRespiratory(table) {
    let min = vitalRanges.respiratory.min
    let max = vitalRanges.respiratory.max
    let ht = 150
    let vScale = ht / (max - min)
    let values = table.map(element => {
      return element.respirationRate
    })
    let chartData = {
      originY: 100,
      height: ht,
      label: 'Respiratory rate',
      labelOffsetFromBottom: 20, // vertical adjust label relative to chart bottom
      dMin: min,
      dMax: max,
      vScale: vScale,
      gridY: {
        scalePoints: [
          { spv: max, clr: 'red' },
          { spv: 40, clr: 'rgb(200,100,100)' },
          { spv: 35, clr: 'rgb(200,100,100)' },
          { spv: 30, clr: 'rgb(100,100,100)' },
          { spv: 25, clr: 'rgb(100,100,100)' },
          { spv: 20, clr: 'rgb(100,100,100)' },
          { spv: 15, clr: 'rgb(100,100,100)' },
          { spv: 10, clr: 'rgb(100,100,200)' },
          { spv: min, clr: 'blue' }
        ]
      },
      gridX: {
        steps: values.length,
        stepSize: 75
      },
      dataSet: [
        {
          pointStyle: POINT_TYPES.POINT,
          pointRadius: options.pointRadius,
          pointColor: options.pointColour,
          pointLabelFont: options.pointLabelFont,
          pointFillColour: options.pointFillColour,
          outOfBoundPointFontColour: options.outOfBoundPointFontColour,
          values: values
        }
      ]
    }
    return chartData
  }
}
