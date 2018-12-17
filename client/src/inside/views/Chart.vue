// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Chart
    ehr-panel-content
      div(class="region")
        p This Chart page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Patient chart
        p Component name: Chart
        p Redirect: progress-notes
        p Route name: chart
        p Full path: /ehr/chart
        p Assignment Data: chart
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Chart',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    chart() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.chart || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.Chart {
}
</style>
