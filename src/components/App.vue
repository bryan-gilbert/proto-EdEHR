<template>
  <div :class="$options.name">
    theUrl {{ theUrl }}
    <layout-default>
      <router-view/>
    </layout-default>
  </div>
</template>

<script>
import LayoutDefault from './layout/LayoutDefault.vue';

export default {
  name: `App`,
  components: {
    LayoutDefault,
  },
  computed: {
    theUrl : function() {
      var something = this.$route
      console.log("Inside app computed url ", something)
      return 'aUrl'
    }
  }
};
</script>

<style lang="scss">
</style>
