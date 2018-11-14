<template lang="pug">
	div(:class="$options.name")
		div
			slot(name="etitle") in p
		slot Here
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'EhrPanel',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  }
}
</script>

<style lang="scss" scoped>
.EhrPanel {
}
</style>
