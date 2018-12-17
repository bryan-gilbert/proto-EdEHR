// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Medical
    ehr-panel-content
      div(class="region")
        p This Medical page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Medical
        p Component name: Medical
        p Redirect: 
        p Route name: medical
        p Full path: /ehr/patient/history/medical
        p Assignment Data: medical
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Medical',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    medical() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.medical || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.Medical {
}
</style>
