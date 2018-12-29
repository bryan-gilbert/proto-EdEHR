module.exports = function() { return{
  'currentVisit': {
    'fqn': 'currentVisit',
    'inputType': 'topLevel',
    'children': [
      {
        'fqn': 'currentVisit.Visit_details',
        'parentFQN': 'currentVisit',
        'topLevel': 'CurrentVisit',
        'inputType': 'page',
        'navUrl': './current/details',
        'children': [
          {
            'fqn': 'currentVisit.Visit_details.Admission_day',
            'parentFQN': 'currentVisit.Visit_details',
            'topLevel': 'CurrentVisit',
            'label': 'Admission day',
            'inputType': 'text field - day',
            'dataFrom': 'case',
            'dataFirstCaseStudy': 'Day 0',
            'mandatory': 'yes'
          },
          {
            'fqn': 'currentVisit.Visit_details.Admission_time',
            'parentFQN': 'currentVisit.Visit_details',
            'topLevel': 'CurrentVisit',
            'label': 'Admission time',
            'inputType': 'text field - time',
            'dataFrom': 'case',
            'dataFirstCaseStudy': '0.75',
            'mandatory': 'yes'
          },
          {
            'fqn': 'currentVisit.Visit_details.Consent_for_treatment',
            'parentFQN': 'currentVisit.Visit_details',
            'topLevel': 'CurrentVisit',
            'label': 'Consent for treatment',
            'inputType': 'checkbox',
            'dataFrom': 'case',
            'dataFirstCaseStudy': 'checked'
          },
          {
            'fqn': 'currentVisit.Visit_details.Admission_status',
            'parentFQN': 'currentVisit.Visit_details',
            'topLevel': 'CurrentVisit',
            'label': 'Admission status',
            'inputType': 'dropdown',
            'options': 'Admission in progress-NL-Admitted-NL-Inpatient-NL-Outpatient-NL-Surgical day care-NL-Discharge pending-NL-Discharged',
            'dataFrom': 'case',
            'dataFirstCaseStudy': 'Admitted',
            'mandatory': 'yes',
            'notes': 'I left \'other\' with a text field out of this for MVP'
          },
          {
            'fqn': 'currentVisit.Visit_details.Admitting_diagnosis',
            'parentFQN': 'currentVisit.Visit_details',
            'topLevel': 'CurrentVisit',
            'label': 'Admitting diagnosis',
            'inputType': 'text box',
            'dataFrom': 'case',
            'dataFirstCaseStudy': 'COPD',
            'questionsForTheGroup': 'I had a note \'Link to SNOMED\' what does that mean?'
          },
          {
            'fqn': 'currentVisit.Visit_details.Patient_location',
            'parentFQN': 'currentVisit.Visit_details',
            'topLevel': 'CurrentVisit',
            'label': 'Patient location',
            'inputType': 'text box',
            'dataFrom': 'case',
            'dataFirstCaseStudy': 'Emergency room',
            'helperText': 'hospital, ward #, room #, home, out patient clinic',
            'mandatory': 'yes'
          }
        ]
      },
      {
        'fqn': 'currentVisit.Vital_signs',
        'parentFQN': 'currentVisit',
        'topLevel': 'CurrentVisit',
        'inputType': 'table',
        'navUrl': './current/vital-signs',
        'children': [
          {
            'fqn': 'currentVisit.Vital_signs.Temperature',
            'parentFQN': 'currentVisit.Vital_signs',
            'topLevel': 'CurrentVisit',
            'inputType': 'fieldset',
            'children': [
              {
                'fqn': 'currentVisit.Vital_signs.Temperature.Temperature',
                'parentFQN': 'currentVisit.Vital_signs.Temperature',
                'topLevel': 'CurrentVisit',
                'label': 'Temperature',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '36.5 C',
                'notes': 'Admin user would be able to enter multiple records in this table.'
              },
              {
                'fqn': 'currentVisit.Vital_signs.Temperature.Source',
                'parentFQN': 'currentVisit.Vital_signs.Temperature',
                'topLevel': 'CurrentVisit',
                'label': 'Source',
                'inputType': 'dropdown',
                'options': 'oral-NL-axilla-NL-rectal-NL-tympanic',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Axilla'
              }
            ]
          },
          {
            'fqn': 'currentVisit.Vital_signs.Pulse',
            'parentFQN': 'currentVisit.Vital_signs',
            'topLevel': 'CurrentVisit',
            'inputType': 'fieldset',
            'children': [
              {
                'fqn': 'currentVisit.Vital_signs.Pulse.Rate',
                'parentFQN': 'currentVisit.Vital_signs.Pulse',
                'topLevel': 'CurrentVisit',
                'label': 'Rate',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '96'
              },
              {
                'fqn': 'currentVisit.Vital_signs.Pulse.Rhythm',
                'parentFQN': 'currentVisit.Vital_signs.Pulse',
                'topLevel': 'CurrentVisit',
                'label': 'Rhythm',
                'inputType': 'dropdown',
                'options': 'regular-NL-irregular',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'regular'
              },
              {
                'fqn': 'currentVisit.Vital_signs.Pulse.Strength',
                'parentFQN': 'currentVisit.Vital_signs.Pulse',
                'topLevel': 'CurrentVisit',
                'label': 'Strength',
                'inputType': 'dropdown',
                'options': 'strong-NL-medium-NL-weak',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'strong'
              }
            ]
          },
          {
            'fqn': 'currentVisit.Vital_signs.Blood_Pressure',
            'parentFQN': 'currentVisit.Vital_signs',
            'topLevel': 'CurrentVisit',
            'inputType': 'fieldset',
            'children': [
              {
                'fqn': 'currentVisit.Vital_signs.Blood_Pressure.Systolic',
                'parentFQN': 'currentVisit.Vital_signs.Blood_Pressure',
                'topLevel': 'CurrentVisit',
                'label': 'Systolic',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '180'
              },
              {
                'fqn': 'currentVisit.Vital_signs.Blood_Pressure.Diastolic',
                'parentFQN': 'currentVisit.Vital_signs.Blood_Pressure',
                'topLevel': 'CurrentVisit',
                'label': 'Diastolic',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '90'
              },
              {
                'fqn': 'currentVisit.Vital_signs.Blood_Pressure.Patient_position',
                'parentFQN': 'currentVisit.Vital_signs.Blood_Pressure',
                'topLevel': 'CurrentVisit',
                'label': 'Patient position',
                'inputType': 'dropdown',
                'options': 'lying-NL-sitting-NL-standing',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'sitting'
              }
            ]
          }
        ]
      },
      {
        'fqn': 'currentVisit.Assessments',
        'parentFQN': 'currentVisit',
        'topLevel': 'CurrentVisit',
        'label': 'Assessments',
        'inputType': 'nav_group',
        'navUrl': './current/assessments/neurological',
        'children': [
          {
            'fqn': 'currentVisit.Assessments.Neurological',
            'parentFQN': 'currentVisit.Assessments',
            'topLevel': 'CurrentVisit',
            'label': 'Neurological',
            'inputType': 'table',
            'navUrl': './current/assessments/neurological',
            'children': [
              {
                'fqn': 'currentVisit.Assessments.Neurological.Name',
                'parentFQN': 'currentVisit.Assessments.Neurological',
                'topLevel': 'CurrentVisit',
                'label': 'Name',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Jason',
                'notes': 'Field label should link to the Glasglow Coma Scale'
              },
              {
                'fqn': 'currentVisit.Assessments.Neurological.Profession',
                'parentFQN': 'currentVisit.Assessments.Neurological',
                'topLevel': 'CurrentVisit',
                'label': 'Profession',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'RN'
              },
              {
                'fqn': 'currentVisit.Assessments.Neurological.Unit',
                'parentFQN': 'currentVisit.Assessments.Neurological',
                'topLevel': 'CurrentVisit',
                'label': 'Unit',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'ER'
              },
              {
                'fqn': 'currentVisit.Assessments.Neurological.Day',
                'parentFQN': 'currentVisit.Assessments.Neurological',
                'topLevel': 'CurrentVisit',
                'label': 'Day',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0'
              },
              {
                'fqn': 'currentVisit.Assessments.Neurological.Time',
                'parentFQN': 'currentVisit.Assessments.Neurological',
                'topLevel': 'CurrentVisit',
                'label': 'Time',
                'inputType': 'text field - time',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0.8125'
              },
              {
                'fqn': 'currentVisit.Assessments.Neurological.Status',
                'parentFQN': 'currentVisit.Assessments.Neurological',
                'topLevel': 'CurrentVisit',
                'label': 'Status',
                'inputType': 'multi select dropdown',
                'options': 'Alert-NL-Oriented-NL-Confused-NL-Drowsy-NL-Unresponsive-NL-Dizziness-NL-Blurred vision',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '(Alert and Oriented are ticked)'
              },
              {
                'fqn': 'currentVisit.Assessments.Neurological.Loss_of_conciousness',
                'parentFQN': 'currentVisit.Assessments.Neurological',
                'topLevel': 'CurrentVisit',
                'label': 'Loss of conciousness',
                'inputType': 'dropdown',
                'options': 'No-NL-Yes-NL-Unknown',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'No'
              },
              {
                'fqn': 'currentVisit.Assessments.Neurological.Glasgow_Coma_Scale',
                'parentFQN': 'currentVisit.Assessments.Neurological',
                'topLevel': 'CurrentVisit',
                'label': 'Glasgow Coma Scale',
                'inputType': 'fieldset',
                'children': [
                  {
                    'fqn': 'currentVisit.Assessments.Neurological.Glasgow_Coma_Scale.Eye_opening',
                    'parentFQN': 'currentVisit.Assessments.Neurological.Glasgow_Coma_Scale',
                    'topLevel': 'CurrentVisit',
                    'label': 'Eye opening',
                    'inputType': 'dropdown',
                    'options': 'Spontaneous-NL-To sound-NL-To pressure-NL-None-NL-Non testable',
                    'dataFrom': 'case',
                    'dataFirstCaseStudy': 'Spontaneous'
                  },
                  {
                    'fqn': 'currentVisit.Assessments.Neurological.Glasgow_Coma_Scale.Verbal_response',
                    'parentFQN': 'currentVisit.Assessments.Neurological.Glasgow_Coma_Scale',
                    'topLevel': 'CurrentVisit',
                    'label': 'Verbal response',
                    'inputType': 'dropdown',
                    'options': 'Oriented-NL-Confused-NL-Words-NL-Sounds-NL-None-NL-Non testable',
                    'dataFrom': 'case',
                    'dataFirstCaseStudy': 'Oriented'
                  },
                  {
                    'fqn': 'currentVisit.Assessments.Neurological.Glasgow_Coma_Scale.Best_motor_response',
                    'parentFQN': 'currentVisit.Assessments.Neurological.Glasgow_Coma_Scale',
                    'topLevel': 'CurrentVisit',
                    'label': 'Best motor response',
                    'inputType': 'dropdown',
                    'options': 'Obeys commands-NL-Localising-NL-Normal flexion-NL-Extension-NL-None-NL-Non testable',
                    'dataFrom': 'case',
                    'dataFirstCaseStudy': 'Obeys commands'
                  },
                  {
                    'fqn': 'currentVisit.Assessments.Neurological.Glasgow_Coma_Scale.Total',
                    'parentFQN': 'currentVisit.Assessments.Neurological.Glasgow_Coma_Scale',
                    'topLevel': 'CurrentVisit',
                    'label': 'Total',
                    'inputType': 'dynamic text',
                    'dataFrom': 'case',
                    'inputFormat': '##/15',
                    'dataFirstCaseStudy': '(15 - calculated by system)'
                  }
                ]
              },
              {
                'fqn': 'currentVisit.Assessments.Neurological.Left_pupil',
                'parentFQN': 'currentVisit.Assessments.Neurological',
                'topLevel': 'CurrentVisit',
                'label': 'Left pupil',
                'inputType': 'fieldset',
                'children': [
                  {
                    'fqn': 'currentVisit.Assessments.Neurological.Left_pupil.Size',
                    'parentFQN': 'currentVisit.Assessments.Neurological.Left_pupil',
                    'topLevel': 'CurrentVisit',
                    'label': 'Size',
                    'inputType': 'dropdown',
                    'options': '1-NL-2-NL-3-NL-4-NL-5-NL-6-NL-7-NL-8-NL-9',
                    'dataFrom': 'case',
                    'dataFirstCaseStudy': '2'
                  },
                  {
                    'fqn': 'currentVisit.Assessments.Neurological.Left_pupil.Response_to_light',
                    'parentFQN': 'currentVisit.Assessments.Neurological.Left_pupil',
                    'topLevel': 'CurrentVisit',
                    'label': 'Response to light',
                    'inputType': 'dropdown',
                    'options': 'Brisk-NL-Sluggish-NL-Fixed',
                    'dataFrom': 'case',
                    'dataFirstCaseStudy': 'Brisk'
                  }
                ]
              },
              {
                'fqn': 'currentVisit.Assessments.Neurological.Right_pupil',
                'parentFQN': 'currentVisit.Assessments.Neurological',
                'topLevel': 'CurrentVisit',
                'label': 'Right pupil',
                'inputType': 'fieldset',
                'children': [
                  {
                    'fqn': 'currentVisit.Assessments.Neurological.Right_pupil.Size',
                    'parentFQN': 'currentVisit.Assessments.Neurological.Right_pupil',
                    'topLevel': 'CurrentVisit',
                    'label': 'Size',
                    'inputType': 'dropdown',
                    'options': '1-NL-2-NL-3-NL-4-NL-5-NL-6-NL-7-NL-8-NL-9',
                    'dataFrom': 'case',
                    'dataFirstCaseStudy': '2'
                  },
                  {
                    'fqn': 'currentVisit.Assessments.Neurological.Right_pupil.Response_to_light',
                    'parentFQN': 'currentVisit.Assessments.Neurological.Right_pupil',
                    'topLevel': 'CurrentVisit',
                    'label': 'Response to light',
                    'inputType': 'dropdown',
                    'options': 'Brisk-NL-Sluggish-NL-Fixed',
                    'dataFrom': 'case',
                    'dataFirstCaseStudy': 'Brisk'
                  }
                ]
              },
              {
                'fqn': 'currentVisit.Assessments.Neurological.Both_pupil',
                'parentFQN': 'currentVisit.Assessments.Neurological',
                'topLevel': 'CurrentVisit',
                'label': 'Both pupils',
                'inputType': 'fieldset',
                'children': [
                  {
                    'fqn': 'currentVisit.Assessments.Neurological.Both_pupil.Equal',
                    'parentFQN': 'currentVisit.Assessments.Neurological.Both_pupil',
                    'topLevel': 'CurrentVisit',
                    'label': 'no label',
                    'inputType': 'dropdown',
                    'options': 'Equal-NL-Unequal',
                    'dataFrom': 'case',
                    'dataFirstCaseStudy': 'Equal'
                  },
                  {
                    'fqn': 'currentVisit.Assessments.Neurological.Both_pupil.Facial_symmetry',
                    'parentFQN': 'currentVisit.Assessments.Neurological.Both_pupil',
                    'topLevel': 'CurrentVisit',
                    'label': 'Facial symmetry',
                    'inputType': 'dropdown',
                    'options': 'Yes-NL-No',
                    'dataFrom': 'case',
                    'dataFirstCaseStudy': 'Yes'
                  }
                ]
              },
              {
                'fqn': 'currentVisit.Assessments.Neurological.Facial_weakness',
                'parentFQN': 'currentVisit.Assessments.Neurological',
                'topLevel': 'CurrentVisit',
                'label': 'Facial weakness',
                'inputType': 'dropdown',
                'options': 'None-NL-Left side-NL-Right side-NL-Both sides',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'None'
              },
              {
                'fqn': 'currentVisit.Assessments.Neurological.Aspiration_risk',
                'parentFQN': 'currentVisit.Assessments.Neurological',
                'topLevel': 'CurrentVisit',
                'label': 'Aspiration risk',
                'inputType': 'dropdown',
                'options': 'Yes-NL-No',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'No'
              },
              {
                'fqn': 'currentVisit.Assessments.Neurological.Falls_risk',
                'parentFQN': 'currentVisit.Assessments.Neurological',
                'topLevel': 'CurrentVisit',
                'label': 'Falls risk',
                'inputType': 'dropdown',
                'options': 'Yes-NL-No',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Yes'
              },
              {
                'fqn': 'currentVisit.Assessments.Neurological.Stoke_assessment',
                'parentFQN': 'currentVisit.Assessments.Neurological',
                'topLevel': 'CurrentVisit',
                'label': 'Stoke assessment',
                'inputType': 'text'
              },
              {
                'fqn': 'currentVisit.Assessments.Neurological.Comments',
                'parentFQN': 'currentVisit.Assessments.Neurological',
                'topLevel': 'CurrentVisit',
                'label': 'Comments',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '(no comments)'
              }
            ]
          },
          {
            'fqn': 'currentVisit.Assessments.Respiratory',
            'parentFQN': 'currentVisit.Assessments',
            'topLevel': 'CurrentVisit',
            'inputType': 'table',
            'navUrl': './current/assessments/respiratory',
            'children': [
              {
                'fqn': 'currentVisit.Assessments.Respiratory.Name',
                'parentFQN': 'currentVisit.Assessments.Respiratory',
                'topLevel': 'CurrentVisit',
                'label': 'Name',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Jason',
                'notes': 'Field label should link to the Glasglow Coma Scale'
              },
              {
                'fqn': 'currentVisit.Assessments.Respiratory.Profession',
                'parentFQN': 'currentVisit.Assessments.Respiratory',
                'topLevel': 'CurrentVisit',
                'label': 'Profession',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'RN'
              },
              {
                'fqn': 'currentVisit.Assessments.Respiratory.Unit',
                'parentFQN': 'currentVisit.Assessments.Respiratory',
                'topLevel': 'CurrentVisit',
                'label': 'Unit',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'ER'
              },
              {
                'fqn': 'currentVisit.Assessments.Respiratory.Day',
                'parentFQN': 'currentVisit.Assessments.Respiratory',
                'topLevel': 'CurrentVisit',
                'label': 'Day',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0'
              },
              {
                'fqn': 'currentVisit.Assessments.Respiratory.Time',
                'parentFQN': 'currentVisit.Assessments.Respiratory',
                'topLevel': 'CurrentVisit',
                'label': 'Time',
                'inputType': 'text field - time',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0.8125'
              },
              {
                'fqn': 'currentVisit.Assessments.Respiratory.Airway',
                'parentFQN': 'currentVisit.Assessments.Respiratory',
                'topLevel': 'CurrentVisit',
                'label': 'Airway',
                'inputType': 'multi-select dropdown',
                'options': 'Patent-NL-Obstructed-NL-OETT-NL-Other',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Patent'
              },
              {
                'fqn': 'currentVisit.Assessments.Respiratory.Breath_Sounds',
                'parentFQN': 'currentVisit.Assessments.Respiratory',
                'topLevel': 'CurrentVisit',
                'label': 'Breath sounds',
                'inputType': 'fieldset',
                'children': [
                  {
                    'fqn': 'currentVisit.Assessments.Respiratory.Breath_Sounds.LUL',
                    'parentFQN': 'currentVisit.Assessments.Respiratory.Breath_Sounds',
                    'topLevel': 'CurrentVisit',
                    'label': 'LUL',
                    'inputType': 'dropdown',
                    'options': 'Normal-NL-Wheeze-NL-Crackles-NL-Absent-NL-Deceased',
                    'dataFrom': 'case',
                    'dataFirstCaseStudy': 'Normal'
                  },
                  {
                    'fqn': 'currentVisit.Assessments.Respiratory.Breath_Sounds.RUL',
                    'parentFQN': 'currentVisit.Assessments.Respiratory.Breath_Sounds',
                    'topLevel': 'CurrentVisit',
                    'label': 'RUL',
                    'inputType': 'dropdown',
                    'options': 'Normal-NL-Wheeze-NL-Crackles-NL-Absent-NL-Deceased',
                    'dataFrom': 'case',
                    'dataFirstCaseStudy': 'Normal'
                  },
                  {
                    'fqn': 'currentVisit.Assessments.Respiratory.Breath_Sounds.RML',
                    'parentFQN': 'currentVisit.Assessments.Respiratory.Breath_Sounds',
                    'topLevel': 'CurrentVisit',
                    'label': 'RML',
                    'inputType': 'dropdown',
                    'options': 'Normal-NL-Wheeze-NL-Crackles-NL-Absent-NL-Deceased',
                    'dataFrom': 'case',
                    'dataFirstCaseStudy': 'Decreased'
                  },
                  {
                    'fqn': 'currentVisit.Assessments.Respiratory.Breath_Sounds.LLL',
                    'parentFQN': 'currentVisit.Assessments.Respiratory.Breath_Sounds',
                    'topLevel': 'CurrentVisit',
                    'label': 'LLL',
                    'inputType': 'dropdown',
                    'options': 'Normal-NL-Wheeze-NL-Crackles-NL-Absent-NL-Deceased',
                    'dataFrom': 'case',
                    'dataFirstCaseStudy': 'Decreased'
                  },
                  {
                    'fqn': 'currentVisit.Assessments.Respiratory.Breath_Sounds.RLL',
                    'parentFQN': 'currentVisit.Assessments.Respiratory.Breath_Sounds',
                    'topLevel': 'CurrentVisit',
                    'label': 'RLL',
                    'inputType': 'dropdown',
                    'options': 'Normal-NL-Wheeze-NL-Crackles-NL-Absent-NL-Deceased',
                    'dataFrom': 'case',
                    'dataFirstCaseStudy': 'Decreased'
                  }
                ]
              },
              {
                'fqn': 'currentVisit.Assessments.Respiratory.Oxygen_therapy',
                'parentFQN': 'currentVisit.Assessments.Respiratory',
                'topLevel': 'CurrentVisit',
                'label': 'Oxygen therapy',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'None'
              },
              {
                'fqn': 'currentVisit.Assessments.Respiratory.Oxygen_flow',
                'parentFQN': 'currentVisit.Assessments.Respiratory',
                'topLevel': 'CurrentVisit',
                'label': 'Oxygen flow',
                'inputType': 'text field with text apended to end',
                'dataFrom': '?',
                'inputFormat': 'lpm (text that follows field)',
                'dataFirstCaseStudy': '('
              },
              {
                'fqn': 'currentVisit.Assessments.Respiratory.Respiratory_rhythm',
                'parentFQN': 'currentVisit.Assessments.Respiratory',
                'topLevel': 'CurrentVisit',
                'label': 'Respiratory rhythm',
                'inputType': 'multi-select dropdown',
                'options': 'Regular-NL-Irregular-NL-Paradoxical',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Regular'
              },
              {
                'fqn': 'currentVisit.Assessments.Respiratory.Respiratory_depth',
                'parentFQN': 'currentVisit.Assessments.Respiratory',
                'topLevel': 'CurrentVisit',
                'label': 'Respiratory depth',
                'inputType': 'multi-select dropdown',
                'options': 'Normal-NL-Shallow-NL-Deep',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Shallow'
              },
              {
                'fqn': 'currentVisit.Assessments.Respiratory.Cough',
                'parentFQN': 'currentVisit.Assessments.Respiratory',
                'topLevel': 'CurrentVisit',
                'label': 'Cough',
                'inputType': 'multi-select dropdown',
                'options': 'No-NL-Nonreproductive-NL-Productive',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'No'
              },
              {
                'fqn': 'currentVisit.Assessments.Respiratory.Sputum_colour',
                'parentFQN': 'currentVisit.Assessments.Respiratory',
                'topLevel': 'CurrentVisit',
                'label': 'Sputum colour',
                'inputType': 'dropdown',
                'options': 'Mucoid-NL-Purulent-NL-Yellow-green-NL-Rust-coloured-NL-Pink, blood tinged-NL-Pink, frothy-NL-Profuse, colourless-NL-Bloody',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '(nothing selected)'
              },
              {
                'fqn': 'currentVisit.Assessments.Respiratory.Sputum_comments',
                'parentFQN': 'currentVisit.Assessments.Respiratory',
                'topLevel': 'CurrentVisit',
                'label': 'Sputum comments',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '(no notes)'
              },
              {
                'fqn': 'currentVisit.Assessments.Respiratory.General_comments',
                'parentFQN': 'currentVisit.Assessments.Respiratory',
                'topLevel': 'CurrentVisit',
                'label': 'General comments',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '(no notes)'
              }
            ]
          },
          {
            'fqn': 'currentVisit.Assessments.Cardiovascular',
            'parentFQN': 'currentVisit.Assessments',
            'topLevel': 'CurrentVisit',
            'inputType': 'table',
            'navUrl': './current/assessments/cardiovascular',
            'children': [
              {
                'fqn': 'currentVisit.Assessments.Cardiovascular.Name',
                'parentFQN': 'currentVisit.Assessments.Cardiovascular',
                'topLevel': 'CurrentVisit',
                'label': 'Name',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Jason',
                'notes': 'Field label should link to the Glasglow Coma Scale'
              },
              {
                'fqn': 'currentVisit.Assessments.Cardiovascular.Profession',
                'parentFQN': 'currentVisit.Assessments.Cardiovascular',
                'topLevel': 'CurrentVisit',
                'label': 'Profession',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'RN'
              },
              {
                'fqn': 'currentVisit.Assessments.Cardiovascular.Unit',
                'parentFQN': 'currentVisit.Assessments.Cardiovascular',
                'topLevel': 'CurrentVisit',
                'label': 'Unit',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'ER'
              },
              {
                'fqn': 'currentVisit.Assessments.Cardiovascular.Day',
                'parentFQN': 'currentVisit.Assessments.Cardiovascular',
                'topLevel': 'CurrentVisit',
                'label': 'Day',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0'
              },
              {
                'fqn': 'currentVisit.Assessments.Cardiovascular.Time',
                'parentFQN': 'currentVisit.Assessments.Cardiovascular',
                'topLevel': 'CurrentVisit',
                'label': 'Time',
                'inputType': 'text field - time',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0.8125'
              },
              {
                'fqn': 'currentVisit.Assessments.Cardiovascular.Pulse',
                'parentFQN': 'currentVisit.Assessments.Cardiovascular',
                'topLevel': 'CurrentVisit',
                'label': 'Pulse',
                'inputType': 'dropdown',
                'options': 'Regular-NL-Irregular-NL-Normal-NL-Weak-NL-Bounding',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Regular'
              },
              {
                'fqn': 'currentVisit.Assessments.Cardiovascular.Skin_appearance',
                'parentFQN': 'currentVisit.Assessments.Cardiovascular',
                'topLevel': 'CurrentVisit',
                'label': 'Skin appearance',
                'inputType': 'dropdown',
                'options': 'Normal-NL-Pale-NL-Mottled-NL-Cyanotic-NL-Flushed-NL-Jaundiced',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Normal'
              },
              {
                'fqn': 'currentVisit.Assessments.Cardiovascular.Cap_refill',
                'parentFQN': 'currentVisit.Assessments.Cardiovascular',
                'topLevel': 'CurrentVisit',
                'label': 'Cap refill',
                'inputType': 'dropdown',
                'options': 'Normal-NL-Delayed',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Normal'
              },
              {
                'fqn': 'currentVisit.Assessments.Cardiovascular.Temperature',
                'parentFQN': 'currentVisit.Assessments.Cardiovascular',
                'topLevel': 'CurrentVisit',
                'label': 'Temperature',
                'inputType': 'dropdown (4 fields in the table)',
                'options': 'Warm-NL-Cool-NL-Hot',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Warm'
              },
              {
                'fqn': 'currentVisit.Assessments.Cardiovascular.Peripheral_Edema',
                'parentFQN': 'currentVisit.Assessments.Cardiovascular',
                'topLevel': 'CurrentVisit',
                'label': 'Peripheral Edema',
                'inputType': 'dropdown (4 fields in the table)',
                'options': 'No-NL-Ankle-NL-Pedal-NL-Sacral-NL-Pitting',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'No'
              },
              {
                'fqn': 'currentVisit.Assessments.Cardiovascular.Nail_bed_colour',
                'parentFQN': 'currentVisit.Assessments.Cardiovascular',
                'topLevel': 'CurrentVisit',
                'label': 'Nail bed colour',
                'inputType': 'dropdown (4 fields in the table)',
                'options': 'Pink-NL-Cyanotic',
                'dataFrom': '?'
              },
              {
                'fqn': 'currentVisit.Assessments.Cardiovascular.Comments',
                'parentFQN': 'currentVisit.Assessments.Cardiovascular',
                'topLevel': 'CurrentVisit',
                'label': 'Comments',
                'inputType': 'text box'
              }
            ]
          },
          {
            'fqn': 'currentVisit.Assessments.Gastrointestinal',
            'parentFQN': 'currentVisit.Assessments',
            'topLevel': 'CurrentVisit',
            'inputType': 'table',
            'navUrl': './current/assessments/gastrointestinal',
            'children': [
              {
                'fqn': 'currentVisit.Assessments.Gastrointestinal.Name',
                'parentFQN': 'currentVisit.Assessments.Gastrointestinal',
                'topLevel': 'CurrentVisit',
                'label': 'Name',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Jason',
                'notes': 'Field label should link to the Glasglow Coma Scale'
              },
              {
                'fqn': 'currentVisit.Assessments.Gastrointestinal.Profession',
                'parentFQN': 'currentVisit.Assessments.Gastrointestinal',
                'topLevel': 'CurrentVisit',
                'label': 'Profession',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'RN'
              },
              {
                'fqn': 'currentVisit.Assessments.Gastrointestinal.Unit',
                'parentFQN': 'currentVisit.Assessments.Gastrointestinal',
                'topLevel': 'CurrentVisit',
                'label': 'Unit',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'ER'
              },
              {
                'fqn': 'currentVisit.Assessments.Gastrointestinal.Day',
                'parentFQN': 'currentVisit.Assessments.Gastrointestinal',
                'topLevel': 'CurrentVisit',
                'label': 'Day',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0'
              },
              {
                'fqn': 'currentVisit.Assessments.Gastrointestinal.Time',
                'parentFQN': 'currentVisit.Assessments.Gastrointestinal',
                'topLevel': 'CurrentVisit',
                'label': 'Time',
                'inputType': 'text field - time',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0.8125'
              },
              {
                'fqn': 'currentVisit.Assessments.Gastrointestinal.Abdomen',
                'parentFQN': 'currentVisit.Assessments.Gastrointestinal',
                'topLevel': 'CurrentVisit',
                'label': 'Abdomen',
                'inputType': 'multi select dropdown',
                'options': 'Soft-NL-Tender-NL-Rigid-NL-Guarding-NL-Distended-NL-Scars',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Soft'
              },
              {
                'fqn': 'currentVisit.Assessments.Gastrointestinal.Abdominal_pain',
                'parentFQN': 'currentVisit.Assessments.Gastrointestinal',
                'topLevel': 'CurrentVisit',
                'label': 'Abdominal pain',
                'inputType': 'dropdown',
                'options': 'Yes-NL-No',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'No'
              }
            ]
          },
          {
            'fqn': 'currentVisit.Assessments.Genitourinary',
            'parentFQN': 'currentVisit.Assessments',
            'topLevel': 'CurrentVisit',
            'inputType': 'table',
            'navUrl': './current/assessments/genitourinary',
            'children': [
              {
                'fqn': 'currentVisit.Assessments.Genitourinary.Name',
                'parentFQN': 'currentVisit.Assessments.Genitourinary',
                'topLevel': 'CurrentVisit',
                'label': 'Name',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Jason',
                'notes': 'Field label should link to the Glasglow Coma Scale'
              },
              {
                'fqn': 'currentVisit.Assessments.Genitourinary.Profession',
                'parentFQN': 'currentVisit.Assessments.Genitourinary',
                'topLevel': 'CurrentVisit',
                'label': 'Profession',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'RN'
              },
              {
                'fqn': 'currentVisit.Assessments.Genitourinary.Unit',
                'parentFQN': 'currentVisit.Assessments.Genitourinary',
                'topLevel': 'CurrentVisit',
                'label': 'Unit',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'ER'
              },
              {
                'fqn': 'currentVisit.Assessments.Genitourinary.Day',
                'parentFQN': 'currentVisit.Assessments.Genitourinary',
                'topLevel': 'CurrentVisit',
                'label': 'Day',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0'
              },
              {
                'fqn': 'currentVisit.Assessments.Genitourinary.Time',
                'parentFQN': 'currentVisit.Assessments.Genitourinary',
                'topLevel': 'CurrentVisit',
                'label': 'Time',
                'inputType': 'text field - time',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0.8125'
              }
            ]
          },
          {
            'fqn': 'currentVisit.Assessments.Musculoskeletal',
            'parentFQN': 'currentVisit.Assessments',
            'topLevel': 'CurrentVisit',
            'inputType': 'table',
            'navUrl': './current/assessments/musculoskeletal',
            'children': [
              {
                'fqn': 'currentVisit.Assessments.Musculoskeletal.Name',
                'parentFQN': 'currentVisit.Assessments.Musculoskeletal',
                'topLevel': 'CurrentVisit',
                'label': 'Name',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Jason',
                'notes': 'Field label should link to the Glasglow Coma Scale'
              },
              {
                'fqn': 'currentVisit.Assessments.Musculoskeletal.Profession',
                'parentFQN': 'currentVisit.Assessments.Musculoskeletal',
                'topLevel': 'CurrentVisit',
                'label': 'Profession',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'RN'
              },
              {
                'fqn': 'currentVisit.Assessments.Musculoskeletal.Unit',
                'parentFQN': 'currentVisit.Assessments.Musculoskeletal',
                'topLevel': 'CurrentVisit',
                'label': 'Unit',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'ER'
              },
              {
                'fqn': 'currentVisit.Assessments.Musculoskeletal.Day',
                'parentFQN': 'currentVisit.Assessments.Musculoskeletal',
                'topLevel': 'CurrentVisit',
                'label': 'Day',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0'
              },
              {
                'fqn': 'currentVisit.Assessments.Musculoskeletal.Time',
                'parentFQN': 'currentVisit.Assessments.Musculoskeletal',
                'topLevel': 'CurrentVisit',
                'label': 'Time',
                'inputType': 'text field - time',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0.8125'
              },
              {
                'fqn': 'currentVisit.Assessments.Musculoskeletal.Swelling',
                'parentFQN': 'currentVisit.Assessments.Musculoskeletal',
                'topLevel': 'CurrentVisit',
                'label': 'Swelling',
                'inputType': 'Dropdown',
                'options': 'Present-NL-Absent',
                'dataFrom': 'case',
                'inputFormat': '2 inputs, one in the RT row, one in the LT row',
                'dataFirstCaseStudy': 'Absent'
              },
              {
                'fqn': 'currentVisit.Assessments.Musculoskeletal.Pain',
                'parentFQN': 'currentVisit.Assessments.Musculoskeletal',
                'topLevel': 'CurrentVisit',
                'label': 'Pain',
                'inputType': 'Dropdown',
                'options': 'Present-NL-Absent',
                'dataFrom': 'case',
                'inputFormat': '2 inputs, one in the RT row, one in the LT row',
                'dataFirstCaseStudy': 'Absent'
              },
              {
                'fqn': 'currentVisit.Assessments.Musculoskeletal.Deformity',
                'parentFQN': 'currentVisit.Assessments.Musculoskeletal',
                'topLevel': 'CurrentVisit',
                'label': 'Deformity',
                'inputType': 'Dropdown',
                'options': 'Present-NL-Absent',
                'dataFrom': 'case',
                'inputFormat': '2 inputs, one in the RT row, one in the LT row',
                'dataFirstCaseStudy': 'Absent'
              },
              {
                'fqn': 'currentVisit.Assessments.Musculoskeletal.Movement',
                'parentFQN': 'currentVisit.Assessments.Musculoskeletal',
                'topLevel': 'CurrentVisit',
                'label': 'Movement',
                'inputType': 'Dropdown',
                'options': 'Normal-NL-Decreased-NL-Absent',
                'dataFrom': 'case',
                'inputFormat': '2 inputs, one in the RT row, one in the LT row',
                'dataFirstCaseStudy': 'Normal'
              },
              {
                'fqn': 'currentVisit.Assessments.Musculoskeletal.Sensation',
                'parentFQN': 'currentVisit.Assessments.Musculoskeletal',
                'topLevel': 'CurrentVisit',
                'label': 'Sensation',
                'inputType': 'Dropdown',
                'options': 'Present-NL-Absent-NL-Numb',
                'dataFrom': 'case',
                'inputFormat': '2 inputs, one in the RT row, one in the LT row',
                'dataFirstCaseStudy': 'Present'
              },
              {
                'fqn': 'currentVisit.Assessments.Musculoskeletal.Pulse',
                'parentFQN': 'currentVisit.Assessments.Musculoskeletal',
                'topLevel': 'CurrentVisit',
                'label': 'Pulse',
                'inputType': 'Dropdown',
                'options': 'Absent-NL-Weak-NL-Moderate-NL-Strong-NL-Bounding',
                'dataFrom': 'case',
                'inputFormat': '2 inputs, one in the RT row, one in the LT row',
                'dataFirstCaseStudy': 'Moderate'
              },
              {
                'fqn': 'currentVisit.Assessments.Musculoskeletal.Colour',
                'parentFQN': 'currentVisit.Assessments.Musculoskeletal',
                'topLevel': 'CurrentVisit',
                'label': 'Colour',
                'inputType': 'Dropdown',
                'options': 'Flesh-NL-Pale-NL-Cynanotic',
                'dataFrom': 'case',
                'inputFormat': '2 inputs, one in the RT row, one in the LT row',
                'dataFirstCaseStudy': 'Flesh'
              },
              {
                'fqn': 'currentVisit.Assessments.Musculoskeletal.Temp',
                'parentFQN': 'currentVisit.Assessments.Musculoskeletal',
                'topLevel': 'CurrentVisit',
                'label': 'Temp',
                'inputType': 'Dropdown',
                'options': 'Hot-NL-Warm-NL-Cold',
                'dataFrom': 'case',
                'inputFormat': '2 inputs, one in the RT row, one in the LT row',
                'dataFirstCaseStudy': 'Warm'
              },
              {
                'fqn': 'currentVisit.Assessments.Musculoskeletal.Use_of_ambulatory_aid',
                'parentFQN': 'currentVisit.Assessments.Musculoskeletal',
                'topLevel': 'CurrentVisit',
                'label': 'Use of ambulatory aid',
                'inputType': 'Dropdown',
                'options': 'Yes-NL-No',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'No'
              },
              {
                'fqn': 'currentVisit.Assessments.Musculoskeletal.Type',
                'parentFQN': 'currentVisit.Assessments.Musculoskeletal',
                'topLevel': 'CurrentVisit',
                'label': 'Type',
                'inputType': 'Dropdown',
                'options': 'Walker-NL-Cane-NL-One crutch-NL-Two crutches-NL-Wheelchair-NL-Other',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '(none selected)'
              },
              {
                'fqn': 'currentVisit.Assessments.Musculoskeletal.Comments',
                'parentFQN': 'currentVisit.Assessments.Musculoskeletal',
                'topLevel': 'CurrentVisit',
                'label': 'Comments',
                'inputType': 'Text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '(not filled)'
              }
            ]
          },
          {
            'fqn': 'currentVisit.Assessments.Pain',
            'parentFQN': 'currentVisit.Assessments',
            'topLevel': 'CurrentVisit',
            'inputType': 'table',
            'navUrl': './current/assessments/pain',
            'children': [
              {
                'fqn': 'currentVisit.Assessments.Pain.Name',
                'parentFQN': 'currentVisit.Assessments.Pain',
                'topLevel': 'CurrentVisit',
                'label': 'Name',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Jason',
                'notes': 'Field label should link to the Glasglow Coma Scale'
              },
              {
                'fqn': 'currentVisit.Assessments.Pain.Profession',
                'parentFQN': 'currentVisit.Assessments.Pain',
                'topLevel': 'CurrentVisit',
                'label': 'Profession',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'RN'
              },
              {
                'fqn': 'currentVisit.Assessments.Pain.Unit',
                'parentFQN': 'currentVisit.Assessments.Pain',
                'topLevel': 'CurrentVisit',
                'label': 'Unit',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'ER'
              },
              {
                'fqn': 'currentVisit.Assessments.Pain.Day',
                'parentFQN': 'currentVisit.Assessments.Pain',
                'topLevel': 'CurrentVisit',
                'label': 'Day',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0'
              },
              {
                'fqn': 'currentVisit.Assessments.Pain.Time',
                'parentFQN': 'currentVisit.Assessments.Pain',
                'topLevel': 'CurrentVisit',
                'label': 'Time',
                'inputType': 'text field - time',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0.8125'
              }
            ]
          },
          {
            'fqn': 'currentVisit.Assessments.Biopsychosocial',
            'parentFQN': 'currentVisit.Assessments',
            'topLevel': 'CurrentVisit',
            'inputType': 'table',
            'navUrl': './current/assessments/biopsychosocial',
            'children': [
              {
                'fqn': 'currentVisit.Assessments.Biopsychosocial.Name',
                'parentFQN': 'currentVisit.Assessments.Biopsychosocial',
                'topLevel': 'CurrentVisit',
                'label': 'Name',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Jason',
                'notes': 'Field label should link to the Glasglow Coma Scale'
              },
              {
                'fqn': 'currentVisit.Assessments.Biopsychosocial.Profession',
                'parentFQN': 'currentVisit.Assessments.Biopsychosocial',
                'topLevel': 'CurrentVisit',
                'label': 'Profession',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'RN'
              },
              {
                'fqn': 'currentVisit.Assessments.Biopsychosocial.Unit',
                'parentFQN': 'currentVisit.Assessments.Biopsychosocial',
                'topLevel': 'CurrentVisit',
                'label': 'Unit',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'ER'
              },
              {
                'fqn': 'currentVisit.Assessments.Biopsychosocial.Day',
                'parentFQN': 'currentVisit.Assessments.Biopsychosocial',
                'topLevel': 'CurrentVisit',
                'label': 'Day',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0'
              },
              {
                'fqn': 'currentVisit.Assessments.Biopsychosocial.Time',
                'parentFQN': 'currentVisit.Assessments.Biopsychosocial',
                'topLevel': 'CurrentVisit',
                'label': 'Time',
                'inputType': 'text field - time',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0.8125'
              },
              {
                'fqn': 'currentVisit.Assessments.Biopsychosocial.Would_you_like_to_speak_to_a_social_worker?',
                'parentFQN': 'currentVisit.Assessments.Biopsychosocial',
                'topLevel': 'CurrentVisit',
                'label': 'Would you like to speak to a social worker?',
                'inputType': 'Dropdown',
                'options': 'didn\'t ask-NL-yes-NL-no',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'no'
              },
              {
                'fqn': 'currentVisit.Assessments.Biopsychosocial.Behaviour_effect',
                'parentFQN': 'currentVisit.Assessments.Biopsychosocial',
                'topLevel': 'CurrentVisit',
                'label': 'Behaviour effect',
                'inputType': 'Multi-select dropdown',
                'options': 'Calm-NL-Cooperative-NL-Agitated-NL-Flat affect-NL-Threatening-NL-Physically agressive-NL-Uncommunicative',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Calm-NL-Cooperative'
              },
              {
                'fqn': 'currentVisit.Assessments.Biopsychosocial.Hallucinations',
                'parentFQN': 'currentVisit.Assessments.Biopsychosocial',
                'topLevel': 'CurrentVisit',
                'label': 'Hallucinations',
                'inputType': 'Multi-select dropdown',
                'options': 'None-NL-Visual-NL-Auditory-NL-Olafactory',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'None'
              },
              {
                'fqn': 'currentVisit.Assessments.Biopsychosocial.Suicidal',
                'parentFQN': 'currentVisit.Assessments.Biopsychosocial',
                'topLevel': 'CurrentVisit',
                'label': 'Suicidal',
                'inputType': 'Multi-select dropdown',
                'options': 'None-NL-Ideation-NL-Attempt',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'None'
              },
              {
                'fqn': 'currentVisit.Assessments.Biopsychosocial.Homicidal',
                'parentFQN': 'currentVisit.Assessments.Biopsychosocial',
                'topLevel': 'CurrentVisit',
                'label': 'Homicidal',
                'inputType': 'Multi-select dropdown',
                'options': 'None-NL-Ideation',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'None'
              },
              {
                'fqn': 'currentVisit.Assessments.Biopsychosocial.Speech',
                'parentFQN': 'currentVisit.Assessments.Biopsychosocial',
                'topLevel': 'CurrentVisit',
                'label': 'Speech',
                'inputType': 'Multi-select dropdown',
                'options': 'Clear and coherent-NL-Other',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Clear and coherent'
              },
              {
                'fqn': 'currentVisit.Assessments.Biopsychosocial.Hygiene_and_grooming',
                'parentFQN': 'currentVisit.Assessments.Biopsychosocial',
                'topLevel': 'CurrentVisit',
                'label': 'Hygiene and grooming',
                'inputType': 'Multi-select dropdown',
                'options': 'Good-NL-Requires attention',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Good'
              },
              {
                'fqn': 'currentVisit.Assessments.Biopsychosocial.Comments',
                'parentFQN': 'currentVisit.Assessments.Biopsychosocial',
                'topLevel': 'CurrentVisit',
                'label': 'Comments',
                'inputType': 'Text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '(not filled)'
              }
            ]
          }
        ]
      },
      {
        'fqn': 'currentVisit.Non-medication_orders',
        'parentFQN': 'currentVisit',
        'topLevel': 'CurrentVisit',
        'inputType': 'nav_group',
        'navUrl': './current/nonmed',
        'children': [
          {
            'fqn': 'currentVisit.Non-medication_orders.Orders',
            'parentFQN': 'currentVisit.Non-medication_orders',
            'topLevel': 'CurrentVisit',
            'inputType': 'table',
            'navUrl': './current/nonmed/orders',
            'children': [
              {
                'fqn': 'currentVisit.Non-medication_orders.Orders.Order',
                'parentFQN': 'currentVisit.Non-medication_orders.Orders',
                'topLevel': 'CurrentVisit',
                'label': 'Order',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '1) Chest xray-NL-2) ABG-NL-3) CBC, electrolytes, BUN, creatine-NL-4) Spirometry',
                'mandatory': 'If order is filled, this is mandatory'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Orders.Ordered_by',
                'parentFQN': 'currentVisit.Non-medication_orders.Orders',
                'topLevel': 'CurrentVisit',
                'label': 'Ordered by',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '1 - 4) Dr. Singh',
                'mandatory': 'If order is filled, this is mandatory'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Orders.Start_day',
                'parentFQN': 'currentVisit.Non-medication_orders.Orders',
                'topLevel': 'CurrentVisit',
                'label': 'Start day',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '1 - 4) 0',
                'mandatory': 'If order is filled, this is mandatory'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Orders.Start_time',
                'parentFQN': 'currentVisit.Non-medication_orders.Orders',
                'topLevel': 'CurrentVisit',
                'label': 'Start time',
                'inputType': 'time picker',
                'mandatory': 'If order is filled, this is mandatory'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Orders.Details',
                'parentFQN': 'currentVisit.Non-medication_orders.Orders',
                'topLevel': 'CurrentVisit',
                'label': 'Details',
                'inputType': 'text box',
                'dataFrom': '?',
                'mandatory': 'If order is filled, this is mandatory'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Orders.Status',
                'parentFQN': 'currentVisit.Non-medication_orders.Orders',
                'topLevel': 'CurrentVisit',
                'label': 'Status',
                'inputType': 'dropdown',
                'options': 'Ordered-NL-In process-NL-Cancelled-NL-Completed',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '1 - 4) Ordered',
                'mandatory': 'If order is filled, this is mandatory'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Orders.Day_of_referral',
                'parentFQN': 'currentVisit.Non-medication_orders.Orders',
                'topLevel': 'CurrentVisit',
                'label': 'Day of referral',
                'inputType': 'text field',
                'mandatory': 'If order is filled, this is mandatory'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Orders.End_time',
                'parentFQN': 'currentVisit.Non-medication_orders.Orders',
                'topLevel': 'CurrentVisit',
                'label': 'End time',
                'inputType': 'time picker',
                'mandatory': 'If order is filled, this is mandatory'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Orders.Reconciliation_complete',
                'parentFQN': 'currentVisit.Non-medication_orders.Orders',
                'topLevel': 'CurrentVisit',
                'label': 'Reconciliation complete',
                'inputType': 'checkbox'
              }
            ]
          },
          {
            'fqn': 'currentVisit.Non-medication_orders.Referrals_to_other_disciplines',
            'parentFQN': 'currentVisit.Non-medication_orders',
            'topLevel': 'CurrentVisit',
            'inputType': 'table',
            'navUrl': './current/nonmed/referrals',
            'children': [
              {
                'fqn': 'currentVisit.Non-medication_orders.Referrals_to_other_disciplines.Name',
                'parentFQN': 'currentVisit.Non-medication_orders.Referrals_to_other_disciplines',
                'topLevel': 'CurrentVisit',
                'label': 'Name',
                'inputType': 'text box',
                'dataFrom': '?'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Referrals_to_other_disciplines.Profession',
                'parentFQN': 'currentVisit.Non-medication_orders.Referrals_to_other_disciplines',
                'topLevel': 'CurrentVisit',
                'label': 'Profession',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Resp therapy'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Referrals_to_other_disciplines.Referral_day',
                'parentFQN': 'currentVisit.Non-medication_orders.Referrals_to_other_disciplines',
                'topLevel': 'CurrentVisit',
                'label': 'Referral day',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Referrals_to_other_disciplines.Referral_time',
                'parentFQN': 'currentVisit.Non-medication_orders.Referrals_to_other_disciplines',
                'topLevel': 'CurrentVisit',
                'label': 'Referral time',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataFirstCaseStudy': '0.833333333333333'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Referrals_to_other_disciplines.Seen_day',
                'parentFQN': 'currentVisit.Non-medication_orders.Referrals_to_other_disciplines',
                'topLevel': 'CurrentVisit',
                'label': 'Seen day',
                'inputType': 'text box',
                'dataFrom': '?'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Referrals_to_other_disciplines.Seen_time',
                'parentFQN': 'currentVisit.Non-medication_orders.Referrals_to_other_disciplines',
                'topLevel': 'CurrentVisit',
                'label': 'Seen time',
                'inputType': 'text box',
                'dataFrom': '?'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Referrals_to_other_disciplines.Status',
                'parentFQN': 'currentVisit.Non-medication_orders.Referrals_to_other_disciplines',
                'topLevel': 'CurrentVisit',
                'label': 'Status',
                'inputType': 'Dropdown',
                'options': 'Active-NL-Discharged',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'Active'
              }
            ]
          },
          {
            'fqn': 'currentVisit.Non-medication_orders.Lab_requisitions',
            'parentFQN': 'currentVisit.Non-medication_orders',
            'topLevel': 'CurrentVisit',
            'inputType': 'table',
            'navUrl': './current/nonmed/labreqs',
            'children': [
              {
                'fqn': 'currentVisit.Non-medication_orders.Lab_requisitions.TABLE_HEADER_-_Requisition',
                'parentFQN': 'currentVisit.Non-medication_orders.Lab_requisitions',
                'topLevel': 'CurrentVisit',
                'label': 'Requisition',
                'inputType': 'TABLE HEADER',
                'dataFrom': '?',
                'inputFormat': 'pdf file'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Lab_requisitions.TABLE_HEADER_-_Ordered',
                'parentFQN': 'currentVisit.Non-medication_orders.Lab_requisitions',
                'topLevel': 'CurrentVisit',
                'label': 'Ordered',
                'inputType': 'TABLE HEADER',
                'dataFrom': '?',
                'inputFormat': 'Day'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Lab_requisitions.TABLE_HEADER_-_Collected',
                'parentFQN': 'currentVisit.Non-medication_orders.Lab_requisitions',
                'topLevel': 'CurrentVisit',
                'label': 'Collected',
                'inputType': 'TABLE HEADER',
                'dataFrom': '?',
                'inputFormat': 'Day'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Lab_requisitions.TABLE_HEADER_-_Report',
                'parentFQN': 'currentVisit.Non-medication_orders.Lab_requisitions',
                'topLevel': 'CurrentVisit',
                'label': 'Report',
                'inputType': 'TABLE HEADER',
                'dataFrom': '?',
                'inputFormat': 'Link to report'
              },
              {
                'fqn': 'currentVisit.Non-medication_orders.Lab_requisitions.TABLE_HEADER_-_Status',
                'parentFQN': 'currentVisit.Non-medication_orders.Lab_requisitions',
                'topLevel': 'CurrentVisit',
                'label': 'Status',
                'inputType': 'dropdown',
                'options': 'Ordered-NL-In progress-NL-Pending-NL-Completed',
                'dataFrom': '?'
              }
            ]
          }
        ]
      },
      {
        'fqn': 'currentVisit.Medication_orders',
        'parentFQN': 'currentVisit',
        'topLevel': 'CurrentVisit',
        'inputType': 'table',
        'navUrl': './current/medication/orders',
        'children': [
          {
            'fqn': 'currentVisit.Medication_orders.Medication',
            'parentFQN': 'currentVisit.Medication_orders',
            'topLevel': 'CurrentVisit',
            'label': 'Medication',
            'inputType': 'text field',
            'dataFrom': '?',
            'editable': 'All fields on this screen are part of the medication orders assignment'
          },
          {
            'fqn': 'currentVisit.Medication_orders.Dose',
            'parentFQN': 'currentVisit.Medication_orders',
            'topLevel': 'CurrentVisit',
            'label': 'Dose',
            'inputType': 'text field',
            'dataFrom': '?',
            'mandatory': 'If medication is filled, this is mandatory',
            'editable': 'All fields on this screen are part of the medication orders assignment'
          },
          {
            'fqn': 'currentVisit.Medication_orders.Route',
            'parentFQN': 'currentVisit.Medication_orders',
            'topLevel': 'CurrentVisit',
            'label': 'Route',
            'inputType': 'text field',
            'dataFrom': '?',
            'mandatory': 'If medication is filled, this is mandatory',
            'editable': 'All fields on this screen are part of the medication orders assignment'
          },
          {
            'fqn': 'currentVisit.Medication_orders.Frequency',
            'parentFQN': 'currentVisit.Medication_orders',
            'topLevel': 'CurrentVisit',
            'label': 'Frequency',
            'inputType': 'text field',
            'dataFrom': '?',
            'mandatory': 'If medication is filled, this is mandatory',
            'editable': 'All fields on this screen are part of the medication orders assignment'
          },
          {
            'fqn': 'currentVisit.Medication_orders.Quantity',
            'parentFQN': 'currentVisit.Medication_orders',
            'topLevel': 'CurrentVisit',
            'label': 'Quantity',
            'inputType': 'text field',
            'dataFrom': '?',
            'mandatory': 'If medication is filled, this is mandatory',
            'editable': 'All fields on this screen are part of the medication orders assignment'
          },
          {
            'fqn': 'currentVisit.Medication_orders.Refills',
            'parentFQN': 'currentVisit.Medication_orders',
            'topLevel': 'CurrentVisit',
            'label': 'Refills',
            'inputType': 'number picker',
            'dataFrom': '?',
            'mandatory': 'If medication is filled, this is mandatory',
            'editable': 'All fields on this screen are part of the medication orders assignment'
          },
          {
            'fqn': 'currentVisit.Medication_orders.Notes',
            'parentFQN': 'currentVisit.Medication_orders',
            'topLevel': 'CurrentVisit',
            'label': 'Notes',
            'inputType': 'text box',
            'dataFrom': '?',
            'editable': 'All fields on this screen are part of the medication orders assignment'
          },
          {
            'fqn': 'currentVisit.Medication_orders.Reason',
            'parentFQN': 'currentVisit.Medication_orders',
            'topLevel': 'CurrentVisit',
            'label': 'Reason',
            'inputType': 'select 2 multi select field',
            'dataFrom': '?',
            'editable': 'All fields on this screen are part of the medication orders assignment'
          },
          {
            'fqn': 'currentVisit.Medication_orders.Ordered_by',
            'parentFQN': 'currentVisit.Medication_orders',
            'topLevel': 'CurrentVisit',
            'label': 'Ordered by',
            'inputType': 'text field',
            'dataFrom': '?',
            'mandatory': 'If medication is filled, this is mandatory',
            'editable': 'All fields on this screen are part of the medication orders assignment'
          },
          {
            'fqn': 'currentVisit.Medication_orders.Order_day',
            'parentFQN': 'currentVisit.Medication_orders',
            'topLevel': 'CurrentVisit',
            'label': 'Order day',
            'inputType': 'text field',
            'dataFrom': '?',
            'mandatory': 'If medication is filled, this is mandatory',
            'editable': 'All fields on this screen are part of the medication orders assignment'
          },
          {
            'fqn': 'currentVisit.Medication_orders.Order_time',
            'parentFQN': 'currentVisit.Medication_orders',
            'topLevel': 'CurrentVisit',
            'label': 'Order time',
            'inputType': 'text field',
            'dataFrom': '?',
            'mandatory': 'If medication is filled, this is mandatory',
            'questionsForTheGroup \'': 'Jason doesn\'t think the medication section needs to be active for the learning activities. But the intention is that this is where a person would look to see what a patient is on-NL--NL-Do we need a medication profile? Jason is used to seeing a MAR on a nurses chart, he looks at the Medication Profile.\'',
            'editable': 'All fields on this screen are part of the medication orders assignment'
          }
        ]
      },
      {
        'fqn': 'currentVisit.Medication_administration_record',
        'parentFQN': 'currentVisit',
        'topLevel': 'CurrentVisit',
        'inputType': 'table',
        'navUrl': './current/mar',
        'children': [
          {
            'fqn': 'currentVisit.Medication_administration_record.Status',
            'parentFQN': 'currentVisit.Medication_administration_record',
            'topLevel': 'CurrentVisit',
            'label': 'Status',
            'inputType': 'dropdown',
            'options': 'discontinued-NL-as needed',
            'notes': 'This whole section is populated by the Medication Orders-NL--NL-Everyday there\'s a new MAR that is created to describe what medications are needed',
            'questionsForTheGroup': 'What else needs to be in this dropdown?'
          },
          {
            'fqn': 'currentVisit.Medication_administration_record.Medication',
            'parentFQN': 'currentVisit.Medication_administration_record',
            'topLevel': 'CurrentVisit',
            'label': 'Medication-NL-(Medication name-NL-Dose-NL-Route-NL-Frequency-NL-Notes-NL-Prescriber)',
            'notes': '72 hours worth of records is probably the most we need. This could be represented horizontal or vertical'
          },
          {
            'fqn': 'currentVisit.Medication_administration_record.Ordered_by',
            'parentFQN': 'currentVisit.Medication_administration_record',
            'topLevel': 'CurrentVisit',
            'label': 'Ordered by',
            'inputType': 'text field',
            'mandatory': 'yes'
          },
          {
            'fqn': 'currentVisit.Medication_administration_record.yesterday',
            'parentFQN': 'currentVisit.Medication_administration_record',
            'topLevel': 'CurrentVisit',
            'label': '[Yesterday\'s day]-NL-(Previous times)'
          },
          {
            'fqn': 'currentVisit.Medication_administration_record.today_plan',
            'parentFQN': 'currentVisit.Medication_administration_record',
            'topLevel': 'CurrentVisit',
            'label': '[Today\'s day] plan'
          },
          {
            'fqn': 'currentVisit.Medication_administration_record.today_actual',
            'parentFQN': 'currentVisit.Medication_administration_record',
            'topLevel': 'CurrentVisit',
            'label': '[Today\'s day] given'
          },
          {
            'fqn': 'currentVisit.Medication_administration_record.Reconcile',
            'parentFQN': 'currentVisit.Medication_administration_record',
            'topLevel': 'CurrentVisit',
            'label': 'Reconcile',
            'inputType': 'text box'
          }
        ]
      },
      {
        'fqn': 'currentVisit.Discharge_summary',
        'parentFQN': 'currentVisit',
        'topLevel': 'CurrentVisit',
        'inputType': 'page',
        'navUrl': './current/discharge',
        'children': [
          {
            'fqn': 'currentVisit.Discharge_summary.Admission_day',
            'parentFQN': 'currentVisit.Discharge_summary',
            'topLevel': 'CurrentVisit',
            'label': 'Admission day',
            'inputType': 'text field',
            'dataFrom': 'Visit details page',
            'notes': 'Pulls from the admission day field earlier in the \'visit details\''
          },
          {
            'fqn': 'currentVisit.Discharge_summary.Discharging_physician/NP',
            'parentFQN': 'currentVisit.Discharge_summary',
            'topLevel': 'CurrentVisit',
            'label': 'Discharging physician/NP',
            'inputType': 'dropdown',
            'options': 'Notley',
            'dataFrom': 'case'
          },
          {
            'fqn': 'currentVisit.Discharge_summary.Clinical_summary',
            'parentFQN': 'currentVisit.Discharge_summary',
            'topLevel': 'CurrentVisit',
            'label': 'Clinical summary',
            'inputType': 'text box',
            'dataFrom': '?'
          },
          {
            'fqn': 'currentVisit.Discharge_summary.Procedures',
            'parentFQN': 'currentVisit.Discharge_summary',
            'topLevel': 'CurrentVisit',
            'label': 'Procedures',
            'inputType': 'static text',
            'dataFrom': 'Procedures page'
          },
          {
            'fqn': 'currentVisit.Discharge_summary.Discharge_Rx',
            'parentFQN': 'currentVisit.Discharge_summary',
            'topLevel': 'CurrentVisit',
            'label': 'Discharge Rx',
            'inputType': 'static text',
            'dataFrom': 'Medication page'
          },
          {
            'fqn': 'currentVisit.Discharge_summary.Referred_to',
            'parentFQN': 'currentVisit.Discharge_summary',
            'topLevel': 'CurrentVisit',
            'label': 'Referred to',
            'inputType': 'static text',
            'dataFrom': 'Care team page'
          },
          {
            'fqn': 'currentVisit.Discharge_summary.Discharge_notes',
            'parentFQN': 'currentVisit.Discharge_summary',
            'topLevel': 'CurrentVisit',
            'label': 'Discharge notes',
            'dataFrom': '?'
          },
          {
            'fqn': 'currentVisit.Discharge_summary.Discharged_to',
            'parentFQN': 'currentVisit.Discharge_summary',
            'topLevel': 'CurrentVisit',
            'label': 'Discharged to',
            'inputType': 'dropdown',
            'options': 'home-NL-deceased-NL-transferred',
            'dataFrom': 'case',
            'dataFirstCaseStudy': 'home'
          },
          {
            'fqn': 'currentVisit.Discharge_summary.Discharged_by',
            'parentFQN': 'currentVisit.Discharge_summary',
            'topLevel': 'CurrentVisit',
            'label': 'Discharged by',
            'inputType': 'text field',
            'dataFrom': 'case',
            'dataFirstCaseStudy': 'Jackie'
          },
          {
            'fqn': 'currentVisit.Discharge_summary.Role',
            'parentFQN': 'currentVisit.Discharge_summary',
            'topLevel': 'CurrentVisit',
            'label': 'Role',
            'inputType': 'text field',
            'dataFrom': 'case',
            'dataFirstCaseStudy': 'RN'
          },
          {
            'fqn': 'currentVisit.Discharge_summary.Discharge_day',
            'parentFQN': 'currentVisit.Discharge_summary',
            'topLevel': 'CurrentVisit',
            'label': 'Discharge day',
            'inputType': 'text field',
            'dataFrom': 'case',
            'dataFirstCaseStudy': 'Day 1'
          },
          {
            'fqn': 'currentVisit.Discharge_summary.Discharge_time',
            'parentFQN': 'currentVisit.Discharge_summary',
            'topLevel': 'CurrentVisit',
            'label': 'Discharge time',
            'inputType': 'text field - time picker',
            'dataFrom': 'case',
            'dataFirstCaseStudy': '0.333333333333333'
          }
        ]
      },
      {
        'fqn': 'currentVisit.Billing',
        'parentFQN': 'currentVisit',
        'topLevel': 'CurrentVisit',
        'inputType': 'page',
        'navUrl': './current/billing',
        'children': [
          {
            'fqn': 'currentVisit.Billing.source',
            'parentFQN': 'currentVisit.Billing',
            'topLevel': 'CurrentVisit',
            'label': '(none)',
            'inputType': 'list of checkboxes',
            'options': 'MSP-NL-Third party-NL-Federal',
            'dataFrom': 'case',
            'dataFirstCaseStudy': 'MSP',
            'navUrl': '.',
            'dependantOnFqn': '.'
          }
        ]
      }
    ]
  },
  'currentVisit.Vital_signs.Repiration.Respiration_rate': {
    'fqn': 'currentVisit.Vital_signs.Repiration.Respiration_rate',
    'parentFQN': 'currentVisit.Vital_signs.Repiration',
    'topLevel': 'CurrentVisit',
    'label': 'Respiration rate',
    'inputType': 'text box',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '28'
  },
  'currentVisit.Vital_signs.Repiration.Respiration_effort': {
    'fqn': 'currentVisit.Vital_signs.Repiration.Respiration_effort',
    'parentFQN': 'currentVisit.Vital_signs.Repiration',
    'topLevel': 'CurrentVisit',
    'label': 'Respiration effort',
    'inputType': 'dropdown',
    'options': 'easy-NL-laboured',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'laboured'
  },
  'currentVisit.Vital_signs.Oxygen.Oxygen_saturation': {
    'fqn': 'currentVisit.Vital_signs.Oxygen.Oxygen_saturation',
    'parentFQN': 'currentVisit.Vital_signs.Oxygen',
    'topLevel': 'CurrentVisit',
    'label': 'Oxygen saturation',
    'inputType': 'text box',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '0.85'
  },
  'currentVisit.Vital_signs.Oxygen.Oxygen_mode': {
    'fqn': 'currentVisit.Vital_signs.Oxygen.Oxygen_mode',
    'parentFQN': 'currentVisit.Vital_signs.Oxygen',
    'topLevel': 'CurrentVisit',
    'label': 'Oxygen mode',
    'inputType': 'dropdown',
    'options': 'nasal prongs-NL-simple face mask-NL-rebreathing face mask',
    'dataFrom': '?'
  },
  'currentVisit.Vital_signs.Oxygen.Flow_rate': {
    'fqn': 'currentVisit.Vital_signs.Oxygen.Flow_rate',
    'parentFQN': 'currentVisit.Vital_signs.Oxygen',
    'topLevel': 'CurrentVisit',
    'label': 'Flow rate',
    'inputType': 'text box',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Gastrointestinal.Emesis.HEADING_-_Emesis': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Emesis.HEADING_-_Emesis',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Emesis',
    'topLevel': 'CurrentVisit',
    'label': 'Emesis',
    'inputType': 'fieldset'
  },
  'currentVisit.Assessments.Gastrointestinal.Emesis.(none)': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Emesis.(none)',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Emesis',
    'topLevel': 'CurrentVisit',
    'label': '(none)',
    'inputType': 'multi select dropdown',
    'options': 'None-NL-Nausea-NL-Vomiting',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'None'
  },
  'currentVisit.Assessments.Gastrointestinal.Emesis.Emesis_colour': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Emesis.Emesis_colour',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Emesis',
    'topLevel': 'CurrentVisit',
    'label': 'Emesis colour',
    'inputType': 'Dropdown',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(nothing selected)'
  },
  'currentVisit.Assessments.Gastrointestinal.Emesis.Description': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Emesis.Description',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Emesis',
    'topLevel': 'CurrentVisit',
    'label': 'Description',
    'inputType': 'Text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(nothing entered)'
  },
  'currentVisit.Assessments.Gastrointestinal.Emesis.Amount': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Emesis.Amount',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Emesis',
    'topLevel': 'CurrentVisit',
    'label': 'Amount',
    'inputType': 'Dropdown',
    'options': 'Small-NL-Moderate-NL-Large',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(nothing selected)'
  },
  'currentVisit.Assessments.Gastrointestinal.Eating.HEADING_-_Eating': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Eating.HEADING_-_Eating',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Eating',
    'topLevel': 'CurrentVisit',
    'label': 'Eating',
    'inputType': 'fieldset'
  },
  'currentVisit.Assessments.Gastrointestinal.Eating.(none)': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Eating.(none)',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Eating',
    'topLevel': 'CurrentVisit',
    'label': '(none)',
    'inputType': 'dropdown',
    'options': 'Regular-NL-Difficult',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'Regular'
  },
  'currentVisit.Assessments.Gastrointestinal.Eating.Reason': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Eating.Reason',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Eating',
    'topLevel': 'CurrentVisit',
    'label': 'Reason',
    'inputType': 'text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(nothing entered)'
  },
  'currentVisit.Assessments.Gastrointestinal.NPO.HEADING_-_NPO_since': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.NPO.HEADING_-_NPO_since',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.NPO',
    'topLevel': 'CurrentVisit',
    'label': 'NPO Since',
    'inputType': 'fieldset'
  },
  'currentVisit.Assessments.Gastrointestinal.NPO.(none)': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.NPO.(none)',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.NPO',
    'topLevel': 'CurrentVisit',
    'label': '(none)',
    'inputType': 'text field - time picker',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(nothing entered)'
  },
  'currentVisit.Assessments.Gastrointestinal.Bowel.HEADING_-_Bowel': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Bowel.HEADING_-_Bowel',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Bowel',
    'topLevel': 'CurrentVisit',
    'label': 'Bowel',
    'inputType': 'fieldset'
  },
  'currentVisit.Assessments.Gastrointestinal.Bowel.(none)': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Bowel.(none)',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Bowel',
    'topLevel': 'CurrentVisit',
    'label': '(none)',
    'inputType': 'Multi select dropdown',
    'options': 'Constipation-NL-Diarrhea-NL-Melena-NL-Incontinent',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(nothing entered)'
  },
  'currentVisit.Assessments.Gastrointestinal.Bowel.Last_BM': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Bowel.Last_BM',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Bowel',
    'topLevel': 'CurrentVisit',
    'label': 'Last BM',
    'inputType': 'Text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'Yesterday'
  },
  'currentVisit.Assessments.Gastrointestinal.Bowel.Bowel_sounds': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Bowel.Bowel_sounds',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Bowel',
    'topLevel': 'CurrentVisit',
    'label': 'Bowel sounds',
    'inputType': 'Multi select dropdown',
    'options': 'None-NL-LUQ-NL-RUQ-NL-LLQ-NL-RLQ',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'LUQ, RUQ, LLQ, RLQ'
  },
  'currentVisit.Assessments.Gastrointestinal.Stool.HEADING_-_Stool': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Stool.HEADING_-_Stool',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Stool',
    'topLevel': 'CurrentVisit',
    'label': 'Stool',
    'inputType': 'fieldset'
  },
  'currentVisit.Assessments.Gastrointestinal.Stool.Stool_colour': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Stool.Stool_colour',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Stool',
    'topLevel': 'CurrentVisit',
    'label': 'Stool colour',
    'inputType': 'Dropdown',
    'options': 'Brown-NL-Green-NL-Clay coloured-NL-Yellow-NL-Black-NL-Bright red-NL-Dark red',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'Brown'
  },
  'currentVisit.Assessments.Gastrointestinal.Stool.Description': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Stool.Description',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Stool',
    'topLevel': 'CurrentVisit',
    'label': 'Description',
    'inputType': 'Text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(nothing entered)'
  },
  'currentVisit.Assessments.Gastrointestinal.Stool.Amount': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Stool.Amount',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Stool',
    'topLevel': 'CurrentVisit',
    'label': 'Amount',
    'inputType': 'Text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(nothing entered)'
  },
  'currentVisit.Assessments.Gastrointestinal.Stool.Source': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Stool.Source',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Stool',
    'topLevel': 'CurrentVisit',
    'label': 'Source',
    'inputType': 'Dropdown',
    'options': 'Observed-NL-As per patient observed-NL-Not observed',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'As per patient observed'
  },
  'currentVisit.Assessments.Gastrointestinal.Stool.Comments': {
    'fqn': 'currentVisit.Assessments.Gastrointestinal.Stool.Comments',
    'parentFQN': 'currentVisit.Assessments.Gastrointestinal.Stool',
    'topLevel': 'CurrentVisit',
    'label': 'Comments',
    'inputType': 'Text box',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(nothing entered)'
  },
  'currentVisit.Assessments.Genitourinary.Urinary.HEADING_-_Urinary': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Urinary.HEADING_-_Urinary',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Urinary',
    'topLevel': 'CurrentVisit',
    'label': 'Urinary',
    'inputType': 'fieldset'
  },
  'currentVisit.Assessments.Genitourinary.Urinary.Symptoms': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Urinary.Symptoms',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Urinary',
    'topLevel': 'CurrentVisit',
    'label': 'Symptoms',
    'inputType': 'Multi select dropdown',
    'options': 'None-NL-Increased frequency-NL-Dysuria-NL-Hernaturia-NL-Oliguria-NL-Indwelling-NL-Incontinence-NL-Retention-NL-Distention',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'None'
  },
  'currentVisit.Assessments.Genitourinary.Urinary.Last_voided_day': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Urinary.Last_voided_day',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Urinary',
    'topLevel': 'CurrentVisit',
    'label': 'Last voided day',
    'inputType': 'text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '0'
  },
  'currentVisit.Assessments.Genitourinary.Urinary.Last_voided_time': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Urinary.Last_voided_time',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Urinary',
    'topLevel': 'CurrentVisit',
    'label': 'Last voided time',
    'inputType': 'text field - time',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '0.666666666666667'
  },
  'currentVisit.Assessments.Genitourinary.Urinary.Urine_colour': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Urinary.Urine_colour',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Urinary',
    'topLevel': 'CurrentVisit',
    'label': 'Urine colour',
    'inputType': 'Dropdown',
    'options': 'Pale yellow-NL-Dark yellow-NL-Amber-NL-Red/blood-NL-Other',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'Pale yellow'
  },
  'currentVisit.Assessments.Genitourinary.Urinary.Urine_consistency': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Urinary.Urine_consistency',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Urinary',
    'topLevel': 'CurrentVisit',
    'label': 'Urine consistency',
    'inputType': 'Dropdown',
    'options': 'Clear-NL-Cloudy-NL-Foamy-NL-Other',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'Clear'
  },
  'currentVisit.Assessments.Genitourinary.Urinary.Diaper/Brief': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Urinary.Diaper/Brief',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Urinary',
    'topLevel': 'CurrentVisit',
    'label': 'Diaper/Brief',
    'inputType': 'Dropdown',
    'options': 'Yes-NL-No',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'No'
  },
  'currentVisit.Assessments.Genitourinary.Urinary.Foley': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Urinary.Foley',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Urinary',
    'topLevel': 'CurrentVisit',
    'label': 'Foley',
    'inputType': 'Dropdown',
    'options': 'Yes-NL-No',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'No'
  },
  'currentVisit.Assessments.Genitourinary.Urinary.Type': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Urinary.Type',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Urinary',
    'topLevel': 'CurrentVisit',
    'label': 'Type',
    'inputType': 'Text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(not filled)'
  },
  'currentVisit.Assessments.Genitourinary.Urinary.Size': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Urinary.Size',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Urinary',
    'topLevel': 'CurrentVisit',
    'label': 'Size',
    'inputType': 'Text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(not filled)'
  },
  'currentVisit.Assessments.Genitourinary.Urinary.Pelvic_pain': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Urinary.Pelvic_pain',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Urinary',
    'topLevel': 'CurrentVisit',
    'label': 'Pelvic pain',
    'inputType': 'Dropdown',
    'options': 'Yes-NL-No',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'No'
  },
  'currentVisit.Assessments.Genitourinary.Urinary.Location': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Urinary.Location',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Urinary',
    'topLevel': 'CurrentVisit',
    'label': 'Location',
    'inputType': 'Text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(not filled)'
  },
  'currentVisit.Assessments.Genitourinary.Urinary.Source': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Urinary.Source',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Urinary',
    'topLevel': 'CurrentVisit',
    'label': 'Source',
    'inputType': 'Dropdown',
    'options': 'Observed-NL-As per patient observed-NL-Not observed',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(not filled)'
  },
  'currentVisit.Assessments.Genitourinary.Vaginal.HEADING_-_VAGINAL': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Vaginal.HEADING_-_VAGINAL',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Vaginal',
    'topLevel': 'CurrentVisit',
    'label': 'Vaginal',
    'inputType': 'fieldset'
  },
  'currentVisit.Assessments.Genitourinary.Vaginal.(none)': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Vaginal.(none)',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Vaginal',
    'topLevel': 'CurrentVisit',
    'label': '(none)',
    'inputType': 'List of checkboxes',
    'options': 'Discharge-NL-Bleeding',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(not filled)'
  },
  'currentVisit.Assessments.Genitourinary.Vaginal.Description': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Vaginal.Description',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Vaginal',
    'topLevel': 'CurrentVisit',
    'label': 'Description',
    'inputType': 'Text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(not filled)'
  },
  'currentVisit.Assessments.Genitourinary.Vaginal.Last_menstrual_period': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Vaginal.Last_menstrual_period',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Vaginal',
    'topLevel': 'CurrentVisit',
    'label': 'Last menstrual period',
    'inputType': 'Dropdown',
    'notes': 'Ask Lisa what the options are here'
  },
  'currentVisit.Assessments.Genitourinary.Vaginal.LMP_date': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Vaginal.LMP_date',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Vaginal',
    'topLevel': 'CurrentVisit',
    'label': 'LMP date',
    'inputType': 'Text field',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Genitourinary.Pregnancy.HEADING_-_PREGNANCY': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Pregnancy.HEADING_-_PREGNANCY',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Pregnancy',
    'topLevel': 'CurrentVisit',
    'label': 'Pregnancy',
    'inputType': 'fieldset'
  },
  'currentVisit.Assessments.Genitourinary.Pregnancy.Pregnant': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Pregnancy.Pregnant',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Pregnancy',
    'topLevel': 'CurrentVisit',
    'label': 'Pregnant',
    'inputType': 'Dropdown',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'no'
  },
  'currentVisit.Assessments.Genitourinary.Pregnancy.Gravida_(number_of_pregnancies)': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Pregnancy.Gravida_(number_of_pregnancies)',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Pregnancy',
    'topLevel': 'CurrentVisit',
    'label': 'Gravida (number of pregnancies)',
    'inputType': 'Text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '5'
  },
  'currentVisit.Assessments.Genitourinary.Pregnancy.Para_(number_of_children)': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Pregnancy.Para_(number_of_children)',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Pregnancy',
    'topLevel': 'CurrentVisit',
    'label': 'Para (number of children)',
    'inputType': 'Text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '4'
  },
  'currentVisit.Assessments.Genitourinary.Pregnancy.Living_children': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Pregnancy.Living_children',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Pregnancy',
    'topLevel': 'CurrentVisit',
    'label': 'Living children',
    'inputType': 'Text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '4'
  },
  'currentVisit.Assessments.Genitourinary.Pregnancy.Comments': {
    'fqn': 'currentVisit.Assessments.Genitourinary.Pregnancy.Comments',
    'parentFQN': 'currentVisit.Assessments.Genitourinary.Pregnancy',
    'topLevel': 'CurrentVisit',
    'label': 'Comments',
    'inputType': 'Text box',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(not filled)'
  },
  'currentVisit.Assessments.Pain.Primary.HEADING_-_Primary_pain_site': {
    'fqn': 'currentVisit.Assessments.Pain.Primary.HEADING_-_Primary_pain_site',
    'parentFQN': 'currentVisit.Assessments.Pain.Primary',
    'topLevel': 'CurrentVisit',
    'label': 'Primary pain site',
    'inputType': 'fieldset'
  },
  'currentVisit.Assessments.Pain.Primary.Pain_scale_(0-10)': {
    'fqn': 'currentVisit.Assessments.Pain.Primary.Pain_scale_(0-10)',
    'parentFQN': 'currentVisit.Assessments.Pain.Primary',
    'topLevel': 'CurrentVisit',
    'label': 'Pain scale (0-10)',
    'inputType': 'Text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '0'
  },
  'currentVisit.Assessments.Pain.Primary.Respiratory_rate_(br/min)': {
    'fqn': 'currentVisit.Assessments.Pain.Primary.Respiratory_rate_(br/min)',
    'parentFQN': 'currentVisit.Assessments.Pain.Primary',
    'topLevel': 'CurrentVisit',
    'label': 'Respiratory rate (br/min)',
    'inputType': 'Text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '28'
  },
  'currentVisit.Assessments.Pain.Primary.Location': {
    'fqn': 'currentVisit.Assessments.Pain.Primary.Location',
    'parentFQN': 'currentVisit.Assessments.Pain.Primary',
    'topLevel': 'CurrentVisit',
    'label': 'Location',
    'inputType': '?',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Pain.Primary.Onset': {
    'fqn': 'currentVisit.Assessments.Pain.Primary.Onset',
    'parentFQN': 'currentVisit.Assessments.Pain.Primary',
    'topLevel': 'CurrentVisit',
    'label': 'Onset',
    'inputType': '?',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Pain.Primary.Type': {
    'fqn': 'currentVisit.Assessments.Pain.Primary.Type',
    'parentFQN': 'currentVisit.Assessments.Pain.Primary',
    'topLevel': 'CurrentVisit',
    'label': 'Type',
    'inputType': '?',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Pain.Primary.Alleviation_&_associated_symptoms': {
    'fqn': 'currentVisit.Assessments.Pain.Primary.Alleviation_&_associated_symptoms',
    'parentFQN': 'currentVisit.Assessments.Pain.Primary',
    'topLevel': 'CurrentVisit',
    'label': 'Alleviation & associated symptoms',
    'inputType': '?',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Pain.Primary.Radiation': {
    'fqn': 'currentVisit.Assessments.Pain.Primary.Radiation',
    'parentFQN': 'currentVisit.Assessments.Pain.Primary',
    'topLevel': 'CurrentVisit',
    'label': 'Radiation',
    'inputType': '?',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Pain.Primary.Precipitating_events': {
    'fqn': 'currentVisit.Assessments.Pain.Primary.Precipitating_events',
    'parentFQN': 'currentVisit.Assessments.Pain.Primary',
    'topLevel': 'CurrentVisit',
    'label': 'Precipitating events',
    'inputType': '?',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Pain.Primary.Comments': {
    'fqn': 'currentVisit.Assessments.Pain.Primary.Comments',
    'parentFQN': 'currentVisit.Assessments.Pain.Primary',
    'topLevel': 'CurrentVisit',
    'label': 'Comments',
    'inputType': 'Text box',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Pain.Secondary.HEADING_-_Secondary_pain_site': {
    'fqn': 'currentVisit.Assessments.Pain.Secondary.HEADING_-_Secondary_pain_site',
    'parentFQN': 'currentVisit.Assessments.Pain.Secondary',
    'topLevel': 'CurrentVisit',
    'label': 'Secondary pain site',
    'inputType': 'fieldset'
  },
  'currentVisit.Assessments.Pain.Secondary.Pain_scale_(0-10)': {
    'fqn': 'currentVisit.Assessments.Pain.Secondary.Pain_scale_(0-10)',
    'parentFQN': 'currentVisit.Assessments.Pain.Secondary',
    'topLevel': 'CurrentVisit',
    'label': 'Pain scale (0-10)',
    'inputType': 'Text field',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Pain.Secondary.Respiratory_rate_(br/min)': {
    'fqn': 'currentVisit.Assessments.Pain.Secondary.Respiratory_rate_(br/min)',
    'parentFQN': 'currentVisit.Assessments.Pain.Secondary',
    'topLevel': 'CurrentVisit',
    'label': 'Respiratory rate (br/min)',
    'inputType': 'Text field',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Pain.Secondary.Location': {
    'fqn': 'currentVisit.Assessments.Pain.Secondary.Location',
    'parentFQN': 'currentVisit.Assessments.Pain.Secondary',
    'topLevel': 'CurrentVisit',
    'label': 'Location',
    'inputType': '?',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Pain.Secondary.Onset': {
    'fqn': 'currentVisit.Assessments.Pain.Secondary.Onset',
    'parentFQN': 'currentVisit.Assessments.Pain.Secondary',
    'topLevel': 'CurrentVisit',
    'label': 'Onset',
    'inputType': '?',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Pain.Secondary.Type': {
    'fqn': 'currentVisit.Assessments.Pain.Secondary.Type',
    'parentFQN': 'currentVisit.Assessments.Pain.Secondary',
    'topLevel': 'CurrentVisit',
    'label': 'Type',
    'inputType': '?',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Pain.Secondary.Alleviation_&_associated_symptoms': {
    'fqn': 'currentVisit.Assessments.Pain.Secondary.Alleviation_&_associated_symptoms',
    'parentFQN': 'currentVisit.Assessments.Pain.Secondary',
    'topLevel': 'CurrentVisit',
    'label': 'Alleviation & associated symptoms',
    'inputType': '?',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Pain.Secondary.Radiation': {
    'fqn': 'currentVisit.Assessments.Pain.Secondary.Radiation',
    'parentFQN': 'currentVisit.Assessments.Pain.Secondary',
    'topLevel': 'CurrentVisit',
    'label': 'Radiation',
    'inputType': '?',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Pain.Secondary.Precipitating_events': {
    'fqn': 'currentVisit.Assessments.Pain.Secondary.Precipitating_events',
    'parentFQN': 'currentVisit.Assessments.Pain.Secondary',
    'topLevel': 'CurrentVisit',
    'label': 'Precipitating events',
    'inputType': '?',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Pain.Secondary.Comments': {
    'fqn': 'currentVisit.Assessments.Pain.Secondary.Comments',
    'parentFQN': 'currentVisit.Assessments.Pain.Secondary',
    'topLevel': 'CurrentVisit',
    'label': 'Comments',
    'inputType': 'Text box',
    'dataFrom': '?'
  },
  'currentVisit.Assessments.Biopsychosocial.From_our_experience_in_the_hospital,_we_know_that_domestic_violence_can_be_a_problem._Is_this_a_factor_in_your_life?': {
    'fqn': 'currentVisit.Assessments.Biopsychosocial.From_our_experience_in_the_hospital,_we_know_that_domestic_violence_can_be_a_problem._Is_this_a_factor_in_your_life?',
    'parentFQN': 'currentVisit.Assessments.Biopsychosocial.From_our_experience_in_the_hospital,_we_know_that_domestic_violence_can_be_a_problem',
    'topLevel': 'CurrentVisit',
    'label': 'From our experience in the hospital, we know that domestic violence can be a problem. Is this a factor in your life?',
    'inputType': 'Dropdown',
    'options': 'didn\'t ask-NL-yes-NL-no',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'no'
  },
  'currentVisit.Assessments.Biopsychosocial.Support.HEADING_-_Support': {
    'fqn': 'currentVisit.Assessments.Biopsychosocial.Support.HEADING_-_Support',
    'parentFQN': 'currentVisit.Assessments.Biopsychosocial.Support',
    'topLevel': 'CurrentVisit',
    'label': 'Support',
    'inputType': 'fieldset'
  },
  'currentVisit.Assessments.Biopsychosocial.Support.Support_person': {
    'fqn': 'currentVisit.Assessments.Biopsychosocial.Support.Support_person',
    'parentFQN': 'currentVisit.Assessments.Biopsychosocial.Support',
    'topLevel': 'CurrentVisit',
    'label': 'Support person',
    'inputType': 'Text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'Thomas'
  },
  'currentVisit.Assessments.Biopsychosocial.Support.Comments': {
    'fqn': 'currentVisit.Assessments.Biopsychosocial.Support.Comments',
    'parentFQN': 'currentVisit.Assessments.Biopsychosocial.Support',
    'topLevel': 'CurrentVisit',
    'label': 'Comments',
    'inputType': 'Text box',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(not filled)'
  },
  'currentVisit.Assessments.Biopsychosocial.Support.Security/police_present': {
    'fqn': 'currentVisit.Assessments.Biopsychosocial.Support.Security/police_present',
    'parentFQN': 'currentVisit.Assessments.Biopsychosocial.Support',
    'topLevel': 'CurrentVisit',
    'label': 'Security/police present',
    'inputType': 'Text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'No',
    'helperText': 'Poll - map of locations vs list of locations'
  },
  'currentVisit.Assessments.Biopsychosocial.Support.Patient_restrained': {
    'fqn': 'currentVisit.Assessments.Biopsychosocial.Support.Patient_restrained',
    'parentFQN': 'currentVisit.Assessments.Biopsychosocial.Support',
    'topLevel': 'CurrentVisit',
    'label': 'Patient restrained',
    'inputType': 'Dropdown',
    'options': 'yes-NL-no',
    'dataFrom': 'case',
    'dataFirstCaseStudy': 'No'
  },
  'currentVisit.Assessments.Biopsychosocial.Support.Day': {
    'fqn': 'currentVisit.Assessments.Biopsychosocial.Support.Day',
    'parentFQN': 'currentVisit.Assessments.Biopsychosocial.Support',
    'topLevel': 'CurrentVisit',
    'label': 'Day',
    'inputType': 'text field',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(not filled)'
  },
  'currentVisit.Assessments.Biopsychosocial.Support.Time': {
    'fqn': 'currentVisit.Assessments.Biopsychosocial.Support.Time',
    'parentFQN': 'currentVisit.Assessments.Biopsychosocial.Support',
    'topLevel': 'CurrentVisit',
    'label': 'Time',
    'inputType': 'text field - time',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(not filled)'
  },
  'currentVisit.Assessments.Biopsychosocial.Support.General_comments': {
    'fqn': 'currentVisit.Assessments.Biopsychosocial.Support.General_comments',
    'parentFQN': 'currentVisit.Assessments.Biopsychosocial.Support',
    'topLevel': 'CurrentVisit',
    'label': 'General comments',
    'inputType': 'Text box',
    'dataFrom': 'case',
    'dataFirstCaseStudy': '(not filled)',
    'notes': 'Erin Johns is 74 years old. She is widowed with four children, one of whom lives at home with her in their original family home in a small city in northern British Columbia. Two of Erins children live within a one-hour drive from her, and one lives a three-hour flight away. She also has 10 grandchildren and one great grandchild. Erin communicates with her grandchildren by telephone and Skype using her iPad. Erin describes herself as a non-smoker, but she smoked socially when she was in her early twenties for about five years. She is a retired hairdresser. Erin also has a small hairless Chihuahua named Trixie. Erin spends her time socializing at her local community centre with her friends, and she likes to play Bingo. At home, she enjoys watching Netflix and playing Solitaire and Scrabble with friends on her iPad. Erin tends to feel down when she thinks about her lower financial status and her advancing age, and how she is becoming more forgetful and less energetic. She often feels alone but is grateful to have the company of Trixie and the few friends she has left who are still alive. She worries about falling and not being able to alert anyone to come to her rescue. Driving is becoming hard for her, and she finds getting to the clinic and picking up her medications more and more challenging, especially now that she doesnt have her own doctor anymore and she needs to go to the walk-in clinic.'
  }
}
}