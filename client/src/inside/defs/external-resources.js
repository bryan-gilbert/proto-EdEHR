/* eslint-disable quotes */
module.exports = function() {
  return {
    assessmentTools: {
      pageTitle: 'Standardized assessment tools',
      pageDataKey: 'assessmentTools',
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: '1',
            elements: [
              {
                elementKey: 'admissions',
                fqn: 'assessmentTools.admissions',
                inputType: 'fieldset',
                label: 'Admissions',
                fieldset: 'admissions',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'assessmentTools',
                dataParent: 'assessmentTools',
                page: 'Standardized assessment tools',
                elements: [
                  {
                    fqn: 'assessmentTools.admissions.',
                    inputType: 'assetLink',
                    label: 'triage_scale.pdf (need this one)',
                    fieldset: 'admissions',
                    fsetRow: '1',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.admissions',
                    page: 'Standardized assessment tools',
                    options: [
                      {
                        text: 'triage_scale.pdf'
                      }
                    ]
                  },
                  {
                    fqn: 'assessmentTools.admissions.',
                    inputType: 'assetLink',
                    label: 'patient_health_questionaire.pdf',
                    fieldset: 'admissions',
                    fsetRow: '2',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.admissions',
                    page: 'Standardized assessment tools',
                    options: [
                      {
                        text: 'patient_health_questionaire.pdf'
                      }
                    ]
                  },
                  {
                    fqn: 'assessmentTools.admissions.',
                    inputType: 'assetLink',
                    label: 'alcohol_consumption.pdf',
                    fieldset: 'admissions',
                    fsetRow: '3',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.admissions',
                    page: 'Standardized assessment tools',
                    options: [
                      {
                        text: 'alcohol_consumption.pdf'
                      }
                    ]
                  }
                ],
                containerType: 'fieldset',
                containerKey: 'admissions'
              },
              {
                elementKey: 'painAssessment',
                fqn: 'assessmentTools.painAssessment',
                inputType: 'fieldset',
                label: 'Pain Assessment',
                fieldset: 'painAssessment',
                formColumn: '2',
                formRow: '1',
                pageDataKey: 'assessmentTools',
                dataParent: 'assessmentTools',
                page: 'Standardized assessment tools',
                elements: [
                  {
                    fqn: 'assessmentTools.painAssessment.',
                    inputType: 'assetLink',
                    label: 'OPQRSTUV.pdf',
                    fieldset: 'painAssessment',
                    fsetRow: '1',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.painAssessment',
                    page: 'Standardized assessment tools',
                    options: [
                      {
                        text: 'OPQRSTUV.pdf'
                      }
                    ]
                  },
                  {
                    fqn: 'assessmentTools.painAssessment.',
                    inputType: 'assetLink',
                    label: '0-10_numeric_rating_scale.pdf',
                    fieldset: 'painAssessment',
                    fsetRow: '2',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.painAssessment',
                    page: 'Standardized assessment tools',
                    options: [
                      {
                        text: '0-10_numeric_rating_scale.pdf'
                      }
                    ]
                  },
                  {
                    fqn: 'assessmentTools.painAssessment.',
                    inputType: 'assetLink',
                    label: 'Neurological assessment',
                    fieldset: 'painAssessment',
                    fsetRow: '3',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.painAssessment',
                    page: 'Standardized assessment tools'
                  },
                  {
                    fqn: 'assessmentTools.painAssessment.',
                    inputType: 'assetLink',
                    label: 'glasgow_coma_scale.pdf',
                    fieldset: 'painAssessment',
                    fsetRow: '4',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.painAssessment',
                    page: 'Standardized assessment tools',
                    options: [
                      {
                        text: 'glasgow_coma_scale.pdf'
                      }
                    ]
                  },
                  {
                    fqn: 'assessmentTools.painAssessment.',
                    inputType: 'assetLink',
                    label: 'mini_mental_state_examination.pdf',
                    fieldset: 'painAssessment',
                    fsetRow: '5',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.painAssessment',
                    page: 'Standardized assessment tools',
                    options: [
                      {
                        text: 'mini_mental_state_examination.pdf'
                      }
                    ]
                  },
                  {
                    fqn: 'assessmentTools.painAssessment.',
                    inputType: 'assetLink',
                    label: 'richmond_agitation_scale.pdf',
                    fieldset: 'painAssessment',
                    fsetRow: '6',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.painAssessment',
                    page: 'Standardized assessment tools',
                    options: [
                      {
                        text: 'richmond_agitation_scale.pdf'
                      }
                    ]
                  }
                ],
                containerType: 'fieldset',
                containerKey: 'painAssessment'
              },
              {
                elementKey: 'fallRisk',
                fqn: 'assessmentTools.fallRisk',
                inputType: 'fieldset',
                label: 'Falls risk',
                fieldset: 'fallRisk',
                formColumn: '3',
                formRow: '1',
                pageDataKey: 'assessmentTools',
                dataParent: 'assessmentTools',
                page: 'Standardized assessment tools',
                elements: [
                  {
                    fqn: 'assessmentTools.fallRisk.',
                    inputType: 'assetLink',
                    label: 'fall_and_injury_reduction.pdf',
                    fieldset: 'fallRisk',
                    fsetRow: '1',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.fallRisk',
                    page: 'Standardized assessment tools',
                    options: [
                      {
                        text: 'fall_and_injury_reduction.pdf'
                      }
                    ]
                  },
                  {
                    fqn: 'assessmentTools.fallRisk.',
                    inputType: 'assetLink',
                    label: 'fall_assessment.pdf  (need this one)',
                    fieldset: 'fallRisk',
                    fsetRow: '2',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.fallRisk',
                    page: 'Standardized assessment tools',
                    options: [
                      {
                        text: 'fall_assessment.pdf'
                      }
                    ]
                  },
                  {
                    fqn: 'assessmentTools.fallRisk.',
                    inputType: 'assetLink',
                    label: 'risk_for_falls.pdf  (need this one)',
                    fieldset: 'fallRisk',
                    fsetRow: '3',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.fallRisk',
                    page: 'Standardized assessment tools',
                    options: [
                      {
                        text: 'risk_for_falls.pdf'
                      }
                    ]
                  }
                ],
                containerType: 'fieldset',
                containerKey: 'fallRisk'
              }
            ]
          },
          {
            formRow: '2',
            elements: [
              {
                elementKey: 'notes',
                fqn: 'assessmentTools.notes',
                inputType: 'fieldset',
                label: 'Notes',
                fieldset: 'notes',
                formColumn: '1',
                formRow: '2',
                pageDataKey: 'assessmentTools',
                dataParent: 'assessmentTools',
                page: 'Standardized assessment tools',
                elements: [
                  {
                    fqn: 'assessmentTools.notes.',
                    inputType: 'assetLink',
                    label: 'consult_note_template.pdf  (need this one)',
                    fieldset: 'notes',
                    fsetRow: '1',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.notes',
                    page: 'Standardized assessment tools',
                    options: [
                      {
                        text: 'consult_note_template.pdf'
                      }
                    ]
                  },
                  {
                    fqn: 'assessmentTools.notes.',
                    inputType: 'assetLink',
                    label: 'referral_note_template.pdf',
                    fieldset: 'notes',
                    fsetRow: '2',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.notes',
                    page: 'Standardized assessment tools',
                    options: [
                      {
                        text: 'referral_note_template.pdf'
                      }
                    ]
                  }
                ],
                containerType: 'fieldset',
                containerKey: 'notes'
              },
              {
                elementKey: 'educational',
                fqn: 'assessmentTools.educational',
                inputType: 'fieldset',
                label: 'Educational resources',
                fieldset: 'educational',
                formColumn: '2',
                formRow: '2',
                pageDataKey: 'assessmentTools',
                dataParent: 'assessmentTools',
                page: 'Standardized assessment tools',
                elements: [
                  {
                    fqn: 'assessmentTools.educational.',
                    inputType: 'assetLink',
                    label: 'COPD.pdf  (need this one)',
                    fieldset: 'educational',
                    fsetRow: '1',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.educational',
                    page: 'Standardized assessment tools',
                    options: [
                      {
                        text: 'COPD.pdf'
                      }
                    ]
                  },
                  {
                    fqn: 'assessmentTools.educational.',
                    inputType: 'assetLink',
                    label: 'bristol_stool_chart.pdf',
                    fieldset: 'educational',
                    fsetRow: '2',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.educational',
                    page: 'Standardized assessment tools',
                    options: [
                      {
                        text: 'bristol_stool_chart.pdf'
                      }
                    ]
                  }
                ],
                containerType: 'fieldset',
                containerKey: 'educational'
              },
              {
                elementKey: 'wound',
                fqn: 'assessmentTools.wound',
                inputType: 'fieldset',
                label: 'Wound assessment',
                fieldset: 'wound',
                formColumn: '3',
                formRow: '2',
                pageDataKey: 'assessmentTools',
                dataParent: 'assessmentTools',
                page: 'Standardized assessment tools',
                elements: [
                  {
                    fqn: 'assessmentTools.wound.',
                    inputType: 'assetLink',
                    label: 'braden_scale.pdf',
                    fieldset: 'wound',
                    fsetRow: '1',
                    fsetCol: '1',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.wound',
                    page: 'Standardized assessment tools',
                    options: [
                      {
                        text: 'braden_scale.pdf'
                      }
                    ]
                  }
                ],
                containerType: 'fieldset',
                containerKey: 'wound'
              }
            ]
          },
          {
            formRow: '3',
            elements: [
              {
                elementKey: 'medication',
                fqn: 'assessmentTools.medication',
                inputType: 'fieldset',
                label: 'Medication',
                fieldset: 'medication',
                formColumn: '1',
                formRow: '3',
                pageDataKey: 'assessmentTools',
                dataParent: 'assessmentTools',
                page: 'Standardized assessment tools',
                elements: [
                  {
                    fqn: 'assessmentTools.medication.',
                    inputType: 'assetLink',
                    label: 'best_possible_medication_history.pdf',
                    fieldset: 'medication',
                    fsetRow: '1',
                    fsetCol: '1',
                    formColumn: '.',
                    formRow: '.',
                    pageDataKey: 'assessmentTools',
                    dataParent: 'assessmentTools.medication',
                    page: 'Standardized assessment tools',
                    options: [
                      {
                        text: 'best_possible_medication_history.pdf'
                      }
                    ]
                  }
                ],
                containerType: 'fieldset',
                containerKey: 'medication'
              }
            ]
          }
        ],
        columnsCount: 3
      },
      pageData: {}
    }
  }
}
