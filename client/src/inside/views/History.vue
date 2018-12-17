// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header History
    ehr-panel-content
      div(class="region")
        p This History page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: History
        p Component name: History
        p Redirect: medical
        p Route name: history
        p Full path: /ehr/patient/history
        p Assignment Data: history
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'History',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    history() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.history || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.History {
}
</style>
