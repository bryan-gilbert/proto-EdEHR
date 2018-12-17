// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Musculoskeletal
    ehr-panel-content
      div(class="region")
        p This Musculoskeletal page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Musculoskeletal
        p Component name: Musculoskeletal
        p Redirect: 
        p Route name: musculoskeletal
        p Full path: /ehr/current/assessments/musculoskeletal
        p Assignment Data: musculoskeletal
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Musculoskeletal',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    musculoskeletal() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.musculoskeletal || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.Musculoskeletal {
}
</style>
