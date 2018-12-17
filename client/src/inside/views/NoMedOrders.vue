// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Non-medication orders: Orders
    ehr-panel-content
      div(class="region")
        p This Non-medication orders: Orders page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Orders
        p Component name: NoMedOrders
        p Redirect: 
        p Route name: no-med-orders
        p Full path: /ehr/current/no-med/no-med-orders
        p Assignment Data: noMedOrders
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'NoMedOrders',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    noMedOrders() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.noMedOrders || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.NoMedOrders {
}
</style>
