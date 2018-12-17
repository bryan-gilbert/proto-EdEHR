// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Assessments
    ehr-panel-content
      div(class="region")
        p This Assessments page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Assessments
        p Component name: Assessments
        p Redirect: neurological
        p Route name: assessments
        p Full path: /ehr/current/assessments
        p Assignment Data: assessments
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Assessments',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    assessments() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.assessments || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.Assessments {
}
</style>
