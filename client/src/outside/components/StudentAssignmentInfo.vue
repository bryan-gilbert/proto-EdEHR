<template lang="pug">
  accordian
    div(slot="header")
      div {{ student.givenName }} {{ student.familyName }}
    div(class="body")
      div(class="inner")
        div
          div(class="aName") LMS Student Id:
          div(class="aValue") {{ student.id }}
      div
        pre {{ assignmentData(student)}}</template>

<script>
  import accordian from '../../app/components/accordian'
  export default {
    name: 'StudentAssignmentInfo',
    components: {
      accordian
    },
    props: {
      student: {type: Object}
    },
    methods: {
      assignmentData: function (student) {
        var d = JSON.stringify(student.assignmentData, null, 2)
        console.log('student a data', d)
        return d
      }
    }
  }
</script>

<style scoped>
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
</style>