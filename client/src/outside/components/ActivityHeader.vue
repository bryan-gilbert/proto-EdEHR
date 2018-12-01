<template lang="pug">
  div(:class="$options.name")
    div(class="activities-header")
      div(class="aName") LMS Activity:
      div(class="aValue", :title="activity._id") {{ activity.resource_link_title }}
    div
      div(class="aName") LMS Description:
      div(class="aValue") {{ activity.resource_link_description }}
    div
      div(class="aName") EHR Assignment:
      div(class="aValue") {{ activity.assignment.name }}  ( Id for LMS: {{ activity.assignment.externalId }} )
    router-view
</template>

<script>
export default {
  name: 'ActivityHeader',
  props: {
    activity: { type: Object }
  }
}
</script>

<style lang="scss" scoped>
.ActivityHeader {
  .aName {
    display: inline-block;
    width: 10rem;
    font-weight: 600;
  }
  .aValue {
    display: inline;
  }
}
</style>
