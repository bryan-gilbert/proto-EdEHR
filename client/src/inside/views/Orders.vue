<template lang="pug">
 div(:class="$options.name")
  h1(slot="ehrPageTitle") {{$options.name}}
   p Orders
</template>

<script>
export default {
  name: 'Orders'
}
</script>

<style lang="scss" scoped>
.Orders {
  &__main {
  }
}
</style>