<template lang="pug">
  div(:class="$options.name")
    ui-button(v-on:buttonClicked="returnToLms", :class="`${$options.name}__saveButton`")
      a(v-bind:href="returnUrl") Return to {{ lmsName }}
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
      return this.$store.state.sVisitInfo.returnUrl
    },
    lmsName() {
      return this.$store.state.sVisitInfo.toolConsumer.tool_consumer_instance_name
    },
    menuList() {
      // read the menu definition stored in the project root src (client/src)
      var menu = require('../../menuList.json')
      return menu
    }
  },
  methods: {
    returnToLms() {
      window.location = this.returnUrl
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

  a {
    color: white;
  }
  &__saveButton {
    width: 100%;
  }
}
</style>
