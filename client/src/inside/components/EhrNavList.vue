<template lang="pug">
	div(:class="`${$options.name}`")
		div(:class="`${$options.name}__teaserList`")
			ehr-nav-list-item(:path="path", :level="level")
			ehr-nav-list(v-for="child in path.children", v-bind:key="child.name" :path="child" :level="level + 1")
</template>

<script>
import EhrNavList from './EhrNavList'
import EhrNavListItem from './EhrNavListItem'
// 				ui-link(:to="{ name: path.name }", :class="`${$options.name}__link`") - {{ path.label }}

export default {
  name: 'EhrNavList',
  components: {
    EhrNavList,
    EhrNavListItem
  },
  props: {
    path: {
      type: Object
    },
    level: { type: Number }
  }
}
</script>

<style lang="scss" scoped>
.EhrNavList {
  padding: 0;
  &__teaserList {
    margin-left: 0;
  }
  &__link {
    color: white;
  }
}
</style>
