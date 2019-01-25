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
@import '../../scss/settings/color.scss';
@import '../../scss/settings/typography.scss';
@import '../../scss/styles.scss';


.EhrPanelHeader {
  padding: 0.6rem 2rem 0.4rem;
  background-color: $grey03;
  color: $grey60;
  height: 60px;

  h1 {
    font-size: 30px;
    font-family: $bodyFontFamily;
    font-weight: 600;
  }

  .title {
    display: table-cell;
  }

  .controls {
    display: table-cell;
    float: right;
  }
}
</style>
