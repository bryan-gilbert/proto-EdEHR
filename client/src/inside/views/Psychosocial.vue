<template lang="pug">
	div(:class="$options.name")
		h1(slot="ehrPageTitle") Psychosocial
		div(class="region")
			p component name: Psychosocial
			p redirect: none
			p route name: psychosocial
			p full path: base/patient/history/psychosocial
		div(class="region")
			p component name: Billing asasd
			p redirect: none
			p route name: billing
			p full path: base/current/billing
		div(class="region")
			div(class="columns")
				div(class="column is-one-third")
					label(for="sampleTA") Sample Textarea
					textarea(class="textarea" id="sampleTA", name="Sample TS")
				div(class="column is-one-third")
					label column two
					input(class="input is-info" readonly value="read only text" type="text" placeholder="Text input")
				div(class="column is-one-third")
					label column three
					input(class="input is-info" readonly value="read only text" type="text" placeholder="Text input")
			div(class="columns")
				div(class="column is-one-third")
					label another
					input(class="input", type="text")
				div(class="column is-one-third")
					label another
					input(class="input", type="text")
				div(class="column is-one-third")
					label pick one
					div(class="select")
						select
							option one
							option two
							option three
</template>

<script>
export default {
  name: 'Psychosocial'
}
</script>

<style lang="scss" scoped>
.select {
  display: block;
}
select {
  width: 100%;
}
.region {
  /* border: 1px dashed black; */
}
.Psychosocial {
  padding: 1rem;

  &__main {
    font-size: 0.8rem;
  }
}
</style>
