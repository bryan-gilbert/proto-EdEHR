<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: CarePlan
		p redirect: 
		p path: base/chart/care-plan
</template>

<script>
export default {
  name: 'CarePlan',
}
</script>

<style lang="scss" scoped>
.CarePlan {,
  &__main {
  }
}
</style>'