// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Operative Anaesthesia
    ehr-panel-content
      div(class="region")
        p This Operative Anaesthesia page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Operative reports and anaesthesia record
        p Component name: OperativeAnaesthesia
        p Redirect: 
        p Route name: operative-anaesthesia
        p Full path: /ehr/chart/reports/operative-anaesthesia
        p Assignment Data: operativeAnaesthesia
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'OperativeAnaesthesia',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    operativeAnaesthesia() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.operativeAnaesthesia || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.OperativeAnaesthesia {
}
</style>
