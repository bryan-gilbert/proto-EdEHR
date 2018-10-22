<template>
  <div :class="$options.name">
    <ui-button v-on:buttonClicked="returnToDashboard">Save</ui-button>
    <div :class="`${$options.name}__wrapper`">
      <ehr-nav-list :class="`${$options.name}__teaserList`">
        <ehr-nav-list-item>
          <ehr-nav :action="{ to: { name: `home` }, label: `Home` }">
            <template slot="link">
              <ui-link :to="{ name: `home` }":class="`${$options.name}__link`">
                page 1</ui-link>
            </template>
          </ehr-nav>
        </ehr-nav-list-item>

        <ehr-nav-list-item>
          <ehr-nav :action="{ to: { name: `home` }, label: `Home` }">
            <template slot="link">
              <ui-link :to="{ name: `home` }":class="`${$options.name}__link`">
                page 2</ui-link>
            </template>
          </ehr-nav>
        </ehr-nav-list-item>

        <ehr-nav-list-item>
          <ehr-nav :action="{ to: { name: `home` }, label: `Home` }">
            <template slot="link">
              <ui-link :to="{ name: `home` }":class="`${$options.name}__link`">
                page 2</ui-link>
            </template>
          </ehr-nav>
        </ehr-nav-list-item>

      </ehr-nav-list>
    </div>
  </div>
</template>


<script>
import EhrNav from '../app/EhrNav';
import EhrNavList from '../app/EhrNavList';
import EhrNavListItem from '../app/EhrNavListItem';
import UiLink from '../ui/UiLink.vue';
import UiButton from '../ui/UiButton.vue';

export default {
  name: `EhrNavPanel`,
  components: {
    UiButton,
    UiLink,
    EhrNav,
    EhrNavList,
    EhrNavListItem
  },
  methods: {
    returnToDashboard: function(event) {
    }
  }

};
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.EhrNavPanel {
  background-color: #23262d;
  height: 100%;
  color: #efefef;
  padding: 1rem;

  &__link {
    color: white;
  }
}
</style>
