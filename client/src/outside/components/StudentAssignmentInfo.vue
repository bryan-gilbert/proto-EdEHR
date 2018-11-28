<template lang="pug">
  accordion
    div(slot="header")
      div {{ student.givenName }} {{ student.familyName }}
    div(class="body")
      div(class="inner")
        div
          div(class="aName") LMS Student Id:
          div(class="aValue") {{ student.id }}
      div
        pre {{ assignmentData(student)}}
      div(class="evaluation")
        label(class="evaluation-label") Evaluation notes
        textarea(class="evaluation-input")
</template>
<script>
import accordion from '../../app/components/accordion'
// (v-model="inputs.notes")
export default {
  name: 'StudentAssignmentInfo',
  components: {
    accordion
  },
  props: {
    student: { type: Object }
  },
  methods: {
    assignmentData: function(student) {
      var d = JSON.stringify(student.assignmentData, null, 2)
      // console.log('student a data', d)
      return d
    }
  }
}
</script>

<style lang="scss" scoped>
.aName {
  display: inline-block;
  width: 10rem;
}
.aValue {
  display: inline;
}
.inner {
  padding: 0 40px 0 8px;
}
.evaluation {
  padding: 0 40px 0 8px;
  .evaluation-label,
  .evaluation-input {
    display: inline-block;
  }
  .evaluation-label {
    vertical-align: top;
    margin-right: 1rem;
  }
  .evaluation-input {
    border: 1px solid #cbced1;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 rgba(21, 26, 36, 0.5);
    height: 6rem;
    width: 80%;
  }
}
</style>
