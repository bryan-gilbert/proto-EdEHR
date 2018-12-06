<template>
  <button v-on:click="$emit('close')" class="button">
    <slot /> X
  </button>
</template>

<script>
export default {
  name: 'UiClose',
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  /**
  Style all close buttons on any dialogs
   */
</style>
