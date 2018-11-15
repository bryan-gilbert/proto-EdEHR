<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: LabReqs
		p redirect: 
		p path: base/current/no-med/lab-reqs
</template>

<script>
export default {
  name: 'LabReqs'
}
</script>

<style lang="scss" scoped>
.LabReqs {
  &__main {
  }
}
</style>'