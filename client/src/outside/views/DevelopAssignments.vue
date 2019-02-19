<template lang="pug">
  div
    assignment-list
    assignments-listing
</template>

<script>
import AssignmentList from '../components/AssignmentList'
import AssignmentsListing from '../views/AssignmentsListing'
export default {
  name: 'DevelopAssignments',
  components: {
    AssignmentList,
    AssignmentsListing
  }
}
</script>

<style lang="scss" scoped>
</style>
