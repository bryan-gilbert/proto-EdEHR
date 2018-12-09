<template>
  <header :class="$options.name">
    <div :class="`${$options.name}__wrapper columns`">
      <router-link
        :class="`${$options.name}__navLink ${$options.name}__home column`"
        :to="{ name: `home` }"
      >
        Educational Electronic Health Record System
      </router-link>

      <nav :class="`${$options.name}__nav column`">
        <ul :class="`${$options.name}__navList is-pulled-right`">
          <li :class="`${$options.name}__navItem`">
            <router-link
              :to="{ name: `dashboard` }"
              :class="`${$options.name}__navLink`"
              >Dashboard</router-link
            >
          </li>
          <li :class="`${$options.name}__navItem`">
            <router-link
              :to="{ name: `progress-notes` }"
              :class="`${$options.name}__navLink`"
              >EHR</router-link
            >
          </li>
          <li :class="`${$options.name}__navItem`">
            <router-link
              :to="{ name: `account` }"
              :class="`${$options.name}__navLink`"
              >Account - {{ username }}</router-link
            >
          </li>
          <li :class="`${$options.name}__navItem`">
            <router-link
              :to="{ name: `help` }"
              :class="`${$options.name}__navLink`"
              >Help</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    username() {
      let info = this.$store.state.sUserInfo
      return info ? info.givenName : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.AppHeader {
  background: $toolbar-background-color;
  color: $toolbar-color;
  /*font-family: "Open Sans", open-sans, sans-serif;*/
  @include wrapper('page');
  padding: 1rem;

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__home {
    text-decoration: none;
    font-weight: 500;
  }

  &__nav {
  }

  &__navList {
    display: flex;
  }

  &__navItem {
    &:not(:first-child) {
      margin-left: 1.5em;

      &::before {
        margin-right: 0.5em;
      }
    }
  }

  &__navLink {
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
