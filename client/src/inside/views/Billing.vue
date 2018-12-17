// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Billing
    ehr-panel-content
      div(class="region")
        p This Billing page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Billing
        p Component name: Billing
        p Redirect: 
        p Route name: billing
        p Full path: /ehr/current/billing
        p Assignment Data: billing
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Billing',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    billing() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.billing || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.Billing {
}
</style>
