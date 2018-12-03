<template lang="pug">
  div(class="post")
    h2(class="hello") Student: {{userInfo.givenName}}
    as-visitor(visitor-type="Student")
</template>

<script>
import UiLink from '../../app/ui/UiLink'
import AsVisitor from '../components/AsVisitor'
export default {
  name: 'Student',
  components: {
    UiLink,
    AsVisitor
  },
  props: {
    id: {
      type: String,
      default: 'Newbie'
    }
  },
  computed: {
    userInfo() {
      var vi = this.$store.state.sVisitInfo
      var uInfo = vi.user ? vi.user : {}
      return uInfo
    },
    activity() {
      // return this.$store.state.sActivityInfo
      // console.log('TO DO ... get activity data here')
      return {}
    },
    visitInfo() {
      return this.$store.state.sVisitInfo
    }
  }
}
</script>
