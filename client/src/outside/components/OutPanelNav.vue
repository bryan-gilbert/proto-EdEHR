<template lang="pug">
  div(:class="$options.name")
    ui-link(:to="{ name: 'student' }") Student
    span |
    ui-link(:to="{ name: 'instructor' }") Instructor
    span |
    ui-link(:to="{ name: 'courses' }") Courses
    span |
    ui-link(:to="{ name: 'dbtables' }") Db Tables

</template>

<script>
  import UiLink from '../../app/ui/UiLink'
export default {
  name: 'OutPanelNav',
  components: {
    UiLink
  }
}
</script>

<style lang="scss" scoped>
.OutPanelNav {
  padding: 20px 1.5rem;

  &__main {
    font-size: 0.8rem;

    .table th {
      border-bottom: 2px solid #979797;
    }
  }
}
</style>
