<template>
  <div :class="$options.name">
    <!-- <slot name="header" :class="`${$options.name}__header`"> -->
    <app-header />
    <app-dialog />
    <!--modal( v-if="showModal", @cancel="cancelDialog", @save="saveDialog", v-bind:errors="errorList")    -->
    <!-- </slot> -->
    <main :class="`${$options.name}__main`">
      <div name="mainContent" :class="`${$options.name}__main_content columns`">
        <div name="nav" :class="`${$options.name}__nav column`"><ehr-nav-panel /></div>
        <div name="content" :class="`${$options.name}__content column`">
          <ehr-banner></ehr-banner>
          <slot>
            Main EHR content for a component will appear here. The component is selected by the
            router
          </slot>
        </div>
      </div>
    </main>
    <!-- <slot name="footer"> -->
    <app-footer />
    <ehr-special />
    <!-- </slot> -->
  </div>
</template>

<script>
import AppHeader from '../../app/components/AppHeader.vue'
import AppDialog from '../../app/components/AppDialogShell'
import AppFooter from '../../app/components/AppFooter.vue'
import EhrSpecial from '../components/EhrSpecial.vue'
import EhrNavPanel from '../components/EhrNavPanel.vue'
import EhrBanner from '../components/EhrBanner.vue'
// import EhrPanel from '../components/EhrPanel.vue'

export default {
  name: 'LayoutDefault',
  components: {
    AppHeader,
    AppFooter,
    AppDialog,
    EhrBanner,
    // EhrPanel,
    EhrNavPanel,
    EhrSpecial
  },
  computed: {
    path() {
      // console.log('this.$route', this.$route)
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/objects/wrapper.mixin';
$contentMinHeigth: 800px;
$navWidth: 234px;
$pageWidth: 1024px;

.LayoutDefault {
  background-color: #4f545c;
  h1 {
    font-size: 3rem;
  }
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

  .box {
    z-index: 9;
    left: 20px;
    top: 250px;
    width: 400px;
    box-sizing: border-box;
    padding: 15px;
    background: white;
    display: inline-block;
    position: absolute;
    user-select: none;
    text-align: left;
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transition: box-shadow 0.3s cubic-bezier(.25, .8, .25, 1);
    line-height: 1.8;
    color: #272727;
    border-radius: 4px;
  }

  .box.dragged {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
}
</style>
