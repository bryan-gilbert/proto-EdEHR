<template lang="pug">
  div(:class="$options.name")
    as-instructor(visitorType="Instructor")
</template>

<script>
import AsInstructor from '../components/AsInstructor'

export default {
  name: 'Instructor',
  components: {
    AsInstructor
  }
}
</script>

<style lang="scss" scoped>
.Instructor {
}
</style>
