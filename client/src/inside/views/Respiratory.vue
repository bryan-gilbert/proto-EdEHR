// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Respiratory
    ehr-panel-content
      div(class="region")
        p This Respiratory page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Respiratory
        p Component name: Respiratory
        p Redirect: 
        p Route name: respiratory
        p Full path: /ehr/current/assessments/respiratory
        p Assignment Data: respiratory
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Respiratory',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    respiratory() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.respiratory || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.Respiratory {
}
</style>
