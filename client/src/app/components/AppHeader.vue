<template lang="pug">
  header(class="apphdr")
    div(class="wrapper")
      ul(class="navList")
        li(class="navItem")
          span(class="apptitle") Educational Electronic Health Record - {{ username }}
        li(class="navItem push")
          a(:href="lmsUrl", class="navLink") {{lmsName}}
        li(v-if="isInstructor", class="navItem")
          router-link(:to="{ name: `instructor` }", class="navLink") Dashboard
        li(class="navItem")
          router-link(:to="{ name: `help` }", class="navLink") Help
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    username() {
      let n = this.$store.state.visit.sUserInfo.fullName
      // console.log('AppHeader GET NAME visit store getter for username "' + n + '"')
      return n
    },
    lmsUrl() {
      return this.$store.getters['visit/returnUrl']
    },
    lmsName() {
      return this.$store.getters['visit/lmsName']
    },
    isInstructor() {
      return this.$store.state.visit.sVisitInfo.isInstructor
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.apphdr {
  background: $toolbar-background-color;
  color: $toolbar-color;
  padding: 10px 0 20px 20px;

  .wrapper {
    @include wrapper('content');
  }
  .navList {
    display: flex;
    /* default is flow in row without wrap */
  }

  .apptitle {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .push {
    margin-left: auto;
  }

  .navItem {
    margin-right: 1em;
  }

  .navLink {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;

    &,
    &:visited {
      color: inherit;
    }

    &:focus,
    &:hover,
    &.is-active {
      text-decoration: underline;
    }
  }
}
</style>
