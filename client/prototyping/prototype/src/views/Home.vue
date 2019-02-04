<template>
  <div class="home">
      <tabs>
        <tab name="About Us" :selected="true">
          <h1>This part is about us
          </h1>
        </tab>
        <tab name="About our culture">
          <h1>This part is about our culture
          </h1>
        </tab>
        <tab name="About our vision">
          <h1>This part is about our vision
          </h1>
        </tab>
      </tabs>

  </div>
</template>

<script>
// @ is an alias to /src
import Tabs from '../components/Tabs'
import Tab from '../components/Tab'

export default {
  name: 'home',
  components: {
    Tabs, Tab
  }
}
</script>
