// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Family History
    ehr-panel-content
      div(class="region")
        p This Family History page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Family History
        p Component name: FamilyHistory
        p Redirect: 
        p Route name: family-history
        p Full path: /ehr/patient/history/family-history
        p Assignment Data: familyHistory
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'FamilyHistory',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    familyHistory() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.familyHistory || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.FamilyHistory {
}
</style>
