<template>
  <div :class="$options.name">
      This is the EHR special content panel
    <div :class="`${$options.name}__special`">
      <div>Assignment:  {{userData.resource_link_title}}</div>
      <div>Description:  {{userData.resource_link_description}}</div>
      <div>Full Name:  {{userData.lis_person_name_full}}</div>
      <div>Roles:  {{userData.roles}}</div>
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
    return {
      userData: {}
    }
  },
  created: function() {
    this.listenToEvents();
  },
  methods: {
    listenToEvents() {
      bus.$on('user-data', ($event) => {
        // another component is loading the user data. This listener let's us use the data here.
        this.userData = $event
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.EhrSpecial {
}
</style>
