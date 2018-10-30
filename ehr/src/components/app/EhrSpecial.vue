<template>
  <div :class="$options.name">
      This is the EHR special content panel
    <div>
      <p>Count: {{ count }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
    </div>
    <div :class="`${$options.name}__special`">
      <div>Assignment:  {{userInfo.resource_link_title}}</div>
      <div>Description:  {{userInfo.resource_link_description}}</div>
      <div>Full Name:  {{userInfo.lis_person_name_full}}</div>
      <div>Roles:  {{userInfo.roles}}</div>
      <div>userData:  {{userData}}</div>
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
      userInfo: {},
      userData: {}
    }
  },
  created: function() {
    this.listenToEvents();
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    listenToEvents() {
      bus.$on('user-info', ($event) => {
        // another component is loading the user data. This listener let's us use the data here.
        this.userInfo = $event
      })
      bus.$on('user-data', ($event) => {
        // another component is loading the user data. This listener let's us use the data here.
        this.userData = $event
      })
    },
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }

  }
};
</script>

<style lang="scss" scoped>
.EhrSpecial {
}
</style>
