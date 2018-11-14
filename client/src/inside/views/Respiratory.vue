<template lang="pug">
 div(:class="$options.name")
  h1(slot="ehrPageTitle") {{$options.name}}
   p Respiratory
</template>

<script>
export default {
  name: 'Respiratory'
}
</script>

<style lang="scss" scoped>
.Respiratory {
  &__main {
  }
}
</style>