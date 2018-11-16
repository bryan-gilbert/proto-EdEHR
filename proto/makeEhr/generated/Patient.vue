// Generated VUE file. Before modifying see docs about Vue file generation 
<template lang="pug">
  div(:class="$options.name")
    h1(slot="ehrPageTitle") Patient
    div(class="region")
      p component name: Patient
      p title: Patient
      p redirect: 
      p route name: patient
      p full path: /ehr/patient
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
export default {
  name: 'Patient'
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
.Patient {
  padding: 1rem;

  &__main {
    font-size: 0.8rem;
  }
}
</style>
