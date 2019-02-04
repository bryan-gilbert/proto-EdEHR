<template lang="pug">
  div(class="home")
      tabs
        tab(name="Table")
          h1 This tab will show a table
        tab(name="Chart",:selected="true")
          h1 Protoype vital signs chart
          vitals-chart
        tab(name="Trend")
          h1 This tab will show something else
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
