<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Psychosocial
		p redirect: 
		p path: base/patient/history/psychosocial
</template>

<script>
export default {
  name: 'Psychosocial'
}
</script>

<style lang="scss" scoped>
.Psychosocial {
  &__main {
  }
}
</style>'