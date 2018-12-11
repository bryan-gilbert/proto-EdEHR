<template lang="pug">
  div(:class="$options.name")
    div(class="title")
      h1
        slot(name="pageTitle") Panel Title
    div(class="controls")
      slot(name="controls")
</template>

<script>
export default {
  name: 'EhrPanelHeader',
  components: {}
}
</script>

<style lang="scss" scoped>
.EhrPanelHeader {
  padding: 0.4rem 1.5rem;
  background-color: #f7f9fa;
  color: #50545b;
  height: 60px;

  h1 {
    font-size: 30px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
  }

  .title {
    display: table-cell;
    float: left;
  }

  .controls {
    display: table-cell;
    float: right;
  }
}
</style>
