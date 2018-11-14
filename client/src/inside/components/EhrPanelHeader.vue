<template>
  <div :class="$options.name">
    <slot name="ehrtitle">Panel Title</slot>
  </div>
</template>

<script>
export default {
  name: 'EhrPanelHeader',
  components: {}
}
</script>

<style lang="scss" scoped>
.EhrPanelHeader {
  padding: 0.4rem 1rem;
  background-color: #f7f9fa;
  color: #50545b;

  h1 {
    font-size: 1.8rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
  }
}
</style>
