<template>
  <div :class="$options.name">

    <p>money converter</p>

    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>

  </div>
</template>

<script>

export default {
  name: `MoneyConverter`,
	data: function () {
		return {
				selected: 'B',
				options: [
					{ text: 'One', value: 'A' },
					{ text: 'Two', value: 'B' },
					{ text: 'Three', value: 'C' }
				]
		}
	},
  components: {

  },
};
</script>

<style lang="scss" scoped>
.MoneyConverter {
  $section-spacing: 3em;

  &__contentList {
    margin-top: $section-spacing;
  }
}
</style>
