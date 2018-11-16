// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header No Med
    ehr-panel-content
      div(class="region")
        p component name: NoMed
        p title: No Med
        p redirect: /ehr/current/no-med/no-med-orders
        p route name: no-med
        p full path: /ehr/current/no-med
        p another line now using spaces
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
  name: 'NoMed',
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
.NoMed {
  &__main {
  }
}
</style>
