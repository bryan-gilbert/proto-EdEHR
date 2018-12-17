// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Visit Details
    ehr-panel-content
      div(class="region")
        p This Visit Details page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Visit details
        p Component name: VisitDetails
        p Redirect: 
        p Route name: visit-details
        p Full path: /ehr/current/visit-details
        p Assignment Data: visitDetails
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'VisitDetails',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    visitDetails() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.visitDetails || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.VisitDetails {
}
</style>
