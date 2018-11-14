<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Patient
		p redirect: 
		p path: base/patient
</template>

<script>
export default {
  name: 'Patient',
}
</script>

<style lang="scss" scoped>
.Patient {,
  &__main {
  }
}
</style>'