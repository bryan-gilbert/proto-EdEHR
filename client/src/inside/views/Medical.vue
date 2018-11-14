<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Medical
		p redirect: 
		p path: base/patient/history/medical
</template>

<script>
export default {
  name: 'Medical',
}
</script>

<style lang="scss" scoped>
.Medical {,
  &__main {
  }
}
</style>'