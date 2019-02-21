import should from 'should'

describe('Test merging two EHR data object', () => {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  function ehrMergePageKeys(obj1,obj2) {
    let pages1 = Object.keys(obj1)
    let pages2 = Object.keys(obj2)
    let combined = pages1.concat(pages2)
    combined.sort()
    let results = combined.filter(onlyUnique)
    return results
  }
  let one = {
    assignmentData: {
      aPage1: {
        p1: 1
      },
      visit: {
        location: [{ location: 'in one', transferInDay: '1', transferInTime: '1' }],
        admissionDay: 'Day 1',
        admissionTime: '7:00am',
        propertyInOne: 'one diagnosis',
        status: 'From One'
      },
      cardiovascular: {
        table: [
          {
            name: 'Jane',
            profession: 'nurse',
            day: '0',
            time: '9:00',
            pulse: 'Regular',
            skinAppearance: 'Pale',
            capRefillRightHand: 'Normal'
          }
        ]
      }
    }
  }
  let two = {
    assignmentData: {
      visit: {
        location: [{ location: 'in two', transferInDay: '2' }],
        admissionDay: 'Day 2',
        admissionTime: '10:00am',
        consentForTreatment: false,
        consentForBlood: true,
        diagnosis: 'two diagnosis',
        status: 'From two'
      },
      aPage2: {
        p2: 2
      },
      cardiovascular: {
        table: [
          {
            name: 'Joe',
            profession: 'nurse',
            day: '1',
            time: '10:00',
            pulse: 'Irregular',
            skinAppearance: 'Dark'
          }
        ]
      }
    }
  }

  it.skip('Use Object assign fails to concat arrays', () => {
    let m = Object.assign({}, one, two)
    let mstr = JSON.stringify(m, null, 2)
    console.log(mstr)
  })
  it('Get all pages', () => {
    let pages = ehrMergePageKeys(one.assignmentData,two.assignmentData)
    console.log(pages)
    pages.should.have.length(4)
  })
})
