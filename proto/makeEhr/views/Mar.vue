<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") {title}
		p component name: Mar
		p redirect: 
		p path: base/current/mar
</template>

<script>
export default {
  name: 'Mar'
}
</script>

<style lang="scss" scoped>
.Mar {
  &__main {
  }
}
</style>'