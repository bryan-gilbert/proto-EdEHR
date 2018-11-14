<template lang="pug">
	div(:class="$options.name")
		div(slot="ehrPageTitle")
			h1  {{$options.name}}
		div
			.label First Name
			.input(name="fname")
</template>

<script>
export default {
  name: 'EhrPanelDemographics',
  components: {},
  data: function() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.EhrPanelDemographics {
  &__main {
  }
}
</style>
