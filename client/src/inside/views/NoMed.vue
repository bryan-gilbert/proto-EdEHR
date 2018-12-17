// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header No Med
    ehr-panel-content
      div(class="region")
        p This No Med page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Non-medication orders
        p Component name: NoMed
        p Redirect: no-med-orders
        p Route name: no-med
        p Full path: /ehr/current/no-med
        p Assignment Data: noMed
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'NoMed',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    noMed() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.noMed || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.NoMed {
}
</style>
