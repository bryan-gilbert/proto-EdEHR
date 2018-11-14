<template>
  <div :class="$options.name">
    <ui-button :class="`${$options.name}__saveButton`">
      <a href="http://localhost:3000">Save</a>
    </ui-button>
    <div :class="`${$options.name}__wrapper`">
      <ehr-nav-list :class="`${$options.name}__teaserList`">
        <div :class="`${$options.name}__data`">
          <li v-for="path in paths" v-bind:key="path.label">
            <ehr-nav-list-item>
              <ehr-nav :action="{ to: { name: path.name }, label: path.label }">
                <template slot="link">
                  <ui-link :to="{ name: path.name }" :class="`${$options.name}__link`">
                    {{ path.label }}
                  </ui-link>
                </template>
              </ehr-nav>
            </ehr-nav-list-item>
          </li>
        </div>
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
import EhrRoutes from '../ehrRoutes'
var ehrRoutes = new EhrRoutes()

export default {
  name: 'EhrNavPanel',
  components: {
    UiButton,
    UiLink,
    EhrNav,
    EhrNavList,
    EhrNavListItem
  },
  computed: {
    paths() {
      console.log('Go get paths')
      const ePaths = ehrRoutes.getPaths()
      return ePaths
    }
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
