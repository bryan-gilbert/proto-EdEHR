<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Cn
		p redirect: 
		p path: base/patient/history/cn
</template>

<script>
export default {
  name: 'Cn',
}
</script>

<style lang="scss" scoped>
.Cn {,
  &__main {
  }
}
</style>'