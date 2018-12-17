// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Surgical
    ehr-panel-content
      div(class="region")
        p This Surgical page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Surgical
        p Component name: Surgical
        p Redirect: 
        p Route name: surgical
        p Full path: /ehr/patient/history/surgical
        p Assignment Data: surgical
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Surgical',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    surgical() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.surgical || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.Surgical {
}
</style>
