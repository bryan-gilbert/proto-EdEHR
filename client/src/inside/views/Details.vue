<template lang="pug">
 div(:class="$options.name")
  h1(slot="ehrPageTitle") {{$options.name}}
   p Details
</template>

<script>
export default {
  name: 'Details'
}
</script>

<style lang="scss" scoped>
.Details {
  &__main {
  }
}
</style>