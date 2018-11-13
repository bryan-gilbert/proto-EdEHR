<template>
  <div :class="$options.name">
    <slot name="outside-header" :class="`${$options.name}__header`">
      <!--<app-header/>-->
      <p>Insert outside header</p>
    </slot>
    <main :class="`${$options.name}__main`">
      <div name="mainContent" :class="`${$options.name}__main_content columns`">
        <div name="nav" :class="`${$options.name}__nav column`">
          <!--<ehr-nav-panel/>-->
          <p>insert outside nav panel</p>
        </div>
        <div name="content" :class="`${$options.name}__content column`">
          <slot/>
        </div>
      </div>
    </main>
    <slot name="outside-footer">
      <!--<ehr-special/>-->
      <p>insert outside footer</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'LayoutOutside'
}
</script>


<style lang="scss" scoped>
@import '../scss/objects/wrapper.mixin';
$contentMinHeigth: 800px;
$navWidth: 234px;
body{
  background: #e9ebed;

}

.LayoutOutside {
  &__main {
    color: #6a6c73;
    background-color: white;
  }
  &__header {
  }
  &__main_content {
    margin: 0;
  }
  &__nav {
    // @include wrapper('narrow');
    max-width: $navWidth;
    height: $contentMinHeigth;
    padding: 0;
    margin: 0;
  }
  &__content {
    height: $contentMinHeigth;
    padding: 0;
    margin: 0;
  }
}
</style>
