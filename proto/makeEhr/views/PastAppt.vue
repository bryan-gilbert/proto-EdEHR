<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: PastAppt
		p redirect: 
		p path: base/patient/past-appt
</template>

<script>
export default {
  name: 'PastAppt'
}
</script>

<style lang="scss" scoped>
.PastAppt {
  &__main {
  }
}
</style>'