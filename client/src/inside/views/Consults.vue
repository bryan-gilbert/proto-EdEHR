// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Consults
    ehr-panel-content
      div(class="region")
        p This Consults page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Consults
        p Component name: Consults
        p Redirect: 
        p Route name: consults
        p Full path: /ehr/chart/reports/consults
        p Assignment Data: consults
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Consults',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    consults() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.consults || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.Consults {
}
</style>
