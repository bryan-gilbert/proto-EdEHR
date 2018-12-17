// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Care Plan
    ehr-panel-content
      div(class="region")
        p This Care Plan page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Interprofessional plan of care
        p Component name: CarePlan
        p Redirect: 
        p Route name: care-plan
        p Full path: /ehr/chart/care-plan
        p Assignment Data: carePlan
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'CarePlan',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    carePlan() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.carePlan || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.CarePlan {
}
</style>
