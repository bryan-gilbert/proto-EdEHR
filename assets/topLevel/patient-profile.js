module.exports = function() { return{
  'patientProfile': {
    'fqn': 'patientProfile',
    'inputType': 'topLevel',
    'children': [
      {
        'fqn': 'patientProfile.PatientProfile',
        'parentFQN': 'patientProfile',
        'topLevel': 'PatientProfile',
        'inputType': 'nav_group',
        'navUrl': './patient',
        'children': [
          {
            'fqn': 'patientProfile.PatientProfile.Demographics',
            'parentFQN': 'patientProfile.PatientProfile',
            'topLevel': 'PatientProfile',
            'inputType': 'page',
            'navUrl': './patient/demographics',
            'children': [
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Given',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'First name',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataSecondCaseStudy': 'Erin',
                'validation': 'yes'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Middle',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Middle name(s)',
                'inputType': 'text field',
                'dataFrom': 'case',
                'validation': 'no'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Family',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Last name',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataSecondCaseStudy': 'Johns',
                'validation': 'yes'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Preferred_name',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Preferred name',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataSecondCaseStudy': 'Erin',
                'validation': 'no'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Date_of_birth',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Date of birth',
                'inputType': 'calculated text, no input needed',
                'dataFrom': 'manually entered',
                'dataFirstCaseStudy': 'Year calculated by Age',
                'dataSecondCaseStudy': '09-SEP-19##'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Age',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Age',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataSecondCaseStudy': '74',
                'validation': 'yes'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Gender',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Gender',
                'inputType': 'dropdown',
                'options': 'female-NL-male-NL-transgender female-NL-transgender male-NL-unknown-NL-undifferentiated-NL-prefer not to say',
                'dataFrom': 'case',
                'dataSecondCaseStudy': 'Female',
                'validation': 'yes'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Martial_status',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Martial status',
                'inputType': 'dropdown',
                'options': 'married-NL-single-NL-life partner-NL-divorced-NL-separated-NL-widowed',
                'dataFrom': 'case',
                'dataSecondCaseStudy': 'Widow',
                'validation': 'no'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Code_status',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Code status',
                'inputType': 'dropdown',
                'options': 'CPR-NL-DNR M1-NL-DNR M2-NL-DNR M3-NL-DNR C1-NL-DNR C2',
                'dataFrom': '?',
                'mandatory \'': 'Do Not Attempt Cardiopulmonary Resuscitation (DNACPR',
                'validation': 'no'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Primary_language',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Primary language',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataSecondCaseStudy': 'English',
                'validation': 'no'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Religion',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Religion',
                'inputType': 'text field',
                'dataFrom': '?',
                'validation': 'no'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Do_you_identify_as_an_indigenous_person?',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Do you identify as an indigenous person?',
                'inputType': 'checkbox',
                'dataFrom': 'case',
                'dataSecondCaseStudy': '(Not ticked)'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Street_address',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Street address',
                'inputType': 'text field',
                'dataFrom': 'manually entered',
                'dataSecondCaseStudy': '402 Willow St.'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.City',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'City',
                'inputType': 'text field',
                'dataFrom': 'manually entered',
                'dataSecondCaseStudy': 'Vancouver'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Country',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Country',
                'inputType': 'dropdown',
                'dataFrom': 'manually entered',
                'dataSecondCaseStudy': 'Canada'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Postal_code',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Postal code',
                'inputType': 'text field',
                'dataFrom': 'manually entered',
                'dataSecondCaseStudy': 'V3F 9R2'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.No_address',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'No address',
                'inputType': 'checkbox',
                'dataFrom': 'manually entered',
                'dataSecondCaseStudy': '(Not ticked)'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Phone_number',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Phone number',
                'inputType': 'text field - phone',
                'dataFrom': 'manually entered',
                'dataSecondCaseStudy': '(778) 555-2947'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Email_address',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Email address',
                'inputType': 'text field - email',
                'dataFrom': 'manually entered',
                'dataSecondCaseStudy': '(leave empty)'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Occupation/student',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Occupation/student',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataSecondCaseStudy': 'Retired'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.PHN',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'PHN',
                'inputType': 'text field',
                'dataFrom': 'manually entered',
                'dataSecondCaseStudy': '12345678'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.MRN',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'MRN',
                'inputType': 'text field',
                'dataFrom': 'manually entered'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Patient_service',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Patient service',
                'inputType': 'text field',
                'dataFrom': '?'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Next_of_kin_name',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Next of kin name',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataSecondCaseStudy': 'Thomas Johns'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Next_of_kin_relationship',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Next of kin relationship',
                'inputType': 'dropdown',
                'options': 'wife-NL-husband-NL-mother-NL-father-NL-guardian-NL-sister-NL-brother-NL-daughter-NL-son-NL-aunt-NL-uncle-NL-grandmother-NL-grandfather-NL-friend-NL-other',
                'dataFrom': 'case',
                'dataSecondCaseStudy': 'Son'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Next_of_kin_phone',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Next of kin phone',
                'inputType': 'text field - phone',
                'dataFrom': 'manually entered'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Decision_maker_name',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Decision maker name',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataSecondCaseStudy': 'Thomas Johns'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Decision_maker_relationship',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Decision maker relationship',
                'inputType': 'dropdown',
                'options': 'spouse-NL-child-NL-parent-NL-sibling-NL-grandparent-NL-grandchild-NL-friend-NL-anyone else related by partnership-NL-Public Guardian and Trustee employee-NL-other',
                'dataFrom': 'case',
                'dataSecondCaseStudy': 'Son',
                'questionsForTheGroup': 'Should we leave this plain text? What happens for step parents, half siblings etc? This could get messy and long'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Demographics.Decision_maker_phone',
                'parentFQN': 'patientProfile.PatientProfile.Demographics',
                'topLevel': 'PatientProfile',
                'label': 'Decision maker phone',
                'inputType': 'text field - phone',
                'dataFrom': 'manually entered'
              }
            ]
          },
          {
            'fqn': 'patientProfile.PatientProfile.Allergies',
            'parentFQN': 'patientProfile.PatientProfile',
            'topLevel': 'PatientProfile',
            'inputType': 'page',
            'children': [
              {
                'fqn': 'patientProfile.PatientProfile.Allergies.Allergies_search',
                'parentFQN': 'patientProfile.PatientProfile.Allergies',
                'topLevel': 'PatientProfile',
                'label': 'Allergies search',
                'inputType': 'text field',
                'validation': 'one of these two need to be filled'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Allergies.Allergies',
                'parentFQN': 'patientProfile.PatientProfile.Allergies',
                'topLevel': 'PatientProfile',
                'label': 'Allergies',
                'inputType': 'Checkbox',
                'options': 'No known allergies',
                'dataFrom': 'case',
                'dataSecondCaseStudy': '(ticked)',
                'validation': 'one of these two need to be filled'
              }
            ]
          },
          {
            'fqn': 'patientProfile.PatientProfile.Care_team',
            'parentFQN': 'patientProfile.PatientProfile',
            'topLevel': 'PatientProfile',
            'inputType': 'page',
            'children': [
              {
                'fqn': 'patientProfile.PatientProfile.Care_team.Name',
                'parentFQN': 'patientProfile.PatientProfile.Care_team',
                'topLevel': 'PatientProfile',
                'label': 'Name',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataSecondCaseStudy \'': '(7 names for 7 fields)-NL-Dr. Singh-NL-Dr. Notley-NL-Jason-NL-Jackie-NL-Gurpreet-NL-Alexa-NL-Matt\''
              },
              {
                'fqn': 'patientProfile.PatientProfile.Care_team.Profession',
                'parentFQN': 'patientProfile.PatientProfile.Care_team',
                'topLevel': 'PatientProfile',
                'label': 'Profession',
                'inputType': 'text box',
                'dataFrom': 'case',
                'dataSecondCaseStudy \'': '(7 professions for 7 fields-NL-Physician-NL-Physician-NL-Nurse-NL-Nurse-NL-Medical radiography-NL-Medical laboratory\''
              }
            ]
          },
          {
            'fqn': 'patientProfile.PatientProfile.Past_appointments',
            'parentFQN': 'patientProfile.PatientProfile',
            'topLevel': 'PatientProfile',
            'inputType': 'page',
            'children': [
              {
                'fqn': 'patientProfile.PatientProfile.Past_appointments.Date',
                'parentFQN': 'patientProfile.PatientProfile.Past_appointments',
                'topLevel': 'PatientProfile',
                'label': 'Date',
                'inputType': 'text field - date',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'All of this information would be autopopulated by past encounters',
                'dataSecondCaseStudy': '1 week ago'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Past_appointments.Diagnosis',
                'parentFQN': 'patientProfile.PatientProfile.Past_appointments',
                'topLevel': 'PatientProfile',
                'label': 'Diagnosis',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'All of this information would be autopopulated by past encounters',
                'dataSecondCaseStudy': 'COPD'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Past_appointments.MRP',
                'parentFQN': 'patientProfile.PatientProfile.Past_appointments',
                'topLevel': 'PatientProfile',
                'label': 'MRP',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'All of this information would be autopopulated by past encounters',
                'dataSecondCaseStudy': '(none available)'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Past_appointments.Site',
                'parentFQN': 'patientProfile.PatientProfile.Past_appointments',
                'topLevel': 'PatientProfile',
                'label': 'Site',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataSecondCaseStudy': 'Clinic'
              },
              {
                'fqn': 'patientProfile.PatientProfile.Past_appointments.Reason_for_visit',
                'parentFQN': 'patientProfile.PatientProfile.Past_appointments',
                'topLevel': 'PatientProfile',
                'label': 'Reason for visit',
                'inputType': 'text field',
                'dataFrom': 'case',
                'dataFirstCaseStudy': 'All of this information would be autopopulated by past encounters',
                'dataSecondCaseStudy': 'Shortness of breath x 24 hrs',
                'navUrl': '.'
              }
            ]
          }
        ]
      }
    ]
  },
  'patientProfile.PatientProfile.History.Medical': {
    'fqn': 'patientProfile.PatientProfile.History.Medical',
    'parentFQN': 'patientProfile.PatientProfile.History',
    'topLevel': 'PatientProfile',
    'inputType': 'page',
    'children': [
      {
        'fqn': 'patientProfile.PatientProfile.History.Medical.Past_medical_history',
        'parentFQN': 'patientProfile.PatientProfile.History.Medical',
        'topLevel': 'PatientProfile',
        'label': 'Past medical history',
        'inputType': 'text box',
        'dataFrom': 'case',
        'dataSecondCaseStudy \'': 'Erin Johns is 74 years old. She is widowed with four children, one of whom lives at home with her in their-NL-original family home in a small city in northern British Columbia. Two of Erins children live within a one-hour-NL-drive from her, and one lives a three-hour flight away. She also has 10 grandchildren and one great grandchild.-NL-Erin communicates with her grandchildren by telephone and Skype using her iPad. Erin describes herself as a-NL-non-smoker, but she smoked socially when she was in her early twenties for about five years. She is a retired-NL-hairdresser. Erin also has a small hairless Chihuahua named Trixie. Erin spends her time socializing at her local-NL-community centre with her friends, and she likes to play Bingo. At home, she enjoys watching Netflix and playing Solitaire and Scrabble with friends on her iPad. Erin tends to feel down when she thinks about her lower financial status and her advancing age, and how she is becoming more forgetful and less energetic. She often feels alone but is grateful to have the company of Trixie and the few friends she has left who are still alive. She worries about falling and not being able to alert anyone to come to her rescue. Driving is becoming hard for her, and she finds getting to the clinic and picking up her medications more and more challenging, especially now that she doesnt have her own doctor anymore and she needs to go to the walk-in clinic.\''
      }
    ]
  },
  'patientProfile.PatientProfile.History.Psychosocial': {
    'fqn': 'patientProfile.PatientProfile.History.Psychosocial',
    'parentFQN': 'patientProfile.PatientProfile.History',
    'topLevel': 'PatientProfile',
    'inputType': 'page',
    'children': [
      {
        'fqn': 'patientProfile.PatientProfile.History.Psychosocial.Psychosocial_history',
        'parentFQN': 'patientProfile.PatientProfile.History.Psychosocial',
        'topLevel': 'PatientProfile',
        'label': 'Psychosocial history',
        'inputType': 'text box',
        'dataFrom': 'case'
      },
      {
        'fqn': 'patientProfile.PatientProfile.History.Psychosocial.Diet',
        'parentFQN': 'patientProfile.PatientProfile.History.Psychosocial',
        'topLevel': 'PatientProfile',
        'label': 'Diet',
        'inputType': 'text box',
        'dataFrom': 'case',
        'dataSecondCaseStudy': 'Regular'
      },
      {
        'fqn': 'patientProfile.PatientProfile.History.Psychosocial.Living_situation',
        'parentFQN': 'patientProfile.PatientProfile.History.Psychosocial',
        'topLevel': 'PatientProfile',
        'label': 'Living situation',
        'inputType': 'text box',
        'dataFrom': 'case',
        'dataSecondCaseStudy': 'Lives alone'
      },
      {
        'fqn': 'patientProfile.PatientProfile.History.Psychosocial.Employment/school',
        'parentFQN': 'patientProfile.PatientProfile.History.Psychosocial',
        'topLevel': 'PatientProfile',
        'label': 'Employment/school',
        'inputType': 'text box',
        'dataFrom': 'case',
        'dataSecondCaseStudy': 'Retired'
      },
      {
        'fqn': 'patientProfile.PatientProfile.History.Psychosocial.Hobbies',
        'parentFQN': 'patientProfile.PatientProfile.History.Psychosocial',
        'topLevel': 'PatientProfile',
        'label': 'Hobbies',
        'inputType': 'text box',
        'dataFrom': 'case',
        'dataSecondCaseStudy': 'Bingo'
      },
      {
        'fqn': 'patientProfile.PatientProfile.History.Psychosocial.Behaviours_+_Frequency',
        'parentFQN': 'patientProfile.PatientProfile.History.Psychosocial',
        'topLevel': 'PatientProfile',
        'label': 'Behaviours + Frequency',
        'inputType': 'Checkboxes with a \'frequency\' field to the right',
        'options': 'Exercise-NL-Caffeine use-NL-Tobacco use-NL-Cannabis use-NL-Alcohol use-NL-Substance use',
        'dataFrom': 'case',
        'dataSecondCaseStudy \'': '(exercise ticked) < 1 day/week-NL-(caffeine use ticked) 1-2 cups/day-NL-(tobacco use ticked) History of smoking-NL-(alcohol use ticked) Social\''
      }
    ]
  },
  'patientProfile.PatientProfile.History.Surgical': {
    'fqn': 'patientProfile.PatientProfile.History.Surgical',
    'parentFQN': 'patientProfile.PatientProfile.History',
    'topLevel': 'PatientProfile',
    'inputType': 'page',
    'children': [
      {
        'fqn': 'patientProfile.PatientProfile.History.Surgical.Past_surgery',
        'parentFQN': 'patientProfile.PatientProfile.History.Surgical',
        'topLevel': 'PatientProfile',
        'label': 'Past surgery',
        'inputType': 'Text box',
        'dataFrom': 'case',
        'dataSecondCaseStudy': 'None'
      },
      {
        'fqn': 'patientProfile.PatientProfile.History.Surgical.Previous_admissions',
        'parentFQN': 'patientProfile.PatientProfile.History.Surgical',
        'topLevel': 'PatientProfile',
        'label': 'Previous admissions',
        'inputType': 'Text box',
        'dataFrom': 'case'
      }
    ]
  },
  'patientProfile.PatientProfile.History.Immunization': {
    'fqn': 'patientProfile.PatientProfile.History.Immunization',
    'parentFQN': 'patientProfile.PatientProfile.History',
    'topLevel': 'PatientProfile',
    'inputType': 'checkbox',
    'options': 'Tetanus-NL-MMR-NL-Polio, diptheria, pertussis-NL-Hep A-NL-Hep B-NL-TB-NL-Pneumococcal-NL-Other',
    'dataFrom': 'case',
    'dataSecondCaseStudy': '(Nothing ticked)',
    'children': [
      {
        'fqn': 'patientProfile.PatientProfile.History.Immunization.Other',
        'parentFQN': 'patientProfile.PatientProfile.History.Immunization',
        'topLevel': 'PatientProfile',
        'label': 'Other',
        'inputType': 'text field',
        'dataFrom': 'case',
        'dataSecondCaseStudy': '(Nothing ticked)',
        'validation': 'If other is selected, this is mandatory'
      },
      {
        'fqn': 'patientProfile.PatientProfile.History.Immunization.Date',
        'parentFQN': 'patientProfile.PatientProfile.History.Immunization',
        'topLevel': 'PatientProfile',
        'label': 'Date',
        'inputType': 'text field - date',
        'dataFrom': 'case',
        'dataFirstCaseStudy': 'One text field per checkbox',
        'dataSecondCaseStudy': '(Nothing ticked)'
      }
    ]
  },
  'patientProfile.PatientProfile.History.Family_history': {
    'fqn': 'patientProfile.PatientProfile.History.Family_history',
    'parentFQN': 'patientProfile.PatientProfile.History',
    'topLevel': 'PatientProfile',
    'inputType': 'page',
    'children': [
      {
        'fqn': 'patientProfile.PatientProfile.History.Family_history.Family_medical_history',
        'parentFQN': 'patientProfile.PatientProfile.History.Family_history',
        'topLevel': 'PatientProfile',
        'label': 'Family medical history',
        'inputType': 'text box',
        'dataFrom': 'case',
        'dataSecondCaseStudy': '(empty)'
      }
    ]
  }
}
}