<template>
  <div :class="$options.name">
    <!-- <slot name="header" :class="`${$options.name}__header`"> -->
    <app-header />
    <!-- </slot> -->
    <div :class="['box', { dragged: dragged }]" v-dragged="onDragged" v-tooltip.notrigger="{ content: 'Drag me', visible: !dragged }">
      <div>This dialog box is a work in progress showing how a dialog can float above the EHR and be moved around. This type of dialog
      needs to be resizable. It will be used by students as their scratch pad and by instructors to write evaluaiton notes.</div>
      <div>deltaX: {{ deltaX }}</div>
      <div>deltaY: {{ deltaY }}</div>
      <div>offsetX: {{ offsetX }}</div>
      <div>offsetY: {{ offsetY }}</div>
      <div>clientX: {{ clientX }}</div>
      <div>clientY: {{ clientY }}</div>
    </div>
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
  },
  data() {
    return {
      deltaX: 0,
      deltaY: 0,
      offsetX: 0,
      offsetY: 0,
      clientX: 0,
      clientY: 0,
      dragged: false
    }
  },
  methods: {
    onDragged({ el, deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last }) {
      if (first) {
        this.dragged = true
        return
      }
      if (last) {
        this.dragged = false
        return
      }
      var l = +window.getComputedStyle(el)['left'].slice(0, -2) || 0
      var t = +window.getComputedStyle(el)['top'].slice(0, -2) || 0
      el.style.left = l + deltaX + 'px'
      el.style.top = t + deltaY + 'px'
      this.deltaX = deltaX
      this.deltaY = deltaY
      this.offsetX = offsetX
      this.offsetY = offsetY
      this.clientX = clientX
      this.clientY = clientY
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
