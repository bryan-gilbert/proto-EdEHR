// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Care Team
    ehr-panel-content
      div(class="region")
        p This Care Team page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Care team
        p Component name: CareTeam
        p Redirect: 
        p Route name: care-team
        p Full path: /ehr/patient/care-team
        p Assignment Data: careTeam
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'CareTeam',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    careTeam() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.careTeam || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.CareTeam {
}
</style>
