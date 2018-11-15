<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Surgical
		p redirect: 
		p path: base/patient/history/surgical
</template>

<script>
export default {
  name: 'Surgical'
}
</script>

<style lang="scss" scoped>
.Surgical {
  &__main {
  }
}
</style>'