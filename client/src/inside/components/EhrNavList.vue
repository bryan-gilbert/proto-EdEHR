<template lang="pug">
	div(:class="`${$options.name}`")
		div(:class="`${$options.name}__teaserList`")
			ehr-nav-list-item(:path="path")
			ehr-nav-list(v-for="child in path.children", v-bind:key="child.name" :path="child")
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
    }
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
