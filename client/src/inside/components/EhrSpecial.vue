<template>
  <div :class="$options.name">
    <p>This is the EHR special content panel</p>
    <div :class="`${$options.name}__special`">
    <hr />
    <div :class="`${$options.name}__data`">
      <li v-for="(value, propertyName) in visitInfo" v-bind:key="propertyName">
        <strong>{{ propertyName }}</strong> : {{ value }}
      </li>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'EhrSpecial',
  data() {
    return {}
  },
  computed: {
    userInfo() {
      var vi = this.$store.state.sVisitInfo
      var uInfo = vi.user ? vi.user : {}
      return uInfo
    },
    visitInfo() {
      return this.$store.state.sVisitInfo
    },
    data() {
      var vi = this.$store.state.sVisitInfo
      var act = vi.assignmentData ? vi.assignmentData : {}
      return act
    },
    assignment() {
      var vi = this.$store.state.sVisitInfo
      var act = vi.assignment ? vi.assignment : {}
      return act
    },
    activity() {
      var vi = this.$store.state.sVisitInfo
      var act = vi.activity ? vi.activity : {}
      return act
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  @import '../../scss/objects/wrapper.mixin';

  .EhrSpecial {
    @include wrapper('page');
    background-color: lavender;
    padding: 5rem 2rem  ;
    z-index: 10;

  &__data {
  }
}
</style>
