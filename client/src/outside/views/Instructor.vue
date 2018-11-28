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
  },
  computed: {
    userInfo() {
      return this.$store.state.sUserInfo
    }
  }
}
</script>

<style lang="scss" scoped>
  .Instructor {
    &__main {
      background-color: #f6fbfe;
    }
  }
</style>