module.exports = function() {
  let uiP = {
    pageTitle: 'Demographics',
    dataKey: 'demographics',
    hasForm: true,
    hasDialog: false,
    hasTransposedTable: false
  }
  let oneOfThree = 'column is-one-third'
  let twoOfThree = 'column is-two-third'
  let rowClasses = 'form-row columns'
  uiP.rows = [
    {
      rowNumber: 1,
      classList: rowClasses,
      elements: [
        {
          classList: oneOfThree,
          propertyKey: 'familyName',
          label: 'Last name',
          type: 'input'
        },
        {
          classList: oneOfThree,
          propertyKey: 'givenName',
          label: 'First name',
          type: 'input'
        },
        {
          classList: oneOfThree,
          propertyKey: 'middleName',
          label: 'Middle name',
          type: 'input'
        }
      ]
    },
    {
      rowNumber: 2,
      classList: rowClasses,
      elements: [
        {
          classList: oneOfThree,
          propertyKey: 'preferredName',
          label: 'Preferred name',
          type: 'input'
        },
        {
          classList: oneOfThree,
          propertyKey: 'dateOfBirth',
          label: 'Date of birth',
          type: 'input'
        },
        {
          classList: oneOfThree,
          propertyKey: 'personAge',
          label: 'Age',
          type: 'input'
        }
      ]
    },
    {
      rowNumber: 3,
      classList: rowClasses,
      elements: [
        {
          classList: oneOfThree,
          propertyKey: 'gender',
          label: 'Gender',
          type: 'select',
          options: [
            { text: 'Unknown' },
            { text: 'Female' },
            { text: 'Male' },
            { text: 'Transgender female' },
            { text: 'Transgender male' },
            { text: 'Undifferentiated' },
            { text: 'Prefer not to say' }
          ]
        },
        {
          classList: oneOfThree,
          propertyKey: 'martialStatus',
          label: 'Martial Status',
          type: 'select',
          options: [
            { text: 'Married' },
            { text: 'Single' },
            { text: 'Life partner' },
            { text: 'Divorced' },
            { text: 'Separated' },
            { text: 'Widowed' }
          ]
        },
        {
          classList: oneOfThree,
          propertyKey: 'codeStatus',
          label: 'Code status',
          type: 'select',
          options: [
            { text: 'N/A' },
            { text: 'CPR' },
            { text: 'DNR M1' },
            { text: 'DNR M2' },
            { text: 'DNR M3' },
            { text: 'DNR C1' },
            { text: 'DNR C2' }
          ]
        }
      ]
    },
    {
      rowNumber: 4,
      classList: rowClasses,
      elements: [
        {
          classList: oneOfThree,
          propertyKey: 'languagePrimary',
          label: 'Primary language',
          type: 'select',
          options: [
            { text: 'English' },
            { text: 'French' },
            { text: 'Spanish' },
            { text: 'German' },
            { text: 'Chinese' }
          ]
        },
        {
          classList: oneOfThree,
          propertyKey: 'religion',
          label: 'Religion',
          type: 'input'
        },
        {
          classList: oneOfThree,
          propertyKey: 'indigenous',
          label: 'Do you identify as an indigenous person?',
          type: 'select',
          options: [{ text: 'No' }, { text: 'Yes' }]
        }
      ]
    },
    {
      rowNumber: 5,
      classList: rowClasses,
      elements: [
        {
          classList: twoOfThree,
          propertyKey: 'streetAddress',
          label: 'Street address',
          type: 'input'
        },
        {
          classList: oneOfThree,
          propertyKey: 'city',
          label: 'City',
          type: 'input'
        }
      ]
    },
    {
      rowNumber: 6,
      classList: rowClasses,
      elements: [
        {
          classList: oneOfThree,
          propertyKey: 'country',
          label: 'Country',
          type: 'input'
        },
        {
          classList: oneOfThree,
          propertyKey: 'postalCode',
          label: 'Postal code',
          type: 'input'
        },
        {
          classList: oneOfThree,
          propertyKey: 'indigenous',
          label: 'No address',
          type: 'checkbox'
        }
      ]
    },
    {
      rowNumber: 7,
      classList: rowClasses,
      elements: [
        {
          classList: oneOfThree,
          propertyKey: 'phoneNumber',
          label: 'Phone number',
          type: 'input'
        },
        {
          classList: oneOfThree,
          propertyKey: 'email',
          label: 'Email',
          type: 'input'
        },
        {
          classList: oneOfThree,
          propertyKey: 'occupation',
          label: 'Occupation/student',
          type: 'input'
        }
      ]
    },
    {
      rowNumber: 8,
      classList: rowClasses,
      elements: [
        {
          classList: oneOfThree,
          propertyKey: 'phn',
          label: 'PHN',
          type: 'input'
        },
        {
          classList: oneOfThree,
          propertyKey: 'mrn',
          label: 'MRN',
          type: 'input'
        },
        {
          classList: oneOfThree,
          propertyKey: 'patientService',
          label: 'Patient service',
          type: 'input'
        }
      ]
    },
    {
      rowNumber: 9,
      classList: rowClasses,
      elements: [
        {
          classList: oneOfThree,
          propertyKey: 'nextOfKin',
          label: 'Next of kin',
          type: 'input'
        },
        {
          classList: oneOfThree,
          propertyKey: 'nextOfKinRelationsip',
          label: 'Next of kin relationship',
          type: 'input'
        },
        {
          classList: oneOfThree,
          propertyKey: 'nextOfKinPhone',
          label: 'Next of kin phone',
          type: 'input'
        }
      ]
    },
    {
      rowNumber: 10,
      classList: rowClasses,
      elements: [
        {
          classList: oneOfThree,
          propertyKey: 'decisionMakerName',
          label: 'Decision maker name',
          type: 'input'
        },
        {
          classList: oneOfThree,
          propertyKey: 'decisionMakerRelationship',
          label: 'Decision maker relationship',
          type: 'input'
        },
        {
          classList: oneOfThree,
          propertyKey: 'decisionMakerPhone',
          label: 'Decision maker phone',
          type: 'input'
        }
      ]
    }
  ]
  return uiP
}
