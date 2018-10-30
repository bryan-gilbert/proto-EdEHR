<template>
  <div :class="$options.name">
    parent prop: {{title}}
    <ehr-banner>

    </ehr-banner>
    <ehr-panel>

    </ehr-panel>
  </div>
</template>

<script>
import EhrBanner from '../app/EhrBanner.vue';
import EhrPanel from '../app/EhrPanel.vue';
import bus from "../eventBus.js"

export default {
  name: `EhrPagePoc`,
  components: {
    EhrBanner,
    EhrPanel
  },
  props: ['title'],
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
.EhrPagePoc {
  $section-spacing: 3em;

}
</style>
