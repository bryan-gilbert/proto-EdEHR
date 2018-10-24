<template>
  <div :class="$options.name">
     <div>
      <slot name="link"/>
     </div>
  </div>
</template>

<script>

export default {
  name: `EhrNav`,
  components: {
  },
  props: {
    action: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>

.EhrNav {
}
</style>
