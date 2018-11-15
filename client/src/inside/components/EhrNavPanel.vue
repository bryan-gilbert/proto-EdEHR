<template lang="pug">
  div(:class="$options.name")
    ui-button(:class="`${$options.name}__saveButton`")
      a(href="http://localhost:3000") Save
    e-n-list(v-for="item in groups" :key="item.id" :name="item.name", :children="item.children" :level="item.id")
</template>
<script>
import UiLink from '../../app/ui/UiLink.vue'
import UiButton from '../../app/ui/UiButton.vue'
import ENList from './EhrNavList'

export default {
  name: 'EhrNavPanel',
  components: {
    UiButton,
    UiLink,
    ENList
  },
  computed: {
    groups() {
      var groups = [
        {
          id: 1,
          name: 'patient',
          children: [
            { name: 'mar', label: 'Mar' },
            { name: 'billing', label: 'Billing' },
            { name: 'details', label: 'Details' },
            { name: 'biopsychosocial', label: 'Biopsychosocial' },
            { name: 'progress-notes', label: 'Progress Notes' }
          ]
        },
        {
          id: 2,
          name: 'current',
          children: [
            { name: 'details', label: 'Details' },
            { name: 'billing', label: 'Billing' },
            { name: 'biopsychosocial', label: 'Biopsychosocial' },
            { name: 'mar', label: 'Mar' },
            { name: 'progress-notes', label: 'Progress Notes' }
          ]
        }
      ]
      return groups
    },
    paths() {
      // console.log('Go get paths')
      // const ePaths = ehrRoutes.getPaths()
      // return ePaths
      return [
        { name: 'mar', label: 'Mar' },
        { name: 'billing', label: 'Billing' },
        { name: 'details', label: 'Details' },
        { name: 'biopsychosocial', label: 'Biopsychosocial' },
        { name: 'progress-notes', label: 'Progress Notes' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.EhrNavPanel {
  background-color: #23262d;
  height: 100%;
  color: #efefef;

  &__link {
    color: white;
  }
  &__saveButton {
    width: 100%;
  }
}
</style>
