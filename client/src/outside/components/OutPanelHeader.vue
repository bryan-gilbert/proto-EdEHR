<template>
  <div :class="$options.name">
    <h1>
    <slot>Panel Title</slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'OutPanelHeader',
  components: {}
}
</script>

<style lang="scss" scoped>
.OutPanelHeader {
  padding: 0.4rem 1.5rem;
  background-color: #f7f9fa;
  color: #50545b;
  height: 60px;

  h1 {
    font-size: 30px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
  }
}
</style>
