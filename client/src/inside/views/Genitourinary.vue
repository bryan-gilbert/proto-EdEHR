// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Genitourinary
    ehr-panel-content
      div(class="region")
        p This Genitourinary page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Genitourinary
        p Component name: Genitourinary
        p Redirect: 
        p Route name: genitourinary
        p Full path: /ehr/current/assessments/genitourinary
        p Assignment Data: genitourinary
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Genitourinary',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    genitourinary() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.genitourinary || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.Genitourinary {
}
</style>
