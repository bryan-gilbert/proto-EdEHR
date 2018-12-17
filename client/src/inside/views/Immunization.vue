// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Immunization
    ehr-panel-content
      div(class="region")
        p This Immunization page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Immunization
        p Component name: Immunization
        p Redirect: 
        p Route name: immunization
        p Full path: /ehr/patient/history/immunization
        p Assignment Data: immunization
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Immunization',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    immunization() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.immunization || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.Immunization {
}
</style>
