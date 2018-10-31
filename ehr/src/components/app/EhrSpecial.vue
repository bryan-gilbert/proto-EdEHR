<template>
  <div :class="$options.name">
    <p>This is the EHR special content panel</p>
    <div :class="`${$options.name}__special`">
      <div>Assignment:  {{userInfo.resource_link_title}}</div>
      <div>Description:  {{userInfo.resource_link_description}}</div>
      <div>Full Name:  {{userInfo.lis_person_name_full}}</div>
      <div>Roles:  {{userInfo.roles}}</div>
    </div>
  </div>
</template>

<script>
  import EhrPanelHeader from '../app/EhrPanelHeader.vue';
  import EhrPanelContent from '../app/EhrPanelContent.vue';
  import bus from "../eventBus.js"

export default {
  name: `EhrSpecial`,
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  data () {
    return {  }
  },
  created: function() {
    this.listenToEvents();
  },
  computed: {
    userInfo () {
      return this.$store.state.sUserInfo
    },
    userData () {
      return this.$store.state.sUserData
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.EhrSpecial {
}
</style>
