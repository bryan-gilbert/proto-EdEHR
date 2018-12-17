// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Cardiovascular
    ehr-panel-content
      div(class="region")
        p This Cardiovascular page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Cardiovascular
        p Component name: Cardiovascular
        p Redirect: 
        p Route name: cardiovascular
        p Full path: /ehr/current/assessments/cardiovascular
        p Assignment Data: cardiovascular
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Cardiovascular',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    cardiovascular() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.cardiovascular || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.Cardiovascular {
}
</style>
