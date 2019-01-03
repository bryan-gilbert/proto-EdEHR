module.exports = function() {
  return {
    demographics: {
      pageTitle: 'Demographics',
      dataKey: 'demographics',
      hasForm: true,
      hasDialog: false,
      hasTransposedTable: false,
      rows: [
        {
          rowNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'familyName',
              label: 'Last name',
              type: 'text',
              mandatory: 'yes'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'givenName',
              label: 'First name',
              type: 'text',
              mandatory: 'yes'
            },
            {
              classList: 'is-one-third',
              colNumber: '3',
              propertyKey: 'middleName',
              label: 'Middle name(s)',
              type: 'text'
            }
          ]
        },
        {
          rowNumber: '2',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'preferredName',
              label: 'Preferred name',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'dateOfBirth',
              label: 'Date of birth',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              colNumber: '3',
              propertyKey: 'personAge',
              label: 'Age',
              type: 'text',
              mandatory: 'yes'
            }
          ]
        },
        {
          rowNumber: '3',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'gender',
              label: 'Gender',
              type: 'select',
              mandatory: 'yes',
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
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'martialStatus',
              label: 'Martial status',
              type: 'select',
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
              classList: 'is-one-third',
              colNumber: '3',
              propertyKey: 'codeStatus',
              label: 'Code status',
              type: 'select',
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
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'languagePrimary',
              label: 'Primary language',
              type: 'select',
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
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'religion',
              label: 'Religion',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              colNumber: '3',
              propertyKey: 'indigenousIdentifyAs',
              label: 'Do you identify as an indigenous person?',
              type: 'select',
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
          uiContainer: 'form',
          elements: [
            {
              classList: 'twoOfThree',
              colNumber: '1',
              propertyKey: 'streetAddress',
              label: 'Street address',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              colNumber: '3',
              propertyKey: 'city',
              label: 'City',
              type: 'text'
            }
          ]
        },
        {
          rowNumber: '6',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'country',
              label: 'Country',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'postalCode',
              label: 'Postal code',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              colNumber: '3',
              propertyKey: 'noAddress',
              label: 'No address',
              type: 'checkbox'
            }
          ]
        },
        {
          rowNumber: '7',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'phoneNumber',
              label: 'Phone number',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'emailAddress',
              label: 'Email address',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              colNumber: '3',
              propertyKey: 'occupationStudent',
              label: 'Occupation/student',
              type: 'text'
            }
          ]
        },
        {
          rowNumber: '8',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'phn',
              label: 'PHN',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'mrn',
              label: 'MRN',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              colNumber: '3',
              propertyKey: 'patientService',
              label: 'Patient service',
              type: 'text'
            }
          ]
        },
        {
          rowNumber: '9',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'nextOfKinName',
              label: 'Next of kin name',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'nextOfKinRelationship',
              label: 'Next of kin relationship',
              type: 'select',
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
              classList: 'is-one-third',
              colNumber: '3',
              propertyKey: 'nextOfKinPhone',
              label: 'Next of kin phone',
              type: 'text'
            }
          ]
        },
        {
          rowNumber: '10',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'decisionMakerName',
              label: 'Decision maker name',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'decisionMakerRelationship',
              label: 'Decision maker relationship',
              type: 'select',
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
              classList: 'is-one-third',
              colNumber: '3',
              propertyKey: 'decisionMakerPhone',
              label: 'Decision maker phone',
              type: 'text'
            }
          ]
        }
      ]
    },
    allergies: {
      pageTitle: 'Allergies',
      dataKey: 'allergies',
      hasForm: true,
      hasDialog: false,
      hasTransposedTable: false,
      rows: [
        {
          rowNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'hasNoAllergies',
              label: 'No known allergies',
              type: 'checkbox'
            }
          ]
        },
        {
          rowNumber: '2',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'allergies',
              label: 'Allergies search',
              type: 'text'
            }
          ]
        }
      ]
    },
    medical: {
      pageTitle: 'History Medical',
      dataKey: 'medical',
      hasForm: true,
      hasDialog: false,
      hasTransposedTable: false,
      rows: [
        {
          rowNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'history',
              label: 'Past medical history',
              type: 'textarea'
            }
          ]
        }
      ]
    },
    psychosocial: {
      pageTitle: 'History Psychosocial',
      dataKey: 'psychosocial',
      hasForm: true,
      hasDialog: false,
      hasTransposedTable: false,
      rows: [
        {
          rowNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'psychosocialHistory',
              label: 'Psychosocial history',
              type: 'textarea'
            },
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'exercise',
              label: 'Exercise',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'diet',
              label: 'Diet',
              type: 'textarea'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'exerciseFrequency',
              label: 'Exercise frequency',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              colNumber: '3',
              propertyKey: 'livingSituation',
              label: 'Living situation',
              type: 'textarea'
            }
          ]
        },
        {
          rowNumber: '2',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'employmentSchool',
              label: 'Employment/school',
              type: 'textarea'
            },
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'caffeineUse',
              label: 'Caffeine use',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'hobbies',
              label: 'Hobbies',
              type: 'textarea'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'caffeineUseFrequency',
              label: 'Caffeine use frequency',
              type: 'text'
            }
          ]
        },
        {
          rowNumber: '3',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'tobaccoUse',
              label: 'Tobacco use',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'tobaccoUseFrequency',
              label: 'Tobacco use frequency',
              type: 'text'
            }
          ]
        },
        {
          rowNumber: '4',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'cannabisUse',
              label: 'Cannabis use',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'cannabisUseFrequency',
              label: 'Cannabis use frequency',
              type: 'text'
            }
          ]
        },
        {
          rowNumber: '5',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'alcoholUse',
              label: 'Alcohol use',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'alcoholUseFrequency',
              label: 'Alcohol use frequency',
              type: 'text'
            }
          ]
        },
        {
          rowNumber: '6',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'substanceUse',
              label: 'Substance use',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'substanceUseFrequency',
              label: 'Substance use frequency',
              type: 'text'
            }
          ]
        }
      ]
    },
    surgical: {
      pageTitle: 'History Surgical',
      dataKey: 'surgical',
      hasForm: true,
      hasDialog: false,
      hasTransposedTable: false,
      rows: []
    },
    immunization: {
      pageTitle: 'History Immunization',
      dataKey: 'immunization',
      hasForm: true,
      hasDialog: false,
      hasTransposedTable: false,
      rows: [
        {
          rowNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'hepA',
              label: 'Hep A',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'hepADate',
              label: 'Hep A Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '2',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'hepB',
              label: 'Hep B',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'hepBDate',
              label: 'Hep B Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '3',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'mmr',
              label: 'MMR',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'mmrDate',
              label: 'MMR Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '4',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'pneumococcal',
              label: 'Pneumococcal',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'pneumococcalDate',
              label: 'Pneumococcal Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '5',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'polioDiptheriaPertussis',
              label: 'Polio diptheria pertussis',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'polioDiptheriaPertussisDate',
              label: 'Polio diptheria pertussis Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '6',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'tb',
              label: 'TB',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'tbDate',
              label: 'TB Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '7',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'tetanus',
              label: 'Tetanus',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'tetanusDate',
              label: 'Tetanus Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '8',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'other1',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'otherDate1',
              label: 'Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '9',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'other2',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'otherDate2',
              label: 'Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '10',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              colNumber: '1',
              propertyKey: 'other3',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              colNumber: '2',
              propertyKey: 'otherDate3',
              label: 'Date',
              type: 'date'
            }
          ]
        }
      ]
    },
    familyHistory: {
      pageTitle: 'Care team',
      dataKey: 'familyHistory',
      hasForm: false,
      hasDialog: true,
      hasTransposedTable: false,
      rows: []
    },
    past: {
      pageTitle: 'Past appointments',
      dataKey: 'past',
      hasForm: false,
      hasDialog: true,
      hasTransposedTable: false,
      rows: []
    }
  }
}
