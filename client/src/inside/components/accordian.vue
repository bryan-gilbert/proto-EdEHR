<template>
  <div class="accordion">
    <div class="header" v-on:click="toggle">
      <slot name="header">HINT</slot>
    </div>
    <transition
      name="accordion"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <div class="body" v-show="show">
        <div class="body-inner"><slot></slot></div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: false
      };
    },
    methods: {
      toggle: function () {
        this.show = !this.show;
      },
      // enter: function(el, done) {
      //   $(el).slideDown(150, done);
      // },
      // leave: function(el, done) {
      //   $(el).slideUp(150, done);
      // },
      beforeEnter: function (el) {
        el.style.height = '0';
      },
      enter: function (el) {
        el.style.height = el.scrollHeight + 'px';
      },
      beforeLeave: function (el) {
        el.style.height = el.scrollHeight + 'px';
      },
      leave: function (el) {
        el.style.height = '0';
      }
    }
  }
    </script>
    <style lang="scss" scoped>
      .accordion {
        max-width: 400px;
        font-family: Lato;
        margin-bottom: 20px;

        background-color: #ec5366;
        border-radius: 6px;
      }

      .accordion .header {
        height: 40px;
        line-height: 40px;
        padding: 0 40px 0 8px;
        position: relative;
        color: #fff;
        cursor: pointer;
      }

      .accordion .header-icon {
        position: absolute;
        top: 5px;
        right: 8px;
        transform: rotate(0deg);
        transition-duration: 0.3s;
      }

      .accordion .body {
        /*   display: none; */
        overflow: hidden;
        background-color: #fff;
        border: 10px solid #ec5366;
        border-top: 0;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        transition: 350ms ease-out;
      }

      .accordion .body-inner {
        padding: 8px;
        overflow-wrap: break-word;
        /*   white-space: pre-wrap; */
      }

      .accordion .header-icon.rotate {
        transform: rotate(180deg);
        transition-duration: 0.3s;
      }

      .accordion.purple {
        background-color: #8c618d;
      }

      .accordion.purple .body {
        border-color: #8c618d;
      }
    </style></template
  ></template
>
