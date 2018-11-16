<template>
  <div :class="$options.name">
    <app-hero>
      <template slot="headline">
        List
      </template>

      <p>
        This is an example for a list of content (e.g products).
        consetetur sadipscing elitr, sed diam nonumy irmod tempor
        invidunt ut labore et dolore magna
      </p>
    </app-hero>

    <app-content-list :class="`${$options.name}__contentList`">
      <app-content-list-item contentItemKey="item1">
        <template slot="figure">
          <img
            src="http://via.placeholder.com/76x76"
            alt="Placeholder image">
        </template>
        <template slot="headline">Lorem Ipsum</template>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor inviduntt.
        </p>
        <template slot="actions">
          <ui-button v-on:buttonClicked="buyButton($event)">Buy me!</ui-button>
        </template>
      </app-content-list-item>
      <app-content-list-item contentItemKey="item2">
        <template slot="figure">
          <img
            src="http://via.placeholder.com/76x76"
            alt="Placeholder image">
        </template>
        <template slot="headline">Lorem Ipsum</template>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor inviduntt.
        </p>
      </app-content-list-item>
      <app-content-list-item contentItemKey="item3">
        <template slot="figure">
          <img
            src="http://via.placeholder.com/76x76"
            alt="Placeholder image">
        </template>
        <template slot="headline">Lorem Ipsum</template>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor inviduntt.
        </p>
      </app-content-list-item>
      <app-content-list-item contentItemKey="item4">
        <template slot="figure">
          <img
            src="http://via.placeholder.com/76x76"
            alt="Placeholder image">
        </template>
        <template slot="headline">Lorem Ipsum</template>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor inviduntt.
        </p>
      </app-content-list-item>
    </app-content-list>
  </div>
</template>

<script>
import UiButton from '../ui/UiButton.vue';
import AppContentList from '../app/AppContentList.vue';
import AppContentListItem from '../app/AppContentListItem.vue';
import AppHero from '../app/AppHero.vue';

export default {
  name: `PageList`,
  components: {
		UiButton,
    AppContentList,
    AppContentListItem,
    AppHero,
  },
  methods: {
    buyButton: function() {
      console.log("Buy button clicked ", this.contentItemKey)
    }
  }
};
</script>

<style lang="scss" scoped>
.PageList {
  $section-spacing: 3em;

  &__contentList {
    margin-top: $section-spacing;
  }
}
</style>
