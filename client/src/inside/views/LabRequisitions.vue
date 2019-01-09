// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Lab Reqs
    ehr-panel-content
      div(class="region")
        p This Lab Reqs page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Lab requisitions
        p Component name: LabReqs
        p Redirect: 
        p Route name: lab-reqs
        p Full path: /ehr/current/no-med/lab-reqs
        p Assignment Data: labReqs
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'LabReqs',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    labReqs() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.labReqs || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.LabReqs {
}
</style>
