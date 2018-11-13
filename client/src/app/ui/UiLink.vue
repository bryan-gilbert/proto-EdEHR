<template>
  <router-link :to="to" class="is-link"> <slot /> </router-link>
</template>

<script>
export default {
  name: 'UiLink',
  props: {
    to: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
