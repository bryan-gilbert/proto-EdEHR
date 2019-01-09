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
@import '../../scss/settings/color.scss';
@import '../../scss/styles.scss';

.OutPanelHeader {
  padding: 0.4rem 1.5rem;
  background-color: $grey03;
  color: $grey60;
  height: 60px;

  h1 {
    font-size: 30px;
    font-family: $bodyFontFamily;
    font-weight: 600;
  }
}
</style>
