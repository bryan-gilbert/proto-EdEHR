module.exports = function () {
  return {
  'demographics': {
    'pageTitle': 'Demographics',
    'dataKey': 'demographics',
    'hasForm': 'TRUE',
    'hasDialog': 'FALSE',
    'hasTransposedTable': 'FALSE',
    'rows': [
      null,
      {
        'rowNumber': '1',
        'classList': 'form-row columns',
        'elements': [
          {
            'classList': 'is-one-third',
            'propertyKey': 'givenName',
            'label': 'First name',
            'type': 'text',
            'mandatory': 'yes'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'middleName',
            'label': 'Middle name(s)',
            'type': 'text'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'familyName',
            'label': 'Last name',
            'type': 'text',
            'mandatory': 'yes'
          }
        ]
      },
      {
        'rowNumber': '2',
        'classList': 'form-row columns',
        'elements': [
          {
            'classList': 'is-one-third',
            'propertyKey': 'preferredName',
            'label': 'Preferred name',
            'type': 'text'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'dateOfBirth',
            'label': 'Date of birth',
            'type': 'text'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'personAge',
            'label': 'Age',
            'type': 'text',
            'mandatory': 'yes'
          }
        ]
      },
      {
        'rowNumber': '3',
        'classList': 'form-row columns',
        'elements': [
          {
            'classList': 'is-one-third',
            'propertyKey': 'gender',
            'label': 'Gender',
            'type': 'select',
            'mandatory': 'yes'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'martialStatus',
            'label': 'Martial status',
            'type': 'select'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'codeStatus',
            'label': 'Code status',
            'type': 'select'
          }
        ]
      },
      {
        'rowNumber': '4',
        'classList': 'form-row columns',
        'elements': [
          {
            'classList': 'is-one-third',
            'propertyKey': 'languagePrimary',
            'label': 'Primary language',
            'type': 'select'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'religion',
            'label': 'Religion',
            'type': 'text'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'indigenousIdentifyAs',
            'label': 'Do you identify as an indigenous person?',
            'type': 'select'
          }
        ]
      },
      {
        'rowNumber': '5',
        'classList': 'form-row columns',
        'elements': [
          {
            'classList': 'twoOfThree',
            'propertyKey': 'streetAddress',
            'label': 'Street address',
            'type': 'text'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'city',
            'label': 'City',
            'type': 'text'
          }
        ]
      },
      {
        'rowNumber': '6',
        'classList': 'form-row columns',
        'elements': [
          {
            'classList': 'is-one-third',
            'propertyKey': 'country',
            'label': 'Country',
            'type': 'text'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'postalCode',
            'label': 'Postal code',
            'type': 'text'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'noAddress',
            'label': 'No address',
            'type': 'checkbox'
          }
        ]
      },
      {
        'rowNumber': '7',
        'classList': 'form-row columns',
        'elements': [
          {
            'classList': 'is-one-third',
            'propertyKey': 'phoneNumber',
            'label': 'Phone number',
            'type': 'phone'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'emailAddress',
            'label': 'Email address',
            'type': 'email'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'occupationStudent',
            'label': 'Occupation/student',
            'type': 'text'
          }
        ]
      },
      {
        'rowNumber': '8',
        'classList': 'form-row columns',
        'elements': [
          {
            'classList': 'is-one-third',
            'propertyKey': 'phn',
            'label': 'PHN',
            'type': 'text'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'mrn',
            'label': 'MRN',
            'type': 'text'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'patientService',
            'label': 'Patient service',
            'type': 'text'
          }
        ]
      },
      {
        'rowNumber': '9',
        'classList': 'form-row columns',
        'elements': [
          {
            'classList': 'is-one-third',
            'propertyKey': 'nextOfKinName',
            'label': 'Next of kin name',
            'type': 'text'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'nextOfKinRelationship',
            'label': 'Next of kin relationship',
            'type': 'select'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'nextOfKinPhone',
            'label': 'Next of kin phone',
            'type': 'phone'
          }
        ]
      },
      {
        'rowNumber': '10',
        'classList': 'form-row columns',
        'elements': [
          {
            'classList': 'is-one-third',
            'propertyKey': 'decisionMakerName',
            'label': 'Decision maker name',
            'type': 'text'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'decisionMakerRelationship',
            'label': 'Decision maker relationship',
            'type': 'select'
          },
          {
            'classList': 'is-one-third',
            'propertyKey': 'decisionMakerPhone',
            'label': 'Decision maker phone',
            'type': 'phone'
          }
        ]
      }
    ]
  },
  'allergies': {
    'pageTitle': 'Allergies',
    'dataKey': 'allergies'
  },
  'medical': {
    'pageTitle': 'History Medical',
    'dataKey': 'medical'
  },
  'psychosocial': {
    'pageTitle': 'History Psychosocial',
    'dataKey': 'psychosocial'
  },
  'surgical': {
    'pageTitle': 'History Surgical',
    'dataKey': 'surgical'
  },
  'immunization': {
    'pageTitle': 'History Immunization',
    'dataKey': 'immunization'
  },
  'familyHistory': {
    'pageTitle': 'Care team',
    'dataKey': 'familyHistory'
  },
  'past': {
    'pageTitle': 'Past appointments',
    'dataKey': 'past'
  }
}
}