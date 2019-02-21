import should from 'should'
import EhrMerge from '../../../src/helpers/ehr-merge'
const ehrMerge = new EhrMerge()

describe('Test merging two EHR data object', () => {
  it('Object assign does not concat arrays', () => {
    let one = getOne()
    let two = getTwo()
    let mstr = Object.assign({}, one, two)
    // let mstr = JSON.stringify(m, null, 2)
    should.exist(mstr.visit)
    should.exist(mstr.visit.location)
    mstr.visit.location.should.have.length(1)
  })
  it('Get all pages', () => {
    let one = getOne()
    let two = getTwo()
    let pages = ehrMerge._ehrMergeObjectChildKeys(one, two)
    pages.should.have.length(4)
  })
  it('Merge objects', () => {
    let one = getOne()
    let two = getTwo()
    let pages = ehrMerge.ehrMergeEhrData(one, two)
    // verify we get pages from one or the other or both
    pages.should.have.property('aPage1')
    pages.should.have.property('aPage2')
    pages.should.have.property('cardiovascular')
    pages.should.have.property('visit')

    // confirm that arrays are merged
    pages.cardiovascular.should.have.property('table')
    pages.cardiovascular.table.should.have.length(2)

    // confirm that arrays are merged
    pages.visit.should.have.property('location')
    pages.visit.location.should.have.length(2)

    // confirm we get properties from one or the other or both
    pages.visit.should.have.property('propertyInOne')
    pages.visit.should.have.property('propertyInTwo')

    // confirm we get the properties of the second when it's the same as the first
    pages.visit.should.have.property('diagnosis')
    pages.visit.diagnosis.should.equal('two diagnosis')

    // console.log('merged object', JSON.stringify(pages, null, 2))
  })
})

function getOne() {
  return {
    aPage1: {
      p1: 1
    },
    visit: {
      location: [{ location: 'in one', transferInDay: '1', transferInTime: '1' }],
      admissionDay: 'Day 1',
      admissionTime: '7:00am',
      propertyInOne: 'propertyInOne',
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
function getTwo() {
  return {
    visit: {
      location: [{ location: 'in two', transferInDay: '2' }],
      admissionDay: 'Day 2',
      admissionTime: '10:00am',
      consentForTreatment: false,
      propertyInTwo: 'propertyInTwo',
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
