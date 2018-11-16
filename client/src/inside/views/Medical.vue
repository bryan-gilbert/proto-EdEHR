// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Medical
    ehr-panel-content
      div(class="region")
        p Title: Medical
        p Label: Medical
        p Component name: Medical
        p Redirect: 
        p Route name: medical
        p Full path: /ehr/patient/history/medical
        hr
      div(class="region")
        div(class="columns")
          div(class="column is-one-third")
            label(for="sampleTA") Sample Textarea
            textarea(class="textarea" id="sampleTA", name="Sample TS")
          div(class="column is-one-third")
            label column two
            input(class="input is-info" readonly value="read only text" type="text" placeholder="Text input")
          div(class="column is-one-third")
            label column three
            input(class="input is-info" readonly value="read only text" type="text" placeholder="Text input")
        div(class="columns")
          div(class="column is-one-third")
            label another
            input(class="input", type="text")
          div(class="column is-one-third")
            label another
            input(class="input", type="text")
          div(class="column is-one-third")
            label pick one
            div(class="select")
              select
                option one
                option two
                option three
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Medical',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  }
}
</script>

<style lang="scss" scoped>
.select {
  display: block;
}
select {
  width: 100%;
}
.region {
  /* border: 1px dashed black; */
}
.Medical {
  &__main {
  }
}
</style>
