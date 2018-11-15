<template lang="pug">
	div(:class="`$options.name ${$options.name}__content`")
		div(:class="outClass")
			ui-link(:to="{ name: path.name }", :class="linkClass") {{ path.label }}
</template>

<script>
import ENList from './EhrNavList'
import UiLink from '../../app/ui/UiLink.vue'
// <div class="loading" v-if="loading">Loading...</div>
export default {
  name: 'EhrNavListItem',
  components: {
    UiLink,
    ENList
  },
  computed: {
    outClass() {
      var lv = this.level || 1
      return 'EhrNavListItem__level' + lv
    },
    linkClass() {
      var lv = this.level || 1
      return 'EhrNavListItem__link' + lv
    }
  },
  props: {
    path: {
      type: Object
    },
    level: { type: Number }
  }
}
// #E9EBED  #393c44
// #393C44  #50545B;
// #222733
</script>

<style lang="scss" scoped>
.EhrNavListItem {
  margin-top: 2px;
  &__level1,
  &__level2 {
    & a {
      color: #cbced1;
    }
  }
  active {
    background-color: #051f54;
  }
  &__level1 {
    background-color: #22262e;
    & a {
      color: #ffffff;
    }
  }
  &__level2 {
    background-color: #383c45;
    & a {
      color: #cbced1;
    }
  }
  &__level3 {
    background-color: #4f545c;
    & a {
      color: #cbced1;
    }
  }
  &__link1 {
    margin-left: 15px;
  }
  &__link2 {
    margin-left: 15px;
  }
  &__link3 {
    margin-left: 30px;
  }
}
</style>
