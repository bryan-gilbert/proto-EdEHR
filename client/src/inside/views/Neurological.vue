// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Neurological
    ehr-panel-content
      div(class="region")
        p This Neurological page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Neurological
        p Component name: Neurological
        p Redirect: 
        p Route name: neurological
        p Full path: /ehr/current/assessments/neurological
        p Assignment Data: neurological
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Neurological',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    neurological() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.neurological || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.Neurological {
}
</style>
