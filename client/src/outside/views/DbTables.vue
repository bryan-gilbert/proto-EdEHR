<template lang="pug">
  div(:class="$options.name")
    out-panel-header Sessions
    out-panel-content
      div(class="region")
        div(class="select")
          select(v-model="selectedTable")
            option(value="users") Users
            option(value="activities") Activities
            option(value="activitySessions") Activity Sessions
            option(value="visitDatas") Visit Data
            option(value="visits")  Visits
      div(class="region")
        span Selected: {{ selectedTable }}
</template>

<script>
import OutPanelHeader from '../components/OutPanelHeader.vue'
import OutPanelContent from '../components/OutPanelContent.vue'

export default {
  name: 'Allergies',
  components: {
    OutPanelHeader,
    OutPanelContent
  },
  data: function() {
    return {
      selectedTable: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color.scss';

.select {
  display: block;
}
select {
  width: 100%;
}
.region {
  /* border: 1px dashed $black; */
}
.Allergies {
  &__main {
  }
}
</style>
