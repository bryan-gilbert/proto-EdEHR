module.exports = function() {
  return {
    demographics: {
      pageTitle: 'Demographics',
      dataKey: 'demographics',
      hasForm: true,
      hasDialog: false,
      hasTransposedTable: false,
      page_form: {
        rows: [
          {
            rowNumber: '1',
            classList: 'form-row columns',
            uiContainer: 'demographics.form',
            elements: [
              {
                colNumber: '1',
                elementKey: 'familyName',
                elementName: 'familyName',
                fqn: 'demographics.familyName',
                inputType: 'text',
                label: 'Last name',
                mandatory: 'yes',
                rowNumber: '1',
                uiContainer: 'demographics.form'
              },
              {
                colNumber: '2',
                elementKey: 'givenName',
                elementName: 'givenName',
                fqn: 'demographics.givenName',
                inputType: 'text',
                label: 'First name',
                mandatory: 'yes',
                rowNumber: '1',
                uiContainer: 'demographics.form'
              },
              {
                colNumber: '3',
                elementKey: 'middleName',
                elementName: 'middleName',
                fqn: 'demographics.middleName',
                inputType: 'text',
                label: 'Middle name(s)',
                rowNumber: '1',
                uiContainer: 'demographics.form'
              }
            ]
          },
          {
            rowNumber: '2',
            classList: 'form-row columns',
            uiContainer: 'demographics.form',
            elements: [
              {
                colNumber: '1',
                elementKey: 'preferredName',
                elementName: 'preferredName',
                fqn: 'demographics.preferredName',
                inputType: 'text',
                label: 'Preferred name',
                rowNumber: '2',
                uiContainer: 'demographics.form'
              },
              {
                colNumber: '2',
                elementKey: 'dateOfBirth',
                elementName: 'dateOfBirth',
                fqn: 'demographics.dateOfBirth',
                inputType: 'text',
                label: 'Date of birth',
                rowNumber: '2',
                uiContainer: 'demographics.form'
              },
              {
                colNumber: '3',
                elementKey: 'personAge',
                elementName: 'personAge',
                fqn: 'demographics.personAge',
                inputType: 'text',
                label: 'Age',
                mandatory: 'yes',
                rowNumber: '2',
                uiContainer: 'demographics.form'
              }
            ]
          },
          {
            rowNumber: '3',
            classList: 'form-row columns',
            uiContainer: 'demographics.form',
            elements: [
              {
                colNumber: '1',
                elementKey: 'gender',
                elementName: 'gender',
                fqn: 'demographics.gender',
                inputType: 'select',
                label: 'Gender',
                mandatory: 'yes',
                rowNumber: '3',
                uiContainer: 'demographics.form',
                options: [
                  {
                    text: 'Unknown'
                  },
                  {
                    text: 'Female'
                  },
                  {
                    text: 'Male'
                  },
                  {
                    text: 'Transgender female'
                  },
                  {
                    text: 'Transgender male'
                  },
                  {
                    text: 'Undifferentiated'
                  },
                  {
                    text: 'Prefer not to say'
                  }
                ]
              },
              {
                colNumber: '2',
                elementKey: 'martialStatus',
                elementName: 'martialStatus',
                fqn: 'demographics.martialStatus',
                inputType: 'select',
                label: 'Martial status',
                rowNumber: '3',
                uiContainer: 'demographics.form',
                options: [
                  {
                    text: 'Married'
                  },
                  {
                    text: 'Single'
                  },
                  {
                    text: 'Life partner'
                  },
                  {
                    text: 'Divorced'
                  },
                  {
                    text: 'Separated'
                  },
                  {
                    text: 'Widowed'
                  }
                ]
              },
              {
                colNumber: '3',
                elementKey: 'codeStatus',
                elementName: 'codeStatus',
                fqn: 'demographics.codeStatus',
                helperText: 'Do Not Attempt Cardiopulmonary Resuscitation (DNACP',
                inputType: 'select',
                label: 'Code status',
                rowNumber: '3',
                uiContainer: 'demographics.form',
                options: [
                  {
                    text: 'N/A'
                  },
                  {
                    text: 'CPR'
                  },
                  {
                    text: 'DNR M1'
                  },
                  {
                    text: 'DNR M2'
                  },
                  {
                    text: 'DNR M3'
                  },
                  {
                    text: 'DNR C1'
                  },
                  {
                    text: 'DNR C2'
                  }
                ]
              }
            ]
          },
          {
            rowNumber: '4',
            classList: 'form-row columns',
            uiContainer: 'demographics.form',
            elements: [
              {
                colNumber: '1',
                elementKey: 'languagePrimary',
                elementName: 'languagePrimary',
                fqn: 'demographics.languagePrimary',
                inputType: 'select',
                label: 'Primary language',
                rowNumber: '4',
                uiContainer: 'demographics.form',
                options: [
                  {
                    text: 'English'
                  },
                  {
                    text: 'French'
                  },
                  {
                    text: 'Spanish'
                  },
                  {
                    text: 'German'
                  },
                  {
                    text: 'Chinese'
                  }
                ]
              },
              {
                colNumber: '2',
                elementKey: 'religion',
                elementName: 'religion',
                fqn: 'demographics.religion',
                inputType: 'text',
                label: 'Religion',
                rowNumber: '4',
                uiContainer: 'demographics.form'
              },
              {
                colNumber: '3',
                elementKey: 'indigenousIdentifyAs',
                elementName: 'indigenousIdentifyAs',
                fqn: 'demographics.indigenousIdentifyAs',
                inputType: 'select',
                label: 'Do you identify as an indigenous person?',
                rowNumber: '4',
                uiContainer: 'demographics.form',
                options: [
                  {
                    text: 'Yes'
                  },
                  {
                    text: 'No'
                  }
                ]
              }
            ]
          },
          {
            rowNumber: '5',
            classList: 'form-row columns',
            uiContainer: 'demographics.form',
            elements: [
              {
                css: 'twoOfThree',
                colNumber: '1',
                elementKey: 'streetAddress',
                elementName: 'streetAddress',
                fqn: 'demographics.streetAddress',
                inputType: 'text',
                label: 'Street address',
                rowNumber: '5',
                uiContainer: 'demographics.form'
              },
              {
                colNumber: '3',
                elementKey: 'city',
                elementName: 'city',
                fqn: 'demographics.city',
                inputType: 'text',
                label: 'City',
                rowNumber: '5',
                uiContainer: 'demographics.form'
              }
            ]
          },
          {
            rowNumber: '6',
            classList: 'form-row columns',
            uiContainer: 'demographics.form',
            elements: [
              {
                colNumber: '1',
                elementKey: 'country',
                elementName: 'country',
                defaultValue: 'Canada',
                fqn: 'demographics.country',
                inputType: 'text',
                label: 'Country',
                rowNumber: '6',
                uiContainer: 'demographics.form'
              },
              {
                colNumber: '2',
                elementKey: 'postalCode',
                elementName: 'postalCode',
                fqn: 'demographics.postalCode',
                inputType: 'text',
                label: 'Postal code',
                rowNumber: '6',
                uiContainer: 'demographics.form'
              },
              {
                colNumber: '3',
                elementKey: 'noAddress',
                elementName: 'noAddress',
                fqn: 'demographics.noAddress',
                inputType: 'checkbox',
                label: 'No address',
                rowNumber: '6',
                uiContainer: 'demographics.form'
              }
            ]
          },
          {
            rowNumber: '7',
            classList: 'form-row columns',
            uiContainer: 'demographics.form',
            elements: [
              {
                colNumber: '1',
                elementKey: 'phoneNumber',
                elementName: 'phoneNumber',
                fqn: 'demographics.phoneNumber',
                inputType: 'text',
                label: 'Phone number',
                rowNumber: '7',
                uiContainer: 'demographics.form'
              },
              {
                colNumber: '2',
                elementKey: 'emailAddress',
                elementName: 'emailAddress',
                fqn: 'demographics.emailAddress',
                inputType: 'text',
                label: 'Email address',
                rowNumber: '7',
                uiContainer: 'demographics.form'
              },
              {
                colNumber: '3',
                elementKey: 'occupationStudent',
                elementName: 'occupationStudent',
                fqn: 'demographics.occupationStudent',
                inputType: 'text',
                label: 'Occupation/student',
                rowNumber: '7',
                uiContainer: 'demographics.form'
              }
            ]
          },
          {
            rowNumber: '8',
            classList: 'form-row columns',
            uiContainer: 'demographics.form',
            elements: [
              {
                colNumber: '1',
                elementKey: 'phn',
                elementName: 'phn',
                fqn: 'demographics.phn',
                inputType: 'text',
                label: 'PHN',
                rowNumber: '8',
                uiContainer: 'demographics.form'
              },
              {
                colNumber: '2',
                elementKey: 'mrn',
                elementName: 'mrn',
                fqn: 'demographics.mrn',
                inputType: 'text',
                label: 'MRN',
                rowNumber: '8',
                uiContainer: 'demographics.form'
              },
              {
                colNumber: '3',
                elementKey: 'patientService',
                elementName: 'patientService',
                fqn: 'demographics.patientService',
                inputType: 'text',
                label: 'Patient service',
                rowNumber: '8',
                uiContainer: 'demographics.form'
              }
            ]
          },
          {
            rowNumber: '9',
            classList: 'form-row columns',
            uiContainer: 'demographics.form',
            elements: [
              {
                colNumber: '1',
                elementKey: 'nextOfKinName',
                elementName: 'nextOfKinName',
                fqn: 'demographics.nextOfKinName',
                inputType: 'text',
                label: 'Next of kin name',
                rowNumber: '9',
                uiContainer: 'demographics.form'
              },
              {
                colNumber: '2',
                elementKey: 'nextOfKinRelationship',
                elementName: 'nextOfKinRelationship',
                fqn: 'demographics.nextOfKinRelationship',
                inputType: 'select',
                label: 'Next of kin relationship',
                rowNumber: '9',
                uiContainer: 'demographics.form',
                options: [
                  {
                    text: 'Wife'
                  },
                  {
                    text: 'Husband'
                  },
                  {
                    text: 'Mother'
                  },
                  {
                    text: 'Father'
                  },
                  {
                    text: 'Guardian'
                  },
                  {
                    text: 'Sister'
                  },
                  {
                    text: 'Brother'
                  },
                  {
                    text: 'Daughter'
                  },
                  {
                    text: 'Son'
                  },
                  {
                    text: 'Aunt'
                  },
                  {
                    text: 'Uncle'
                  },
                  {
                    text: 'Grandmother'
                  },
                  {
                    text: 'Grandfather'
                  },
                  {
                    text: 'Friend'
                  },
                  {
                    text: 'Other'
                  }
                ]
              },
              {
                colNumber: '3',
                elementKey: 'nextOfKinPhone',
                elementName: 'nextOfKinPhone',
                fqn: 'demographics.nextOfKinPhone',
                inputType: 'text',
                label: 'Next of kin phone',
                rowNumber: '9',
                uiContainer: 'demographics.form'
              }
            ]
          },
          {
            rowNumber: '10',
            classList: 'form-row columns',
            uiContainer: 'demographics.form',
            elements: [
              {
                colNumber: '1',
                elementKey: 'decisionMakerName',
                elementName: 'decisionMakerName',
                fqn: 'demographics.decisionMakerName',
                inputType: 'text',
                label: 'Decision maker name',
                rowNumber: '10',
                uiContainer: 'demographics.form'
              },
              {
                colNumber: '2',
                elementKey: 'decisionMakerRelationship',
                elementName: 'decisionMakerRelationship',
                fqn: 'demographics.decisionMakerRelationship',
                inputType: 'select',
                label: 'Decision maker relationship',
                rowNumber: '10',
                uiContainer: 'demographics.form',
                options: [
                  {
                    text: 'Spouse'
                  },
                  {
                    text: 'Child'
                  },
                  {
                    text: 'Parent'
                  },
                  {
                    text: 'Sibling'
                  },
                  {
                    text: 'Grandparent'
                  },
                  {
                    text: 'Grandchild'
                  },
                  {
                    text: 'Friend'
                  },
                  {
                    text: 'Anyone else related by partnership'
                  },
                  {
                    text: 'Public guardian and trustee employee'
                  },
                  {
                    text: 'Other'
                  }
                ]
              },
              {
                colNumber: '3',
                elementKey: 'decisionMakerPhone',
                elementName: 'decisionMakerPhone',
                fqn: 'demographics.decisionMakerPhone',
                inputType: 'text',
                label: 'Decision maker phone',
                rowNumber: '10',
                uiContainer: 'demographics.form'
              }
            ]
          }
        ]
      }
    },
    allergies: {
      pageTitle: 'Allergies',
      dataKey: 'allergies',
      hasForm: true,
      hasDialog: false,
      hasTransposedTable: false,
      page_form: {
        rows: [
          {
            rowNumber: '1',
            classList: 'form-row columns',
            uiContainer: 'allergies.form',
            elements: [
              {
                colNumber: '1',
                elementKey: 'hasNoAllergies',
                elementName: 'hasNoAllergies',
                fqn: 'allergies.hasNoAllergies',
                inputType: 'checkbox',
                label: 'No known allergies',
                rowNumber: '1',
                uiContainer: 'allergies.form',
                validation: 'one of these two need to be filled'
              }
            ]
          },
          {
            rowNumber: '2',
            classList: 'form-row columns',
            uiContainer: 'allergies.form',
            elements: [
              {
                colNumber: '1',
                elementKey: 'allergies',
                elementName: 'allergies',
                fqn: 'allergies.allergies',
                inputType: 'text',
                label: 'Allergies search',
                rowNumber: '2',
                uiContainer: 'allergies.form',
                validation: 'one of these two need to be filled'
              }
            ]
          }
        ]
      }
    },
    medical: {
      pageTitle: 'History Medical',
      dataKey: 'medical',
      hasForm: true,
      hasDialog: false,
      hasTransposedTable: false,
      page_form: {
        rows: [
          {
            rowNumber: '1',
            classList: 'form-row columns',
            uiContainer: 'medical.form',
            elements: [
              {
                colNumber: '1',
                elementKey: 'history',
                elementName: 'history',
                fqn: 'medical.history',
                inputType: 'textarea',
                label: 'Past medical history',
                rowNumber: '1',
                uiContainer: 'medical.form'
              }
            ]
          }
        ]
      }
    },
    psychosocial: {
      pageTitle: 'History Psychosocial',
      dataKey: 'psychosocial',
      hasForm: true,
      hasDialog: false,
      hasTransposedTable: false,
      page_form: {
        rows: [
          {
            rowNumber: '1',
            classList: 'form-row columns',
            uiContainer: 'psychosocial.form',
            elements: [
              {
                colNumber: '1',
                elementKey: 'psychosocialHistory',
                elementName: 'psychosocialHistory',
                fqn: 'psychosocial.psychosocialHistory',
                inputType: 'textarea',
                label: 'Psychosocial history',
                rowNumber: '1',
                uiContainer: 'psychosocial.form'
              },
              {
                colNumber: '2',
                elementKey: 'diet',
                elementName: 'diet',
                fqn: 'psychosocial.diet',
                inputType: 'textarea',
                label: 'Diet',
                rowNumber: '1',
                uiContainer: 'psychosocial.form'
              },
              {
                colNumber: '3',
                elementKey: 'livingSituation',
                elementName: 'livingSituation',
                fqn: 'psychosocial.livingSituation',
                inputType: 'textarea',
                label: 'Living situation',
                rowNumber: '1',
                uiContainer: 'psychosocial.form'
              }
            ]
          },
          {
            rowNumber: '2',
            classList: 'form-row columns',
            uiContainer: 'psychosocial.form',
            elements: [
              {
                colNumber: '1',
                elementKey: 'employmentSchool',
                elementName: 'employmentSchool',
                fqn: 'psychosocial.employmentSchool',
                inputType: 'textarea',
                label: 'Employment/school',
                rowNumber: '2',
                uiContainer: 'psychosocial.form'
              },
              {
                colNumber: '2',
                elementKey: 'hobbies',
                elementName: 'hobbies',
                fqn: 'psychosocial.hobbies',
                inputType: 'textarea',
                label: 'Hobbies',
                rowNumber: '2',
                uiContainer: 'psychosocial.form'
              }
            ]
          }
        ]
      }
    },
    surgical: {
      pageTitle: 'History Surgical',
      dataKey: 'surgical',
      hasForm: true,
      hasDialog: false,
      hasTransposedTable: false
    },
    immunization: {
      pageTitle: 'History Immunization',
      dataKey: 'immunization',
      hasForm: true,
      hasDialog: false,
      hasTransposedTable: false,
      page_form: {
        rows: []
      }
    },
    familyHistory: {
      pageTitle: 'Care team',
      dataKey: 'familyHistory',
      hasForm: false,
      hasDialog: true,
      hasTransposedTable: false
    },
    past: {
      pageTitle: 'Past appointments',
      dataKey: 'past',
      hasForm: false,
      hasDialog: true,
      hasTransposedTable: false
    }
  }
}
