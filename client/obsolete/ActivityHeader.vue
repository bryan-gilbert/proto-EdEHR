<template lang="pug">
  div(class="activities-header")
    div(class="aValue", :title="activity._id") {{ activity.resource_link_title }}
    div(class="aValue") {{ activity.resource_link_description }}
    div(class="aValue") {{ assignment.name }}  ( Id for LMS: {{ assignment.externalId }} )
</template>

<script>
export default {
  name: 'ActivityHeader',
  props: {
    activity: { type: Object }
  },
  computed: {
    assignment() {
      // console.log('What is in activity', this.activity)
      let a = this.activity.assignment || {}
      return a
    }
  }
}
</script>

<style lang="scss" scoped>
.activities-header {
  margin-left: 15px;
  .aName {
  }
  .aValue {
  }
}
</style>
