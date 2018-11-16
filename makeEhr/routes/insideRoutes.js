export function inside() {
  return [
    {
      path: '/ehr/patient',
      name: 'patient',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Patient.vue'),
      meta: { layout: 'inside', label: 'Patient profile' }
    },
    {
      path: '/ehr/patient/demographics',
      name: 'demographics',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Demographics.vue'),
      meta: { layout: 'inside', label: 'Demographics' }
    },
    {
      path: '/ehr/patient/allergies',
      name: 'allergies',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Allergies.vue'),
      meta: { layout: 'inside', label: 'Allergies' }
    },
    {
      path: '/ehr/patient/history',
      name: 'history',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/History.vue'),
      meta: { layout: 'inside', label: 'History' }
    },
    {
      path: '/ehr/patient/history/medical',
      name: 'medical',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Medical.vue'),
      meta: { layout: 'inside', label: 'Medical' }
    },
    {
      path: '/ehr/patient/history/psychosocial',
      name: 'psychosocial',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Psychosocial.vue'),
      meta: { layout: 'inside', label: 'Psychosocial' }
    },
    {
      path: '/ehr/patient/history/surgical',
      name: 'surgical',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Surgical.vue'),
      meta: { layout: 'inside', label: 'Surgical' }
    },
    {
      path: '/ehr/patient/history/immunization',
      name: 'immunization',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Immunization.vue'),
      meta: { layout: 'inside', label: 'Immunization' }
    },
    {
      path: '/ehr/patient/history/family-history',
      name: 'family-history',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/FamilyHistory.vue'),
      meta: { layout: 'inside', label: 'Family History' }
    },
    {
      path: '/ehr/patient/care-team',
      name: 'care-team',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/CareTeam.vue'),
      meta: { layout: 'inside', label: 'Care team' }
    },
    {
      path: '/ehr/patient/past-appt',
      name: 'past-appt',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/PastAppt.vue'),
      meta: { layout: 'inside', label: 'Past appointments' }
    },
    {
      path: '/ehr/current',
      name: 'current',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Current.vue'),
      meta: { layout: 'inside', label: 'Current visit' }
    },
    {
      path: '/ehr/current/visit-details',
      name: 'visit-details',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/VisitDetails.vue'),
      meta: { layout: 'inside', label: 'Visit details' }
    },
    {
      path: '/ehr/current/vital-signs',
      name: 'vital-signs',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/VitalSigns.vue'),
      meta: { layout: 'inside', label: 'Vital signs' }
    },
    {
      path: '/ehr/current/assessments',
      name: 'assessments',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Assessments.vue'),
      meta: { layout: 'inside', label: 'Assessments' }
    },
    {
      path: '/ehr/current/assessments/neurological',
      name: 'neurological',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Neurological.vue'),
      meta: { layout: 'inside', label: 'Neurological' }
    },
    {
      path: '/ehr/current/assessments/respiratory',
      name: 'respiratory',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Respiratory.vue'),
      meta: { layout: 'inside', label: 'Respiratory' }
    },
    {
      path: '/ehr/current/assessments/cardiovascular',
      name: 'cardiovascular',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Cardiovascular.vue'),
      meta: { layout: 'inside', label: 'Cardiovascular' }
    },
    {
      path: '/ehr/current/assessments/gastrointestinal',
      name: 'gastrointestinal',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Gastrointestinal.vue'),
      meta: { layout: 'inside', label: 'Gastrointestinal' }
    },
    {
      path: '/ehr/current/assessments/genitourinary',
      name: 'genitourinary',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Genitourinary.vue'),
      meta: { layout: 'inside', label: 'Genitourinary' }
    },
    {
      path: '/ehr/current/assessments/musculoskeletal',
      name: 'musculoskeletal',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Musculoskeletal.vue'),
      meta: { layout: 'inside', label: 'Musculoskeletal' }
    },
    {
      path: '/ehr/current/assessments/pain',
      name: 'pain',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Pain.vue'),
      meta: { layout: 'inside', label: 'Pain' }
    },
    {
      path: '/ehr/current/assessments/biopsychosocial',
      name: 'biopsychosocial',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Biopsychosocial.vue'),
      meta: { layout: 'inside', label: 'Biopsychosocial' }
    },
    {
      path: '/ehr/current/no-med',
      name: 'no-med',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/NoMed.vue'),
      meta: { layout: 'inside', label: 'Non-medication orders' }
    },
    {
      path: '/ehr/current/no-med/no-med-orders',
      name: 'no-med-orders',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/NoMedOrders.vue'),
      meta: { layout: 'inside', label: 'Orders' }
    },
    {
      path: '/ehr/current/no-med/referrals',
      name: 'referrals',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Referrals.vue'),
      meta: { layout: 'inside', label: 'Referrals to other disciplines' }
    },
    {
      path: '/ehr/current/no-med/lab-reqs',
      name: 'lab-reqs',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/LabReqs.vue'),
      meta: { layout: 'inside', label: 'Lab requisitions' }
    },
    {
      path: '/ehr/current/meds',
      name: 'meds',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Meds.vue'),
      meta: { layout: 'inside', label: 'Medication orders' }
    },
    {
      path: '/ehr/current/mar',
      name: 'mar',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Mar.vue'),
      meta: { layout: 'inside', label: 'MAR' }
    },
    {
      path: '/ehr/current/discharge',
      name: 'discharge',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Discharge.vue'),
      meta: { layout: 'inside', label: 'Discharge summary' }
    },
    {
      path: '/ehr/current/billing',
      name: 'billing',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Billing.vue'),
      meta: { layout: 'inside', label: 'Billing' }
    },
    {
      path: '/ehr/chart',
      name: 'chart',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Chart.vue'),
      meta: { layout: 'inside', label: 'Patient chart' }
    },
    {
      path: '/ehr/chart/progress-notes',
      name: 'progress-notes',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/ProgressNotes.vue'),
      meta: { layout: 'inside', label: 'Progress notes' }
    },
    {
      path: '/ehr/chart/care-plan',
      name: 'care-plan',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/CarePlan.vue'),
      meta: { layout: 'inside', label: 'Interprofessional plan of care' }
    },
    {
      path: '/ehr/chart/reports',
      name: 'reports',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Reports.vue'),
      meta: { layout: 'inside', label: 'Reports and documents' }
    },
    {
      path: '/ehr/chart/reports/consults',
      name: 'consults',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/Consults.vue'),
      meta: { layout: 'inside', label: 'Consults' }
    },
    {
      path: '/ehr/chart/reports/lab-reports',
      name: 'lab-reports',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/LabReports.vue'),
      meta: { layout: 'inside', label: 'Lab Reports' }
    },
    {
      path: '/ehr/chart/reports/diagnostic-reports',
      name: 'diagnostic-reports',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/DiagnosticReports.vue'),
      meta: { layout: 'inside', label: 'Diagnostic reports' }
    },
    {
      path: '/ehr/chart/reports/operative-anaesthesia',
      name: 'operative-anaesthesia',
      component: () =>
        import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/OperativeAnaesthesia.vue'),
      meta: {
        layout: 'inside',
        label: 'Operative reports and anaesthesia record'
      }
    }
  ]
}
