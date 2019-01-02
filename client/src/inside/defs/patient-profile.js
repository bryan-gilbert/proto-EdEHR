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
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'givenName',
              label: 'First name',
              type: 'text',
              mandatory: 'yes'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'middleName',
              label: 'Middle name(s)',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'familyName',
              label: 'Last name',
              type: 'text',
              mandatory: 'yes'
            }
          ]
        },
        {
          rowNumber: '2',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'preferredName',
              label: 'Preferred name',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'dateOfBirth',
              label: 'Date of birth',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'personAge',
              label: 'Age',
              type: 'text',
              mandatory: 'yes'
            }
          ]
        },
        {
          rowNumber: '3',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
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
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
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
              propertyKey: 'religion',
              label: 'Religion',
              type: 'text'
            },
            {
              classList: 'is-one-third',
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
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'twoOfThree',
              propertyKey: 'streetAddress',
              label: 'Street address',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'city',
              label: 'City',
              type: 'text'
            }
          ]
        },
        {
          rowNumber: '6',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'country',
              label: 'Country',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'postalCode',
              label: 'Postal code',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'noAddress',
              label: 'No address',
              type: 'checkbox'
            }
          ]
        },
        {
          rowNumber: '7',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'phoneNumber',
              label: 'Phone number',
              type: 'phone'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'emailAddress',
              label: 'Email address',
              type: 'email'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'occupationStudent',
              label: 'Occupation/student',
              type: 'text'
            }
          ]
        },
        {
          rowNumber: '8',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'phn',
              label: 'PHN',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'mrn',
              label: 'MRN',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'patientService',
              label: 'Patient service',
              type: 'text'
            }
          ]
        },
        {
          rowNumber: '9',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'nextOfKinName',
              label: 'Next of kin name',
              type: 'text'
            },
            {
              classList: 'is-one-third',
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
              propertyKey: 'nextOfKinPhone',
              label: 'Next of kin phone',
              type: 'phone'
            }
          ]
        },
        {
          rowNumber: '10',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'decisionMakerName',
              label: 'Decision maker name',
              type: 'text'
            },
            {
              classList: 'is-one-third',
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
              propertyKey: 'decisionMakerPhone',
              label: 'Decision maker phone',
              type: 'phone'
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
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'hasNoAllergies',
              label: 'No known allergies',
              type: 'checkbox'
            }
          ]
        },
        {
          rowNumber: '2',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
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
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
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
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'psychosocialHistory',
              label: 'Psychosocial history',
              type: 'textarea'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'diet',
              label: 'Diet',
              type: 'textarea'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'livingSituation',
              label: 'Living situation',
              type: 'textarea'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'exercise',
              label: 'Exercise',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'exerciseFrequency',
              label: 'Exercise frequency',
              type: 'text'
            }
          ]
        },
        {
          rowNumber: '2',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'employmentSchool',
              label: 'Employment/school',
              type: 'textarea'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'hobbies',
              label: 'Hobbies',
              type: 'textarea'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'caffeineUse',
              label: 'Caffeine use',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'caffeineUseFrequency',
              label: 'Caffeine use frequency',
              type: 'text'
            }
          ]
        },
        {
          rowNumber: '3',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'tobaccoUse',
              label: 'Tobacco use',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'tobaccoUseFrequency',
              label: 'Tobacco use frequency',
              type: 'text'
            }
          ]
        },
        {
          rowNumber: '4',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'cannabisUse',
              label: 'Cannabis use',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'cannabisUseFrequency',
              label: 'Cannabis use frequency',
              type: 'text'
            }
          ]
        },
        {
          rowNumber: '5',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'alcoholUse',
              label: 'Alcohol use',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'alcoholUseFrequency',
              label: 'Alcohol use frequency',
              type: 'text'
            }
          ]
        },
        {
          rowNumber: '6',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'substanceUse',
              label: 'Substance use',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
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
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'hepA',
              label: 'Hep A',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'hepADate',
              label: 'Hep A Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '2',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'hepB',
              label: 'Hep B',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'hepBDate',
              label: 'Hep B Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '3',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'mmr',
              label: 'MMR',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'mmrDate',
              label: 'MMR Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '4',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'pneumococcal',
              label: 'Pneumococcal',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'pneumococcalDate',
              label: 'Pneumococcal Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '5',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'polioDiptheriaPertussis',
              label: 'Polio diptheria pertussis',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'polioDiptheriaPertussisDate',
              label: 'Polio diptheria pertussis Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '6',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'tb',
              label: 'TB',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'tbDate',
              label: 'TB Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '7',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'tetanus',
              label: 'Tetanus',
              type: 'checkbox'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'tetanusDate',
              label: 'Tetanus Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '8',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'other1',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'otherDate1',
              label: 'Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '9',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'other2',
              type: 'text'
            },
            {
              classList: 'is-one-third',
              propertyKey: 'otherDate2',
              label: 'Date',
              type: 'date'
            }
          ]
        },
        {
          rowNumber: '10',
          colNumber: '1',
          classList: 'form-row columns',
          uiContainer: 'form.check_group',
          elements: [
            {
              classList: 'is-one-third',
              propertyKey: 'other3',
              type: 'text'
            },
            {
              classList: 'is-one-third',
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
