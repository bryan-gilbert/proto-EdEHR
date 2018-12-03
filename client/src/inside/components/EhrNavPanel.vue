<template lang="pug">
  div(:class="$options.name")
    div(:class="`${$options.name}__top`")
      ui-button(v-on:buttonClicked="returnToClicked", :class="`${$options.name}__returnButton`") {{ returnButtonLabel }}
    ehr-nav-list(v-for="path in menuList" :key="path.name" :path="path" :level="1")
</template>
<script>
import UiLink from '../../app/ui/UiLink.vue'
import UiButton from '../../app/ui/UiButton.vue'
import EhrNavList from './EhrNavList'

export default {
  name: 'EhrNavPanel',
  components: {
    UiButton,
    UiLink,
    EhrNavList
  },
  computed: {
    returnUrl() {
      if (this.$store.state.sVisitInfo.isStudent) {
        return this.$store.state.sVisitInfo.returnUrl
      } else {
        return 'Return to class list'
      }
    },
    returnButtonLabel() {
      if (this.$store.state.sVisitInfo.isStudent) {
        return 'Return to ' + this.lmsName
      } else {
        return 'Return to class list'
      }
    },
    lmsName() {
      if (this.$store.state.sVisitInfo && this.$store.state.sVisitInfo.toolConsumer)
        return this.$store.state.sVisitInfo.toolConsumer.tool_consumer_instance_name
      return ''
    },
    menuList() {
      // read the menu definition stored in the project root src (client/src)
      var menu = require('../../menuList.json')
      return menu
    }
  },
  methods: {
    returnToClicked() {
      if (this.$store.state.sVisitInfo.isStudent) {
        window.location = this.$store.state.sVisitInfo.returnUrl
      } else {
        var rUrl = this.$store.state.sInstructorReturnUrl
        window.location = rUrl
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.EhrNavPanel {
  background-color: #151a24;
  height: 100%;
  color: #efefef;

  &__top {
    padding: 15px;
  }
  a {
    color: white;
  }
  &__returnButton {
    width: 100%;
  }
}
</style>
