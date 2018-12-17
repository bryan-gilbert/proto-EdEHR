// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Lab Reports
    ehr-panel-content
      div(class="region")
        p This Lab Reports page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Lab Reports
        p Component name: LabReports
        p Redirect: 
        p Route name: lab-reports
        p Full path: /ehr/chart/reports/lab-reports
        p Assignment Data: labReports
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'LabReports',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    labReports() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.labReports || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.LabReports {
}
</style>
