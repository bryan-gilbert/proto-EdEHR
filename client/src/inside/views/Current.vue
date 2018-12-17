// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Current
    ehr-panel-content
      div(class="region")
        p This Current page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Current visit
        p Component name: Current
        p Redirect: visit-details
        p Route name: current
        p Full path: /ehr/current
        p Assignment Data: current
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Current',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    current() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.current || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.Current {
}
</style>
