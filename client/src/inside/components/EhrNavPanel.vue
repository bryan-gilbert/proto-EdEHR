<template lang="pug">
  div(:class="$options.name")
    ui-button(:class="`${$options.name}__saveButton`")
      a(href="http://localhost:3000") Save
    ehr-nav-list(v-for="path in groups" :key="path.name" :path="path")
</template>
<script>
import UiLink from '../../app/ui/UiLink.vue'
import UiButton from '../../app/ui/UiButton.vue'
import EhrNavList from './EhrNavList'

export default {
  name: 'EhrNavPanel',
  components: {
    UiButton,
    UiLink,
    EhrNavList
  },
  computed: {
    groups() {
      var groups = [
        {
          level: 1,
          name: 'patient',
          label: 'Patient',
          children: [
            { level: 2, name: 'mar', label: 'Mar' },
            { level: 2, name: 'billing', label: 'Billing' },
            { level: 2, name: 'details', label: 'Details' },
            { level: 2, name: 'biopsychosocial', label: 'Biopsychosocial' },
            {
              level: 2,
              name: 'assessments',
              label: 'Assessments',
              children: [
                { level: 3, name: 'neurological', label: 'Neurological' },
                { level: 3, name: 'billing', label: 'Respiratory' },
                { level: 3, name: 'biopsychosocial', label: 'Cardiovascular' },
                { level: 3, name: 'mar', label: 'Gastrointestinal' },
                { level: 3, name: 'progress-notes', label: 'Genitourinary' }
              ]
            }
          ]
        },
        {
          level: 1,
          name: 'current',
			 label: 'Current',
          children: [
            { level: 2, name: 'details', label: 'Details' },
            { level: 2, name: 'billing', label: 'Billing' },
            { level: 2, name: 'biopsychosocial', label: 'Biopsychosocial' },
            { level: 2, name: 'mar', label: 'Mar' },
            { level: 2, name: 'progress-notes', label: 'Progress Notes' }
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
