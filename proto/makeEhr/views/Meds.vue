<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Meds
		p redirect: 
		p path: base/current/meds
</template>

<script>
export default {
  name: 'Meds'
}
</script>

<style lang="scss" scoped>
.Meds {
  &__main {
  }
}
</style>'