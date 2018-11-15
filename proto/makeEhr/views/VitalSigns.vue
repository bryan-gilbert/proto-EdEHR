<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: VitalSigns
		p redirect: 
		p path: base/current/vital-signs
</template>

<script>
export default {
  name: 'VitalSigns'
}
</script>

<style lang="scss" scoped>
.VitalSigns {
  &__main {
  }
}
</style>'