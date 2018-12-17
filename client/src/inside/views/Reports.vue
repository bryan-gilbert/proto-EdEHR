// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Reports
    ehr-panel-content
      div(class="region")
        p This Reports page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Reports and documents
        p Component name: Reports
        p Redirect: consults
        p Route name: reports
        p Full path: /ehr/chart/reports
        p Assignment Data: reports
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Reports',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    reports() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.reports || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.Reports {
}
</style>
