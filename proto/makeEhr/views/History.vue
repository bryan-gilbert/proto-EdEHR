<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: History
		p redirect: 
		p path: base/patient/history
</template>

<script>
export default {
  name: 'History'
}
</script>

<style lang="scss" scoped>
.History {
  &__main {
  }
}
</style>'