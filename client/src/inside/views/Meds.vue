// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Non-medication orders: Lab requisitions
    ehr-panel-content
      div(class="region")
        p This Non-medication orders: Lab requisitions page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Medication orders
        p Component name: Meds
        p Redirect: 
        p Route name: meds
        p Full path: /ehr/current/meds
        p Assignment Data: meds
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Meds',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    meds() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.meds || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.Meds {
}
</style>
