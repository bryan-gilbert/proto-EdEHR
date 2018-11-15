<template lang="pug">
	div(:class="`${$options.name}`")
		p {{ name }}
		div(:class="`${$options.name}__teaserList`")
			e-n-list-item(v-for="path in children", v-bind:key="path.name" :path="path" :level="level")
</template>

<script>
// import ENList from '../components/EhrNavList'
import ENListItem from './EhrNavListItem'
// 				ui-link(:to="{ name: path.name }", :class="`${$options.name}__link`") - {{ path.label }}

export default {
  name: 'EhrNavList',
  components: {
    // ENList,
    ENListItem
  },
  props: {
    level: { type: Number },
    name: {
      type: String
    },
    children: {
      type: Array
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
