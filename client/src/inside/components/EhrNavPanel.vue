<template>
  <div :class="$options.name">
    <ui-button :class="`${$options.name}__saveButton`">
      <a href="http://localhost:3000">Save</a>
    </ui-button>
    <div :class="`${$options.name}__wrapper`">
      <ehr-nav-list :class="`${$options.name}__teaserList`">
        <ehr-nav-list-item>
          <ehr-nav :action="{ to: { name: `home` }, label: `Home` }">
            <template slot="link">
              <ui-link :to="{ name: `home` }" :class="`${$options.name}__link`">
                page 1</ui-link
              >
            </template>
          </ehr-nav>
        </ehr-nav-list-item>

        <ehr-nav-list-item>
          <ehr-nav :action="{ to: { name: `home` }, label: `Home` }">
            <template slot="link">
              <ui-link :to="{ name: `home` }" :class="`${$options.name}__link`">
                page 2</ui-link
              >
            </template>
          </ehr-nav>
        </ehr-nav-list-item>

        <ehr-nav-list-item>
          <ehr-nav :action="{ to: { name: `home` }, label: `Home` }">
            <template slot="link">
              <ui-link :to="{ name: `home` }" :class="`${$options.name}__link`">
                page 2</ui-link
              >
            </template>
          </ehr-nav>
        </ehr-nav-list-item>
      </ehr-nav-list>
    </div>
  </div>
</template>

<script>
import EhrNav from '../components/EhrNav.vue'
import EhrNavList from '../components/EhrNavList.vue'
import EhrNavListItem from '../components/EhrNavListItem.vue'
import UiLink from '../../app/ui/UiLink.vue'
import UiButton from '../../app/ui/UiButton.vue'

export default {
  name: 'EhrNavPanel',
  components: {
    UiButton,
    UiLink,
    EhrNav,
    EhrNavList,
    EhrNavListItem
  }
}
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
  &__saveButton {
    width: 100%;
  }
}
</style>
