// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Gastrointestinal
    ehr-panel-content
      div(class="region")
        p This Gastrointestinal page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Gastrointestinal
        p Component name: Gastrointestinal
        p Redirect: 
        p Route name: gastrointestinal
        p Full path: /ehr/current/assessments/gastrointestinal
        p Assignment Data: gastrointestinal
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Gastrointestinal',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    gastrointestinal() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.gastrointestinal || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
}
</script>

<style lang="scss" scoped>
.Gastrointestinal {
}
</style>
