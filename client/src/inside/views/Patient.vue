// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Patient
    ehr-panel-content
      div(class="region")
        p This Patient page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Patient profile
        p Component name: Patient
        p Redirect: demographics
        p Route name: patient
        p Full path: /ehr/patient
        p Assignment Data: patient
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Patient',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    patient() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.patient || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.Patient {
}
</style>
