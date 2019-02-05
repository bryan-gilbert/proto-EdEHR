<template lang="pug">
  div(class="home")
    h1 This Vue app is for prototyping
</template>

<script>
import Tabs from '../components/Tabs'
import Tab from '../components/Tab'
import VitalsChart from '../components/VitalsChart'

export default {
  name: 'home',
  components: {
    Tabs,
    Tab,
    VitalsChart
  }
}
</script>
