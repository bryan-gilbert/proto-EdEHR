'use strict'

const TYPES = {}
TYPES.text = 'text'
TYPES.array = 'array'
TYPES.date = 'date'
TYPES.number = 'number'
TYPES.select = 'select'
TYPES.checklist = 'checklist'
TYPES.time = 'time'
TYPES.timeBasedValue = 'timeBasedValue'
TYPES.objectValue = 'objectValue'
TYPES.inlineBase64Image = 'inlineBase64Image'
TYPES.textArea = 'textArea'
TYPES.url = 'url'
TYPES.boolean = 'boolean'
TYPES.SNOMED = 'SNOMED'

const ehr_schema = {}

const person = {
  familyName: {type: TYPES.text, label: 'Family Name'},
  givenName: {type: TYPES.text, label: 'Given Name'},
  dateOfBirth: {type: TYPES.date, label: 'Date of Birth'},
  gender: {
    type: TYPES.select,
    label: 'Gender',
    options: [
      {label: 'Male', value: 'male'},
      {label: 'Female', value: 'female'},
      {label: 'Unknown', value: 'unknown', default: true}]
  }
}

const vitalSign = {
  date: {type: TYPES.date, label: 'Date'},
  temperature: {type: TYPES.number, label: 'Temperature'},
  temperatureSource: {
    type: TYPES.select,
    label: 'Temperature Source',
    options: [
      {label: 'Oral', value: 'oral'},
      {label: '', value: '', default: true}]
  }
}

ehr_schema.people = {
  patient: {
    demographics: person,
    PHN: {type: TYPES.text, label: 'PHN'},
    MRN: {type: TYPES.text, label: 'MRN'}
  },
  medicalStaff: {
    demographics: person,
    staffId: {type: TYPES.text, label: 'Staff Id'},
    userName: {type: TYPES.text, label: 'User Name'},
    avatar: {type: TYPES.inlineBase64Image, label: 'Avatar'}
  }
}

ehr_schema.patientHistory = {
  medical: {type: TYPES.textArea, label: 'Medical History'},
  psychosocial: {
    psychosocial: {type: TYPES.textArea, label: 'Psychosocial History'},
    diet: {type: TYPES.textArea, label: 'Diet'},
    livingSituation: {type: TYPES.textArea, label: 'Living Situation'},
    employmentOrSchool: {type: TYPES.textArea, label: 'Employment / School'},
    hobbies: {type: TYPES.textArea, label: 'Hobbies'},
    behaviors: {
      type: TYPES.checklist,
      label: 'Behaviors',
      options: [
        {
          exercise: {type: TYPES.select,
            label: 'Exercise',
            options: [
                {label: 'Yes', value: 'true'},
                {label: 'No', value: 'false'},
                {label: 'Yes or No', value: '', default: true}]
          },
          frequency: {type: TYPES.text, label: 'Frequency'}
        },
        {
          caffeine: {type: TYPES.select,
            label: 'Caffeine',
            options: [
                {label: 'Yes', value: 'true'},
                {label: 'No', value: 'false'},
                {label: 'Yes or No', value: '', default: true}]
          },
          frequency: {type: TYPES.text, label: 'Caffeine'}
        },
        {
          tobacco: {type: TYPES.select,
            label: 'Tobacco',
            options: [
                {label: 'Yes', value: 'true'},
                {label: 'No', value: 'false'},
                {label: 'Yes or No', value: '', default: true}]
          },
          frequency: {type: TYPES.select,
            label: 'Tobacco use',
            options: [
                {label: 'Yes', value: 'true'},
                {label: 'No', value: 'false'},
                {label: 'Yes or No', value: '', default: true}]
          },
          externalRef: TYPES.url
        },
        {
          cannabis: {type: TYPES.select,
            label: 'Cannabis',
            options: [
                {label: 'Yes', value: 'true'},
                {label: 'No', value: 'false'},
                {label: 'Yes or No', value: '', default: true}]
          },
          frequency: {type: TYPES.text, label: 'Cannabis'}
        },
        {
          alcohol: {type: TYPES.select,
            label: 'Alcohol',
            options: [
                {label: 'Yes', value: 'true'},
                {label: 'No', value: 'false'},
                {label: 'Yes or No', value: '', default: true}]
          },
          frequency: {type: TYPES.text, label: 'Alcohol'},
          externalRef: TYPES.url
        },
        {
          substanceUse: {type: TYPES.select,
            label: 'Substance Use',
            options: [
                {label: 'Yes', value: 'true'},
                {label: 'No', value: 'false'},
                {label: 'Yes or No', value: '', default: true}]
          },
          frequency: {type: TYPES.text, label: 'Substance Use'}
        }
      ]
    }
  }
}

ehr_schema.currentVisit = {
  details: {
    admissionDate: {type: TYPES.date, label: 'Admission Date'},
    admissionTime: {type: TYPES.time, label: 'Admission Time'}, // can date and time be combined into dateTime?
    admissionStatus: {type: TYPES.text, label: 'Status'},
      // diagnosis: {type: TYPES.SNOMED, label: "Diagnosis"},
    patientLocation: {type: TYPES.text, label: 'Location'}
  },
  vitalSigns: {type: TYPES.timeBasedValue, valueType: vitalSign, label: 'Vital Signs'}
}

module.exports = {
  types: TYPES,
  schema: ehr_schema
}
