<template>
  <div :class="$options.name" >
    <app-hero>
      <template slot="headline">
        Dev
      </template>
    </app-hero>
    <ui-button v-on:buttonClicked="appButtonClicked($event)">Click App Button</ui-button>
    This is the Dev page
{{userInformation}}
  </div>
</template>

<script>
import UiButton from '../ui/UiButton.vue';
import AppHero from '../app/AppHero.vue';

export default {
  name: `PageDev`,
  components: {
    AppHero,
		UiButton
  },
  computed: {
    userInformation () {
      let userInfo = this.$store.state.sUserInfo
      if(userInfo) {
        console.log("this.$store.state.sUserInfo", userInfo)
        return userInfo
      }
      return {}
    }
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
