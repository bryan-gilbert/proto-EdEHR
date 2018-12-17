// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Vital Signs
    ehr-panel-content
      div(class="region")
        p This Vital Signs page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Vital signs
        p Component name: VitalSigns
        p Redirect: 
        p Route name: vital-signs
        p Full path: /ehr/current/vital-signs
        p Assignment Data: vitalSigns
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'VitalSigns',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    vitalSigns() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.vitalSigns || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.VitalSigns {
}
</style>
