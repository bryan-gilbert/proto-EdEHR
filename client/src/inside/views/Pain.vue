// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Pain
    ehr-panel-content
      div(class="region")
        p This Pain page is a generated placeholder. The actual content will be developed soon. So stay tuned.
        p Label: Pain
        p Component name: Pain
        p Redirect: 
        p Route name: pain
        p Full path: /ehr/current/assessments/pain
        p Assignment Data: pain
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Pain',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    pain() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.pain || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  }
}
</script>

<style lang="scss" scoped>
.Pain {
}
</style>
