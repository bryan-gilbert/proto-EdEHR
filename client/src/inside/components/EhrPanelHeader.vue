<template lang="pug">
  div(:class="$options.name")
    div(class="title")
      h1
        slot Panel Title
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
@import '../../scss/definitions';

.EhrPanelHeader {
  padding: 0.6rem 2rem 0.4rem;
  background-color: $grey03;
  color: $grey60;
  height: 60px;
  display: flex;

  .title {
    flex: 1 0 auto;
  }

  .controls {
    flex: 0 1 auto;
    /*display: table-cell;*/
    /*float: right;*/
  }
}
</style>
