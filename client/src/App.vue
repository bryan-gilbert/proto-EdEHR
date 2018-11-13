<template>
  <div id="app">
     <comment :is="layout">
     <router-view/>
     </comment>
  </div>
</template>

<script>
const DefaultLayout = 'outside'

export default {
  name: 'App',
  methods: {},
  components: {},
  computed: {
    layout() {
      const l = (this.$route.meta.layout || DefaultLayout) + '-layout'
      console.log('using layout ', l)
      return l
    }
  }
}
</script>

<style lang="scss">
</style>
