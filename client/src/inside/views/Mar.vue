// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Mar
    ehr-panel-content
      div(class="region")
        p This Mar page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: MAR
        p Component name: Mar
        p Redirect: 
        p Route name: mar
        p Full path: /ehr/current/mar
        p Assignment Data: mar
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Mar',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    mar() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.mar || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.Mar {
}
</style>
