// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Biopsychosocial
    ehr-panel-content
      div(class="region")
        p This Biopsychosocial page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Biopsychosocial
        p Component name: Biopsychosocial
        p Redirect: 
        p Route name: biopsychosocial
        p Full path: /ehr/current/assessments/biopsychosocial
        p Assignment Data: biopsychosocial
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Biopsychosocial',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    biopsychosocial() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.biopsychosocial || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.Biopsychosocial {
}
</style>
