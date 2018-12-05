<template lang="pug">
  transition(name="dialog")
    div(:class="['dialog-wrapper', { dragged: dragged }]", , v-moused="onMoused", v-bind:style="{ top: top + 'px', left: left + 'px', width: width + 'px', height: height + 'px' }")
      div(class="dialog-banner", v-dragged="onDragged")
      div(class="dialog-container")
        div(class="dialog-header columns")
          div(class="dialog-header-content column is-11")
            h3
              slot(name="header") default header
          div(class="dialog-header-menu  column is-1")
            button(class="dialog-close-button", @click="$emit('cancel')") X
        div(class="dialog-body")
          div top: {{ top }}
          div left: {{ left }}
          div width: {{ width }}
          div height: {{ height }}
          slot(name="body") default body
        div(class="dialog-footer")
          div(class="dialog-footer-errors", v-if="errors.length")
            p Please correct the following
            ul
              li(v-for="error in errors") {{error}}
          div(class="dialog-footer-bar columns")
            div(class="dialog-footer-content column")
            button(class="dialog-default-button column", @click="$emit('save')")
              slot(name="button1") default close button

</template>

<script>
// <div :class="['box', { dragged: dragged }]" v-dragged="onDragged" v-tooltip.notrigger="{ content: 'Drag me', visible: !dragged }">
export default {
  name: 'AppDialog',
  props: {
    errors: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  computed: {
    saveEnabled() {
      return false
    }
  },
  data() {
    return {
      top: 350,
      left: 200,
      width: 700,
      height: 300,
      resizeDirection: '',
      // deltaX: 0,
      // deltaY: 0,
      resizing: false,
      dragged: false
    }
  },
  methods: {
    onMoused({ el, deltaX, deltaY, start, end, resizeDirection }) {
      if (start || end) {
        this.resizing = true
        this.resizeDirection = resizeDirection
        return
      }
      if (end) {
        this.resizing = false
        this.resizeDirection = ''
        return
      }
      console.log('resizeDirection', this.resizeDirection)
      const MIN_WIDTH = 200
      const MIN_HEIGHT = 300
      const vm = this
      function north() {
        vm.height -= deltaY
        vm.height = Math.max(MIN_HEIGHT, vm.height)
        if(vm.height > MIN_HEIGHT) {
          vm.top += deltaY
        }
      }
      function south() {
        vm.height += deltaY
        vm.height = Math.max(MIN_HEIGHT, vm.height)
      }
      function east() {
        vm.width += deltaX
        vm.width = Math.max(MIN_WIDTH,vm.width)
      }
      function west() {
        vm.width -= deltaX
        vm.width = Math.max(MIN_WIDTH,vm.width)
        if (vm.width > MIN_WIDTH) {
          vm.left += deltaX
        }
      }
      switch (this.resizeDirection) {
        case 'n':
          north()
          break
        case 's':
          south()
          break
        case 'e':
          east()
          break
        case 'w':
          west()
          break
        case 'nw':
          north()
          west()
          break
        case 'se':
          south()
          east()
          break
        case 'ne':
          north()
          east()
          break
        case 'sw':
          south()
          west()
          break
      }
    },
    onDragged({ el, deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last }) {
      if (first || last) {
        this.dragged = first
        return
      }
      this.left += deltaX
      this.top += deltaY
      // parent = el.parentElement
    }
  }
}
</script>

<style lang="scss">
.dialog-wrapper {
  position: absolute;
  overflow: auto;
  z-index: 9;
  background-color: #fff;
  box-sizing: border-box;
  border: solid 10px;
  border-radius: 4px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.dialog-wrapper.dragged {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.dialog-banner {
  height: 30px;
  width: 100%;
  cursor: pointer;
  background-color: palegoldenrod;
}
.dialog-container {
  /*width: 900px;*/
  margin: 0px auto;
  padding: 20px 30px;
  overflow: hidden;
}

.dialog-header h3 {
  margin-top: 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  color: #383c45;
}

.dialog-body {
  margin: 20px 0;
  width: 100%;
}

.dialog-border {
  border: 12px solid blue;
  cursor: pointer;
}
.dialog-footer {
  align-items: flex-end;
  padding: 0 25px;

  .dialog-footer-content {
    flex-grow: 1;
  }

  .dialog-footer-errors li {
    margin-left: 5px;
  }
}

.dialog-default-button {
  background-color: #3396ff;
  border-radius: 4px;
  border: none;
  box-shadow: inset 0 2px 0 0 #ffffff, 0 1px 2px 0 rgba(21, 26, 36, 0.2);
  color: #ffffff;
  text-align: center;
  text-shadow: 0 1px 0 0 #ffffff;
  line-height: 19px;
  font-size: 15px;
}

.dialog-close-button {
  border: none;
  background: white;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
}
/* **********
Cursors
*/
.n-resize {
  cursor: n-resize;
}
.e-resize {
  cursor: e-resize;
}
.s-resize {
  cursor: s-resize;
}
.w-resize {
  cursor: w-resize;
}
.ns-resize {
  cursor: ns-resize;
}
.ew-resize {
  cursor: ew-resize;
}
.ne-resize {
  cursor: ne-resize;
}
.nw-resize {
  cursor: nw-resize;
}
.se-resize {
  cursor: se-resize;
}
.sw-resize {
  cursor: sw-resize;
}

/* **********
  *
  * Styling generic input elements that appear in EdEHR dialogs
  *
  */
.input-fieldrow {
  display: flex;
}

.input-element {
  label,
  input {
    display: block;
  }
  input,
  textarea {
    height: 2rem;
    border: 1px solid #cbced1;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 rgba(21, 26, 36, 0.5);
  }
  input {
    height: 2rem;
  }
  textarea {
    height: 6rem;
    width: 100%;
  }
}

.input-element-full {
  width: 100%;
}

.input-element-small {
  flex: 1 0 auto;
  input {
    width: 5rem;
  }
}
.input-element-medium {
  flex: 2 0 auto;
  input {
    width: 15rem;
  }
}

/* *******
  * The following styles are auto-applied to elements with
  * transition="dialog" when their visibility is toggled
  * by Vue.js.
  *
  * You can easily play with the dialog transition by editing
  * these styles.
  */

.dialog-enter {
  opacity: 0;
}

.dialog-leave-active {
  opacity: 0;
}

.dialog-enter .dialog-container,
.dialog-leave-active .dialog-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
