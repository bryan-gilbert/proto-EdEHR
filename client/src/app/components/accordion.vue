<template lang="pug">
  div(class="accordion")
    div(class="header", v-on:click="toggle")
      slot(name="header")
      span(class="header-icon", v-bind:class="{ rotate: show }") V
    transition(name="accordion", v-on:before-enter="beforeEnter", v-on:enter="enter" , v-on:before-leave="beforeLeave", v-on:leave="leave")
      div(class="body",v-show="show")
        div(class="body-inner")
          slot
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggle: function() {
      this.show = !this.show
    },
    beforeEnter: function(el) {
      el.style.height = '0'
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave: function(el) {
      el.style.height = '0'
    }
  }
}
</script>
<style lang="scss" scoped>
.accordion {
  background-color: #e8ebed;
  .header {
    height: 40px;
    line-height: 40px;
    padding: 0 40px 0 8px;
    position: relative;
    cursor: pointer;
  }
  .header-icon {
    position: absolute;
    top: 5px;
    right: 8px;
    transform: rotate(0deg);
    transition-duration: 0.3s;
  }

  .body {
    border-top: 0;
    transition: 350ms ease-out;
  }

  .body-inner {
  }

  .header-icon.rotate {
    transform: rotate(180deg);
    transition-duration: 0.3s;
  }
}
</style>
