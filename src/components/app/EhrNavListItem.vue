<template>
  <li :class="$options.name">
    <slot/>
  </li>
</template>

<script>
export default {
  name: `EhrNavListItem`,
};
</script>

<style lang="scss" scoped>

.EhrNavListItem {
}
</style>
