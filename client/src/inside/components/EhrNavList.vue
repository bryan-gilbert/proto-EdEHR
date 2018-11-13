<template>
  <ul :class="$options.name">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'EhrNavList'
}
</script>

<style lang="scss" scoped>
.EhrNavList {
}
</style>
