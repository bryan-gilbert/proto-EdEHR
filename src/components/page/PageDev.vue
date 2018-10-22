<template>
  <div :class="$options.name" >
    <app-hero>
      <template slot="headline">
        Dev
      </template>
    </app-hero>
    <ui-button v-on:buttonClicked="appButtonClicked($event)">Click App Button</ui-button>
    This is the Dev page

  </div>
</template>

<script>
import MoneyConverter from '../currencyConverter/MoneyConverter.vue';
import UiButton from '../ui/UiButton.vue';
import AppHero from '../app/AppHero.vue';

export default {
  name: `PageDev`,
  components: {
    AppHero,
		MoneyConverter,
		UiButton
  },
	methods: {
		appButtonClicked: function (eventData) {
			console.log("handle devButtonClicked eventData");
		}
	}
};
</script>

<style lang="scss" scoped>
.PageDev {
  $section-spacing: 3em;

  &__contentList {
    margin-top: $section-spacing;
  }
}
</style>
