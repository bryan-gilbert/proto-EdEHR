<template lang="pug">
  div(:class="$options.name")
    h2(class="hello") Instructor {{activityInfo.context_title}}
    h2(class="hello") Course {{activityInfo.context_title}}
    as-visitor(:visitorType="Instructor")
</template>

<script>
  import AsVisitor from '../components/AsVisitor'

export default {
  name: 'Instructor',
  components: {
    AsVisitor
  },
  computed: {
    activityInfo() {
      return this.$store.getters.sActivityInfo
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