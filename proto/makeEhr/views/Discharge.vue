<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Discharge
		p redirect: 
		p path: base/current/discharge
</template>

<script>
export default {
  name: 'Discharge'
}
</script>

<style lang="scss" scoped>
.Discharge {
  &__main {
  }
}
</style>'