<template lang="pug">
  div(:class="$options.name")
    sup(:title="text")
      fas-icon(icon="info-circle")
</template>

<script>
export default {
  name: 'UiInfo',
  props :{
    text: { type: String }
  }
}
</script>

<style lang="scss" scoped>
.UiInfo {
  display: inline;
  margin-left: 10px;
}
</style>
