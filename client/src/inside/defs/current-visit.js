/* eslint-disable quotes */
module.exports = function() {
  return {
    visit: {
      pageTitle: 'Visit',
      pageDataKey: 'visit',
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: '1',
            elements: [
              {
                elementKey: 'admissionDay',
                fqn: 'visit.admissionDay',
                inputType: 'day',
                label: 'Admission day',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'visit',
                dataParent: 'visit',
                page: 'Visit',
                mandatory: 'yes'
              },
              {
                elementKey: 'admissionTime',
                fqn: 'visit.admissionTime',
                inputType: 'time',
                label: 'Admission time',
                formColumn: '2',
                formRow: '1',
                pageDataKey: 'visit',
                dataParent: 'visit',
                page: 'Visit',
                mandatory: 'yes'
              },
              {
                elementKey: 'consent',
                fqn: 'visit.consent',
                inputType: 'checkbox',
                label: 'Consent for treatment',
                formColumn: '3',
                formRow: '1',
                pageDataKey: 'visit',
                dataParent: 'visit',
                page: 'Visit'
              }
            ]
          },
          {
            formRow: '2',
            elements: [
              {
                elementKey: 'diagnosis',
                fqn: 'visit.diagnosis',
                inputType: 'text',
                label: 'Admitting diagnosis',
                formCss: 'twoOfThree',
                formColumn: '1',
                formRow: '2',
                pageDataKey: 'visit',
                dataParent: 'visit',
                page: 'Visit'
              },
              {
                elementKey: 'status',
                fqn: 'visit.status',
                inputType: 'select',
                label: 'Admission status',
                formColumn: '3',
                formRow: '2',
                pageDataKey: 'visit',
                dataParent: 'visit',
                page: 'Visit',
                mandatory: 'yes',
                options: [
                  {
                    text: 'Admission in progress'
                  },
                  {
                    text: 'Admitted'
                  },
                  {
                    text: 'Inpatient'
                  },
                  {
                    text: 'Outpatient'
                  },
                  {
                    text: 'Surgical day care'
                  },
                  {
                    text: 'Discharge pending'
                  },
                  {
                    text: 'Discharged'
                  }
                ]
              }
            ]
          }
        ],
        columnsCount: 3
      },
      hasTable: true,
      tables: [
        {
          tableKey: 'location',
          addButtonText: 'Add new patient location',
          tableCells: [
            {
              elementKey: 'location',
              fqn: 'visit.location.location',
              inputType: 'text',
              label: 'Patient location',
              tableColumn: '1',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'visit.location',
              page: 'Visit',
              mandatory: 'yes',
              helperText: 'hospital, ward #, room #, home, out patient clinic',
              tableKey: 'location'
            },
            {
              elementKey: 'transferInDay',
              fqn: 'visit.location.transferInDay',
              inputType: 'day',
              label: 'Transfer in day',
              tableColumn: '2',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'visit.location',
              page: 'Visit',
              tableKey: 'location'
            },
            {
              elementKey: 'transferInTime',
              fqn: 'visit.location.transferInTime',
              inputType: 'time',
              label: 'Transfer in time',
              tableColumn: '3',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'visit.location',
              page: 'Visit',
              tableKey: 'location'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'location',
                    fqn: 'visit.location.location',
                    inputType: 'text',
                    label: 'Patient location',
                    tableColumn: '1',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'visit.location',
                    page: 'Visit',
                    mandatory: 'yes',
                    helperText: 'hospital, ward #, room #, home, out patient clinic',
                    tableKey: 'location'
                  },
                  {
                    elementKey: 'transferInDay',
                    fqn: 'visit.location.transferInDay',
                    inputType: 'day',
                    label: 'Transfer in day',
                    tableColumn: '2',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'visit.location',
                    page: 'Visit',
                    tableKey: 'location'
                  },
                  {
                    elementKey: 'transferInTime',
                    fqn: 'visit.location.transferInTime',
                    inputType: 'time',
                    label: 'Transfer in time',
                    tableColumn: '3',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'visit.location',
                    page: 'Visit',
                    tableKey: 'location'
                  }
                ]
              }
            ],
            columnsCount: 3
          }
        }
      ],
      pageData: {
        location: []
      }
    },
    vitals: {
      pageTitle: 'Vital signs',
      pageDataKey: 'vitals',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add vital sign record',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'vitals.table.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'unit',
              fqn: 'vitals.table.unit',
              inputType: 'text',
              label: 'Unit',
              tableColumn: '1',
              formCss: 'user_unit',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'vitals.table.day',
              inputType: 'text',
              label: 'Day',
              tableColumn: '1',
              formCss: 'user_day',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'vitals.table.time',
              inputType: 'text',
              label: 'Time',
              tableColumn: '1',
              formCss: 'user_time',
              formColumn: '5',
              formRow: '1',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'temperature',
              fqn: 'vitals.table.temperature',
              inputType: 'text',
              label: 'Temperature',
              tableColumn: '1',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'vitals.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '1',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'source',
              fqn: 'vitals.table.source',
              inputType: 'select',
              label: 'Source',
              tableColumn: '2',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              options: [
                {
                  text: 'oral'
                },
                {
                  text: 'axilla'
                },
                {
                  text: 'rectal'
                },
                {
                  text: 'tympanic'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'rate',
              fqn: 'vitals.table.rate',
              inputType: 'text',
              label: 'Rate',
              tableColumn: '3',
              formColumn: '3',
              formRow: '3',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'rhythm',
              fqn: 'vitals.table.rhythm',
              inputType: 'select',
              label: 'Rhythm',
              tableColumn: '4',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              options: [
                {
                  text: 'regular'
                },
                {
                  text: 'irregular'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'strength',
              fqn: 'vitals.table.strength',
              inputType: 'select',
              label: 'Strength',
              tableColumn: '5',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              options: [
                {
                  text: 'strong'
                },
                {
                  text: 'medium'
                },
                {
                  text: 'weak'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'systolic',
              fqn: 'vitals.table.systolic',
              inputType: 'text',
              label: 'Systolic',
              tableColumn: '6',
              formColumn: '1',
              formRow: '4',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'diastolic',
              fqn: 'vitals.table.diastolic',
              inputType: 'text',
              label: 'Diastolic',
              tableColumn: '7',
              formColumn: '2',
              formRow: '4',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'patientPosition',
              fqn: 'vitals.table.patientPosition',
              inputType: 'select',
              label: 'Patient position',
              tableColumn: '8',
              formColumn: '3',
              formRow: '4',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              options: [
                {
                  text: 'lying'
                },
                {
                  text: 'sitting'
                },
                {
                  text: 'standing'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'respirationRate',
              fqn: 'vitals.table.respirationRate',
              inputType: 'text',
              label: 'Respiration rate',
              tableColumn: '9',
              formColumn: '1',
              formRow: '5',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'respirationEffort',
              fqn: 'vitals.table.respirationEffort',
              inputType: 'select',
              label: 'Respiration effort',
              tableColumn: '10',
              formColumn: '2',
              formRow: '5',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              options: [
                {
                  text: 'easy'
                },
                {
                  text: 'laboured'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'oxygenSaturation',
              fqn: 'vitals.table.oxygenSaturation',
              inputType: 'text',
              label: 'Oxygen saturation',
              tableColumn: '11',
              formColumn: '1',
              formRow: '6',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'oxygenMode',
              fqn: 'vitals.table.oxygenMode',
              inputType: 'select',
              label: 'Oxygen mode',
              tableColumn: '12',
              formColumn: '2',
              formRow: '6',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              options: [
                {
                  text: 'nasal prongs'
                },
                {
                  text: 'simple face mask'
                },
                {
                  text: 'rebreathing face mask'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'flowRate',
              fqn: 'vitals.table.flowRate',
              inputType: 'text',
              label: 'Flow rate',
              tableColumn: '13',
              formColumn: '3',
              formRow: '6',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'vitals.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'vitals.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '1',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'unit',
                    fqn: 'vitals.table.unit',
                    inputType: 'text',
                    label: 'Unit',
                    tableColumn: '1',
                    formCss: 'user_unit',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'vitals.table.day',
                    inputType: 'text',
                    label: 'Day',
                    tableColumn: '1',
                    formCss: 'user_day',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'vitals.table.time',
                    inputType: 'text',
                    label: 'Time',
                    tableColumn: '1',
                    formCss: 'user_time',
                    formColumn: '5',
                    formRow: '1',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'temperature',
                    fqn: 'vitals.table.temperature',
                    inputType: 'text',
                    label: 'Temperature',
                    tableColumn: '1',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'source',
                    fqn: 'vitals.table.source',
                    inputType: 'select',
                    label: 'Source',
                    tableColumn: '2',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    options: [
                      {
                        text: 'oral'
                      },
                      {
                        text: 'axilla'
                      },
                      {
                        text: 'rectal'
                      },
                      {
                        text: 'tympanic'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'rhythm',
                    fqn: 'vitals.table.rhythm',
                    inputType: 'select',
                    label: 'Rhythm',
                    tableColumn: '4',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    options: [
                      {
                        text: 'regular'
                      },
                      {
                        text: 'irregular'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'strength',
                    fqn: 'vitals.table.strength',
                    inputType: 'select',
                    label: 'Strength',
                    tableColumn: '5',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    options: [
                      {
                        text: 'strong'
                      },
                      {
                        text: 'medium'
                      },
                      {
                        text: 'weak'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'rate',
                    fqn: 'vitals.table.rate',
                    inputType: 'text',
                    label: 'Rate',
                    tableColumn: '3',
                    formColumn: '3',
                    formRow: '3',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '4',
                elements: [
                  {
                    elementKey: 'systolic',
                    fqn: 'vitals.table.systolic',
                    inputType: 'text',
                    label: 'Systolic',
                    tableColumn: '6',
                    formColumn: '1',
                    formRow: '4',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'diastolic',
                    fqn: 'vitals.table.diastolic',
                    inputType: 'text',
                    label: 'Diastolic',
                    tableColumn: '7',
                    formColumn: '2',
                    formRow: '4',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'patientPosition',
                    fqn: 'vitals.table.patientPosition',
                    inputType: 'select',
                    label: 'Patient position',
                    tableColumn: '8',
                    formColumn: '3',
                    formRow: '4',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    options: [
                      {
                        text: 'lying'
                      },
                      {
                        text: 'sitting'
                      },
                      {
                        text: 'standing'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '5',
                elements: [
                  {
                    elementKey: 'respirationRate',
                    fqn: 'vitals.table.respirationRate',
                    inputType: 'text',
                    label: 'Respiration rate',
                    tableColumn: '9',
                    formColumn: '1',
                    formRow: '5',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'respirationEffort',
                    fqn: 'vitals.table.respirationEffort',
                    inputType: 'select',
                    label: 'Respiration effort',
                    tableColumn: '10',
                    formColumn: '2',
                    formRow: '5',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    options: [
                      {
                        text: 'easy'
                      },
                      {
                        text: 'laboured'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '6',
                elements: [
                  {
                    elementKey: 'oxygenSaturation',
                    fqn: 'vitals.table.oxygenSaturation',
                    inputType: 'text',
                    label: 'Oxygen saturation',
                    tableColumn: '11',
                    formColumn: '1',
                    formRow: '6',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'oxygenMode',
                    fqn: 'vitals.table.oxygenMode',
                    inputType: 'select',
                    label: 'Oxygen mode',
                    tableColumn: '12',
                    formColumn: '2',
                    formRow: '6',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    options: [
                      {
                        text: 'nasal prongs'
                      },
                      {
                        text: 'simple face mask'
                      },
                      {
                        text: 'rebreathing face mask'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'flowRate',
                    fqn: 'vitals.table.flowRate',
                    inputType: 'text',
                    label: 'Flow rate',
                    tableColumn: '13',
                    formColumn: '3',
                    formRow: '6',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    neurological: {
      pageTitle: 'Assessments: Neurological',
      pageDataKey: 'neurological',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add new neurological assessment',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'neurological.table.name',
              inputType: 'text',
              label: 'Name',
              tableCss: 'trans-table-cell',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'neurological.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableCss: 'trans-table-cell',
              tableColumn: '2',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              tableKey: 'table'
            },
            {
              elementKey: 'unit',
              fqn: 'neurological.table.unit',
              inputType: 'text',
              label: 'Unit',
              tableCss: 'trans-table-cell',
              tableColumn: '3',
              formCss: 'user_unit',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'neurological.table.day',
              inputType: 'day',
              label: 'Day',
              tableCss: 'trans-table-cell',
              tableColumn: '4',
              formCss: 'user_day',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'neurological.table.time',
              inputType: 'time',
              label: 'Time',
              tableCss: 'trans-table-cell',
              tableColumn: '5',
              formCss: 'user_time',
              formColumn: '5',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              tableKey: 'table'
            },
            {
              elementKey: 'status',
              fqn: 'neurological.table.status',
              inputType: 'fieldset',
              label: 'Status',
              tableCss: 'trans-table-cell hide-table-element',
              tableColumn: '6',
              fieldset: 'status',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              elements: [
                {
                  elementKey: 'alert',
                  fqn: 'neurological.table.status.alert',
                  inputType: 'checkbox',
                  label: 'Alert',
                  tableCss: 'trans-table-cell',
                  tableColumn: '7',
                  fieldset: 'status',
                  fsetRow: '1',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.status',
                  page: 'Assessments: Neurological',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'oriented',
                  fqn: 'neurological.table.status.oriented',
                  inputType: 'checkbox',
                  label: 'Oriented',
                  tableCss: 'trans-table-cell',
                  tableColumn: '8',
                  fieldset: 'status',
                  fsetRow: '2',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.status',
                  page: 'Assessments: Neurological',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'confused',
                  fqn: 'neurological.table.status.confused',
                  inputType: 'checkbox',
                  label: 'Confused',
                  tableCss: 'trans-table-cell',
                  tableColumn: '9',
                  fieldset: 'status',
                  fsetRow: '3',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.status',
                  page: 'Assessments: Neurological',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'drowsy',
                  fqn: 'neurological.table.status.drowsy',
                  inputType: 'checkbox',
                  label: 'Drowsy',
                  tableCss: 'trans-table-cell',
                  tableColumn: '10',
                  fieldset: 'status',
                  fsetRow: '4',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.status',
                  page: 'Assessments: Neurological',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'unresponsive',
                  fqn: 'neurological.table.status.unresponsive',
                  inputType: 'checkbox',
                  label: 'Unresponsive',
                  tableCss: 'trans-table-cell',
                  tableColumn: '11',
                  fieldset: 'status',
                  fsetRow: '5',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.status',
                  page: 'Assessments: Neurological',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'dizziness',
                  fqn: 'neurological.table.status.dizziness',
                  inputType: 'checkbox',
                  label: 'Dizziness',
                  tableCss: 'trans-table-cell',
                  tableColumn: '12',
                  fieldset: 'status',
                  fsetRow: '6',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.status',
                  page: 'Assessments: Neurological',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'blurredVision',
                  fqn: 'neurological.table.status.blurredVision',
                  inputType: 'checkbox',
                  label: 'Blurred vision',
                  tableCss: 'trans-table-cell',
                  tableColumn: '13',
                  fieldset: 'status',
                  fsetRow: '7',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.status',
                  page: 'Assessments: Neurological',
                  tableKey: 'table',
                  formColumn: '1'
                }
              ],
              containerType: 'fieldset',
              containerKey: 'status',
              tableKey: 'table',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'alert',
                        fqn: 'neurological.table.status.alert',
                        inputType: 'checkbox',
                        label: 'Alert',
                        tableCss: 'trans-table-cell',
                        tableColumn: '7',
                        fieldset: 'status',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '2',
                    elements: [
                      {
                        elementKey: 'oriented',
                        fqn: 'neurological.table.status.oriented',
                        inputType: 'checkbox',
                        label: 'Oriented',
                        tableCss: 'trans-table-cell',
                        tableColumn: '8',
                        fieldset: 'status',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '3',
                    elements: [
                      {
                        elementKey: 'confused',
                        fqn: 'neurological.table.status.confused',
                        inputType: 'checkbox',
                        label: 'Confused',
                        tableCss: 'trans-table-cell',
                        tableColumn: '9',
                        fieldset: 'status',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '4',
                    elements: [
                      {
                        elementKey: 'drowsy',
                        fqn: 'neurological.table.status.drowsy',
                        inputType: 'checkbox',
                        label: 'Drowsy',
                        tableCss: 'trans-table-cell',
                        tableColumn: '10',
                        fieldset: 'status',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '5',
                    elements: [
                      {
                        elementKey: 'unresponsive',
                        fqn: 'neurological.table.status.unresponsive',
                        inputType: 'checkbox',
                        label: 'Unresponsive',
                        tableCss: 'trans-table-cell',
                        tableColumn: '11',
                        fieldset: 'status',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '6',
                    elements: [
                      {
                        elementKey: 'dizziness',
                        fqn: 'neurological.table.status.dizziness',
                        inputType: 'checkbox',
                        label: 'Dizziness',
                        tableCss: 'trans-table-cell',
                        tableColumn: '12',
                        fieldset: 'status',
                        fsetRow: '6',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '7',
                    elements: [
                      {
                        elementKey: 'blurredVision',
                        fqn: 'neurological.table.status.blurredVision',
                        inputType: 'checkbox',
                        label: 'Blurred vision',
                        tableCss: 'trans-table-cell',
                        tableColumn: '13',
                        fieldset: 'status',
                        fsetRow: '7',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  }
                ],
                columnsCount: 1
              }
            },
            {
              elementKey: 'alert',
              fqn: 'neurological.table.status.alert',
              inputType: 'checkbox',
              label: 'Alert',
              tableCss: 'trans-table-cell',
              tableColumn: '7',
              fieldset: 'status',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.status',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'oriented',
              fqn: 'neurological.table.status.oriented',
              inputType: 'checkbox',
              label: 'Oriented',
              tableCss: 'trans-table-cell',
              tableColumn: '8',
              fieldset: 'status',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.status',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'confused',
              fqn: 'neurological.table.status.confused',
              inputType: 'checkbox',
              label: 'Confused',
              tableCss: 'trans-table-cell',
              tableColumn: '9',
              fieldset: 'status',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.status',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'drowsy',
              fqn: 'neurological.table.status.drowsy',
              inputType: 'checkbox',
              label: 'Drowsy',
              tableCss: 'trans-table-cell',
              tableColumn: '10',
              fieldset: 'status',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.status',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'unresponsive',
              fqn: 'neurological.table.status.unresponsive',
              inputType: 'checkbox',
              label: 'Unresponsive',
              tableCss: 'trans-table-cell',
              tableColumn: '11',
              fieldset: 'status',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.status',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'dizziness',
              fqn: 'neurological.table.status.dizziness',
              inputType: 'checkbox',
              label: 'Dizziness',
              tableCss: 'trans-table-cell',
              tableColumn: '12',
              fieldset: 'status',
              fsetRow: '6',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.status',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'blurredVision',
              fqn: 'neurological.table.status.blurredVision',
              inputType: 'checkbox',
              label: 'Blurred vision',
              tableCss: 'trans-table-cell',
              tableColumn: '13',
              fieldset: 'status',
              fsetRow: '7',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.status',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'concious',
              fqn: 'neurological.table.concious',
              inputType: 'fieldset',
              label: 'Loss of conciousness',
              tableCss: 'trans-table-cell hide-table-element',
              tableColumn: '14',
              fieldset: 'concious',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              elements: [
                {
                  elementKey: 'loss',
                  fqn: 'neurological.table.concious.loss',
                  inputType: 'select',
                  tableCss: 'trans-table-cell',
                  tableColumn: '15',
                  fieldset: 'concious',
                  fsetRow: '1',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.concious',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: 'No'
                    },
                    {
                      text: 'Yes'
                    },
                    {
                      text: 'Unknown'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'duration',
                  fqn: 'neurological.table.concious.duration',
                  inputType: 'text',
                  label: 'Duration',
                  tableCss: 'trans-table-cell',
                  tableColumn: '16',
                  fieldset: 'concious',
                  fsetRow: '2',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.concious',
                  page: 'Assessments: Neurological',
                  tableKey: 'table',
                  formColumn: '1'
                }
              ],
              containerType: 'fieldset',
              containerKey: 'concious',
              tableKey: 'table',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'loss',
                        fqn: 'neurological.table.concious.loss',
                        inputType: 'select',
                        tableCss: 'trans-table-cell',
                        tableColumn: '15',
                        fieldset: 'concious',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.concious',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'No'
                          },
                          {
                            text: 'Yes'
                          },
                          {
                            text: 'Unknown'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '2',
                    elements: [
                      {
                        elementKey: 'duration',
                        fqn: 'neurological.table.concious.duration',
                        inputType: 'text',
                        label: 'Duration',
                        tableCss: 'trans-table-cell',
                        tableColumn: '16',
                        fieldset: 'concious',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.concious',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  }
                ],
                columnsCount: 1
              }
            },
            {
              elementKey: 'loss',
              fqn: 'neurological.table.concious.loss',
              inputType: 'select',
              tableCss: 'trans-table-cell',
              tableColumn: '15',
              fieldset: 'concious',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.concious',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Yes'
                },
                {
                  text: 'Unknown'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'duration',
              fqn: 'neurological.table.concious.duration',
              inputType: 'text',
              label: 'Duration',
              tableCss: 'trans-table-cell',
              tableColumn: '16',
              fieldset: 'concious',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.concious',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'glasgowComaScale',
              fqn: 'neurological.table.glasgowComaScale',
              inputType: 'fieldset',
              label: 'Glasgow Coma Scale',
              tableCss: 'trans-table-cell hide-table-element',
              tableColumn: '17',
              fieldset: 'glasgowComaScale',
              formColumn: '3',
              formRow: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              elements: [
                {
                  elementKey: 'eyeOpening',
                  fqn: 'neurological.table.glasgowComaScale.eyeOpening',
                  inputType: 'select',
                  label: 'Eye opening',
                  tableCss: 'trans-table-cell',
                  tableColumn: '18',
                  fieldset: 'glasgowComaScale',
                  fsetRow: '1',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.glasgowComaScale',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: 'Spontaneous'
                    },
                    {
                      text: 'To sound'
                    },
                    {
                      text: 'To pressure'
                    },
                    {
                      text: 'None'
                    },
                    {
                      text: 'Non testable'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'verbalResponse',
                  fqn: 'neurological.table.glasgowComaScale.verbalResponse',
                  inputType: 'select',
                  label: 'Verbal response',
                  tableCss: 'trans-table-cell',
                  tableColumn: '19',
                  fieldset: 'glasgowComaScale',
                  fsetRow: '2',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.glasgowComaScale',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: 'Oriented'
                    },
                    {
                      text: 'Confused'
                    },
                    {
                      text: 'Words'
                    },
                    {
                      text: 'Sounds'
                    },
                    {
                      text: 'None'
                    },
                    {
                      text: 'Non testable'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'bestMotorResponse',
                  fqn: 'neurological.table.glasgowComaScale.bestMotorResponse',
                  inputType: 'select',
                  label: 'Best motor response',
                  tableCss: 'trans-table-cell',
                  tableColumn: '20',
                  fieldset: 'glasgowComaScale',
                  fsetRow: '3',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.glasgowComaScale',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: 'Obeys commands'
                    },
                    {
                      text: 'Localising'
                    },
                    {
                      text: 'Normal flexion'
                    },
                    {
                      text: 'Extension'
                    },
                    {
                      text: 'None'
                    },
                    {
                      text: 'Non testable'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'totalGlasgow',
                  fqn: 'neurological.table.glasgowComaScale.totalGlasgow',
                  inputType: 'calculated',
                  label: 'Total',
                  tableCss: 'trans-table-cell',
                  tableColumn: '21',
                  fieldset: 'glasgowComaScale',
                  fsetRow: '4',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.glasgowComaScale',
                  page: 'Assessments: Neurological',
                  tableKey: 'table',
                  formColumn: '1'
                }
              ],
              containerType: 'fieldset',
              containerKey: 'glasgowComaScale',
              tableKey: 'table',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'eyeOpening',
                        fqn: 'neurological.table.glasgowComaScale.eyeOpening',
                        inputType: 'select',
                        label: 'Eye opening',
                        tableCss: 'trans-table-cell',
                        tableColumn: '18',
                        fieldset: 'glasgowComaScale',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.glasgowComaScale',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Spontaneous'
                          },
                          {
                            text: 'To sound'
                          },
                          {
                            text: 'To pressure'
                          },
                          {
                            text: 'None'
                          },
                          {
                            text: 'Non testable'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '2',
                    elements: [
                      {
                        elementKey: 'verbalResponse',
                        fqn: 'neurological.table.glasgowComaScale.verbalResponse',
                        inputType: 'select',
                        label: 'Verbal response',
                        tableCss: 'trans-table-cell',
                        tableColumn: '19',
                        fieldset: 'glasgowComaScale',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.glasgowComaScale',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Oriented'
                          },
                          {
                            text: 'Confused'
                          },
                          {
                            text: 'Words'
                          },
                          {
                            text: 'Sounds'
                          },
                          {
                            text: 'None'
                          },
                          {
                            text: 'Non testable'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '3',
                    elements: [
                      {
                        elementKey: 'bestMotorResponse',
                        fqn: 'neurological.table.glasgowComaScale.bestMotorResponse',
                        inputType: 'select',
                        label: 'Best motor response',
                        tableCss: 'trans-table-cell',
                        tableColumn: '20',
                        fieldset: 'glasgowComaScale',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.glasgowComaScale',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Obeys commands'
                          },
                          {
                            text: 'Localising'
                          },
                          {
                            text: 'Normal flexion'
                          },
                          {
                            text: 'Extension'
                          },
                          {
                            text: 'None'
                          },
                          {
                            text: 'Non testable'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '4',
                    elements: [
                      {
                        elementKey: 'totalGlasgow',
                        fqn: 'neurological.table.glasgowComaScale.totalGlasgow',
                        inputType: 'calculated',
                        label: 'Total',
                        tableCss: 'trans-table-cell',
                        tableColumn: '21',
                        fieldset: 'glasgowComaScale',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.glasgowComaScale',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  }
                ],
                columnsCount: 1
              }
            },
            {
              elementKey: 'eyeOpening',
              fqn: 'neurological.table.glasgowComaScale.eyeOpening',
              inputType: 'select',
              label: 'Eye opening',
              tableCss: 'trans-table-cell',
              tableColumn: '18',
              fieldset: 'glasgowComaScale',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.glasgowComaScale',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Spontaneous'
                },
                {
                  text: 'To sound'
                },
                {
                  text: 'To pressure'
                },
                {
                  text: 'None'
                },
                {
                  text: 'Non testable'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'verbalResponse',
              fqn: 'neurological.table.glasgowComaScale.verbalResponse',
              inputType: 'select',
              label: 'Verbal response',
              tableCss: 'trans-table-cell',
              tableColumn: '19',
              fieldset: 'glasgowComaScale',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.glasgowComaScale',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Oriented'
                },
                {
                  text: 'Confused'
                },
                {
                  text: 'Words'
                },
                {
                  text: 'Sounds'
                },
                {
                  text: 'None'
                },
                {
                  text: 'Non testable'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'bestMotorResponse',
              fqn: 'neurological.table.glasgowComaScale.bestMotorResponse',
              inputType: 'select',
              label: 'Best motor response',
              tableCss: 'trans-table-cell',
              tableColumn: '20',
              fieldset: 'glasgowComaScale',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.glasgowComaScale',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Obeys commands'
                },
                {
                  text: 'Localising'
                },
                {
                  text: 'Normal flexion'
                },
                {
                  text: 'Extension'
                },
                {
                  text: 'None'
                },
                {
                  text: 'Non testable'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'totalGlasgow',
              fqn: 'neurological.table.glasgowComaScale.totalGlasgow',
              inputType: 'calculated',
              label: 'Total',
              tableCss: 'trans-table-cell',
              tableColumn: '21',
              fieldset: 'glasgowComaScale',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.glasgowComaScale',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'pupils',
              fqn: 'neurological.table.pupils',
              inputType: 'fieldRowSet',
              label: 'Pupils',
              tableCss: 'trans-table-cell hide-table-element',
              tableColumn: '22',
              fieldset: 'pupils',
              formCss: 'fieldset_row',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              elements: [
                {
                  elementKey: 'leftPupilSize',
                  fqn: 'neurological.table.pupils.leftPupilSize',
                  inputType: 'select',
                  label: 'Left pupil size',
                  tableCss: 'trans-table-cell',
                  tableColumn: '23',
                  fieldset: 'pupils',
                  fsetRow: '1',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.pupils',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '1'
                    },
                    {
                      text: '2'
                    },
                    {
                      text: '3'
                    },
                    {
                      text: '4'
                    },
                    {
                      text: '5'
                    },
                    {
                      text: '6'
                    },
                    {
                      text: '7'
                    },
                    {
                      text: '8'
                    },
                    {
                      text: '9'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'leftPupilResponseToLight',
                  fqn: 'neurological.table.pupils.leftPupilResponseToLight',
                  inputType: 'select',
                  label: 'Left pupil response to light',
                  tableCss: 'trans-table-cell',
                  tableColumn: '24',
                  fieldset: 'pupils',
                  fsetRow: '2',
                  fsetCol: '1',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.pupils',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: 'Brisk'
                    },
                    {
                      text: 'Sluggish'
                    },
                    {
                      text: 'Fixed'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'rightPupilSize',
                  fqn: 'neurological.table.pupils.rightPupilSize',
                  inputType: 'select',
                  label: 'Right pupil size',
                  tableCss: 'trans-table-cell',
                  tableColumn: '25',
                  fieldset: 'pupils',
                  fsetRow: '1',
                  fsetCol: '2',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.pupils',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '1'
                    },
                    {
                      text: '2'
                    },
                    {
                      text: '3'
                    },
                    {
                      text: '4'
                    },
                    {
                      text: '5'
                    },
                    {
                      text: '6'
                    },
                    {
                      text: '7'
                    },
                    {
                      text: '8'
                    },
                    {
                      text: '9'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  elementKey: 'rightPupilResponseToLight',
                  fqn: 'neurological.table.pupils.rightPupilResponseToLight',
                  inputType: 'select',
                  label: 'Right pupil response to light',
                  tableCss: 'trans-table-cell',
                  tableColumn: '26',
                  fieldset: 'pupils',
                  fsetRow: '2',
                  fsetCol: '2',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.pupils',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: 'Brisk'
                    },
                    {
                      text: 'Sluggish'
                    },
                    {
                      text: 'Fixed'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  elementKey: 'bothPupils',
                  fqn: 'neurological.table.pupils.bothPupils',
                  inputType: 'select',
                  label: 'Both pupils',
                  tableCss: 'trans-table-cell',
                  tableColumn: '27',
                  fieldset: 'pupils',
                  fsetRow: '1',
                  fsetCol: '3',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.pupils',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: 'Equal'
                    },
                    {
                      text: 'Unequal'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '3'
                }
              ],
              containerType: 'fieldRowSet',
              containerKey: 'pupils',
              tableKey: 'table',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'leftPupilSize',
                        fqn: 'neurological.table.pupils.leftPupilSize',
                        inputType: 'select',
                        label: 'Left pupil size',
                        tableCss: 'trans-table-cell',
                        tableColumn: '23',
                        fieldset: 'pupils',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '1'
                          },
                          {
                            text: '2'
                          },
                          {
                            text: '3'
                          },
                          {
                            text: '4'
                          },
                          {
                            text: '5'
                          },
                          {
                            text: '6'
                          },
                          {
                            text: '7'
                          },
                          {
                            text: '8'
                          },
                          {
                            text: '9'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rightPupilSize',
                        fqn: 'neurological.table.pupils.rightPupilSize',
                        inputType: 'select',
                        label: 'Right pupil size',
                        tableCss: 'trans-table-cell',
                        tableColumn: '25',
                        fieldset: 'pupils',
                        fsetRow: '1',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '1'
                          },
                          {
                            text: '2'
                          },
                          {
                            text: '3'
                          },
                          {
                            text: '4'
                          },
                          {
                            text: '5'
                          },
                          {
                            text: '6'
                          },
                          {
                            text: '7'
                          },
                          {
                            text: '8'
                          },
                          {
                            text: '9'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'bothPupils',
                        fqn: 'neurological.table.pupils.bothPupils',
                        inputType: 'select',
                        label: 'Both pupils',
                        tableCss: 'trans-table-cell',
                        tableColumn: '27',
                        fieldset: 'pupils',
                        fsetRow: '1',
                        fsetCol: '3',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Equal'
                          },
                          {
                            text: 'Unequal'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '3'
                      }
                    ]
                  },
                  {
                    formRow: '2',
                    elements: [
                      {
                        elementKey: 'leftPupilResponseToLight',
                        fqn: 'neurological.table.pupils.leftPupilResponseToLight',
                        inputType: 'select',
                        label: 'Left pupil response to light',
                        tableCss: 'trans-table-cell',
                        tableColumn: '24',
                        fieldset: 'pupils',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Brisk'
                          },
                          {
                            text: 'Sluggish'
                          },
                          {
                            text: 'Fixed'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rightPupilResponseToLight',
                        fqn: 'neurological.table.pupils.rightPupilResponseToLight',
                        inputType: 'select',
                        label: 'Right pupil response to light',
                        tableCss: 'trans-table-cell',
                        tableColumn: '26',
                        fieldset: 'pupils',
                        fsetRow: '2',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Brisk'
                          },
                          {
                            text: 'Sluggish'
                          },
                          {
                            text: 'Fixed'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  }
                ],
                columnsCount: 3
              }
            },
            {
              elementKey: 'leftPupilSize',
              fqn: 'neurological.table.pupils.leftPupilSize',
              inputType: 'select',
              label: 'Left pupil size',
              tableCss: 'trans-table-cell',
              tableColumn: '23',
              fieldset: 'pupils',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.pupils',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '1'
                },
                {
                  text: '2'
                },
                {
                  text: '3'
                },
                {
                  text: '4'
                },
                {
                  text: '5'
                },
                {
                  text: '6'
                },
                {
                  text: '7'
                },
                {
                  text: '8'
                },
                {
                  text: '9'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'leftPupilResponseToLight',
              fqn: 'neurological.table.pupils.leftPupilResponseToLight',
              inputType: 'select',
              label: 'Left pupil response to light',
              tableCss: 'trans-table-cell',
              tableColumn: '24',
              fieldset: 'pupils',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.pupils',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Brisk'
                },
                {
                  text: 'Sluggish'
                },
                {
                  text: 'Fixed'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'rightPupilSize',
              fqn: 'neurological.table.pupils.rightPupilSize',
              inputType: 'select',
              label: 'Right pupil size',
              tableCss: 'trans-table-cell',
              tableColumn: '25',
              fieldset: 'pupils',
              fsetRow: '1',
              fsetCol: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.pupils',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '1'
                },
                {
                  text: '2'
                },
                {
                  text: '3'
                },
                {
                  text: '4'
                },
                {
                  text: '5'
                },
                {
                  text: '6'
                },
                {
                  text: '7'
                },
                {
                  text: '8'
                },
                {
                  text: '9'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'rightPupilResponseToLight',
              fqn: 'neurological.table.pupils.rightPupilResponseToLight',
              inputType: 'select',
              label: 'Right pupil response to light',
              tableCss: 'trans-table-cell',
              tableColumn: '26',
              fieldset: 'pupils',
              fsetRow: '2',
              fsetCol: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.pupils',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Brisk'
                },
                {
                  text: 'Sluggish'
                },
                {
                  text: 'Fixed'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'bothPupils',
              fqn: 'neurological.table.pupils.bothPupils',
              inputType: 'select',
              label: 'Both pupils',
              tableCss: 'trans-table-cell',
              tableColumn: '27',
              fieldset: 'pupils',
              fsetRow: '1',
              fsetCol: '3',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.pupils',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Equal'
                },
                {
                  text: 'Unequal'
                }
              ],
              tableKey: 'table',
              formColumn: '3'
            },
            {
              elementKey: 'stroke',
              fqn: 'neurological.table.stroke',
              inputType: 'fieldRowSet',
              label: 'Stroke Assessment',
              tableCss: 'trans-table-cell hide-table-element',
              tableColumn: '28',
              fieldset: 'stroke',
              formCss: 'fieldset_row',
              formColumn: '1',
              formRow: '4',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              elements: [
                {
                  elementKey: 'levelOfConciousness',
                  fqn: 'neurological.table.stroke.levelOfConciousness',
                  inputType: 'select',
                  label: 'Level of conciousness',
                  tableCss: 'trans-table-cell',
                  tableColumn: '29',
                  fieldset: 'stroke',
                  fsetRow: '1',
                  fsetCol: '1',
                  formCss: 'is-half',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = Alert; keenly responsive'
                    },
                    {
                      text: '1 = Not alert; but arousable by minor stimulation'
                    },
                    {
                      text: '2 = Not alert; requires repeated stimulation'
                    },
                    {
                      text: '3 = Unresponsive or responds only with reflex'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'bestGaze',
                  fqn: 'neurological.table.stroke.bestGaze',
                  inputType: 'select',
                  label: 'Best gaze',
                  tableCss: 'trans-table-cell',
                  tableColumn: '30',
                  fieldset: 'stroke',
                  fsetRow: '1',
                  fsetCol: '2',
                  formCss: 'is-half',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = Normal'
                    },
                    {
                      text: '1 = Partial gaze palsy'
                    },
                    {
                      text: '2 = Forced deviation'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  elementKey: 'levelOfConciousnessQuestions',
                  fqn: 'neurological.table.stroke.levelOfConciousnessQuestions',
                  inputType: 'select',
                  label: 'Level of conciousness questions',
                  tableCss: 'trans-table-cell',
                  tableColumn: '31',
                  fieldset: 'stroke',
                  fsetRow: '2',
                  fsetCol: '1',
                  formCss: 'is-half',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = answers two questions correctly'
                    },
                    {
                      text: '1 = Answers one question correctly'
                    },
                    {
                      text: '2 = Answers neither question correctly'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'visual',
                  fqn: 'neurological.table.stroke.visual',
                  inputType: 'select',
                  label: 'Visual',
                  tableCss: 'trans-table-cell',
                  tableColumn: '32',
                  fieldset: 'stroke',
                  fsetRow: '2',
                  fsetCol: '2',
                  formCss: 'is-half',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = No visual loss'
                    },
                    {
                      text: '1 = Partial hemianopia'
                    },
                    {
                      text: '2 = Partial paralysis'
                    },
                    {
                      text: '3 = Complete paralysis of one or both sides'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  elementKey: 'levelOfConciousnessCommands',
                  fqn: 'neurological.table.stroke.levelOfConciousnessCommands',
                  inputType: 'select',
                  label: 'Level of conciousness commands',
                  tableCss: 'trans-table-cell',
                  tableColumn: '33',
                  fieldset: 'stroke',
                  fsetRow: '3',
                  fsetCol: '1',
                  formCss: 'is-half',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = Performs both tasks correctly'
                    },
                    {
                      text: '1 = Performs one task correctly'
                    },
                    {
                      text: '2 = Performs neither task correctly'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'facialPalsy',
                  fqn: 'neurological.table.stroke.facialPalsy',
                  inputType: 'select',
                  label: 'Facial palsy',
                  tableCss: 'trans-table-cell',
                  tableColumn: '34',
                  fieldset: 'stroke',
                  fsetRow: '3',
                  fsetCol: '2',
                  formCss: 'is-half',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = Normal symmetric movements'
                    },
                    {
                      text: '1 = Minor paralysis'
                    },
                    {
                      text: '2 = Partial paralysis'
                    },
                    {
                      text: '3 = Complete paralysis of one or both sides'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  elementKey: 'motorLeftArm',
                  fqn: 'neurological.table.stroke.motorLeftArm',
                  inputType: 'select',
                  label: 'Motor - left arm',
                  tableCss: 'trans-table-cell',
                  tableColumn: '35',
                  fieldset: 'stroke',
                  fsetRow: '4',
                  fsetCol: '1',
                  formCss: 'is-half',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = No drift'
                    },
                    {
                      text: '1 = Drift'
                    },
                    {
                      text: '2 = Some effort against gravity'
                    },
                    {
                      text: '3 = No effort against gravity; limb falls'
                    },
                    {
                      text: '4 = No movement'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'sensory',
                  fqn: 'neurological.table.stroke.sensory',
                  inputType: 'select',
                  label: 'Sensory',
                  tableCss: 'trans-table-cell',
                  tableColumn: '36',
                  fieldset: 'stroke',
                  fsetRow: '4',
                  fsetCol: '2',
                  formCss: 'is-half',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = Normal; no sensory loss'
                    },
                    {
                      text: '1 = Mild-to-moderate sensory loss'
                    },
                    {
                      text: '2 = Severe to total sensory loss'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  elementKey: 'motorRightArm',
                  fqn: 'neurological.table.stroke.motorRightArm',
                  inputType: 'select',
                  label: 'Motor - right arm',
                  tableCss: 'trans-table-cell',
                  tableColumn: '37',
                  fieldset: 'stroke',
                  fsetRow: '5',
                  fsetCol: '1',
                  formCss: 'is-half',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = No drift'
                    },
                    {
                      text: '1 = Drift'
                    },
                    {
                      text: '2 = Some effort against gravity'
                    },
                    {
                      text: '3 = No effort against gravity; limb falls'
                    },
                    {
                      text: '4 = No movement'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'bestLanguage',
                  fqn: 'neurological.table.stroke.bestLanguage',
                  inputType: 'select',
                  label: 'Best language',
                  tableCss: 'trans-table-cell',
                  tableColumn: '38',
                  fieldset: 'stroke',
                  fsetRow: '5',
                  fsetCol: '2',
                  formCss: 'is-half',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = No aphasia; normal'
                    },
                    {
                      text: '1 = Mild to moderate aphasia'
                    },
                    {
                      text: '2 = Severe aphasia'
                    },
                    {
                      text: '3 = Mute, global aphasia'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  elementKey: 'motorLeftLeg',
                  fqn: 'neurological.table.stroke.motorLeftLeg',
                  inputType: 'select',
                  label: 'Motor - left leg',
                  tableCss: 'trans-table-cell',
                  tableColumn: '39',
                  fieldset: 'stroke',
                  fsetRow: '6',
                  fsetCol: '1',
                  formCss: 'is-half',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = No drift'
                    },
                    {
                      text: '1 = Drift'
                    },
                    {
                      text: '2 = Some effort against gravity'
                    },
                    {
                      text: '3 = No effort against gravity'
                    },
                    {
                      text: '4 = No movement'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'dysarthria',
                  fqn: 'neurological.table.stroke.dysarthria',
                  inputType: 'select',
                  label: 'Dysarthria',
                  tableCss: 'trans-table-cell',
                  tableColumn: '40',
                  fieldset: 'stroke',
                  fsetRow: '6',
                  fsetCol: '2',
                  formCss: 'is-half',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = Normal'
                    },
                    {
                      text: '1 = Mild to moderate aphasia'
                    },
                    {
                      text: '2 = Severe aphasia'
                    },
                    {
                      text: '3 = Mute, global aphasia'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  elementKey: 'motorRightLeg',
                  fqn: 'neurological.table.stroke.motorRightLeg',
                  inputType: 'select',
                  label: 'Motor - right leg',
                  tableCss: 'trans-table-cell',
                  tableColumn: '41',
                  fieldset: 'stroke',
                  fsetRow: '7',
                  fsetCol: '1',
                  formCss: 'is-half',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = No drift'
                    },
                    {
                      text: '1 = Drift'
                    },
                    {
                      text: '2 = Some effort against gravity'
                    },
                    {
                      text: '3 = No effort against gravity'
                    },
                    {
                      text: '4 = No movement'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'extinctionAndInattention',
                  fqn: 'neurological.table.stroke.extinctionAndInattention',
                  inputType: 'select',
                  label: 'Extinction and inattention',
                  tableCss: 'trans-table-cell',
                  tableColumn: '42',
                  fieldset: 'stroke',
                  fsetRow: '7',
                  fsetCol: '2',
                  formCss: 'is-half',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = No abnormality'
                    },
                    {
                      text: '1 = visual, tactile, auditory, spatial, or personal inattention'
                    },
                    {
                      text: '2 = Profound hemi-inattention or extinction'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  elementKey: 'limbAtaxia',
                  fqn: 'neurological.table.stroke.limbAtaxia',
                  inputType: 'select',
                  label: 'Limb ataxia',
                  tableCss: 'trans-table-cell',
                  tableColumn: '43',
                  fieldset: 'stroke',
                  fsetRow: '8',
                  fsetCol: '1',
                  formCss: 'is-half',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.stroke',
                  page: 'Assessments: Neurological',
                  options: [
                    {
                      text: '0 = Absent'
                    },
                    {
                      text: '1 = Present in one limb'
                    },
                    {
                      text: '2 = Present in two limbs'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'comments',
                  fqn: 'neurological.table.stroke.comments',
                  inputType: 'textarea',
                  label: 'Comments',
                  tableCss: 'trans-table-cell',
                  tableColumn: '44',
                  fieldset: 'stroke',
                  fsetRow: '9',
                  fsetCol: '1',
                  formCss: 'is-two-thirds',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.stroke',
                  page: 'Assessments: Neurological',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'resources',
                  inputType: 'form-label',
                  label:
                    "<b>Resources</b><p>Morse Fall Score <a target='_blank' href='https://google.ca'>external link</a></p><p>Mini-mental state examination (MMSE) <a target='_blank' href='https://google.ca'>external link</a></p>",
                  tableCss: 'trans-table-cell hide-table-element',
                  tableColumn: '45',
                  fieldset: 'stroke',
                  fsetRow: '9',
                  fsetCol: '2',
                  formCss: 'is-one-third',
                  formOption: 'withExternalUrls',
                  pageDataKey: 'neurological',
                  dataParent: 'neurological.table.stroke',
                  page: 'Assessments: Neurological',
                  tableKey: 'table',
                  formColumn: '2'
                }
              ],
              containerType: 'fieldRowSet',
              containerKey: 'stroke',
              tableKey: 'table',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'levelOfConciousness',
                        fqn: 'neurological.table.stroke.levelOfConciousness',
                        inputType: 'select',
                        label: 'Level of conciousness',
                        tableCss: 'trans-table-cell',
                        tableColumn: '29',
                        fieldset: 'stroke',
                        fsetRow: '1',
                        fsetCol: '1',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Alert; keenly responsive'
                          },
                          {
                            text: '1 = Not alert; but arousable by minor stimulation'
                          },
                          {
                            text: '2 = Not alert; requires repeated stimulation'
                          },
                          {
                            text: '3 = Unresponsive or responds only with reflex'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'bestGaze',
                        fqn: 'neurological.table.stroke.bestGaze',
                        inputType: 'select',
                        label: 'Best gaze',
                        tableCss: 'trans-table-cell',
                        tableColumn: '30',
                        fieldset: 'stroke',
                        fsetRow: '1',
                        fsetCol: '2',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Normal'
                          },
                          {
                            text: '1 = Partial gaze palsy'
                          },
                          {
                            text: '2 = Forced deviation'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '2',
                    elements: [
                      {
                        elementKey: 'levelOfConciousnessQuestions',
                        fqn: 'neurological.table.stroke.levelOfConciousnessQuestions',
                        inputType: 'select',
                        label: 'Level of conciousness questions',
                        tableCss: 'trans-table-cell',
                        tableColumn: '31',
                        fieldset: 'stroke',
                        fsetRow: '2',
                        fsetCol: '1',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = answers two questions correctly'
                          },
                          {
                            text: '1 = Answers one question correctly'
                          },
                          {
                            text: '2 = Answers neither question correctly'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'visual',
                        fqn: 'neurological.table.stroke.visual',
                        inputType: 'select',
                        label: 'Visual',
                        tableCss: 'trans-table-cell',
                        tableColumn: '32',
                        fieldset: 'stroke',
                        fsetRow: '2',
                        fsetCol: '2',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No visual loss'
                          },
                          {
                            text: '1 = Partial hemianopia'
                          },
                          {
                            text: '2 = Partial paralysis'
                          },
                          {
                            text: '3 = Complete paralysis of one or both sides'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '3',
                    elements: [
                      {
                        elementKey: 'levelOfConciousnessCommands',
                        fqn: 'neurological.table.stroke.levelOfConciousnessCommands',
                        inputType: 'select',
                        label: 'Level of conciousness commands',
                        tableCss: 'trans-table-cell',
                        tableColumn: '33',
                        fieldset: 'stroke',
                        fsetRow: '3',
                        fsetCol: '1',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Performs both tasks correctly'
                          },
                          {
                            text: '1 = Performs one task correctly'
                          },
                          {
                            text: '2 = Performs neither task correctly'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'facialPalsy',
                        fqn: 'neurological.table.stroke.facialPalsy',
                        inputType: 'select',
                        label: 'Facial palsy',
                        tableCss: 'trans-table-cell',
                        tableColumn: '34',
                        fieldset: 'stroke',
                        fsetRow: '3',
                        fsetCol: '2',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Normal symmetric movements'
                          },
                          {
                            text: '1 = Minor paralysis'
                          },
                          {
                            text: '2 = Partial paralysis'
                          },
                          {
                            text: '3 = Complete paralysis of one or both sides'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '4',
                    elements: [
                      {
                        elementKey: 'motorLeftArm',
                        fqn: 'neurological.table.stroke.motorLeftArm',
                        inputType: 'select',
                        label: 'Motor - left arm',
                        tableCss: 'trans-table-cell',
                        tableColumn: '35',
                        fieldset: 'stroke',
                        fsetRow: '4',
                        fsetCol: '1',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No drift'
                          },
                          {
                            text: '1 = Drift'
                          },
                          {
                            text: '2 = Some effort against gravity'
                          },
                          {
                            text: '3 = No effort against gravity; limb falls'
                          },
                          {
                            text: '4 = No movement'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'sensory',
                        fqn: 'neurological.table.stroke.sensory',
                        inputType: 'select',
                        label: 'Sensory',
                        tableCss: 'trans-table-cell',
                        tableColumn: '36',
                        fieldset: 'stroke',
                        fsetRow: '4',
                        fsetCol: '2',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Normal; no sensory loss'
                          },
                          {
                            text: '1 = Mild-to-moderate sensory loss'
                          },
                          {
                            text: '2 = Severe to total sensory loss'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '5',
                    elements: [
                      {
                        elementKey: 'motorRightArm',
                        fqn: 'neurological.table.stroke.motorRightArm',
                        inputType: 'select',
                        label: 'Motor - right arm',
                        tableCss: 'trans-table-cell',
                        tableColumn: '37',
                        fieldset: 'stroke',
                        fsetRow: '5',
                        fsetCol: '1',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No drift'
                          },
                          {
                            text: '1 = Drift'
                          },
                          {
                            text: '2 = Some effort against gravity'
                          },
                          {
                            text: '3 = No effort against gravity; limb falls'
                          },
                          {
                            text: '4 = No movement'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'bestLanguage',
                        fqn: 'neurological.table.stroke.bestLanguage',
                        inputType: 'select',
                        label: 'Best language',
                        tableCss: 'trans-table-cell',
                        tableColumn: '38',
                        fieldset: 'stroke',
                        fsetRow: '5',
                        fsetCol: '2',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No aphasia; normal'
                          },
                          {
                            text: '1 = Mild to moderate aphasia'
                          },
                          {
                            text: '2 = Severe aphasia'
                          },
                          {
                            text: '3 = Mute, global aphasia'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '6',
                    elements: [
                      {
                        elementKey: 'motorLeftLeg',
                        fqn: 'neurological.table.stroke.motorLeftLeg',
                        inputType: 'select',
                        label: 'Motor - left leg',
                        tableCss: 'trans-table-cell',
                        tableColumn: '39',
                        fieldset: 'stroke',
                        fsetRow: '6',
                        fsetCol: '1',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No drift'
                          },
                          {
                            text: '1 = Drift'
                          },
                          {
                            text: '2 = Some effort against gravity'
                          },
                          {
                            text: '3 = No effort against gravity'
                          },
                          {
                            text: '4 = No movement'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'dysarthria',
                        fqn: 'neurological.table.stroke.dysarthria',
                        inputType: 'select',
                        label: 'Dysarthria',
                        tableCss: 'trans-table-cell',
                        tableColumn: '40',
                        fieldset: 'stroke',
                        fsetRow: '6',
                        fsetCol: '2',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Normal'
                          },
                          {
                            text: '1 = Mild to moderate aphasia'
                          },
                          {
                            text: '2 = Severe aphasia'
                          },
                          {
                            text: '3 = Mute, global aphasia'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '7',
                    elements: [
                      {
                        elementKey: 'motorRightLeg',
                        fqn: 'neurological.table.stroke.motorRightLeg',
                        inputType: 'select',
                        label: 'Motor - right leg',
                        tableCss: 'trans-table-cell',
                        tableColumn: '41',
                        fieldset: 'stroke',
                        fsetRow: '7',
                        fsetCol: '1',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No drift'
                          },
                          {
                            text: '1 = Drift'
                          },
                          {
                            text: '2 = Some effort against gravity'
                          },
                          {
                            text: '3 = No effort against gravity'
                          },
                          {
                            text: '4 = No movement'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'extinctionAndInattention',
                        fqn: 'neurological.table.stroke.extinctionAndInattention',
                        inputType: 'select',
                        label: 'Extinction and inattention',
                        tableCss: 'trans-table-cell',
                        tableColumn: '42',
                        fieldset: 'stroke',
                        fsetRow: '7',
                        fsetCol: '2',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No abnormality'
                          },
                          {
                            text: '1 = visual, tactile, auditory, spatial, or personal inattention'
                          },
                          {
                            text: '2 = Profound hemi-inattention or extinction'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '8',
                    elements: [
                      {
                        elementKey: 'limbAtaxia',
                        fqn: 'neurological.table.stroke.limbAtaxia',
                        inputType: 'select',
                        label: 'Limb ataxia',
                        tableCss: 'trans-table-cell',
                        tableColumn: '43',
                        fieldset: 'stroke',
                        fsetRow: '8',
                        fsetCol: '1',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Absent'
                          },
                          {
                            text: '1 = Present in one limb'
                          },
                          {
                            text: '2 = Present in two limbs'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '9',
                    elements: [
                      {
                        elementKey: 'comments',
                        fqn: 'neurological.table.stroke.comments',
                        inputType: 'textarea',
                        label: 'Comments',
                        tableCss: 'trans-table-cell',
                        tableColumn: '44',
                        fieldset: 'stroke',
                        fsetRow: '9',
                        fsetCol: '1',
                        formCss: 'is-two-thirds',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'resources',
                        inputType: 'form-label',
                        label:
                          "<b>Resources</b><p>Morse Fall Score <a target='_blank' href='https://google.ca'>external link</a></p><p>Mini-mental state examination (MMSE) <a target='_blank' href='https://google.ca'>external link</a></p>",
                        tableCss: 'trans-table-cell hide-table-element',
                        tableColumn: '45',
                        fieldset: 'stroke',
                        fsetRow: '9',
                        fsetCol: '2',
                        formCss: 'is-one-third',
                        formOption: 'withExternalUrls',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  }
                ],
                columnsCount: 2
              }
            },
            {
              elementKey: 'levelOfConciousness',
              fqn: 'neurological.table.stroke.levelOfConciousness',
              inputType: 'select',
              label: 'Level of conciousness',
              tableCss: 'trans-table-cell',
              tableColumn: '29',
              fieldset: 'stroke',
              fsetRow: '1',
              fsetCol: '1',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Alert; keenly responsive'
                },
                {
                  text: '1 = Not alert; but arousable by minor stimulation'
                },
                {
                  text: '2 = Not alert; requires repeated stimulation'
                },
                {
                  text: '3 = Unresponsive or responds only with reflex'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'bestGaze',
              fqn: 'neurological.table.stroke.bestGaze',
              inputType: 'select',
              label: 'Best gaze',
              tableCss: 'trans-table-cell',
              tableColumn: '30',
              fieldset: 'stroke',
              fsetRow: '1',
              fsetCol: '2',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Normal'
                },
                {
                  text: '1 = Partial gaze palsy'
                },
                {
                  text: '2 = Forced deviation'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'levelOfConciousnessQuestions',
              fqn: 'neurological.table.stroke.levelOfConciousnessQuestions',
              inputType: 'select',
              label: 'Level of conciousness questions',
              tableCss: 'trans-table-cell',
              tableColumn: '31',
              fieldset: 'stroke',
              fsetRow: '2',
              fsetCol: '1',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = answers two questions correctly'
                },
                {
                  text: '1 = Answers one question correctly'
                },
                {
                  text: '2 = Answers neither question correctly'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'visual',
              fqn: 'neurological.table.stroke.visual',
              inputType: 'select',
              label: 'Visual',
              tableCss: 'trans-table-cell',
              tableColumn: '32',
              fieldset: 'stroke',
              fsetRow: '2',
              fsetCol: '2',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No visual loss'
                },
                {
                  text: '1 = Partial hemianopia'
                },
                {
                  text: '2 = Partial paralysis'
                },
                {
                  text: '3 = Complete paralysis of one or both sides'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'levelOfConciousnessCommands',
              fqn: 'neurological.table.stroke.levelOfConciousnessCommands',
              inputType: 'select',
              label: 'Level of conciousness commands',
              tableCss: 'trans-table-cell',
              tableColumn: '33',
              fieldset: 'stroke',
              fsetRow: '3',
              fsetCol: '1',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Performs both tasks correctly'
                },
                {
                  text: '1 = Performs one task correctly'
                },
                {
                  text: '2 = Performs neither task correctly'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'facialPalsy',
              fqn: 'neurological.table.stroke.facialPalsy',
              inputType: 'select',
              label: 'Facial palsy',
              tableCss: 'trans-table-cell',
              tableColumn: '34',
              fieldset: 'stroke',
              fsetRow: '3',
              fsetCol: '2',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Normal symmetric movements'
                },
                {
                  text: '1 = Minor paralysis'
                },
                {
                  text: '2 = Partial paralysis'
                },
                {
                  text: '3 = Complete paralysis of one or both sides'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'motorLeftArm',
              fqn: 'neurological.table.stroke.motorLeftArm',
              inputType: 'select',
              label: 'Motor - left arm',
              tableCss: 'trans-table-cell',
              tableColumn: '35',
              fieldset: 'stroke',
              fsetRow: '4',
              fsetCol: '1',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No drift'
                },
                {
                  text: '1 = Drift'
                },
                {
                  text: '2 = Some effort against gravity'
                },
                {
                  text: '3 = No effort against gravity; limb falls'
                },
                {
                  text: '4 = No movement'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'sensory',
              fqn: 'neurological.table.stroke.sensory',
              inputType: 'select',
              label: 'Sensory',
              tableCss: 'trans-table-cell',
              tableColumn: '36',
              fieldset: 'stroke',
              fsetRow: '4',
              fsetCol: '2',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Normal; no sensory loss'
                },
                {
                  text: '1 = Mild-to-moderate sensory loss'
                },
                {
                  text: '2 = Severe to total sensory loss'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'motorRightArm',
              fqn: 'neurological.table.stroke.motorRightArm',
              inputType: 'select',
              label: 'Motor - right arm',
              tableCss: 'trans-table-cell',
              tableColumn: '37',
              fieldset: 'stroke',
              fsetRow: '5',
              fsetCol: '1',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No drift'
                },
                {
                  text: '1 = Drift'
                },
                {
                  text: '2 = Some effort against gravity'
                },
                {
                  text: '3 = No effort against gravity; limb falls'
                },
                {
                  text: '4 = No movement'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'bestLanguage',
              fqn: 'neurological.table.stroke.bestLanguage',
              inputType: 'select',
              label: 'Best language',
              tableCss: 'trans-table-cell',
              tableColumn: '38',
              fieldset: 'stroke',
              fsetRow: '5',
              fsetCol: '2',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No aphasia; normal'
                },
                {
                  text: '1 = Mild to moderate aphasia'
                },
                {
                  text: '2 = Severe aphasia'
                },
                {
                  text: '3 = Mute, global aphasia'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'motorLeftLeg',
              fqn: 'neurological.table.stroke.motorLeftLeg',
              inputType: 'select',
              label: 'Motor - left leg',
              tableCss: 'trans-table-cell',
              tableColumn: '39',
              fieldset: 'stroke',
              fsetRow: '6',
              fsetCol: '1',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No drift'
                },
                {
                  text: '1 = Drift'
                },
                {
                  text: '2 = Some effort against gravity'
                },
                {
                  text: '3 = No effort against gravity'
                },
                {
                  text: '4 = No movement'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'dysarthria',
              fqn: 'neurological.table.stroke.dysarthria',
              inputType: 'select',
              label: 'Dysarthria',
              tableCss: 'trans-table-cell',
              tableColumn: '40',
              fieldset: 'stroke',
              fsetRow: '6',
              fsetCol: '2',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Normal'
                },
                {
                  text: '1 = Mild to moderate aphasia'
                },
                {
                  text: '2 = Severe aphasia'
                },
                {
                  text: '3 = Mute, global aphasia'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'motorRightLeg',
              fqn: 'neurological.table.stroke.motorRightLeg',
              inputType: 'select',
              label: 'Motor - right leg',
              tableCss: 'trans-table-cell',
              tableColumn: '41',
              fieldset: 'stroke',
              fsetRow: '7',
              fsetCol: '1',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No drift'
                },
                {
                  text: '1 = Drift'
                },
                {
                  text: '2 = Some effort against gravity'
                },
                {
                  text: '3 = No effort against gravity'
                },
                {
                  text: '4 = No movement'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'extinctionAndInattention',
              fqn: 'neurological.table.stroke.extinctionAndInattention',
              inputType: 'select',
              label: 'Extinction and inattention',
              tableCss: 'trans-table-cell',
              tableColumn: '42',
              fieldset: 'stroke',
              fsetRow: '7',
              fsetCol: '2',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No abnormality'
                },
                {
                  text: '1 = visual, tactile, auditory, spatial, or personal inattention'
                },
                {
                  text: '2 = Profound hemi-inattention or extinction'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'limbAtaxia',
              fqn: 'neurological.table.stroke.limbAtaxia',
              inputType: 'select',
              label: 'Limb ataxia',
              tableCss: 'trans-table-cell',
              tableColumn: '43',
              fieldset: 'stroke',
              fsetRow: '8',
              fsetCol: '1',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Absent'
                },
                {
                  text: '1 = Present in one limb'
                },
                {
                  text: '2 = Present in two limbs'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'comments',
              fqn: 'neurological.table.stroke.comments',
              inputType: 'textarea',
              label: 'Comments',
              tableCss: 'trans-table-cell',
              tableColumn: '44',
              fieldset: 'stroke',
              fsetRow: '9',
              fsetCol: '1',
              formCss: 'is-two-thirds',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'resources',
              inputType: 'form-label',
              label:
                "<b>Resources</b><p>Morse Fall Score <a target='_blank' href='https://google.ca'>external link</a></p><p>Mini-mental state examination (MMSE) <a target='_blank' href='https://google.ca'>external link</a></p>",
              tableCss: 'trans-table-cell hide-table-element',
              tableColumn: '45',
              fieldset: 'stroke',
              fsetRow: '9',
              fsetCol: '2',
              formCss: 'is-one-third',
              formOption: 'withExternalUrls',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '2'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'neurological.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableCss: 'trans-table-cell',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'neurological.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableCss: 'trans-table-cell',
                    tableColumn: '2',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'unit',
                    fqn: 'neurological.table.unit',
                    inputType: 'text',
                    label: 'Unit',
                    tableCss: 'trans-table-cell',
                    tableColumn: '3',
                    formCss: 'user_unit',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'neurological.table.day',
                    inputType: 'day',
                    label: 'Day',
                    tableCss: 'trans-table-cell',
                    tableColumn: '4',
                    formCss: 'user_day',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'neurological.table.time',
                    inputType: 'time',
                    label: 'Time',
                    tableCss: 'trans-table-cell',
                    tableColumn: '5',
                    formCss: 'user_time',
                    formColumn: '5',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'status',
                    fqn: 'neurological.table.status',
                    inputType: 'fieldset',
                    label: 'Status',
                    tableCss: 'trans-table-cell hide-table-element',
                    tableColumn: '6',
                    fieldset: 'status',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    elements: [
                      {
                        elementKey: 'alert',
                        fqn: 'neurological.table.status.alert',
                        inputType: 'checkbox',
                        label: 'Alert',
                        tableCss: 'trans-table-cell',
                        tableColumn: '7',
                        fieldset: 'status',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'oriented',
                        fqn: 'neurological.table.status.oriented',
                        inputType: 'checkbox',
                        label: 'Oriented',
                        tableCss: 'trans-table-cell',
                        tableColumn: '8',
                        fieldset: 'status',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'confused',
                        fqn: 'neurological.table.status.confused',
                        inputType: 'checkbox',
                        label: 'Confused',
                        tableCss: 'trans-table-cell',
                        tableColumn: '9',
                        fieldset: 'status',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'drowsy',
                        fqn: 'neurological.table.status.drowsy',
                        inputType: 'checkbox',
                        label: 'Drowsy',
                        tableCss: 'trans-table-cell',
                        tableColumn: '10',
                        fieldset: 'status',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'unresponsive',
                        fqn: 'neurological.table.status.unresponsive',
                        inputType: 'checkbox',
                        label: 'Unresponsive',
                        tableCss: 'trans-table-cell',
                        tableColumn: '11',
                        fieldset: 'status',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'dizziness',
                        fqn: 'neurological.table.status.dizziness',
                        inputType: 'checkbox',
                        label: 'Dizziness',
                        tableCss: 'trans-table-cell',
                        tableColumn: '12',
                        fieldset: 'status',
                        fsetRow: '6',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'blurredVision',
                        fqn: 'neurological.table.status.blurredVision',
                        inputType: 'checkbox',
                        label: 'Blurred vision',
                        tableCss: 'trans-table-cell',
                        tableColumn: '13',
                        fieldset: 'status',
                        fsetRow: '7',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.status',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ],
                    containerType: 'fieldset',
                    containerKey: 'status',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'alert',
                              fqn: 'neurological.table.status.alert',
                              inputType: 'checkbox',
                              label: 'Alert',
                              tableCss: 'trans-table-cell',
                              tableColumn: '7',
                              fieldset: 'status',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'oriented',
                              fqn: 'neurological.table.status.oriented',
                              inputType: 'checkbox',
                              label: 'Oriented',
                              tableCss: 'trans-table-cell',
                              tableColumn: '8',
                              fieldset: 'status',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'confused',
                              fqn: 'neurological.table.status.confused',
                              inputType: 'checkbox',
                              label: 'Confused',
                              tableCss: 'trans-table-cell',
                              tableColumn: '9',
                              fieldset: 'status',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'drowsy',
                              fqn: 'neurological.table.status.drowsy',
                              inputType: 'checkbox',
                              label: 'Drowsy',
                              tableCss: 'trans-table-cell',
                              tableColumn: '10',
                              fieldset: 'status',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'unresponsive',
                              fqn: 'neurological.table.status.unresponsive',
                              inputType: 'checkbox',
                              label: 'Unresponsive',
                              tableCss: 'trans-table-cell',
                              tableColumn: '11',
                              fieldset: 'status',
                              fsetRow: '5',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'dizziness',
                              fqn: 'neurological.table.status.dizziness',
                              inputType: 'checkbox',
                              label: 'Dizziness',
                              tableCss: 'trans-table-cell',
                              tableColumn: '12',
                              fieldset: 'status',
                              fsetRow: '6',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '7',
                          elements: [
                            {
                              elementKey: 'blurredVision',
                              fqn: 'neurological.table.status.blurredVision',
                              inputType: 'checkbox',
                              label: 'Blurred vision',
                              tableCss: 'trans-table-cell',
                              tableColumn: '13',
                              fieldset: 'status',
                              fsetRow: '7',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'concious',
                    fqn: 'neurological.table.concious',
                    inputType: 'fieldset',
                    label: 'Loss of conciousness',
                    tableCss: 'trans-table-cell hide-table-element',
                    tableColumn: '14',
                    fieldset: 'concious',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    elements: [
                      {
                        elementKey: 'loss',
                        fqn: 'neurological.table.concious.loss',
                        inputType: 'select',
                        tableCss: 'trans-table-cell',
                        tableColumn: '15',
                        fieldset: 'concious',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.concious',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'No'
                          },
                          {
                            text: 'Yes'
                          },
                          {
                            text: 'Unknown'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'duration',
                        fqn: 'neurological.table.concious.duration',
                        inputType: 'text',
                        label: 'Duration',
                        tableCss: 'trans-table-cell',
                        tableColumn: '16',
                        fieldset: 'concious',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.concious',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ],
                    containerType: 'fieldset',
                    containerKey: 'concious',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'loss',
                              fqn: 'neurological.table.concious.loss',
                              inputType: 'select',
                              tableCss: 'trans-table-cell',
                              tableColumn: '15',
                              fieldset: 'concious',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.concious',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'No'
                                },
                                {
                                  text: 'Yes'
                                },
                                {
                                  text: 'Unknown'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'duration',
                              fqn: 'neurological.table.concious.duration',
                              inputType: 'text',
                              label: 'Duration',
                              tableCss: 'trans-table-cell',
                              tableColumn: '16',
                              fieldset: 'concious',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.concious',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'glasgowComaScale',
                    fqn: 'neurological.table.glasgowComaScale',
                    inputType: 'fieldset',
                    label: 'Glasgow Coma Scale',
                    tableCss: 'trans-table-cell hide-table-element',
                    tableColumn: '17',
                    fieldset: 'glasgowComaScale',
                    formColumn: '3',
                    formRow: '2',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    elements: [
                      {
                        elementKey: 'eyeOpening',
                        fqn: 'neurological.table.glasgowComaScale.eyeOpening',
                        inputType: 'select',
                        label: 'Eye opening',
                        tableCss: 'trans-table-cell',
                        tableColumn: '18',
                        fieldset: 'glasgowComaScale',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.glasgowComaScale',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Spontaneous'
                          },
                          {
                            text: 'To sound'
                          },
                          {
                            text: 'To pressure'
                          },
                          {
                            text: 'None'
                          },
                          {
                            text: 'Non testable'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'verbalResponse',
                        fqn: 'neurological.table.glasgowComaScale.verbalResponse',
                        inputType: 'select',
                        label: 'Verbal response',
                        tableCss: 'trans-table-cell',
                        tableColumn: '19',
                        fieldset: 'glasgowComaScale',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.glasgowComaScale',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Oriented'
                          },
                          {
                            text: 'Confused'
                          },
                          {
                            text: 'Words'
                          },
                          {
                            text: 'Sounds'
                          },
                          {
                            text: 'None'
                          },
                          {
                            text: 'Non testable'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'bestMotorResponse',
                        fqn: 'neurological.table.glasgowComaScale.bestMotorResponse',
                        inputType: 'select',
                        label: 'Best motor response',
                        tableCss: 'trans-table-cell',
                        tableColumn: '20',
                        fieldset: 'glasgowComaScale',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.glasgowComaScale',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Obeys commands'
                          },
                          {
                            text: 'Localising'
                          },
                          {
                            text: 'Normal flexion'
                          },
                          {
                            text: 'Extension'
                          },
                          {
                            text: 'None'
                          },
                          {
                            text: 'Non testable'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'totalGlasgow',
                        fqn: 'neurological.table.glasgowComaScale.totalGlasgow',
                        inputType: 'calculated',
                        label: 'Total',
                        tableCss: 'trans-table-cell',
                        tableColumn: '21',
                        fieldset: 'glasgowComaScale',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.glasgowComaScale',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ],
                    containerType: 'fieldset',
                    containerKey: 'glasgowComaScale',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'eyeOpening',
                              fqn: 'neurological.table.glasgowComaScale.eyeOpening',
                              inputType: 'select',
                              label: 'Eye opening',
                              tableCss: 'trans-table-cell',
                              tableColumn: '18',
                              fieldset: 'glasgowComaScale',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.glasgowComaScale',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Spontaneous'
                                },
                                {
                                  text: 'To sound'
                                },
                                {
                                  text: 'To pressure'
                                },
                                {
                                  text: 'None'
                                },
                                {
                                  text: 'Non testable'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'verbalResponse',
                              fqn: 'neurological.table.glasgowComaScale.verbalResponse',
                              inputType: 'select',
                              label: 'Verbal response',
                              tableCss: 'trans-table-cell',
                              tableColumn: '19',
                              fieldset: 'glasgowComaScale',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.glasgowComaScale',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Oriented'
                                },
                                {
                                  text: 'Confused'
                                },
                                {
                                  text: 'Words'
                                },
                                {
                                  text: 'Sounds'
                                },
                                {
                                  text: 'None'
                                },
                                {
                                  text: 'Non testable'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'bestMotorResponse',
                              fqn: 'neurological.table.glasgowComaScale.bestMotorResponse',
                              inputType: 'select',
                              label: 'Best motor response',
                              tableCss: 'trans-table-cell',
                              tableColumn: '20',
                              fieldset: 'glasgowComaScale',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.glasgowComaScale',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Obeys commands'
                                },
                                {
                                  text: 'Localising'
                                },
                                {
                                  text: 'Normal flexion'
                                },
                                {
                                  text: 'Extension'
                                },
                                {
                                  text: 'None'
                                },
                                {
                                  text: 'Non testable'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'totalGlasgow',
                              fqn: 'neurological.table.glasgowComaScale.totalGlasgow',
                              inputType: 'calculated',
                              label: 'Total',
                              tableCss: 'trans-table-cell',
                              tableColumn: '21',
                              fieldset: 'glasgowComaScale',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.glasgowComaScale',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'pupils',
                    fqn: 'neurological.table.pupils',
                    inputType: 'fieldRowSet',
                    label: 'Pupils',
                    tableCss: 'trans-table-cell hide-table-element',
                    tableColumn: '22',
                    fieldset: 'pupils',
                    formCss: 'fieldset_row',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    elements: [
                      {
                        elementKey: 'leftPupilSize',
                        fqn: 'neurological.table.pupils.leftPupilSize',
                        inputType: 'select',
                        label: 'Left pupil size',
                        tableCss: 'trans-table-cell',
                        tableColumn: '23',
                        fieldset: 'pupils',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '1'
                          },
                          {
                            text: '2'
                          },
                          {
                            text: '3'
                          },
                          {
                            text: '4'
                          },
                          {
                            text: '5'
                          },
                          {
                            text: '6'
                          },
                          {
                            text: '7'
                          },
                          {
                            text: '8'
                          },
                          {
                            text: '9'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'leftPupilResponseToLight',
                        fqn: 'neurological.table.pupils.leftPupilResponseToLight',
                        inputType: 'select',
                        label: 'Left pupil response to light',
                        tableCss: 'trans-table-cell',
                        tableColumn: '24',
                        fieldset: 'pupils',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Brisk'
                          },
                          {
                            text: 'Sluggish'
                          },
                          {
                            text: 'Fixed'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rightPupilSize',
                        fqn: 'neurological.table.pupils.rightPupilSize',
                        inputType: 'select',
                        label: 'Right pupil size',
                        tableCss: 'trans-table-cell',
                        tableColumn: '25',
                        fieldset: 'pupils',
                        fsetRow: '1',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '1'
                          },
                          {
                            text: '2'
                          },
                          {
                            text: '3'
                          },
                          {
                            text: '4'
                          },
                          {
                            text: '5'
                          },
                          {
                            text: '6'
                          },
                          {
                            text: '7'
                          },
                          {
                            text: '8'
                          },
                          {
                            text: '9'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'rightPupilResponseToLight',
                        fqn: 'neurological.table.pupils.rightPupilResponseToLight',
                        inputType: 'select',
                        label: 'Right pupil response to light',
                        tableCss: 'trans-table-cell',
                        tableColumn: '26',
                        fieldset: 'pupils',
                        fsetRow: '2',
                        fsetCol: '2',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Brisk'
                          },
                          {
                            text: 'Sluggish'
                          },
                          {
                            text: 'Fixed'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'bothPupils',
                        fqn: 'neurological.table.pupils.bothPupils',
                        inputType: 'select',
                        label: 'Both pupils',
                        tableCss: 'trans-table-cell',
                        tableColumn: '27',
                        fieldset: 'pupils',
                        fsetRow: '1',
                        fsetCol: '3',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.pupils',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: 'Equal'
                          },
                          {
                            text: 'Unequal'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '3'
                      }
                    ],
                    containerType: 'fieldRowSet',
                    containerKey: 'pupils',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'leftPupilSize',
                              fqn: 'neurological.table.pupils.leftPupilSize',
                              inputType: 'select',
                              label: 'Left pupil size',
                              tableCss: 'trans-table-cell',
                              tableColumn: '23',
                              fieldset: 'pupils',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.pupils',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '1'
                                },
                                {
                                  text: '2'
                                },
                                {
                                  text: '3'
                                },
                                {
                                  text: '4'
                                },
                                {
                                  text: '5'
                                },
                                {
                                  text: '6'
                                },
                                {
                                  text: '7'
                                },
                                {
                                  text: '8'
                                },
                                {
                                  text: '9'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'rightPupilSize',
                              fqn: 'neurological.table.pupils.rightPupilSize',
                              inputType: 'select',
                              label: 'Right pupil size',
                              tableCss: 'trans-table-cell',
                              tableColumn: '25',
                              fieldset: 'pupils',
                              fsetRow: '1',
                              fsetCol: '2',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.pupils',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '1'
                                },
                                {
                                  text: '2'
                                },
                                {
                                  text: '3'
                                },
                                {
                                  text: '4'
                                },
                                {
                                  text: '5'
                                },
                                {
                                  text: '6'
                                },
                                {
                                  text: '7'
                                },
                                {
                                  text: '8'
                                },
                                {
                                  text: '9'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            },
                            {
                              elementKey: 'bothPupils',
                              fqn: 'neurological.table.pupils.bothPupils',
                              inputType: 'select',
                              label: 'Both pupils',
                              tableCss: 'trans-table-cell',
                              tableColumn: '27',
                              fieldset: 'pupils',
                              fsetRow: '1',
                              fsetCol: '3',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.pupils',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Equal'
                                },
                                {
                                  text: 'Unequal'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '3'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'leftPupilResponseToLight',
                              fqn: 'neurological.table.pupils.leftPupilResponseToLight',
                              inputType: 'select',
                              label: 'Left pupil response to light',
                              tableCss: 'trans-table-cell',
                              tableColumn: '24',
                              fieldset: 'pupils',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.pupils',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Brisk'
                                },
                                {
                                  text: 'Sluggish'
                                },
                                {
                                  text: 'Fixed'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'rightPupilResponseToLight',
                              fqn: 'neurological.table.pupils.rightPupilResponseToLight',
                              inputType: 'select',
                              label: 'Right pupil response to light',
                              tableCss: 'trans-table-cell',
                              tableColumn: '26',
                              fieldset: 'pupils',
                              fsetRow: '2',
                              fsetCol: '2',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.pupils',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Brisk'
                                },
                                {
                                  text: 'Sluggish'
                                },
                                {
                                  text: 'Fixed'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        }
                      ],
                      columnsCount: 3
                    }
                  }
                ]
              },
              {
                formRow: '4',
                elements: [
                  {
                    elementKey: 'stroke',
                    fqn: 'neurological.table.stroke',
                    inputType: 'fieldRowSet',
                    label: 'Stroke Assessment',
                    tableCss: 'trans-table-cell hide-table-element',
                    tableColumn: '28',
                    fieldset: 'stroke',
                    formCss: 'fieldset_row',
                    formColumn: '1',
                    formRow: '4',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    elements: [
                      {
                        elementKey: 'levelOfConciousness',
                        fqn: 'neurological.table.stroke.levelOfConciousness',
                        inputType: 'select',
                        label: 'Level of conciousness',
                        tableCss: 'trans-table-cell',
                        tableColumn: '29',
                        fieldset: 'stroke',
                        fsetRow: '1',
                        fsetCol: '1',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Alert; keenly responsive'
                          },
                          {
                            text: '1 = Not alert; but arousable by minor stimulation'
                          },
                          {
                            text: '2 = Not alert; requires repeated stimulation'
                          },
                          {
                            text: '3 = Unresponsive or responds only with reflex'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'bestGaze',
                        fqn: 'neurological.table.stroke.bestGaze',
                        inputType: 'select',
                        label: 'Best gaze',
                        tableCss: 'trans-table-cell',
                        tableColumn: '30',
                        fieldset: 'stroke',
                        fsetRow: '1',
                        fsetCol: '2',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Normal'
                          },
                          {
                            text: '1 = Partial gaze palsy'
                          },
                          {
                            text: '2 = Forced deviation'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'levelOfConciousnessQuestions',
                        fqn: 'neurological.table.stroke.levelOfConciousnessQuestions',
                        inputType: 'select',
                        label: 'Level of conciousness questions',
                        tableCss: 'trans-table-cell',
                        tableColumn: '31',
                        fieldset: 'stroke',
                        fsetRow: '2',
                        fsetCol: '1',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = answers two questions correctly'
                          },
                          {
                            text: '1 = Answers one question correctly'
                          },
                          {
                            text: '2 = Answers neither question correctly'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'visual',
                        fqn: 'neurological.table.stroke.visual',
                        inputType: 'select',
                        label: 'Visual',
                        tableCss: 'trans-table-cell',
                        tableColumn: '32',
                        fieldset: 'stroke',
                        fsetRow: '2',
                        fsetCol: '2',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No visual loss'
                          },
                          {
                            text: '1 = Partial hemianopia'
                          },
                          {
                            text: '2 = Partial paralysis'
                          },
                          {
                            text: '3 = Complete paralysis of one or both sides'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'levelOfConciousnessCommands',
                        fqn: 'neurological.table.stroke.levelOfConciousnessCommands',
                        inputType: 'select',
                        label: 'Level of conciousness commands',
                        tableCss: 'trans-table-cell',
                        tableColumn: '33',
                        fieldset: 'stroke',
                        fsetRow: '3',
                        fsetCol: '1',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Performs both tasks correctly'
                          },
                          {
                            text: '1 = Performs one task correctly'
                          },
                          {
                            text: '2 = Performs neither task correctly'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'facialPalsy',
                        fqn: 'neurological.table.stroke.facialPalsy',
                        inputType: 'select',
                        label: 'Facial palsy',
                        tableCss: 'trans-table-cell',
                        tableColumn: '34',
                        fieldset: 'stroke',
                        fsetRow: '3',
                        fsetCol: '2',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Normal symmetric movements'
                          },
                          {
                            text: '1 = Minor paralysis'
                          },
                          {
                            text: '2 = Partial paralysis'
                          },
                          {
                            text: '3 = Complete paralysis of one or both sides'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'motorLeftArm',
                        fqn: 'neurological.table.stroke.motorLeftArm',
                        inputType: 'select',
                        label: 'Motor - left arm',
                        tableCss: 'trans-table-cell',
                        tableColumn: '35',
                        fieldset: 'stroke',
                        fsetRow: '4',
                        fsetCol: '1',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No drift'
                          },
                          {
                            text: '1 = Drift'
                          },
                          {
                            text: '2 = Some effort against gravity'
                          },
                          {
                            text: '3 = No effort against gravity; limb falls'
                          },
                          {
                            text: '4 = No movement'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'sensory',
                        fqn: 'neurological.table.stroke.sensory',
                        inputType: 'select',
                        label: 'Sensory',
                        tableCss: 'trans-table-cell',
                        tableColumn: '36',
                        fieldset: 'stroke',
                        fsetRow: '4',
                        fsetCol: '2',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Normal; no sensory loss'
                          },
                          {
                            text: '1 = Mild-to-moderate sensory loss'
                          },
                          {
                            text: '2 = Severe to total sensory loss'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'motorRightArm',
                        fqn: 'neurological.table.stroke.motorRightArm',
                        inputType: 'select',
                        label: 'Motor - right arm',
                        tableCss: 'trans-table-cell',
                        tableColumn: '37',
                        fieldset: 'stroke',
                        fsetRow: '5',
                        fsetCol: '1',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No drift'
                          },
                          {
                            text: '1 = Drift'
                          },
                          {
                            text: '2 = Some effort against gravity'
                          },
                          {
                            text: '3 = No effort against gravity; limb falls'
                          },
                          {
                            text: '4 = No movement'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'bestLanguage',
                        fqn: 'neurological.table.stroke.bestLanguage',
                        inputType: 'select',
                        label: 'Best language',
                        tableCss: 'trans-table-cell',
                        tableColumn: '38',
                        fieldset: 'stroke',
                        fsetRow: '5',
                        fsetCol: '2',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No aphasia; normal'
                          },
                          {
                            text: '1 = Mild to moderate aphasia'
                          },
                          {
                            text: '2 = Severe aphasia'
                          },
                          {
                            text: '3 = Mute, global aphasia'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'motorLeftLeg',
                        fqn: 'neurological.table.stroke.motorLeftLeg',
                        inputType: 'select',
                        label: 'Motor - left leg',
                        tableCss: 'trans-table-cell',
                        tableColumn: '39',
                        fieldset: 'stroke',
                        fsetRow: '6',
                        fsetCol: '1',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No drift'
                          },
                          {
                            text: '1 = Drift'
                          },
                          {
                            text: '2 = Some effort against gravity'
                          },
                          {
                            text: '3 = No effort against gravity'
                          },
                          {
                            text: '4 = No movement'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'dysarthria',
                        fqn: 'neurological.table.stroke.dysarthria',
                        inputType: 'select',
                        label: 'Dysarthria',
                        tableCss: 'trans-table-cell',
                        tableColumn: '40',
                        fieldset: 'stroke',
                        fsetRow: '6',
                        fsetCol: '2',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Normal'
                          },
                          {
                            text: '1 = Mild to moderate aphasia'
                          },
                          {
                            text: '2 = Severe aphasia'
                          },
                          {
                            text: '3 = Mute, global aphasia'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'motorRightLeg',
                        fqn: 'neurological.table.stroke.motorRightLeg',
                        inputType: 'select',
                        label: 'Motor - right leg',
                        tableCss: 'trans-table-cell',
                        tableColumn: '41',
                        fieldset: 'stroke',
                        fsetRow: '7',
                        fsetCol: '1',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No drift'
                          },
                          {
                            text: '1 = Drift'
                          },
                          {
                            text: '2 = Some effort against gravity'
                          },
                          {
                            text: '3 = No effort against gravity'
                          },
                          {
                            text: '4 = No movement'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'extinctionAndInattention',
                        fqn: 'neurological.table.stroke.extinctionAndInattention',
                        inputType: 'select',
                        label: 'Extinction and inattention',
                        tableCss: 'trans-table-cell',
                        tableColumn: '42',
                        fieldset: 'stroke',
                        fsetRow: '7',
                        fsetCol: '2',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = No abnormality'
                          },
                          {
                            text: '1 = visual, tactile, auditory, spatial, or personal inattention'
                          },
                          {
                            text: '2 = Profound hemi-inattention or extinction'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'limbAtaxia',
                        fqn: 'neurological.table.stroke.limbAtaxia',
                        inputType: 'select',
                        label: 'Limb ataxia',
                        tableCss: 'trans-table-cell',
                        tableColumn: '43',
                        fieldset: 'stroke',
                        fsetRow: '8',
                        fsetCol: '1',
                        formCss: 'is-half',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        options: [
                          {
                            text: '0 = Absent'
                          },
                          {
                            text: '1 = Present in one limb'
                          },
                          {
                            text: '2 = Present in two limbs'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'comments',
                        fqn: 'neurological.table.stroke.comments',
                        inputType: 'textarea',
                        label: 'Comments',
                        tableCss: 'trans-table-cell',
                        tableColumn: '44',
                        fieldset: 'stroke',
                        fsetRow: '9',
                        fsetCol: '1',
                        formCss: 'is-two-thirds',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'resources',
                        inputType: 'form-label',
                        label:
                          "<b>Resources</b><p>Morse Fall Score <a target='_blank' href='https://google.ca'>external link</a></p><p>Mini-mental state examination (MMSE) <a target='_blank' href='https://google.ca'>external link</a></p>",
                        tableCss: 'trans-table-cell hide-table-element',
                        tableColumn: '45',
                        fieldset: 'stroke',
                        fsetRow: '9',
                        fsetCol: '2',
                        formCss: 'is-one-third',
                        formOption: 'withExternalUrls',
                        pageDataKey: 'neurological',
                        dataParent: 'neurological.table.stroke',
                        page: 'Assessments: Neurological',
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ],
                    containerType: 'fieldRowSet',
                    containerKey: 'stroke',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'levelOfConciousness',
                              fqn: 'neurological.table.stroke.levelOfConciousness',
                              inputType: 'select',
                              label: 'Level of conciousness',
                              tableCss: 'trans-table-cell',
                              tableColumn: '29',
                              fieldset: 'stroke',
                              fsetRow: '1',
                              fsetCol: '1',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Alert; keenly responsive'
                                },
                                {
                                  text: '1 = Not alert; but arousable by minor stimulation'
                                },
                                {
                                  text: '2 = Not alert; requires repeated stimulation'
                                },
                                {
                                  text: '3 = Unresponsive or responds only with reflex'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'bestGaze',
                              fqn: 'neurological.table.stroke.bestGaze',
                              inputType: 'select',
                              label: 'Best gaze',
                              tableCss: 'trans-table-cell',
                              tableColumn: '30',
                              fieldset: 'stroke',
                              fsetRow: '1',
                              fsetCol: '2',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Normal'
                                },
                                {
                                  text: '1 = Partial gaze palsy'
                                },
                                {
                                  text: '2 = Forced deviation'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'levelOfConciousnessQuestions',
                              fqn: 'neurological.table.stroke.levelOfConciousnessQuestions',
                              inputType: 'select',
                              label: 'Level of conciousness questions',
                              tableCss: 'trans-table-cell',
                              tableColumn: '31',
                              fieldset: 'stroke',
                              fsetRow: '2',
                              fsetCol: '1',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = answers two questions correctly'
                                },
                                {
                                  text: '1 = Answers one question correctly'
                                },
                                {
                                  text: '2 = Answers neither question correctly'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'visual',
                              fqn: 'neurological.table.stroke.visual',
                              inputType: 'select',
                              label: 'Visual',
                              tableCss: 'trans-table-cell',
                              tableColumn: '32',
                              fieldset: 'stroke',
                              fsetRow: '2',
                              fsetCol: '2',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No visual loss'
                                },
                                {
                                  text: '1 = Partial hemianopia'
                                },
                                {
                                  text: '2 = Partial paralysis'
                                },
                                {
                                  text: '3 = Complete paralysis of one or both sides'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'levelOfConciousnessCommands',
                              fqn: 'neurological.table.stroke.levelOfConciousnessCommands',
                              inputType: 'select',
                              label: 'Level of conciousness commands',
                              tableCss: 'trans-table-cell',
                              tableColumn: '33',
                              fieldset: 'stroke',
                              fsetRow: '3',
                              fsetCol: '1',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Performs both tasks correctly'
                                },
                                {
                                  text: '1 = Performs one task correctly'
                                },
                                {
                                  text: '2 = Performs neither task correctly'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'facialPalsy',
                              fqn: 'neurological.table.stroke.facialPalsy',
                              inputType: 'select',
                              label: 'Facial palsy',
                              tableCss: 'trans-table-cell',
                              tableColumn: '34',
                              fieldset: 'stroke',
                              fsetRow: '3',
                              fsetCol: '2',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Normal symmetric movements'
                                },
                                {
                                  text: '1 = Minor paralysis'
                                },
                                {
                                  text: '2 = Partial paralysis'
                                },
                                {
                                  text: '3 = Complete paralysis of one or both sides'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'motorLeftArm',
                              fqn: 'neurological.table.stroke.motorLeftArm',
                              inputType: 'select',
                              label: 'Motor - left arm',
                              tableCss: 'trans-table-cell',
                              tableColumn: '35',
                              fieldset: 'stroke',
                              fsetRow: '4',
                              fsetCol: '1',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No drift'
                                },
                                {
                                  text: '1 = Drift'
                                },
                                {
                                  text: '2 = Some effort against gravity'
                                },
                                {
                                  text: '3 = No effort against gravity; limb falls'
                                },
                                {
                                  text: '4 = No movement'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'sensory',
                              fqn: 'neurological.table.stroke.sensory',
                              inputType: 'select',
                              label: 'Sensory',
                              tableCss: 'trans-table-cell',
                              tableColumn: '36',
                              fieldset: 'stroke',
                              fsetRow: '4',
                              fsetCol: '2',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Normal; no sensory loss'
                                },
                                {
                                  text: '1 = Mild-to-moderate sensory loss'
                                },
                                {
                                  text: '2 = Severe to total sensory loss'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'motorRightArm',
                              fqn: 'neurological.table.stroke.motorRightArm',
                              inputType: 'select',
                              label: 'Motor - right arm',
                              tableCss: 'trans-table-cell',
                              tableColumn: '37',
                              fieldset: 'stroke',
                              fsetRow: '5',
                              fsetCol: '1',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No drift'
                                },
                                {
                                  text: '1 = Drift'
                                },
                                {
                                  text: '2 = Some effort against gravity'
                                },
                                {
                                  text: '3 = No effort against gravity; limb falls'
                                },
                                {
                                  text: '4 = No movement'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'bestLanguage',
                              fqn: 'neurological.table.stroke.bestLanguage',
                              inputType: 'select',
                              label: 'Best language',
                              tableCss: 'trans-table-cell',
                              tableColumn: '38',
                              fieldset: 'stroke',
                              fsetRow: '5',
                              fsetCol: '2',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No aphasia; normal'
                                },
                                {
                                  text: '1 = Mild to moderate aphasia'
                                },
                                {
                                  text: '2 = Severe aphasia'
                                },
                                {
                                  text: '3 = Mute, global aphasia'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'motorLeftLeg',
                              fqn: 'neurological.table.stroke.motorLeftLeg',
                              inputType: 'select',
                              label: 'Motor - left leg',
                              tableCss: 'trans-table-cell',
                              tableColumn: '39',
                              fieldset: 'stroke',
                              fsetRow: '6',
                              fsetCol: '1',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No drift'
                                },
                                {
                                  text: '1 = Drift'
                                },
                                {
                                  text: '2 = Some effort against gravity'
                                },
                                {
                                  text: '3 = No effort against gravity'
                                },
                                {
                                  text: '4 = No movement'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'dysarthria',
                              fqn: 'neurological.table.stroke.dysarthria',
                              inputType: 'select',
                              label: 'Dysarthria',
                              tableCss: 'trans-table-cell',
                              tableColumn: '40',
                              fieldset: 'stroke',
                              fsetRow: '6',
                              fsetCol: '2',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Normal'
                                },
                                {
                                  text: '1 = Mild to moderate aphasia'
                                },
                                {
                                  text: '2 = Severe aphasia'
                                },
                                {
                                  text: '3 = Mute, global aphasia'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '7',
                          elements: [
                            {
                              elementKey: 'motorRightLeg',
                              fqn: 'neurological.table.stroke.motorRightLeg',
                              inputType: 'select',
                              label: 'Motor - right leg',
                              tableCss: 'trans-table-cell',
                              tableColumn: '41',
                              fieldset: 'stroke',
                              fsetRow: '7',
                              fsetCol: '1',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No drift'
                                },
                                {
                                  text: '1 = Drift'
                                },
                                {
                                  text: '2 = Some effort against gravity'
                                },
                                {
                                  text: '3 = No effort against gravity'
                                },
                                {
                                  text: '4 = No movement'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'extinctionAndInattention',
                              fqn: 'neurological.table.stroke.extinctionAndInattention',
                              inputType: 'select',
                              label: 'Extinction and inattention',
                              tableCss: 'trans-table-cell',
                              tableColumn: '42',
                              fieldset: 'stroke',
                              fsetRow: '7',
                              fsetCol: '2',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No abnormality'
                                },
                                {
                                  text:
                                    '1 = visual, tactile, auditory, spatial, or personal inattention'
                                },
                                {
                                  text: '2 = Profound hemi-inattention or extinction'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '8',
                          elements: [
                            {
                              elementKey: 'limbAtaxia',
                              fqn: 'neurological.table.stroke.limbAtaxia',
                              inputType: 'select',
                              label: 'Limb ataxia',
                              tableCss: 'trans-table-cell',
                              tableColumn: '43',
                              fieldset: 'stroke',
                              fsetRow: '8',
                              fsetCol: '1',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Absent'
                                },
                                {
                                  text: '1 = Present in one limb'
                                },
                                {
                                  text: '2 = Present in two limbs'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '9',
                          elements: [
                            {
                              elementKey: 'comments',
                              fqn: 'neurological.table.stroke.comments',
                              inputType: 'textarea',
                              label: 'Comments',
                              tableCss: 'trans-table-cell',
                              tableColumn: '44',
                              fieldset: 'stroke',
                              fsetRow: '9',
                              fsetCol: '1',
                              formCss: 'is-two-thirds',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'resources',
                              inputType: 'form-label',
                              label:
                                "<b>Resources</b><p>Morse Fall Score <a target='_blank' href='https://google.ca'>external link</a></p><p>Mini-mental state examination (MMSE) <a target='_blank' href='https://google.ca'>external link</a></p>",
                              tableCss: 'trans-table-cell hide-table-element',
                              tableColumn: '45',
                              fieldset: 'stroke',
                              fsetRow: '9',
                              fsetCol: '2',
                              formCss: 'is-one-third',
                              formOption: 'withExternalUrls',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        }
                      ],
                      columnsCount: 2
                    }
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    respiratory: {
      pageTitle: 'Assessments: Respiratory',
      pageDataKey: 'respiratory',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add a new respiratory assessment',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'respiratory.table.name',
              inputType: 'text',
              label: 'Name',
              tableCss: 'trans-table-cell',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'respiratory.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableCss: 'trans-table-cell',
              tableColumn: '2',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            },
            {
              elementKey: 'unit',
              fqn: 'respiratory.table.unit',
              inputType: 'text',
              label: 'Unit',
              tableCss: 'trans-table-cell',
              tableColumn: '3',
              formCss: 'user_unit',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'respiratory.table.day',
              inputType: 'day',
              label: 'Day',
              tableCss: 'trans-table-cell',
              tableColumn: '4',
              formCss: 'user_day',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'respiratory.table.time',
              inputType: 'time',
              label: 'Time',
              tableCss: 'trans-table-cell',
              tableColumn: '5',
              formCss: 'user_time',
              formColumn: '5',
              formRow: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            },
            {
              elementKey: 'patent',
              fqn: 'respiratory.table.airway.patent',
              inputType: 'checkbox',
              label: 'Patent',
              tableCss: 'trans-table-cell',
              tableColumn: '6',
              fieldset: 'airway',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'obstructed',
              fqn: 'respiratory.table.airway.obstructed',
              inputType: 'checkbox',
              label: 'Obstructed',
              tableCss: 'trans-table-cell',
              tableColumn: '7',
              fieldset: 'airway',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'oett',
              fqn: 'respiratory.table.airway.oett',
              inputType: 'checkbox',
              label: 'OETT',
              tableCss: 'trans-table-cell',
              tableColumn: '8',
              fieldset: 'airway',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'otherValue',
              fqn: 'respiratory.table.airway.otherValue',
              inputType: 'checkbox',
              label: 'Other',
              tableCss: 'trans-table-cell',
              tableColumn: '9',
              fieldset: 'airway',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'otherValue',
              fqn: 'respiratory.table.airway.otherValue',
              inputType: 'text',
              tableCss: 'trans-table-cell',
              tableColumn: '10',
              fieldset: 'airway',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory'
            },
            {
              elementKey: 'oxygenTherapy',
              fqn: 'respiratory.table.airway.oxygenTherapy',
              inputType: 'text',
              label: 'Oxygen therapy',
              tableCss: 'trans-table-cell',
              tableColumn: '11',
              fieldset: 'airway',
              fsetRow: '6',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'oxygenFlow',
              fqn: 'respiratory.table.airway.oxygenFlow',
              inputType: 'textarea',
              label: 'Oxygen flow',
              tableCss: 'trans-table-cell',
              tableColumn: '12',
              fieldset: 'airway',
              fsetRow: '7',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'airway',
              fqn: 'respiratory.table.airway',
              inputType: 'fieldset',
              label: 'Airway',
              fieldset: 'airway',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              elements: [
                {
                  elementKey: 'patent',
                  fqn: 'respiratory.table.airway.patent',
                  inputType: 'checkbox',
                  label: 'Patent',
                  tableCss: 'trans-table-cell',
                  tableColumn: '6',
                  fieldset: 'airway',
                  fsetRow: '1',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.airway',
                  page: 'Assessments: Respiratory',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'obstructed',
                  fqn: 'respiratory.table.airway.obstructed',
                  inputType: 'checkbox',
                  label: 'Obstructed',
                  tableCss: 'trans-table-cell',
                  tableColumn: '7',
                  fieldset: 'airway',
                  fsetRow: '2',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.airway',
                  page: 'Assessments: Respiratory',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'oett',
                  fqn: 'respiratory.table.airway.oett',
                  inputType: 'checkbox',
                  label: 'OETT',
                  tableCss: 'trans-table-cell',
                  tableColumn: '8',
                  fieldset: 'airway',
                  fsetRow: '3',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.airway',
                  page: 'Assessments: Respiratory',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'otherValue',
                  fqn: 'respiratory.table.airway.otherValue',
                  inputType: 'checkbox',
                  label: 'Other',
                  tableCss: 'trans-table-cell',
                  tableColumn: '9',
                  fieldset: 'airway',
                  fsetRow: '4',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.airway',
                  page: 'Assessments: Respiratory',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'otherValue',
                  fqn: 'respiratory.table.airway.otherValue',
                  inputType: 'text',
                  tableCss: 'trans-table-cell',
                  tableColumn: '10',
                  fieldset: 'airway',
                  fsetRow: '5',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.airway',
                  page: 'Assessments: Respiratory'
                },
                {
                  elementKey: 'oxygenTherapy',
                  fqn: 'respiratory.table.airway.oxygenTherapy',
                  inputType: 'text',
                  label: 'Oxygen therapy',
                  tableCss: 'trans-table-cell',
                  tableColumn: '11',
                  fieldset: 'airway',
                  fsetRow: '6',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.airway',
                  page: 'Assessments: Respiratory',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'oxygenFlow',
                  fqn: 'respiratory.table.airway.oxygenFlow',
                  inputType: 'textarea',
                  label: 'Oxygen flow',
                  tableCss: 'trans-table-cell',
                  tableColumn: '12',
                  fieldset: 'airway',
                  fsetRow: '7',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.airway',
                  page: 'Assessments: Respiratory',
                  tableKey: 'table',
                  formColumn: '1'
                }
              ],
              containerType: 'fieldset',
              containerKey: 'airway',
              tableCss: 'undefinedhide-table-element',
              tableKey: 'table',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'patent',
                        fqn: 'respiratory.table.airway.patent',
                        inputType: 'checkbox',
                        label: 'Patent',
                        tableCss: 'trans-table-cell',
                        tableColumn: '6',
                        fieldset: 'airway',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '2',
                    elements: [
                      {
                        elementKey: 'obstructed',
                        fqn: 'respiratory.table.airway.obstructed',
                        inputType: 'checkbox',
                        label: 'Obstructed',
                        tableCss: 'trans-table-cell',
                        tableColumn: '7',
                        fieldset: 'airway',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '3',
                    elements: [
                      {
                        elementKey: 'oett',
                        fqn: 'respiratory.table.airway.oett',
                        inputType: 'checkbox',
                        label: 'OETT',
                        tableCss: 'trans-table-cell',
                        tableColumn: '8',
                        fieldset: 'airway',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '4',
                    elements: [
                      {
                        elementKey: 'otherValue',
                        fqn: 'respiratory.table.airway.otherValue',
                        inputType: 'checkbox',
                        label: 'Other',
                        tableCss: 'trans-table-cell',
                        tableColumn: '9',
                        fieldset: 'airway',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '5',
                    elements: [
                      {
                        elementKey: 'otherValue',
                        fqn: 'respiratory.table.airway.otherValue',
                        inputType: 'checkbox',
                        label: 'Other',
                        tableCss: 'trans-table-cell',
                        tableColumn: '9',
                        fieldset: 'airway',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '6',
                    elements: [
                      {
                        elementKey: 'oxygenTherapy',
                        fqn: 'respiratory.table.airway.oxygenTherapy',
                        inputType: 'text',
                        label: 'Oxygen therapy',
                        tableCss: 'trans-table-cell',
                        tableColumn: '11',
                        fieldset: 'airway',
                        fsetRow: '6',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '7',
                    elements: [
                      {
                        elementKey: 'oxygenFlow',
                        fqn: 'respiratory.table.airway.oxygenFlow',
                        inputType: 'textarea',
                        label: 'Oxygen flow',
                        tableCss: 'trans-table-cell',
                        tableColumn: '12',
                        fieldset: 'airway',
                        fsetRow: '7',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  }
                ],
                columnsCount: 1
              }
            },
            {
              elementKey: 'lul',
              fqn: 'respiratory.table.breath.lul',
              inputType: 'select',
              label: 'LUL',
              tableCss: 'trans-table-cell',
              tableColumn: '13',
              fieldset: 'breath',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Wheeze'
                },
                {
                  text: 'Crackles'
                },
                {
                  text: 'Absent'
                },
                {
                  text: 'Deceased'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'breath',
              fqn: 'respiratory.table.breath',
              inputType: 'fieldset',
              label: 'Breath sounds',
              fieldset: 'breath',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              elements: [
                {
                  elementKey: 'lul',
                  fqn: 'respiratory.table.breath.lul',
                  inputType: 'select',
                  label: 'LUL',
                  tableCss: 'trans-table-cell',
                  tableColumn: '13',
                  fieldset: 'breath',
                  fsetRow: '1',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'Normal'
                    },
                    {
                      text: 'Wheeze'
                    },
                    {
                      text: 'Crackles'
                    },
                    {
                      text: 'Absent'
                    },
                    {
                      text: 'Deceased'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'rul',
                  fqn: 'respiratory.table.breath.rul',
                  inputType: 'select',
                  label: 'RUL',
                  tableCss: 'trans-table-cell',
                  tableColumn: '14',
                  fieldset: 'breath',
                  fsetRow: '1',
                  fsetCol: '2',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'Normal'
                    },
                    {
                      text: 'Wheeze'
                    },
                    {
                      text: 'Crackles'
                    },
                    {
                      text: 'Absent'
                    },
                    {
                      text: 'Deceased'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  inputType: 'form-label',
                  tableCss: 'trans-table-cell hide-table-element',
                  tableColumn: '14',
                  fieldset: 'breath',
                  fsetRow: '2',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'rml',
                  fqn: 'respiratory.table.breath.rml',
                  inputType: 'select',
                  label: 'RML',
                  tableCss: 'trans-table-cell',
                  tableColumn: '15',
                  fieldset: 'breath',
                  fsetRow: '2',
                  fsetCol: '2',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'Normal'
                    },
                    {
                      text: 'Wheeze'
                    },
                    {
                      text: 'Crackles'
                    },
                    {
                      text: 'Absent'
                    },
                    {
                      text: 'Deceased'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  elementKey: 'lll',
                  fqn: 'respiratory.table.breath.lll',
                  inputType: 'select',
                  label: 'LLL',
                  tableCss: 'trans-table-cell',
                  tableColumn: '15',
                  fieldset: 'breath',
                  fsetRow: '3',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'Normal'
                    },
                    {
                      text: 'Wheeze'
                    },
                    {
                      text: 'Crackles'
                    },
                    {
                      text: 'Absent'
                    },
                    {
                      text: 'Deceased'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'rll',
                  fqn: 'respiratory.table.breath.rll',
                  inputType: 'select',
                  label: 'RLL',
                  tableCss: 'trans-table-cell',
                  tableColumn: '16',
                  fieldset: 'breath',
                  fsetRow: '3',
                  fsetCol: '2',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'Normal'
                    },
                    {
                      text: 'Wheeze'
                    },
                    {
                      text: 'Crackles'
                    },
                    {
                      text: 'Absent'
                    },
                    {
                      text: 'Deceased'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  elementKey: 'respiratoryRhythm',
                  fqn: 'respiratory.table.breath.respiratoryRhythm',
                  inputType: 'select',
                  label: 'Respiratory rhythm',
                  tableCss: 'trans-table-cell',
                  tableColumn: '16',
                  fieldset: 'breath',
                  fsetRow: '4',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'Regular'
                    },
                    {
                      text: 'Irregular'
                    },
                    {
                      text: 'Paradoxical'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'respiratoryDepth',
                  fqn: 'respiratory.table.breath.respiratoryDepth',
                  inputType: 'select',
                  label: 'Respiratory depth',
                  tableCss: 'trans-table-cell',
                  tableColumn: '17',
                  fieldset: 'breath',
                  fsetRow: '5',
                  fsetCol: '1',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'Normal'
                    },
                    {
                      text: 'Shallow'
                    },
                    {
                      text: 'Deep'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'cough',
                  fqn: 'respiratory.table.breath.cough',
                  inputType: 'select',
                  label: 'Cough',
                  tableCss: 'trans-table-cell',
                  tableColumn: '17',
                  fieldset: 'breath',
                  fsetRow: '4',
                  fsetCol: '2',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'No'
                    },
                    {
                      text: 'Nonreproductive'
                    },
                    {
                      text: 'Productive'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  elementKey: 'sputumColour',
                  fqn: 'respiratory.table.breath.sputumColour',
                  inputType: 'select',
                  label: 'Sputum colour',
                  tableCss: 'trans-table-cell',
                  tableColumn: '18',
                  fieldset: 'breath',
                  fsetRow: '5',
                  fsetCol: '2',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  options: [
                    {
                      text: 'Mucoid'
                    },
                    {
                      text: 'Purulent'
                    },
                    {
                      text: 'Yellow-green'
                    },
                    {
                      text: 'Rust-coloured'
                    },
                    {
                      text: 'Pink, blood tinged'
                    },
                    {
                      text: 'Pink, frothy'
                    },
                    {
                      text: 'Profuse, colourless'
                    },
                    {
                      text: 'Bloody'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '2'
                },
                {
                  elementKey: 'sputumComments',
                  fqn: 'respiratory.table.breath.sputumComments',
                  inputType: 'text',
                  label: 'Sputum comments',
                  tableCss: 'trans-table-cell',
                  tableColumn: '18',
                  fieldset: 'breath',
                  fsetRow: '6',
                  fsetCol: '2',
                  pageDataKey: 'respiratory',
                  dataParent: 'respiratory.table.breath',
                  page: 'Assessments: Respiratory',
                  tableKey: 'table',
                  formColumn: '2'
                }
              ],
              containerType: 'fieldset',
              containerKey: 'breath',
              tableCss: 'undefinedhide-table-element',
              tableKey: 'table',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'lul',
                        fqn: 'respiratory.table.breath.lul',
                        inputType: 'select',
                        label: 'LUL',
                        tableCss: 'trans-table-cell',
                        tableColumn: '13',
                        fieldset: 'breath',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rul',
                        fqn: 'respiratory.table.breath.rul',
                        inputType: 'select',
                        label: 'RUL',
                        tableCss: 'trans-table-cell',
                        tableColumn: '14',
                        fieldset: 'breath',
                        fsetRow: '1',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '2',
                    elements: [
                      {
                        inputType: 'form-label',
                        tableCss: 'trans-table-cell hide-table-element',
                        tableColumn: '14',
                        fieldset: 'breath',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rml',
                        fqn: 'respiratory.table.breath.rml',
                        inputType: 'select',
                        label: 'RML',
                        tableCss: 'trans-table-cell',
                        tableColumn: '15',
                        fieldset: 'breath',
                        fsetRow: '2',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '3',
                    elements: [
                      {
                        elementKey: 'lll',
                        fqn: 'respiratory.table.breath.lll',
                        inputType: 'select',
                        label: 'LLL',
                        tableCss: 'trans-table-cell',
                        tableColumn: '15',
                        fieldset: 'breath',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rll',
                        fqn: 'respiratory.table.breath.rll',
                        inputType: 'select',
                        label: 'RLL',
                        tableCss: 'trans-table-cell',
                        tableColumn: '16',
                        fieldset: 'breath',
                        fsetRow: '3',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '4',
                    elements: [
                      {
                        elementKey: 'respiratoryRhythm',
                        fqn: 'respiratory.table.breath.respiratoryRhythm',
                        inputType: 'select',
                        label: 'Respiratory rhythm',
                        tableCss: 'trans-table-cell',
                        tableColumn: '16',
                        fieldset: 'breath',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Regular'
                          },
                          {
                            text: 'Irregular'
                          },
                          {
                            text: 'Paradoxical'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'cough',
                        fqn: 'respiratory.table.breath.cough',
                        inputType: 'select',
                        label: 'Cough',
                        tableCss: 'trans-table-cell',
                        tableColumn: '17',
                        fieldset: 'breath',
                        fsetRow: '4',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'No'
                          },
                          {
                            text: 'Nonreproductive'
                          },
                          {
                            text: 'Productive'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '5',
                    elements: [
                      {
                        elementKey: 'respiratoryDepth',
                        fqn: 'respiratory.table.breath.respiratoryDepth',
                        inputType: 'select',
                        label: 'Respiratory depth',
                        tableCss: 'trans-table-cell',
                        tableColumn: '17',
                        fieldset: 'breath',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Shallow'
                          },
                          {
                            text: 'Deep'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'sputumColour',
                        fqn: 'respiratory.table.breath.sputumColour',
                        inputType: 'select',
                        label: 'Sputum colour',
                        tableCss: 'trans-table-cell',
                        tableColumn: '18',
                        fieldset: 'breath',
                        fsetRow: '5',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Mucoid'
                          },
                          {
                            text: 'Purulent'
                          },
                          {
                            text: 'Yellow-green'
                          },
                          {
                            text: 'Rust-coloured'
                          },
                          {
                            text: 'Pink, blood tinged'
                          },
                          {
                            text: 'Pink, frothy'
                          },
                          {
                            text: 'Profuse, colourless'
                          },
                          {
                            text: 'Bloody'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  },
                  {
                    formRow: '6',
                    elements: [
                      {
                        elementKey: 'sputumComments',
                        fqn: 'respiratory.table.breath.sputumComments',
                        inputType: 'text',
                        label: 'Sputum comments',
                        tableCss: 'trans-table-cell',
                        tableColumn: '18',
                        fieldset: 'breath',
                        fsetRow: '6',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ]
                  }
                ],
                columnsCount: 2
              }
            },
            {
              inputType: 'form-label',
              tableCss: 'trans-table-cell hide-table-element',
              tableColumn: '14',
              fieldset: 'breath',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'rul',
              fqn: 'respiratory.table.breath.rul',
              inputType: 'select',
              label: 'RUL',
              tableCss: 'trans-table-cell',
              tableColumn: '14',
              fieldset: 'breath',
              fsetRow: '1',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Wheeze'
                },
                {
                  text: 'Crackles'
                },
                {
                  text: 'Absent'
                },
                {
                  text: 'Deceased'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'lll',
              fqn: 'respiratory.table.breath.lll',
              inputType: 'select',
              label: 'LLL',
              tableCss: 'trans-table-cell',
              tableColumn: '15',
              fieldset: 'breath',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Wheeze'
                },
                {
                  text: 'Crackles'
                },
                {
                  text: 'Absent'
                },
                {
                  text: 'Deceased'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'rml',
              fqn: 'respiratory.table.breath.rml',
              inputType: 'select',
              label: 'RML',
              tableCss: 'trans-table-cell',
              tableColumn: '15',
              fieldset: 'breath',
              fsetRow: '2',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Wheeze'
                },
                {
                  text: 'Crackles'
                },
                {
                  text: 'Absent'
                },
                {
                  text: 'Deceased'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'rll',
              fqn: 'respiratory.table.breath.rll',
              inputType: 'select',
              label: 'RLL',
              tableCss: 'trans-table-cell',
              tableColumn: '16',
              fieldset: 'breath',
              fsetRow: '3',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Wheeze'
                },
                {
                  text: 'Crackles'
                },
                {
                  text: 'Absent'
                },
                {
                  text: 'Deceased'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'respiratoryRhythm',
              fqn: 'respiratory.table.breath.respiratoryRhythm',
              inputType: 'select',
              label: 'Respiratory rhythm',
              tableCss: 'trans-table-cell',
              tableColumn: '16',
              fieldset: 'breath',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Regular'
                },
                {
                  text: 'Irregular'
                },
                {
                  text: 'Paradoxical'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'cough',
              fqn: 'respiratory.table.breath.cough',
              inputType: 'select',
              label: 'Cough',
              tableCss: 'trans-table-cell',
              tableColumn: '17',
              fieldset: 'breath',
              fsetRow: '4',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Nonreproductive'
                },
                {
                  text: 'Productive'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'respiratoryDepth',
              fqn: 'respiratory.table.breath.respiratoryDepth',
              inputType: 'select',
              label: 'Respiratory depth',
              tableCss: 'trans-table-cell',
              tableColumn: '17',
              fieldset: 'breath',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Shallow'
                },
                {
                  text: 'Deep'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'sputumComments',
              fqn: 'respiratory.table.breath.sputumComments',
              inputType: 'text',
              label: 'Sputum comments',
              tableCss: 'trans-table-cell',
              tableColumn: '18',
              fieldset: 'breath',
              fsetRow: '6',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'sputumColour',
              fqn: 'respiratory.table.breath.sputumColour',
              inputType: 'select',
              label: 'Sputum colour',
              tableCss: 'trans-table-cell',
              tableColumn: '18',
              fieldset: 'breath',
              fsetRow: '5',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Mucoid'
                },
                {
                  text: 'Purulent'
                },
                {
                  text: 'Yellow-green'
                },
                {
                  text: 'Rust-coloured'
                },
                {
                  text: 'Pink, blood tinged'
                },
                {
                  text: 'Pink, frothy'
                },
                {
                  text: 'Profuse, colourless'
                },
                {
                  text: 'Bloody'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'generalComments',
              fqn: 'respiratory.table.generalComments',
              inputType: 'text',
              label: 'General comments',
              tableCss: 'trans-table-cell',
              tableColumn: '19',
              formCss: 'fullWidth',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'respiratory.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableCss: 'trans-table-cell',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'respiratory.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableCss: 'trans-table-cell',
                    tableColumn: '2',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'unit',
                    fqn: 'respiratory.table.unit',
                    inputType: 'text',
                    label: 'Unit',
                    tableCss: 'trans-table-cell',
                    tableColumn: '3',
                    formCss: 'user_unit',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'respiratory.table.day',
                    inputType: 'day',
                    label: 'Day',
                    tableCss: 'trans-table-cell',
                    tableColumn: '4',
                    formCss: 'user_day',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'respiratory.table.time',
                    inputType: 'time',
                    label: 'Time',
                    tableCss: 'trans-table-cell',
                    tableColumn: '5',
                    formCss: 'user_time',
                    formColumn: '5',
                    formRow: '1',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'airway',
                    fqn: 'respiratory.table.airway',
                    inputType: 'fieldset',
                    label: 'Airway',
                    fieldset: 'airway',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    elements: [
                      {
                        elementKey: 'patent',
                        fqn: 'respiratory.table.airway.patent',
                        inputType: 'checkbox',
                        label: 'Patent',
                        tableCss: 'trans-table-cell',
                        tableColumn: '6',
                        fieldset: 'airway',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'obstructed',
                        fqn: 'respiratory.table.airway.obstructed',
                        inputType: 'checkbox',
                        label: 'Obstructed',
                        tableCss: 'trans-table-cell',
                        tableColumn: '7',
                        fieldset: 'airway',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'oett',
                        fqn: 'respiratory.table.airway.oett',
                        inputType: 'checkbox',
                        label: 'OETT',
                        tableCss: 'trans-table-cell',
                        tableColumn: '8',
                        fieldset: 'airway',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'otherValue',
                        fqn: 'respiratory.table.airway.otherValue',
                        inputType: 'checkbox',
                        label: 'Other',
                        tableCss: 'trans-table-cell',
                        tableColumn: '9',
                        fieldset: 'airway',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'otherValue',
                        fqn: 'respiratory.table.airway.otherValue',
                        inputType: 'text',
                        tableCss: 'trans-table-cell',
                        tableColumn: '10',
                        fieldset: 'airway',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory'
                      },
                      {
                        elementKey: 'oxygenTherapy',
                        fqn: 'respiratory.table.airway.oxygenTherapy',
                        inputType: 'text',
                        label: 'Oxygen therapy',
                        tableCss: 'trans-table-cell',
                        tableColumn: '11',
                        fieldset: 'airway',
                        fsetRow: '6',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'oxygenFlow',
                        fqn: 'respiratory.table.airway.oxygenFlow',
                        inputType: 'textarea',
                        label: 'Oxygen flow',
                        tableCss: 'trans-table-cell',
                        tableColumn: '12',
                        fieldset: 'airway',
                        fsetRow: '7',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.airway',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ],
                    containerType: 'fieldset',
                    containerKey: 'airway',
                    tableCss: 'undefinedhide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'patent',
                              fqn: 'respiratory.table.airway.patent',
                              inputType: 'checkbox',
                              label: 'Patent',
                              tableCss: 'trans-table-cell',
                              tableColumn: '6',
                              fieldset: 'airway',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'obstructed',
                              fqn: 'respiratory.table.airway.obstructed',
                              inputType: 'checkbox',
                              label: 'Obstructed',
                              tableCss: 'trans-table-cell',
                              tableColumn: '7',
                              fieldset: 'airway',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'oett',
                              fqn: 'respiratory.table.airway.oett',
                              inputType: 'checkbox',
                              label: 'OETT',
                              tableCss: 'trans-table-cell',
                              tableColumn: '8',
                              fieldset: 'airway',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'otherValue',
                              fqn: 'respiratory.table.airway.otherValue',
                              inputType: 'checkbox',
                              label: 'Other',
                              tableCss: 'trans-table-cell',
                              tableColumn: '9',
                              fieldset: 'airway',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'otherValue',
                              fqn: 'respiratory.table.airway.otherValue',
                              inputType: 'checkbox',
                              label: 'Other',
                              tableCss: 'trans-table-cell',
                              tableColumn: '9',
                              fieldset: 'airway',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'oxygenTherapy',
                              fqn: 'respiratory.table.airway.oxygenTherapy',
                              inputType: 'text',
                              label: 'Oxygen therapy',
                              tableCss: 'trans-table-cell',
                              tableColumn: '11',
                              fieldset: 'airway',
                              fsetRow: '6',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '7',
                          elements: [
                            {
                              elementKey: 'oxygenFlow',
                              fqn: 'respiratory.table.airway.oxygenFlow',
                              inputType: 'textarea',
                              label: 'Oxygen flow',
                              tableCss: 'trans-table-cell',
                              tableColumn: '12',
                              fieldset: 'airway',
                              fsetRow: '7',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'breath',
                    fqn: 'respiratory.table.breath',
                    inputType: 'fieldset',
                    label: 'Breath sounds',
                    fieldset: 'breath',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    elements: [
                      {
                        elementKey: 'lul',
                        fqn: 'respiratory.table.breath.lul',
                        inputType: 'select',
                        label: 'LUL',
                        tableCss: 'trans-table-cell',
                        tableColumn: '13',
                        fieldset: 'breath',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rul',
                        fqn: 'respiratory.table.breath.rul',
                        inputType: 'select',
                        label: 'RUL',
                        tableCss: 'trans-table-cell',
                        tableColumn: '14',
                        fieldset: 'breath',
                        fsetRow: '1',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        inputType: 'form-label',
                        tableCss: 'trans-table-cell hide-table-element',
                        tableColumn: '14',
                        fieldset: 'breath',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rml',
                        fqn: 'respiratory.table.breath.rml',
                        inputType: 'select',
                        label: 'RML',
                        tableCss: 'trans-table-cell',
                        tableColumn: '15',
                        fieldset: 'breath',
                        fsetRow: '2',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'lll',
                        fqn: 'respiratory.table.breath.lll',
                        inputType: 'select',
                        label: 'LLL',
                        tableCss: 'trans-table-cell',
                        tableColumn: '15',
                        fieldset: 'breath',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rll',
                        fqn: 'respiratory.table.breath.rll',
                        inputType: 'select',
                        label: 'RLL',
                        tableCss: 'trans-table-cell',
                        tableColumn: '16',
                        fieldset: 'breath',
                        fsetRow: '3',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Wheeze'
                          },
                          {
                            text: 'Crackles'
                          },
                          {
                            text: 'Absent'
                          },
                          {
                            text: 'Deceased'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'respiratoryRhythm',
                        fqn: 'respiratory.table.breath.respiratoryRhythm',
                        inputType: 'select',
                        label: 'Respiratory rhythm',
                        tableCss: 'trans-table-cell',
                        tableColumn: '16',
                        fieldset: 'breath',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Regular'
                          },
                          {
                            text: 'Irregular'
                          },
                          {
                            text: 'Paradoxical'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'respiratoryDepth',
                        fqn: 'respiratory.table.breath.respiratoryDepth',
                        inputType: 'select',
                        label: 'Respiratory depth',
                        tableCss: 'trans-table-cell',
                        tableColumn: '17',
                        fieldset: 'breath',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Normal'
                          },
                          {
                            text: 'Shallow'
                          },
                          {
                            text: 'Deep'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'cough',
                        fqn: 'respiratory.table.breath.cough',
                        inputType: 'select',
                        label: 'Cough',
                        tableCss: 'trans-table-cell',
                        tableColumn: '17',
                        fieldset: 'breath',
                        fsetRow: '4',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'No'
                          },
                          {
                            text: 'Nonreproductive'
                          },
                          {
                            text: 'Productive'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'sputumColour',
                        fqn: 'respiratory.table.breath.sputumColour',
                        inputType: 'select',
                        label: 'Sputum colour',
                        tableCss: 'trans-table-cell',
                        tableColumn: '18',
                        fieldset: 'breath',
                        fsetRow: '5',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        options: [
                          {
                            text: 'Mucoid'
                          },
                          {
                            text: 'Purulent'
                          },
                          {
                            text: 'Yellow-green'
                          },
                          {
                            text: 'Rust-coloured'
                          },
                          {
                            text: 'Pink, blood tinged'
                          },
                          {
                            text: 'Pink, frothy'
                          },
                          {
                            text: 'Profuse, colourless'
                          },
                          {
                            text: 'Bloody'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '2'
                      },
                      {
                        elementKey: 'sputumComments',
                        fqn: 'respiratory.table.breath.sputumComments',
                        inputType: 'text',
                        label: 'Sputum comments',
                        tableCss: 'trans-table-cell',
                        tableColumn: '18',
                        fieldset: 'breath',
                        fsetRow: '6',
                        fsetCol: '2',
                        pageDataKey: 'respiratory',
                        dataParent: 'respiratory.table.breath',
                        page: 'Assessments: Respiratory',
                        tableKey: 'table',
                        formColumn: '2'
                      }
                    ],
                    containerType: 'fieldset',
                    containerKey: 'breath',
                    tableCss: 'undefinedhide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'lul',
                              fqn: 'respiratory.table.breath.lul',
                              inputType: 'select',
                              label: 'LUL',
                              tableCss: 'trans-table-cell',
                              tableColumn: '13',
                              fieldset: 'breath',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Wheeze'
                                },
                                {
                                  text: 'Crackles'
                                },
                                {
                                  text: 'Absent'
                                },
                                {
                                  text: 'Deceased'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'rul',
                              fqn: 'respiratory.table.breath.rul',
                              inputType: 'select',
                              label: 'RUL',
                              tableCss: 'trans-table-cell',
                              tableColumn: '14',
                              fieldset: 'breath',
                              fsetRow: '1',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Wheeze'
                                },
                                {
                                  text: 'Crackles'
                                },
                                {
                                  text: 'Absent'
                                },
                                {
                                  text: 'Deceased'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              inputType: 'form-label',
                              tableCss: 'trans-table-cell hide-table-element',
                              tableColumn: '14',
                              fieldset: 'breath',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'rml',
                              fqn: 'respiratory.table.breath.rml',
                              inputType: 'select',
                              label: 'RML',
                              tableCss: 'trans-table-cell',
                              tableColumn: '15',
                              fieldset: 'breath',
                              fsetRow: '2',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Wheeze'
                                },
                                {
                                  text: 'Crackles'
                                },
                                {
                                  text: 'Absent'
                                },
                                {
                                  text: 'Deceased'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'lll',
                              fqn: 'respiratory.table.breath.lll',
                              inputType: 'select',
                              label: 'LLL',
                              tableCss: 'trans-table-cell',
                              tableColumn: '15',
                              fieldset: 'breath',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Wheeze'
                                },
                                {
                                  text: 'Crackles'
                                },
                                {
                                  text: 'Absent'
                                },
                                {
                                  text: 'Deceased'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'rll',
                              fqn: 'respiratory.table.breath.rll',
                              inputType: 'select',
                              label: 'RLL',
                              tableCss: 'trans-table-cell',
                              tableColumn: '16',
                              fieldset: 'breath',
                              fsetRow: '3',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Wheeze'
                                },
                                {
                                  text: 'Crackles'
                                },
                                {
                                  text: 'Absent'
                                },
                                {
                                  text: 'Deceased'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'respiratoryRhythm',
                              fqn: 'respiratory.table.breath.respiratoryRhythm',
                              inputType: 'select',
                              label: 'Respiratory rhythm',
                              tableCss: 'trans-table-cell',
                              tableColumn: '16',
                              fieldset: 'breath',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Regular'
                                },
                                {
                                  text: 'Irregular'
                                },
                                {
                                  text: 'Paradoxical'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'cough',
                              fqn: 'respiratory.table.breath.cough',
                              inputType: 'select',
                              label: 'Cough',
                              tableCss: 'trans-table-cell',
                              tableColumn: '17',
                              fieldset: 'breath',
                              fsetRow: '4',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'No'
                                },
                                {
                                  text: 'Nonreproductive'
                                },
                                {
                                  text: 'Productive'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'respiratoryDepth',
                              fqn: 'respiratory.table.breath.respiratoryDepth',
                              inputType: 'select',
                              label: 'Respiratory depth',
                              tableCss: 'trans-table-cell',
                              tableColumn: '17',
                              fieldset: 'breath',
                              fsetRow: '5',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Shallow'
                                },
                                {
                                  text: 'Deep'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'sputumColour',
                              fqn: 'respiratory.table.breath.sputumColour',
                              inputType: 'select',
                              label: 'Sputum colour',
                              tableCss: 'trans-table-cell',
                              tableColumn: '18',
                              fieldset: 'breath',
                              fsetRow: '5',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Mucoid'
                                },
                                {
                                  text: 'Purulent'
                                },
                                {
                                  text: 'Yellow-green'
                                },
                                {
                                  text: 'Rust-coloured'
                                },
                                {
                                  text: 'Pink, blood tinged'
                                },
                                {
                                  text: 'Pink, frothy'
                                },
                                {
                                  text: 'Profuse, colourless'
                                },
                                {
                                  text: 'Bloody'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'sputumComments',
                              fqn: 'respiratory.table.breath.sputumComments',
                              inputType: 'text',
                              label: 'Sputum comments',
                              tableCss: 'trans-table-cell',
                              tableColumn: '18',
                              fieldset: 'breath',
                              fsetRow: '6',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        }
                      ],
                      columnsCount: 2
                    }
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'generalComments',
                    fqn: 'respiratory.table.generalComments',
                    inputType: 'text',
                    label: 'General comments',
                    tableCss: 'trans-table-cell',
                    tableColumn: '19',
                    formCss: 'fullWidth',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    cardiovascular: {
      pageTitle: 'Assessments: Cardiovascular',
      pageDataKey: 'cardiovascular',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add a new cardiovascular assessment',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'cardiovascular.table.name',
              inputType: 'text',
              label: 'Name',
              tableCss: 'trans-table-cell',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'cardiovascular.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableCss: 'trans-table-cell',
              tableColumn: '2',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'unit',
              fqn: 'cardiovascular.table.unit',
              inputType: 'text',
              label: 'Unit',
              tableCss: 'trans-table-cell',
              tableColumn: '3',
              formCss: 'user_unit',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'cardiovascular.table.day',
              inputType: 'day',
              label: 'Day',
              tableCss: 'trans-table-cell',
              tableColumn: '4',
              formCss: 'user_day',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'cardiovascular.table.time',
              inputType: 'time',
              label: 'Time',
              tableCss: 'trans-table-cell',
              tableColumn: '5',
              formCss: 'user_time',
              formColumn: '5',
              formRow: '1',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'pulse',
              fqn: 'cardiovascular.table.pulse',
              inputType: 'select',
              label: 'Pulse',
              tableCss: 'trans-table-cell',
              tableColumn: '6',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Regular'
                },
                {
                  text: 'Irregular'
                },
                {
                  text: 'Normal'
                },
                {
                  text: 'Weak'
                },
                {
                  text: 'Bounding'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'skinAppearance',
              fqn: 'cardiovascular.table.skinAppearance',
              inputType: 'select',
              label: 'Skin appearance',
              tableCss: 'trans-table-cell',
              tableColumn: '7',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Pale'
                },
                {
                  text: 'Mottled'
                },
                {
                  text: 'Cyanotic'
                },
                {
                  text: 'Flushed'
                },
                {
                  text: 'Jaundiced'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'spacer1',
              inputType: 'form-label',
              tableCss: 'trans-table-cell hide-table-element',
              tableColumn: '8',
              formColumn: '1',
              formRow: '3',
              formOption: 'spacer',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'labelCapRefill',
              inputType: 'form-label',
              label: 'Cap refill',
              tableCss: 'trans-table-cell hide-table-element',
              tableColumn: '9',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'labelTemperature',
              inputType: 'form-label',
              label: 'Temperature',
              tableCss: 'trans-table-cell hide-table-element',
              tableColumn: '10',
              formColumn: '3',
              formRow: '3',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'labelPeripheral',
              inputType: 'form-label',
              label: 'Peripheral edema',
              tableCss: 'trans-table-cell hide-table-element',
              tableColumn: '11',
              formColumn: '4',
              formRow: '3',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'labelNailBed',
              inputType: 'form-label',
              label: 'Nail bed colour',
              tableCss: 'trans-table-cell hide-table-element',
              tableColumn: '12',
              formColumn: '5',
              formRow: '3',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'lableRight',
              inputType: 'form-label',
              label: 'Right hand',
              tableCss: 'trans-table-cell hide-table-element',
              tableColumn: '13',
              formColumn: '1',
              formRow: '4',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'lableLeftHand',
              inputType: 'form-label',
              label: 'Left hand',
              tableCss: 'trans-table-cell hide-table-element',
              tableColumn: '14',
              formColumn: '1',
              formRow: '5',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'labelRightFoot',
              inputType: 'form-label',
              label: 'Right foot',
              tableCss: 'trans-table-cell hide-table-element',
              tableColumn: '15',
              formColumn: '1',
              formRow: '6',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'labelLeftFoot',
              inputType: 'form-label',
              label: 'Left foot',
              tableCss: 'trans-table-cell hide-table-element',
              tableColumn: '16',
              formColumn: '1',
              formRow: '7',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'capRefillRightHand',
              fqn: 'cardiovascular.table.capRefillRightHand',
              inputType: 'select',
              label: 'Cap refill: Left hand',
              tableCss: 'trans-table-cell',
              tableColumn: '17',
              formColumn: '2',
              formRow: '4',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Delayed'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'capRefillLeftHand',
              fqn: 'cardiovascular.table.capRefillLeftHand',
              inputType: 'select',
              label: 'Cap refill: Right foot',
              tableCss: 'trans-table-cell',
              tableColumn: '18',
              formColumn: '2',
              formRow: '5',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Delayed'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'capRefillRightFoot',
              fqn: 'cardiovascular.table.capRefillRightFoot',
              inputType: 'select',
              label: 'Cap refill: Left foot',
              tableCss: 'trans-table-cell',
              tableColumn: '19',
              formColumn: '2',
              formRow: '6',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Delayed'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'capRefillLeftFoot',
              fqn: 'cardiovascular.table.capRefillLeftFoot',
              inputType: 'select',
              label: 'Temperature: Right hand',
              tableCss: 'trans-table-cell',
              tableColumn: '20',
              formColumn: '2',
              formRow: '7',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Delayed'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'temperatureRightHand',
              fqn: 'cardiovascular.table.temperatureRightHand',
              inputType: 'select',
              label: 'Temperature: Left hand',
              tableCss: 'trans-table-cell',
              tableColumn: '21',
              formColumn: '3',
              formRow: '4',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Warm'
                },
                {
                  text: 'Cool'
                },
                {
                  text: 'Hot'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'temperatureLeftHand',
              fqn: 'cardiovascular.table.temperatureLeftHand',
              inputType: 'select',
              label: 'Temperature: Right foot',
              tableCss: 'trans-table-cell',
              tableColumn: '22',
              formColumn: '3',
              formRow: '5',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Warm'
                },
                {
                  text: 'Cool'
                },
                {
                  text: 'Hot'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'temperatureRightFoot',
              fqn: 'cardiovascular.table.temperatureRightFoot',
              inputType: 'select',
              label: 'Temperature: Left foot',
              tableCss: 'trans-table-cell',
              tableColumn: '23',
              formColumn: '3',
              formRow: '6',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Warm'
                },
                {
                  text: 'Cool'
                },
                {
                  text: 'Hot'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'temperatureLeftFoot',
              fqn: 'cardiovascular.table.temperatureLeftFoot',
              inputType: 'select',
              label: 'Peripheral edema: Right hand',
              tableCss: 'trans-table-cell',
              tableColumn: '24',
              formColumn: '3',
              formRow: '7',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Warm'
                },
                {
                  text: 'Cool'
                },
                {
                  text: 'Hot'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'peripheralEdemaRightHand',
              fqn: 'cardiovascular.table.peripheralEdemaRightHand',
              inputType: 'select',
              label: 'Peripheral edema: Left hand',
              tableCss: 'trans-table-cell',
              tableColumn: '25',
              formColumn: '4',
              formRow: '4',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Ankle'
                },
                {
                  text: 'Pedal'
                },
                {
                  text: 'Sacral'
                },
                {
                  text: 'Pitting'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'peripheralEdemaLeftHand',
              fqn: 'cardiovascular.table.peripheralEdemaLeftHand',
              inputType: 'select',
              label: 'Peripheral edema: Right foot',
              tableCss: 'trans-table-cell',
              tableColumn: '26',
              formColumn: '4',
              formRow: '5',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Ankle'
                },
                {
                  text: 'Pedal'
                },
                {
                  text: 'Sacral'
                },
                {
                  text: 'Pitting'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'peripheralEdemaRightFoot',
              fqn: 'cardiovascular.table.peripheralEdemaRightFoot',
              inputType: 'select',
              label: 'Peripheral edema: Left foot',
              tableCss: 'trans-table-cell',
              tableColumn: '27',
              formColumn: '4',
              formRow: '6',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Ankle'
                },
                {
                  text: 'Pedal'
                },
                {
                  text: 'Sacral'
                },
                {
                  text: 'Pitting'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'peripheralEdemaLeftFoot',
              fqn: 'cardiovascular.table.peripheralEdemaLeftFoot',
              inputType: 'select',
              label: 'Nail bed colour: Right hand',
              tableCss: 'trans-table-cell',
              tableColumn: '28',
              formColumn: '4',
              formRow: '7',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Ankle'
                },
                {
                  text: 'Pedal'
                },
                {
                  text: 'Sacral'
                },
                {
                  text: 'Pitting'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'nailBedColourRightHand',
              fqn: 'cardiovascular.table.nailBedColourRightHand',
              inputType: 'select',
              label: 'Nail bed colour: Left hand',
              tableCss: 'trans-table-cell',
              tableColumn: '29',
              formColumn: '5',
              formRow: '4',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Pink'
                },
                {
                  text: 'Cyanotic'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'nailBedColourLeftHand',
              fqn: 'cardiovascular.table.nailBedColourLeftHand',
              inputType: 'select',
              label: 'Nail bed colour: Right Foot',
              tableCss: 'trans-table-cell',
              tableColumn: '30',
              formColumn: '5',
              formRow: '5',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Pink'
                },
                {
                  text: 'Cyanotic'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'nailBedColourRightFoot',
              fqn: 'cardiovascular.table.nailBedColourRightFoot',
              inputType: 'select',
              label: 'Nail bed colour: Left foot',
              tableCss: 'trans-table-cell',
              tableColumn: '31',
              formColumn: '5',
              formRow: '6',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Pink'
                },
                {
                  text: 'Cyanotic'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'nailBedColourLeftFoot',
              fqn: 'cardiovascular.table.nailBedColourLeftFoot',
              inputType: 'select',
              tableCss: 'trans-table-cell',
              tableColumn: '32',
              formColumn: '5',
              formRow: '7',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Pink'
                },
                {
                  text: 'Cyanotic'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'comments',
              fqn: 'cardiovascular.table.comments',
              inputType: 'text',
              label: 'Comments',
              tableCss: 'trans-table-cell',
              tableColumn: '33',
              fieldset: 'fullWidth',
              formColumn: '1',
              formRow: '8',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'cardiovascular.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableCss: 'trans-table-cell',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'cardiovascular.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableCss: 'trans-table-cell',
                    tableColumn: '2',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'unit',
                    fqn: 'cardiovascular.table.unit',
                    inputType: 'text',
                    label: 'Unit',
                    tableCss: 'trans-table-cell',
                    tableColumn: '3',
                    formCss: 'user_unit',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'cardiovascular.table.day',
                    inputType: 'day',
                    label: 'Day',
                    tableCss: 'trans-table-cell',
                    tableColumn: '4',
                    formCss: 'user_day',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'cardiovascular.table.time',
                    inputType: 'time',
                    label: 'Time',
                    tableCss: 'trans-table-cell',
                    tableColumn: '5',
                    formCss: 'user_time',
                    formColumn: '5',
                    formRow: '1',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'pulse',
                    fqn: 'cardiovascular.table.pulse',
                    inputType: 'select',
                    label: 'Pulse',
                    tableCss: 'trans-table-cell',
                    tableColumn: '6',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Regular'
                      },
                      {
                        text: 'Irregular'
                      },
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Weak'
                      },
                      {
                        text: 'Bounding'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'skinAppearance',
                    fqn: 'cardiovascular.table.skinAppearance',
                    inputType: 'select',
                    label: 'Skin appearance',
                    tableCss: 'trans-table-cell',
                    tableColumn: '7',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Pale'
                      },
                      {
                        text: 'Mottled'
                      },
                      {
                        text: 'Cyanotic'
                      },
                      {
                        text: 'Flushed'
                      },
                      {
                        text: 'Jaundiced'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'spacer1',
                    inputType: 'form-label',
                    tableCss: 'trans-table-cell hide-table-element',
                    tableColumn: '8',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'labelCapRefill',
                    inputType: 'form-label',
                    label: 'Cap refill',
                    tableCss: 'trans-table-cell hide-table-element',
                    tableColumn: '9',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'labelTemperature',
                    inputType: 'form-label',
                    label: 'Temperature',
                    tableCss: 'trans-table-cell hide-table-element',
                    tableColumn: '10',
                    formColumn: '3',
                    formRow: '3',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'labelPeripheral',
                    inputType: 'form-label',
                    label: 'Peripheral edema',
                    tableCss: 'trans-table-cell hide-table-element',
                    tableColumn: '11',
                    formColumn: '4',
                    formRow: '3',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'labelNailBed',
                    inputType: 'form-label',
                    label: 'Nail bed colour',
                    tableCss: 'trans-table-cell hide-table-element',
                    tableColumn: '12',
                    formColumn: '5',
                    formRow: '3',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '4',
                elements: [
                  {
                    elementKey: 'lableRight',
                    inputType: 'form-label',
                    label: 'Right hand',
                    tableCss: 'trans-table-cell hide-table-element',
                    tableColumn: '13',
                    formColumn: '1',
                    formRow: '4',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'capRefillRightHand',
                    fqn: 'cardiovascular.table.capRefillRightHand',
                    inputType: 'select',
                    label: 'Cap refill: Left hand',
                    tableCss: 'trans-table-cell',
                    tableColumn: '17',
                    formColumn: '2',
                    formRow: '4',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Delayed'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'temperatureRightHand',
                    fqn: 'cardiovascular.table.temperatureRightHand',
                    inputType: 'select',
                    label: 'Temperature: Left hand',
                    tableCss: 'trans-table-cell',
                    tableColumn: '21',
                    formColumn: '3',
                    formRow: '4',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Warm'
                      },
                      {
                        text: 'Cool'
                      },
                      {
                        text: 'Hot'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'peripheralEdemaRightHand',
                    fqn: 'cardiovascular.table.peripheralEdemaRightHand',
                    inputType: 'select',
                    label: 'Peripheral edema: Left hand',
                    tableCss: 'trans-table-cell',
                    tableColumn: '25',
                    formColumn: '4',
                    formRow: '4',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'No'
                      },
                      {
                        text: 'Ankle'
                      },
                      {
                        text: 'Pedal'
                      },
                      {
                        text: 'Sacral'
                      },
                      {
                        text: 'Pitting'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'nailBedColourRightHand',
                    fqn: 'cardiovascular.table.nailBedColourRightHand',
                    inputType: 'select',
                    label: 'Nail bed colour: Left hand',
                    tableCss: 'trans-table-cell',
                    tableColumn: '29',
                    formColumn: '5',
                    formRow: '4',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Pink'
                      },
                      {
                        text: 'Cyanotic'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '5',
                elements: [
                  {
                    elementKey: 'lableLeftHand',
                    inputType: 'form-label',
                    label: 'Left hand',
                    tableCss: 'trans-table-cell hide-table-element',
                    tableColumn: '14',
                    formColumn: '1',
                    formRow: '5',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'capRefillLeftHand',
                    fqn: 'cardiovascular.table.capRefillLeftHand',
                    inputType: 'select',
                    label: 'Cap refill: Right foot',
                    tableCss: 'trans-table-cell',
                    tableColumn: '18',
                    formColumn: '2',
                    formRow: '5',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Delayed'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'temperatureLeftHand',
                    fqn: 'cardiovascular.table.temperatureLeftHand',
                    inputType: 'select',
                    label: 'Temperature: Right foot',
                    tableCss: 'trans-table-cell',
                    tableColumn: '22',
                    formColumn: '3',
                    formRow: '5',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Warm'
                      },
                      {
                        text: 'Cool'
                      },
                      {
                        text: 'Hot'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'peripheralEdemaLeftHand',
                    fqn: 'cardiovascular.table.peripheralEdemaLeftHand',
                    inputType: 'select',
                    label: 'Peripheral edema: Right foot',
                    tableCss: 'trans-table-cell',
                    tableColumn: '26',
                    formColumn: '4',
                    formRow: '5',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'No'
                      },
                      {
                        text: 'Ankle'
                      },
                      {
                        text: 'Pedal'
                      },
                      {
                        text: 'Sacral'
                      },
                      {
                        text: 'Pitting'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'nailBedColourLeftHand',
                    fqn: 'cardiovascular.table.nailBedColourLeftHand',
                    inputType: 'select',
                    label: 'Nail bed colour: Right Foot',
                    tableCss: 'trans-table-cell',
                    tableColumn: '30',
                    formColumn: '5',
                    formRow: '5',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Pink'
                      },
                      {
                        text: 'Cyanotic'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '6',
                elements: [
                  {
                    elementKey: 'labelRightFoot',
                    inputType: 'form-label',
                    label: 'Right foot',
                    tableCss: 'trans-table-cell hide-table-element',
                    tableColumn: '15',
                    formColumn: '1',
                    formRow: '6',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'capRefillRightFoot',
                    fqn: 'cardiovascular.table.capRefillRightFoot',
                    inputType: 'select',
                    label: 'Cap refill: Left foot',
                    tableCss: 'trans-table-cell',
                    tableColumn: '19',
                    formColumn: '2',
                    formRow: '6',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Delayed'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'temperatureRightFoot',
                    fqn: 'cardiovascular.table.temperatureRightFoot',
                    inputType: 'select',
                    label: 'Temperature: Left foot',
                    tableCss: 'trans-table-cell',
                    tableColumn: '23',
                    formColumn: '3',
                    formRow: '6',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Warm'
                      },
                      {
                        text: 'Cool'
                      },
                      {
                        text: 'Hot'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'peripheralEdemaRightFoot',
                    fqn: 'cardiovascular.table.peripheralEdemaRightFoot',
                    inputType: 'select',
                    label: 'Peripheral edema: Left foot',
                    tableCss: 'trans-table-cell',
                    tableColumn: '27',
                    formColumn: '4',
                    formRow: '6',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'No'
                      },
                      {
                        text: 'Ankle'
                      },
                      {
                        text: 'Pedal'
                      },
                      {
                        text: 'Sacral'
                      },
                      {
                        text: 'Pitting'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'nailBedColourRightFoot',
                    fqn: 'cardiovascular.table.nailBedColourRightFoot',
                    inputType: 'select',
                    label: 'Nail bed colour: Left foot',
                    tableCss: 'trans-table-cell',
                    tableColumn: '31',
                    formColumn: '5',
                    formRow: '6',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Pink'
                      },
                      {
                        text: 'Cyanotic'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '7',
                elements: [
                  {
                    elementKey: 'labelLeftFoot',
                    inputType: 'form-label',
                    label: 'Left foot',
                    tableCss: 'trans-table-cell hide-table-element',
                    tableColumn: '16',
                    formColumn: '1',
                    formRow: '7',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'capRefillLeftFoot',
                    fqn: 'cardiovascular.table.capRefillLeftFoot',
                    inputType: 'select',
                    label: 'Temperature: Right hand',
                    tableCss: 'trans-table-cell',
                    tableColumn: '20',
                    formColumn: '2',
                    formRow: '7',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Delayed'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'temperatureLeftFoot',
                    fqn: 'cardiovascular.table.temperatureLeftFoot',
                    inputType: 'select',
                    label: 'Peripheral edema: Right hand',
                    tableCss: 'trans-table-cell',
                    tableColumn: '24',
                    formColumn: '3',
                    formRow: '7',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Warm'
                      },
                      {
                        text: 'Cool'
                      },
                      {
                        text: 'Hot'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'peripheralEdemaLeftFoot',
                    fqn: 'cardiovascular.table.peripheralEdemaLeftFoot',
                    inputType: 'select',
                    label: 'Nail bed colour: Right hand',
                    tableCss: 'trans-table-cell',
                    tableColumn: '28',
                    formColumn: '4',
                    formRow: '7',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'No'
                      },
                      {
                        text: 'Ankle'
                      },
                      {
                        text: 'Pedal'
                      },
                      {
                        text: 'Sacral'
                      },
                      {
                        text: 'Pitting'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'nailBedColourLeftFoot',
                    fqn: 'cardiovascular.table.nailBedColourLeftFoot',
                    inputType: 'select',
                    tableCss: 'trans-table-cell',
                    tableColumn: '32',
                    formColumn: '5',
                    formRow: '7',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Pink'
                      },
                      {
                        text: 'Cyanotic'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '8',
                elements: [
                  {
                    elementKey: 'comments',
                    fqn: 'cardiovascular.table.comments',
                    inputType: 'text',
                    label: 'Comments',
                    tableCss: 'trans-table-cell',
                    tableColumn: '33',
                    fieldset: 'fullWidth',
                    formColumn: '1',
                    formRow: '8',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    gastrointestinal: {
      pageTitle: 'Assessments: Gastrointestinal',
      pageDataKey: 'gastrointestinal',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add a new gastrointestinal assessment',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'gastrointestinal.table.name',
              inputType: 'text',
              label: 'Name',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'bowel',
              fqn: 'gastrointestinal.table.bowel',
              inputType: 'fieldset',
              label: 'Bowel',
              fieldset: 'bowel',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              elements: [
                {
                  elementKey: 'bowelMovement',
                  fqn: 'gastrointestinal.table.bowel.bowelMovement',
                  inputType: 'select',
                  label: 'Bowel',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.bowel',
                  page: 'Assessments: Gastrointestinal',
                  options: [
                    {
                      text: 'Constipation'
                    },
                    {
                      text: 'Diarrhea'
                    },
                    {
                      text: 'Melena'
                    },
                    {
                      text: 'Incontinent'
                    }
                  ],
                  tableKey: 'table'
                },
                {
                  elementKey: 'lastBm',
                  fqn: 'gastrointestinal.table.bowel.lastBm',
                  inputType: 'text',
                  label: 'Last BM',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.bowel',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table'
                },
                {
                  elementKey: 'bowelSounds',
                  fqn: 'gastrointestinal.table.bowel.bowelSounds',
                  inputType: 'select',
                  label: 'Bowel sounds',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.bowel',
                  page: 'Assessments: Gastrointestinal',
                  options: [
                    {
                      text: 'None'
                    },
                    {
                      text: 'LUQ'
                    },
                    {
                      text: 'RUQ'
                    },
                    {
                      text: 'LLQ'
                    },
                    {
                      text: 'RLQ'
                    }
                  ],
                  tableKey: 'table'
                },
                {
                  elementKey: 'stoolColour',
                  fqn: 'gastrointestinal.table.bowel.stoolColour',
                  inputType: 'select',
                  label: 'Stool colour',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.bowel',
                  page: 'Assessments: Gastrointestinal',
                  options: [
                    {
                      text: 'Brown'
                    },
                    {
                      text: 'Green'
                    },
                    {
                      text: 'Clay coloured'
                    },
                    {
                      text: 'Yellow'
                    },
                    {
                      text: 'Black'
                    },
                    {
                      text: 'Bright red'
                    },
                    {
                      text: 'Dark red'
                    }
                  ],
                  tableKey: 'table'
                },
                {
                  elementKey: 'stoolDescription',
                  fqn: 'gastrointestinal.table.bowel.stoolDescription',
                  inputType: 'text',
                  label: 'Description',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.bowel',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table'
                },
                {
                  elementKey: 'stoolAmount',
                  fqn: 'gastrointestinal.table.bowel.stoolAmount',
                  inputType: 'text',
                  label: 'Amount',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.bowel',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table'
                },
                {
                  elementKey: 'stoolSource',
                  fqn: 'gastrointestinal.table.bowel.stoolSource',
                  inputType: 'select',
                  label: 'Source',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.bowel',
                  page: 'Assessments: Gastrointestinal',
                  options: [
                    {
                      text: 'Observed'
                    },
                    {
                      text: 'As per patient observed'
                    },
                    {
                      text: 'Not observed'
                    }
                  ],
                  tableKey: 'table'
                },
                {
                  elementKey: 'comments',
                  fqn: 'gastrointestinal.table.bowel.comments',
                  inputType: 'textarea',
                  label: 'Comments',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.bowel',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table'
                }
              ],
              containerType: 'fieldset',
              containerKey: 'bowel',
              tableCss: 'undefinedhide-table-element',
              tableKey: 'table',
              formFieldSet: {
                rows: [],
                columnsCount: 0
              }
            },
            {
              elementKey: 'unit',
              fqn: 'gastrointestinal.table.unit',
              inputType: 'text',
              label: 'Unit',
              formCss: 'user_unit',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'gastrointestinal.table.day',
              inputType: 'day',
              label: 'Day',
              formCss: 'user_day',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'gastrointestinal.table.time',
              inputType: 'time',
              label: 'Time',
              formCss: 'user_time',
              formColumn: '5',
              formRow: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'soft',
              fqn: 'gastrointestinal.table.abdomen.soft',
              inputType: 'checkbox',
              label: 'Soft',
              fieldset: 'abdomen',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'tender',
              fqn: 'gastrointestinal.table.abdomen.tender',
              inputType: 'checkbox',
              label: 'Tender',
              fieldset: 'abdomen',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'rigid',
              fqn: 'gastrointestinal.table.abdomen.rigid',
              inputType: 'checkbox',
              label: 'Rigid',
              fieldset: 'abdomen',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'guarding',
              fqn: 'gastrointestinal.table.abdomen.guarding',
              inputType: 'checkbox',
              label: 'Guarding',
              fieldset: 'abdomen',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'distended',
              fqn: 'gastrointestinal.table.abdomen.distended',
              inputType: 'checkbox',
              label: 'Distended',
              fieldset: 'abdomen',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'scars',
              fqn: 'gastrointestinal.table.abdomen.scars',
              inputType: 'checkbox',
              label: 'Scars',
              fieldset: 'abdomen',
              fsetRow: '6',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'pain',
              fqn: 'gastrointestinal.table.abdomen.pain',
              inputType: 'select',
              label: 'Abdominal pain',
              fieldset: 'abdomen',
              fsetRow: '7',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'Yes'
                },
                {
                  text: 'No'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              fqn: 'gastrointestinal.table.abdomen.',
              inputType: 'form-label',
              label: 'If answered yes, please complete the pain assessent',
              fieldset: 'abdomen',
              fsetRow: '8',
              fsetCol: '1',
              formOption: 'labelWithPageRef',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableCss: 'undefinedhide-table-element',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'abdomen',
              fqn: 'gastrointestinal.table.abdomen',
              inputType: 'fieldset',
              label: 'Abdomen',
              fieldset: 'abdomen',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              elements: [
                {
                  elementKey: 'soft',
                  fqn: 'gastrointestinal.table.abdomen.soft',
                  inputType: 'checkbox',
                  label: 'Soft',
                  fieldset: 'abdomen',
                  fsetRow: '1',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.abdomen',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'tender',
                  fqn: 'gastrointestinal.table.abdomen.tender',
                  inputType: 'checkbox',
                  label: 'Tender',
                  fieldset: 'abdomen',
                  fsetRow: '2',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.abdomen',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'rigid',
                  fqn: 'gastrointestinal.table.abdomen.rigid',
                  inputType: 'checkbox',
                  label: 'Rigid',
                  fieldset: 'abdomen',
                  fsetRow: '3',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.abdomen',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'guarding',
                  fqn: 'gastrointestinal.table.abdomen.guarding',
                  inputType: 'checkbox',
                  label: 'Guarding',
                  fieldset: 'abdomen',
                  fsetRow: '4',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.abdomen',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'distended',
                  fqn: 'gastrointestinal.table.abdomen.distended',
                  inputType: 'checkbox',
                  label: 'Distended',
                  fieldset: 'abdomen',
                  fsetRow: '5',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.abdomen',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'scars',
                  fqn: 'gastrointestinal.table.abdomen.scars',
                  inputType: 'checkbox',
                  label: 'Scars',
                  fieldset: 'abdomen',
                  fsetRow: '6',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.abdomen',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'pain',
                  fqn: 'gastrointestinal.table.abdomen.pain',
                  inputType: 'select',
                  label: 'Abdominal pain',
                  fieldset: 'abdomen',
                  fsetRow: '7',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.abdomen',
                  page: 'Assessments: Gastrointestinal',
                  options: [
                    {
                      text: 'Yes'
                    },
                    {
                      text: 'No'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  fqn: 'gastrointestinal.table.abdomen.',
                  inputType: 'form-label',
                  label: 'If answered yes, please complete the pain assessent',
                  fieldset: 'abdomen',
                  fsetRow: '8',
                  fsetCol: '1',
                  formOption: 'labelWithPageRef',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.abdomen',
                  page: 'Assessments: Gastrointestinal',
                  tableCss: 'undefinedhide-table-element',
                  tableKey: 'table',
                  formColumn: '1'
                }
              ],
              containerType: 'fieldset',
              containerKey: 'abdomen',
              tableCss: 'undefinedhide-table-element',
              tableKey: 'table',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'soft',
                        fqn: 'gastrointestinal.table.abdomen.soft',
                        inputType: 'checkbox',
                        label: 'Soft',
                        fieldset: 'abdomen',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '2',
                    elements: [
                      {
                        elementKey: 'tender',
                        fqn: 'gastrointestinal.table.abdomen.tender',
                        inputType: 'checkbox',
                        label: 'Tender',
                        fieldset: 'abdomen',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '3',
                    elements: [
                      {
                        elementKey: 'rigid',
                        fqn: 'gastrointestinal.table.abdomen.rigid',
                        inputType: 'checkbox',
                        label: 'Rigid',
                        fieldset: 'abdomen',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '4',
                    elements: [
                      {
                        elementKey: 'guarding',
                        fqn: 'gastrointestinal.table.abdomen.guarding',
                        inputType: 'checkbox',
                        label: 'Guarding',
                        fieldset: 'abdomen',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '5',
                    elements: [
                      {
                        elementKey: 'distended',
                        fqn: 'gastrointestinal.table.abdomen.distended',
                        inputType: 'checkbox',
                        label: 'Distended',
                        fieldset: 'abdomen',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '6',
                    elements: [
                      {
                        elementKey: 'scars',
                        fqn: 'gastrointestinal.table.abdomen.scars',
                        inputType: 'checkbox',
                        label: 'Scars',
                        fieldset: 'abdomen',
                        fsetRow: '6',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '7',
                    elements: [
                      {
                        elementKey: 'pain',
                        fqn: 'gastrointestinal.table.abdomen.pain',
                        inputType: 'select',
                        label: 'Abdominal pain',
                        fieldset: 'abdomen',
                        fsetRow: '7',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'Yes'
                          },
                          {
                            text: 'No'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '8',
                    elements: [
                      {
                        fqn: 'gastrointestinal.table.abdomen.',
                        inputType: 'form-label',
                        label: 'If answered yes, please complete the pain assessent',
                        fieldset: 'abdomen',
                        fsetRow: '8',
                        fsetCol: '1',
                        formOption: 'labelWithPageRef',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableCss: 'undefinedhide-table-element',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  }
                ],
                columnsCount: 1
              }
            },
            {
              elementKey: 'none',
              fqn: 'gastrointestinal.table.emesis.none',
              inputType: 'select',
              label: 'None',
              fieldset: 'emesis',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.emesis',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'Need'
                },
                {
                  text: 'Data'
                },
                {
                  text: 'Here'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'nausea',
              fqn: 'gastrointestinal.table.emesis.nausea',
              inputType: 'text',
              label: 'Nausea',
              fieldset: 'emesis',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.emesis',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'vomiting',
              fqn: 'gastrointestinal.table.emesis.vomiting',
              inputType: 'text',
              label: 'Vomiting',
              fieldset: 'emesis',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.emesis',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'profession',
              fqn: 'gastrointestinal.table.profession',
              inputType: 'text',
              label: 'Profession',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'description',
              fqn: 'gastrointestinal.table.emesis.description',
              inputType: 'text',
              label: 'Description',
              fieldset: 'emesis',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.emesis',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'amount',
              fqn: 'gastrointestinal.table.emesis.amount',
              inputType: 'select',
              label: 'Amount',
              fieldset: 'emesis',
              fsetRow: '6',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.emesis',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'Small'
                },
                {
                  text: 'Moderate'
                },
                {
                  text: 'Large'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'emesis',
              fqn: 'gastrointestinal.table.emesis',
              inputType: 'fieldset',
              label: 'Emesis',
              fieldset: 'emesis',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              elements: [
                {
                  elementKey: 'none',
                  fqn: 'gastrointestinal.table.emesis.none',
                  inputType: 'select',
                  label: 'None',
                  fieldset: 'emesis',
                  fsetRow: '1',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.emesis',
                  page: 'Assessments: Gastrointestinal',
                  options: [
                    {
                      text: 'Need'
                    },
                    {
                      text: 'Data'
                    },
                    {
                      text: 'Here'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'nausea',
                  fqn: 'gastrointestinal.table.emesis.nausea',
                  inputType: 'text',
                  label: 'Nausea',
                  fieldset: 'emesis',
                  fsetRow: '2',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.emesis',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'vomiting',
                  fqn: 'gastrointestinal.table.emesis.vomiting',
                  inputType: 'text',
                  label: 'Vomiting',
                  fieldset: 'emesis',
                  fsetRow: '3',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.emesis',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'colour',
                  fqn: 'gastrointestinal.table.emesis.colour',
                  inputType: 'select',
                  label: 'Emesis colour',
                  fieldset: 'emesis',
                  fsetRow: '4',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.emesis',
                  page: 'Assessments: Gastrointestinal',
                  options: [
                    {
                      text: 'Need'
                    },
                    {
                      text: 'Data'
                    },
                    {
                      text: 'Here'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'description',
                  fqn: 'gastrointestinal.table.emesis.description',
                  inputType: 'text',
                  label: 'Description',
                  fieldset: 'emesis',
                  fsetRow: '5',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.emesis',
                  page: 'Assessments: Gastrointestinal',
                  tableKey: 'table',
                  formColumn: '1'
                },
                {
                  elementKey: 'amount',
                  fqn: 'gastrointestinal.table.emesis.amount',
                  inputType: 'select',
                  label: 'Amount',
                  fieldset: 'emesis',
                  fsetRow: '6',
                  fsetCol: '1',
                  pageDataKey: 'gastrointestinal',
                  dataParent: 'gastrointestinal.table.emesis',
                  page: 'Assessments: Gastrointestinal',
                  options: [
                    {
                      text: 'Small'
                    },
                    {
                      text: 'Moderate'
                    },
                    {
                      text: 'Large'
                    }
                  ],
                  tableKey: 'table',
                  formColumn: '1'
                }
              ],
              containerType: 'fieldset',
              containerKey: 'emesis',
              tableCss: 'undefinedhide-table-element',
              tableKey: 'table',
              formFieldSet: {
                rows: [
                  {
                    formRow: '1',
                    elements: [
                      {
                        elementKey: 'none',
                        fqn: 'gastrointestinal.table.emesis.none',
                        inputType: 'select',
                        label: 'None',
                        fieldset: 'emesis',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.emesis',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'Need'
                          },
                          {
                            text: 'Data'
                          },
                          {
                            text: 'Here'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '2',
                    elements: [
                      {
                        elementKey: 'nausea',
                        fqn: 'gastrointestinal.table.emesis.nausea',
                        inputType: 'text',
                        label: 'Nausea',
                        fieldset: 'emesis',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.emesis',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '3',
                    elements: [
                      {
                        elementKey: 'vomiting',
                        fqn: 'gastrointestinal.table.emesis.vomiting',
                        inputType: 'text',
                        label: 'Vomiting',
                        fieldset: 'emesis',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.emesis',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '4',
                    elements: [
                      {
                        elementKey: 'colour',
                        fqn: 'gastrointestinal.table.emesis.colour',
                        inputType: 'select',
                        label: 'Emesis colour',
                        fieldset: 'emesis',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.emesis',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'Need'
                          },
                          {
                            text: 'Data'
                          },
                          {
                            text: 'Here'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '5',
                    elements: [
                      {
                        elementKey: 'description',
                        fqn: 'gastrointestinal.table.emesis.description',
                        inputType: 'text',
                        label: 'Description',
                        fieldset: 'emesis',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.emesis',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  },
                  {
                    formRow: '6',
                    elements: [
                      {
                        elementKey: 'amount',
                        fqn: 'gastrointestinal.table.emesis.amount',
                        inputType: 'select',
                        label: 'Amount',
                        fieldset: 'emesis',
                        fsetRow: '6',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.emesis',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'Small'
                          },
                          {
                            text: 'Moderate'
                          },
                          {
                            text: 'Large'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ]
                  }
                ],
                columnsCount: 1
              }
            },
            {
              inputType: 'fieldset',
              fieldset: 'eating',
              formColumn: '1',
              formRow: '2',
              formOption: 'withoutLabel',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              elements: [],
              containerType: 'fieldset',
              tableCss: 'undefinedhide-table-element',
              formFieldSet: {
                rows: [],
                columnsCount: 0
              }
            },
            {
              elementKey: 'eating',
              fqn: 'gastrointestinal.table.eating',
              inputType: 'select',
              label: 'Eating',
              fieldset: 'eating',
              fsetRow: '1',
              fsetCol: '1',
              formOption: 'boldLabel',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'Regular'
                },
                {
                  text: 'Difficult'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'reason',
              fqn: 'gastrointestinal.table.reason',
              inputType: 'text',
              label: 'Reason',
              fieldset: 'eating',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'npoSinceDate',
              fqn: 'gastrointestinal.table.npoSinceDate',
              inputType: 'day',
              label: 'NPO since',
              fieldset: 'eating',
              fsetRow: '3',
              fsetCol: '1',
              formOption: 'boldLabel',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'npoSinceTime',
              fqn: 'gastrointestinal.table.npoSinceTime',
              inputType: 'time',
              label: 'Time',
              fieldset: 'eating',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'bowelMovement',
              fqn: 'gastrointestinal.table.bowel.bowelMovement',
              inputType: 'select',
              label: 'Bowel',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.bowel',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'Constipation'
                },
                {
                  text: 'Diarrhea'
                },
                {
                  text: 'Melena'
                },
                {
                  text: 'Incontinent'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'lastBm',
              fqn: 'gastrointestinal.table.bowel.lastBm',
              inputType: 'text',
              label: 'Last BM',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.bowel',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'bowelSounds',
              fqn: 'gastrointestinal.table.bowel.bowelSounds',
              inputType: 'select',
              label: 'Bowel sounds',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.bowel',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'None'
                },
                {
                  text: 'LUQ'
                },
                {
                  text: 'RUQ'
                },
                {
                  text: 'LLQ'
                },
                {
                  text: 'RLQ'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'stoolColour',
              fqn: 'gastrointestinal.table.bowel.stoolColour',
              inputType: 'select',
              label: 'Stool colour',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.bowel',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'Brown'
                },
                {
                  text: 'Green'
                },
                {
                  text: 'Clay coloured'
                },
                {
                  text: 'Yellow'
                },
                {
                  text: 'Black'
                },
                {
                  text: 'Bright red'
                },
                {
                  text: 'Dark red'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'stoolDescription',
              fqn: 'gastrointestinal.table.bowel.stoolDescription',
              inputType: 'text',
              label: 'Description',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.bowel',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'stoolAmount',
              fqn: 'gastrointestinal.table.bowel.stoolAmount',
              inputType: 'text',
              label: 'Amount',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.bowel',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'stoolSource',
              fqn: 'gastrointestinal.table.bowel.stoolSource',
              inputType: 'select',
              label: 'Source',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.bowel',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'Observed'
                },
                {
                  text: 'As per patient observed'
                },
                {
                  text: 'Not observed'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'comments',
              fqn: 'gastrointestinal.table.bowel.comments',
              inputType: 'textarea',
              label: 'Comments',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.bowel',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'colour',
              fqn: 'gastrointestinal.table.emesis.colour',
              inputType: 'select',
              label: 'Emesis colour',
              fieldset: 'emesis',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.emesis',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'Need'
                },
                {
                  text: 'Data'
                },
                {
                  text: 'Here'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'gastrointestinal.table.name',
                    inputType: 'text',
                    label: 'Name',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'gastrointestinal.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'unit',
                    fqn: 'gastrointestinal.table.unit',
                    inputType: 'text',
                    label: 'Unit',
                    formCss: 'user_unit',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'gastrointestinal.table.day',
                    inputType: 'day',
                    label: 'Day',
                    formCss: 'user_day',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'gastrointestinal.table.time',
                    inputType: 'time',
                    label: 'Time',
                    formCss: 'user_time',
                    formColumn: '5',
                    formRow: '1',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'abdomen',
                    fqn: 'gastrointestinal.table.abdomen',
                    inputType: 'fieldset',
                    label: 'Abdomen',
                    fieldset: 'abdomen',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    elements: [
                      {
                        elementKey: 'soft',
                        fqn: 'gastrointestinal.table.abdomen.soft',
                        inputType: 'checkbox',
                        label: 'Soft',
                        fieldset: 'abdomen',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'tender',
                        fqn: 'gastrointestinal.table.abdomen.tender',
                        inputType: 'checkbox',
                        label: 'Tender',
                        fieldset: 'abdomen',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'rigid',
                        fqn: 'gastrointestinal.table.abdomen.rigid',
                        inputType: 'checkbox',
                        label: 'Rigid',
                        fieldset: 'abdomen',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'guarding',
                        fqn: 'gastrointestinal.table.abdomen.guarding',
                        inputType: 'checkbox',
                        label: 'Guarding',
                        fieldset: 'abdomen',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'distended',
                        fqn: 'gastrointestinal.table.abdomen.distended',
                        inputType: 'checkbox',
                        label: 'Distended',
                        fieldset: 'abdomen',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'scars',
                        fqn: 'gastrointestinal.table.abdomen.scars',
                        inputType: 'checkbox',
                        label: 'Scars',
                        fieldset: 'abdomen',
                        fsetRow: '6',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'pain',
                        fqn: 'gastrointestinal.table.abdomen.pain',
                        inputType: 'select',
                        label: 'Abdominal pain',
                        fieldset: 'abdomen',
                        fsetRow: '7',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'Yes'
                          },
                          {
                            text: 'No'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        fqn: 'gastrointestinal.table.abdomen.',
                        inputType: 'form-label',
                        label: 'If answered yes, please complete the pain assessent',
                        fieldset: 'abdomen',
                        fsetRow: '8',
                        fsetCol: '1',
                        formOption: 'labelWithPageRef',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.abdomen',
                        page: 'Assessments: Gastrointestinal',
                        tableCss: 'undefinedhide-table-element',
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ],
                    containerType: 'fieldset',
                    containerKey: 'abdomen',
                    tableCss: 'undefinedhide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'soft',
                              fqn: 'gastrointestinal.table.abdomen.soft',
                              inputType: 'checkbox',
                              label: 'Soft',
                              fieldset: 'abdomen',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'tender',
                              fqn: 'gastrointestinal.table.abdomen.tender',
                              inputType: 'checkbox',
                              label: 'Tender',
                              fieldset: 'abdomen',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'rigid',
                              fqn: 'gastrointestinal.table.abdomen.rigid',
                              inputType: 'checkbox',
                              label: 'Rigid',
                              fieldset: 'abdomen',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'guarding',
                              fqn: 'gastrointestinal.table.abdomen.guarding',
                              inputType: 'checkbox',
                              label: 'Guarding',
                              fieldset: 'abdomen',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'distended',
                              fqn: 'gastrointestinal.table.abdomen.distended',
                              inputType: 'checkbox',
                              label: 'Distended',
                              fieldset: 'abdomen',
                              fsetRow: '5',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'scars',
                              fqn: 'gastrointestinal.table.abdomen.scars',
                              inputType: 'checkbox',
                              label: 'Scars',
                              fieldset: 'abdomen',
                              fsetRow: '6',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '7',
                          elements: [
                            {
                              elementKey: 'pain',
                              fqn: 'gastrointestinal.table.abdomen.pain',
                              inputType: 'select',
                              label: 'Abdominal pain',
                              fieldset: 'abdomen',
                              fsetRow: '7',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              options: [
                                {
                                  text: 'Yes'
                                },
                                {
                                  text: 'No'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '8',
                          elements: [
                            {
                              fqn: 'gastrointestinal.table.abdomen.',
                              inputType: 'form-label',
                              label: 'If answered yes, please complete the pain assessent',
                              fieldset: 'abdomen',
                              fsetRow: '8',
                              fsetCol: '1',
                              formOption: 'labelWithPageRef',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableCss: 'undefinedhide-table-element',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'emesis',
                    fqn: 'gastrointestinal.table.emesis',
                    inputType: 'fieldset',
                    label: 'Emesis',
                    fieldset: 'emesis',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    elements: [
                      {
                        elementKey: 'none',
                        fqn: 'gastrointestinal.table.emesis.none',
                        inputType: 'select',
                        label: 'None',
                        fieldset: 'emesis',
                        fsetRow: '1',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.emesis',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'Need'
                          },
                          {
                            text: 'Data'
                          },
                          {
                            text: 'Here'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'nausea',
                        fqn: 'gastrointestinal.table.emesis.nausea',
                        inputType: 'text',
                        label: 'Nausea',
                        fieldset: 'emesis',
                        fsetRow: '2',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.emesis',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'vomiting',
                        fqn: 'gastrointestinal.table.emesis.vomiting',
                        inputType: 'text',
                        label: 'Vomiting',
                        fieldset: 'emesis',
                        fsetRow: '3',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.emesis',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'colour',
                        fqn: 'gastrointestinal.table.emesis.colour',
                        inputType: 'select',
                        label: 'Emesis colour',
                        fieldset: 'emesis',
                        fsetRow: '4',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.emesis',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'Need'
                          },
                          {
                            text: 'Data'
                          },
                          {
                            text: 'Here'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'description',
                        fqn: 'gastrointestinal.table.emesis.description',
                        inputType: 'text',
                        label: 'Description',
                        fieldset: 'emesis',
                        fsetRow: '5',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.emesis',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table',
                        formColumn: '1'
                      },
                      {
                        elementKey: 'amount',
                        fqn: 'gastrointestinal.table.emesis.amount',
                        inputType: 'select',
                        label: 'Amount',
                        fieldset: 'emesis',
                        fsetRow: '6',
                        fsetCol: '1',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.emesis',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'Small'
                          },
                          {
                            text: 'Moderate'
                          },
                          {
                            text: 'Large'
                          }
                        ],
                        tableKey: 'table',
                        formColumn: '1'
                      }
                    ],
                    containerType: 'fieldset',
                    containerKey: 'emesis',
                    tableCss: 'undefinedhide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'none',
                              fqn: 'gastrointestinal.table.emesis.none',
                              inputType: 'select',
                              label: 'None',
                              fieldset: 'emesis',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.emesis',
                              page: 'Assessments: Gastrointestinal',
                              options: [
                                {
                                  text: 'Need'
                                },
                                {
                                  text: 'Data'
                                },
                                {
                                  text: 'Here'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'nausea',
                              fqn: 'gastrointestinal.table.emesis.nausea',
                              inputType: 'text',
                              label: 'Nausea',
                              fieldset: 'emesis',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.emesis',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'vomiting',
                              fqn: 'gastrointestinal.table.emesis.vomiting',
                              inputType: 'text',
                              label: 'Vomiting',
                              fieldset: 'emesis',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.emesis',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'colour',
                              fqn: 'gastrointestinal.table.emesis.colour',
                              inputType: 'select',
                              label: 'Emesis colour',
                              fieldset: 'emesis',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.emesis',
                              page: 'Assessments: Gastrointestinal',
                              options: [
                                {
                                  text: 'Need'
                                },
                                {
                                  text: 'Data'
                                },
                                {
                                  text: 'Here'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'description',
                              fqn: 'gastrointestinal.table.emesis.description',
                              inputType: 'text',
                              label: 'Description',
                              fieldset: 'emesis',
                              fsetRow: '5',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.emesis',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'amount',
                              fqn: 'gastrointestinal.table.emesis.amount',
                              inputType: 'select',
                              label: 'Amount',
                              fieldset: 'emesis',
                              fsetRow: '6',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.emesis',
                              page: 'Assessments: Gastrointestinal',
                              options: [
                                {
                                  text: 'Small'
                                },
                                {
                                  text: 'Moderate'
                                },
                                {
                                  text: 'Large'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    fqn: 'gastrointestinal.table.abdomen.',
                    inputType: 'form-label',
                    label: 'If answered yes, please complete the pain assessent',
                    fieldset: 'abdomen',
                    fsetRow: '8',
                    fsetCol: '1',
                    formOption: 'labelWithPageRef',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table.abdomen',
                    page: 'Assessments: Gastrointestinal',
                    tableCss: 'undefinedhide-table-element',
                    tableKey: 'table',
                    formColumn: '1'
                  },
                  {
                    elementKey: 'bowel',
                    fqn: 'gastrointestinal.table.bowel',
                    inputType: 'fieldset',
                    label: 'Bowel',
                    fieldset: 'bowel',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    elements: [
                      {
                        elementKey: 'bowelMovement',
                        fqn: 'gastrointestinal.table.bowel.bowelMovement',
                        inputType: 'select',
                        label: 'Bowel',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.bowel',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'Constipation'
                          },
                          {
                            text: 'Diarrhea'
                          },
                          {
                            text: 'Melena'
                          },
                          {
                            text: 'Incontinent'
                          }
                        ],
                        tableKey: 'table'
                      },
                      {
                        elementKey: 'lastBm',
                        fqn: 'gastrointestinal.table.bowel.lastBm',
                        inputType: 'text',
                        label: 'Last BM',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.bowel',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table'
                      },
                      {
                        elementKey: 'bowelSounds',
                        fqn: 'gastrointestinal.table.bowel.bowelSounds',
                        inputType: 'select',
                        label: 'Bowel sounds',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.bowel',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'None'
                          },
                          {
                            text: 'LUQ'
                          },
                          {
                            text: 'RUQ'
                          },
                          {
                            text: 'LLQ'
                          },
                          {
                            text: 'RLQ'
                          }
                        ],
                        tableKey: 'table'
                      },
                      {
                        elementKey: 'stoolColour',
                        fqn: 'gastrointestinal.table.bowel.stoolColour',
                        inputType: 'select',
                        label: 'Stool colour',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.bowel',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'Brown'
                          },
                          {
                            text: 'Green'
                          },
                          {
                            text: 'Clay coloured'
                          },
                          {
                            text: 'Yellow'
                          },
                          {
                            text: 'Black'
                          },
                          {
                            text: 'Bright red'
                          },
                          {
                            text: 'Dark red'
                          }
                        ],
                        tableKey: 'table'
                      },
                      {
                        elementKey: 'stoolDescription',
                        fqn: 'gastrointestinal.table.bowel.stoolDescription',
                        inputType: 'text',
                        label: 'Description',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.bowel',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table'
                      },
                      {
                        elementKey: 'stoolAmount',
                        fqn: 'gastrointestinal.table.bowel.stoolAmount',
                        inputType: 'text',
                        label: 'Amount',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.bowel',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table'
                      },
                      {
                        elementKey: 'stoolSource',
                        fqn: 'gastrointestinal.table.bowel.stoolSource',
                        inputType: 'select',
                        label: 'Source',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.bowel',
                        page: 'Assessments: Gastrointestinal',
                        options: [
                          {
                            text: 'Observed'
                          },
                          {
                            text: 'As per patient observed'
                          },
                          {
                            text: 'Not observed'
                          }
                        ],
                        tableKey: 'table'
                      },
                      {
                        elementKey: 'comments',
                        fqn: 'gastrointestinal.table.bowel.comments',
                        inputType: 'textarea',
                        label: 'Comments',
                        pageDataKey: 'gastrointestinal',
                        dataParent: 'gastrointestinal.table.bowel',
                        page: 'Assessments: Gastrointestinal',
                        tableKey: 'table'
                      }
                    ],
                    containerType: 'fieldset',
                    containerKey: 'bowel',
                    tableCss: 'undefinedhide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [],
                      columnsCount: 0
                    }
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    genitourinary: {
      pageTitle: 'Assessments: Genitourinary',
      pageDataKey: 'genitourinary',
      pageData: {}
    }
  }
}
