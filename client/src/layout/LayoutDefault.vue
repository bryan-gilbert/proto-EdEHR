<template>
  <div :class="$options.name">
    <slot name="header" :class="`${$options.name}__header`">
      <!--<app-header/>-->
      <p>Insert app header</p>
    </slot>
    <main :class="`${$options.name}__main`">
      <div name="mainContent" :class="`${$options.name}__main_content columns`">
        <div name="nav" :class="`${$options.name}__nav column`">
          <!--<ehr-nav-panel/>-->
          <p>insert ehr nav panel</p>
        </div>
        <div name="content" :class="`${$options.name}__content column`">
          <slot/>
        </div>
      </div>
    </main>
    <slot name="footer">
      <!--<ehr-special/>-->
      <p>insert ehr special</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault'
}
</script>


<style lang="scss" scoped>
@import '../scss/objects/wrapper.mixin';
$contentMinHeigth: 800px;
$navWidth: 234px;
$pageWidth: 1024px;

.LayoutDefault {
  &__main {
    color: #6a6c73;
    background-color: white;
    /*padding-left: 0;*/
    @include wrapper('page');
  }
  &__header {
    max-width: $pageWidth;
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
