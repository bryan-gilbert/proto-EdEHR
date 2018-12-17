// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Diagnostic Reports
    ehr-panel-content
      div(class="region")
        p This Diagnostic Reports page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Diagnostic reports
        p Component name: DiagnosticReports
        p Redirect: 
        p Route name: diagnostic-reports
        p Full path: /ehr/chart/reports/diagnostic-reports
        p Assignment Data: diagnosticReports
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'DiagnosticReports',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    diagnosticReports() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.diagnosticReports || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.DiagnosticReports {
}
</style>
