/* eslint-disable quotes */
module.exports = function() {
  return {
    progressNotes: {
      pageTitle: 'Progres notes',
      pageDataKey: 'progressNotes',
      hasTable: true,
      tables: [
        {
          addButtonText: 'Add progress note',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'progressNotes.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'progressNotes',
              dataParent: 'progressNotes',
              page: 'Progress notes'
            },
            {
              elementKey: 'profession',
              fqn: 'progressNotes.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '2',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'progressNotes',
              dataParent: 'progressNotes',
              page: 'Progress notes'
            },
            {
              elementKey: 'unit',
              fqn: 'progressNotes.unit',
              inputType: 'text',
              label: 'Unit',
              tableColumn: '3',
              formCss: 'user_unit',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'progressNotes',
              dataParent: 'progressNotes',
              page: 'Progress notes'
            },
            {
              elementKey: 'day',
              fqn: 'progressNotes.day',
              inputType: 'day',
              label: 'Day',
              tableColumn: '4',
              formCss: 'user_day',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'progressNotes',
              dataParent: 'progressNotes',
              page: 'Progress notes'
            },
            {
              elementKey: 'time',
              fqn: 'progressNotes.time',
              inputType: 'time',
              label: 'Time',
              tableColumn: '5',
              formCss: 'user_time',
              formColumn: '5',
              formRow: '1',
              pageDataKey: 'progressNotes',
              dataParent: 'progressNotes',
              page: 'Progress notes'
            },
            {
              elementKey: 'notes',
              fqn: 'progressNotes.notes',
              inputType: 'textarea',
              label: 'Progress notes',
              tableColumn: '6',
              formCss: 'fullWidth',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'progressNotes',
              dataParent: 'progressNotes',
              page: 'Progress notes'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'progressNotes.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'progressNotes',
                    dataParent: 'progressNotes',
                    page: 'Progress notes'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'progressNotes.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '2',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'progressNotes',
                    dataParent: 'progressNotes',
                    page: 'Progress notes'
                  },
                  {
                    elementKey: 'unit',
                    fqn: 'progressNotes.unit',
                    inputType: 'text',
                    label: 'Unit',
                    tableColumn: '3',
                    formCss: 'user_unit',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'progressNotes',
                    dataParent: 'progressNotes',
                    page: 'Progress notes'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'progressNotes.day',
                    inputType: 'day',
                    label: 'Day',
                    tableColumn: '4',
                    formCss: 'user_day',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'progressNotes',
                    dataParent: 'progressNotes',
                    page: 'Progress notes'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'progressNotes.time',
                    inputType: 'time',
                    label: 'Time',
                    tableColumn: '5',
                    formCss: 'user_time',
                    formColumn: '5',
                    formRow: '1',
                    pageDataKey: 'progressNotes',
                    dataParent: 'progressNotes',
                    page: 'Progress notes'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'notes',
                    fqn: 'progressNotes.notes',
                    inputType: 'textarea',
                    label: 'Progress notes',
                    tableColumn: '6',
                    formCss: 'fullWidth',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'progressNotes',
                    dataParent: 'progressNotes',
                    page: 'Progress notes'
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ],
      pageData: {
        undefined: []
      }
    },
    carePlan: {
      pageTitle: 'Care Plan',
      pageDataKey: 'carePlan',
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: '1',
            elements: [
              {
                elementKey: 'name',
                fqn: 'carePlan.name',
                inputType: 'text',
                label: 'Name',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'carePlan',
                dataParent: 'carePlan',
                page: 'Interprofessional plan of care'
              },
              {
                elementKey: 'profession',
                fqn: 'carePlan.profession',
                inputType: 'text',
                label: 'Profession',
                formColumn: '2',
                formRow: '1',
                pageDataKey: 'carePlan',
                dataParent: 'carePlan',
                page: 'Interprofessional plan of care'
              },
              {
                elementKey: 'day',
                fqn: 'carePlan.day',
                inputType: 'day',
                label: 'Day',
                formColumn: '3',
                formRow: '1',
                pageDataKey: 'carePlan',
                dataParent: 'carePlan',
                page: 'Interprofessional plan of care'
              },
              {
                elementKey: 'time',
                fqn: 'carePlan.time',
                inputType: 'time',
                label: 'Time',
                formColumn: '4',
                formRow: '1',
                pageDataKey: 'carePlan',
                dataParent: 'carePlan',
                page: 'Interprofessional plan of care'
              }
            ]
          },
          {
            formRow: '2',
            elements: [
              {
                elementKey: 'goal',
                fqn: 'carePlan.goal',
                inputType: 'text',
                label: 'Goal of care',
                formColumn: '1',
                formRow: '2',
                pageDataKey: 'carePlan',
                dataParent: 'carePlan',
                page: 'Interprofessional plan of care'
              },
              {
                elementKey: 'clinical',
                fqn: 'carePlan.clinical',
                inputType: 'text',
                label: 'Clinical issue',
                formColumn: '2',
                formRow: '2',
                pageDataKey: 'carePlan',
                dataParent: 'carePlan',
                page: 'Interprofessional plan of care'
              },
              {
                elementKey: 'details',
                fqn: 'carePlan.details',
                inputType: 'text',
                label: 'Details of clinical issue',
                formColumn: '3',
                formRow: '2',
                pageDataKey: 'carePlan',
                dataParent: 'carePlan',
                page: 'Interprofessional plan of care'
              }
            ]
          },
          {
            formRow: '3',
            elements: [
              {
                elementKey: 'interventions',
                fqn: 'carePlan.interventions',
                inputType: 'text',
                label: 'Interventions',
                formColumn: '1',
                formRow: '3',
                pageDataKey: 'carePlan',
                dataParent: 'carePlan',
                page: 'Interprofessional plan of care'
              },
              {
                elementKey: 'evaluation',
                fqn: 'carePlan.evaluation',
                inputType: 'text',
                label: 'Evaluation of intervention',
                formColumn: '2',
                formRow: '3',
                pageDataKey: 'carePlan',
                dataParent: 'carePlan',
                page: 'Interprofessional plan of care'
              },
              {
                elementKey: 'status',
                fqn: 'carePlan.status',
                inputType: 'select',
                label: 'Status',
                formColumn: '3',
                formRow: '3',
                pageDataKey: 'carePlan',
                dataParent: 'carePlan',
                page: 'Interprofessional plan of care',
                options: [
                  {
                    text: 'Active'
                  },
                  {
                    text: 'Complete'
                  }
                ]
              }
            ]
          }
        ],
        columnsCount: 4
      },
      pageData: {}
    },
    consultants: {
      pageTitle: 'Consults',
      pageDataKey: 'consultants',
      hasForm: true,
      page_form: {
        rows: [],
        columnsCount: 0
      },
      pageData: {}
    },
    labResults: {
      pageTitle: 'Laboratory results',
      pageDataKey: 'labResults',
      hasForm: true,
      page_form: {
        rows: [],
        columnsCount: 0
      },
      pageData: {}
    },
    medicalImaging: {
      pageTitle: 'Medical imaging',
      pageDataKey: 'medicalImaging',
      hasForm: true,
      page_form: {
        rows: [],
        columnsCount: 0
      },
      pageData: {}
    },
    operationReports: {
      pageTitle: 'Operative reports and anaesthesia record',
      pageDataKey: 'operationReports',
      hasForm: true,
      page_form: {
        rows: [],
        columnsCount: 0
      },
      pageData: {}
    }
  }
}
