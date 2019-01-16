module.exports = function() {
  return {
    visit: {
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
          tableKey: 'aments',
          addButtonText: 'Add new neurological assessment',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'neurological.aments.name',
              inputType: 'text',
              label: 'Name',
              formCss: 'is-3',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments',
              page: 'Assessments: Neurological',
              tableKey: 'aments'
            },
            {
              elementKey: 'profession',
              fqn: 'neurological.aments.profession',
              inputType: 'text',
              label: 'Profession',
              formCss: 'is-3',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments',
              page: 'Assessments: Neurological',
              tableKey: 'aments'
            },
            {
              elementKey: 'unit',
              fqn: 'neurological.aments.unit',
              inputType: 'text',
              label: 'Unit',
              formCss: 'is-2',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments',
              page: 'Assessments: Neurological',
              tableKey: 'aments'
            },
            {
              elementKey: 'day',
              fqn: 'neurological.aments.day',
              inputType: 'day',
              label: 'Day',
              formCss: 'is-2',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments',
              page: 'Assessments: Neurological',
              tableKey: 'aments'
            },
            {
              elementKey: 'time',
              fqn: 'neurological.aments.time',
              inputType: 'time',
              label: 'Time',
              formCss: 'is-2',
              formColumn: '5',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.aments',
              page: 'Assessments: Neurological',
              tableKey: 'aments'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'neurological.aments.name',
                    inputType: 'text',
                    label: 'Name',
                    formCss: 'is-3',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.aments',
                    page: 'Assessments: Neurological',
                    tableKey: 'aments'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'neurological.aments.profession',
                    inputType: 'text',
                    label: 'Profession',
                    formCss: 'is-3',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.aments',
                    page: 'Assessments: Neurological',
                    tableKey: 'aments'
                  },
                  {
                    elementKey: 'unit',
                    fqn: 'neurological.aments.unit',
                    inputType: 'text',
                    label: 'Unit',
                    formCss: 'is-2',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.aments',
                    page: 'Assessments: Neurological',
                    tableKey: 'aments'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'neurological.aments.day',
                    inputType: 'day',
                    label: 'Day',
                    formCss: 'is-2',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.aments',
                    page: 'Assessments: Neurological',
                    tableKey: 'aments'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'neurological.aments.time',
                    inputType: 'time',
                    label: 'Time',
                    formCss: 'is-2',
                    formColumn: '5',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.aments',
                    page: 'Assessments: Neurological',
                    tableKey: 'aments'
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ],
      pageData: {
        aments: []
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
              formCss: 'is-3',
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
              formCss: 'is-3',
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
              formCss: 'is-2',
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
              formCss: 'is-2',
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
              formCss: 'is-2',
              formColumn: '5',
              formRow: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            },
            {
              elementKey: 'generalComments',
              fqn: 'respiratory.table.generalComments',
              inputType: 'text',
              label: 'General comments',
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
                    formCss: 'is-3',
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
                    formCss: 'is-3',
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
                    formCss: 'is-2',
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
                    formCss: 'is-2',
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
                    formCss: 'is-2',
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
                formRow: '3',
                elements: [
                  {
                    elementKey: 'generalComments',
                    fqn: 'respiratory.table.generalComments',
                    inputType: 'text',
                    label: 'General comments',
                    formCss: 'fullWidth',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  }
                ]
              },
              null
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
              formCss: 'is-3',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'comments',
              fqn: 'cardiovascular.table.comments',
              inputType: 'text',
              label: 'Comments',
              fieldset: 'fullWidth',
              formColumn: '1',
              formRow: '8',
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
              formCss: 'is-2',
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
              formCss: 'is-2',
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
              formCss: 'is-2',
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
              inputType: 'label',
              label: '-',
              formColumn: '1',
              formRow: '3',
              formOption: 'spacer',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              inputType: 'label',
              label: 'Cap refill',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Cap refill'
                }
              ]
            },
            {
              inputType: 'label',
              label: 'Temperature',
              formColumn: '3',
              formRow: '3',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Temperature'
                }
              ]
            },
            {
              inputType: 'label',
              label: 'Peripheral edema',
              formColumn: '4',
              formRow: '3',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Peripheral edema'
                }
              ]
            },
            {
              inputType: 'label',
              label: 'Nail bed colour',
              formColumn: '5',
              formRow: '3',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Nail bed colour'
                }
              ]
            },
            {
              inputType: 'label',
              label: 'Right hand',
              formColumn: '1',
              formRow: '4',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Right hand'
                }
              ]
            },
            {
              inputType: 'label',
              label: 'Left hand',
              formColumn: '1',
              formRow: '5',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Left hand'
                }
              ]
            },
            {
              inputType: 'label',
              label: 'Right foot',
              formColumn: '1',
              formRow: '6',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Right foot'
                }
              ]
            },
            {
              inputType: 'label',
              label: 'Left foot',
              formColumn: '1',
              formRow: '7',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Left foot'
                }
              ]
            },
            {
              elementKey: 'profession',
              fqn: 'cardiovascular.table.profession',
              inputType: 'text',
              label: 'Profession',
              formCss: 'is-3',
              formColumn: '2',
              formRow: '1',
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
              elementKey: 'capRefillRightHand',
              fqn: 'cardiovascular.table.capRefillRightHand',
              inputType: 'select',
              label: 'Cap refill: Left hand',
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
                    formCss: 'is-3',
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
                    formCss: 'is-3',
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
                    formCss: 'is-2',
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
                    formCss: 'is-2',
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
                    formCss: 'is-2',
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
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
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
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
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
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
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
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
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
                    inputType: 'label',
                    label: '-',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
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
              formCss: 'is-3',
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
              formCss: 'is-3',
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
              formCss: 'is-2',
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
              formCss: 'is-2',
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
              formCss: 'is-2',
              formColumn: '5',
              formRow: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
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
                    fqn: 'gastrointestinal.table.name',
                    inputType: 'text',
                    label: 'Name',
                    formCss: 'is-3',
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
                    formCss: 'is-3',
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
                    formCss: 'is-2',
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
                    formCss: 'is-2',
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
                    formCss: 'is-2',
                    formColumn: '5',
                    formRow: '1',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
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
    }
  }
}
