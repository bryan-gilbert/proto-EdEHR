// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Discharge
    ehr-panel-content
      div(class="region")
        p This Discharge page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Discharge summary
        p Component name: Discharge
        p Redirect: 
        p Route name: discharge
        p Full path: /ehr/current/discharge
        p Assignment Data: discharge
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Discharge',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    discharge() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.discharge || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.Discharge {
}
</style>
