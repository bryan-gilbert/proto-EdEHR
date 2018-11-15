<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: NoMed
		p redirect: 
		p path: base/current/no-med
</template>

<script>
export default {
  name: 'NoMed'
}
</script>

<style lang="scss" scoped>
.NoMed {
  &__main {
  }
}
</style>'