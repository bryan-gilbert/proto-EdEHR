<template lang="pug">
  transition(name="dialog")
    div
      div(:class="modalClass")

      div(:class="['dialog-wrapper', { moused: moused }]", v-resized="onResize", v-bind:style="{ top: top + 'px', left: left + 'px', width: width + 'px', height: height + 'px' }")
        div(class="dialog-header columns", v-dragged="onDragged")
          div(class="dialog-header-content column is-10")
            slot(name="header") default header
          div(class="dialog-header-menu  column is-1")
            ui-close(v-on:close="$emit('cancel')")
        div(class="dialog-container")
          div(class="dialog-body")
            slot(name="body") default body
          div(class="dialog-footer columns")
            div(class="dialog-footer-errors column is-two-thirds")
              div(v-if="errors.length")
                p {{ errorDirections }} eer
                ul
                  li(v-for="error in errors") {{ error }}
            div(class="dialog-footer-content column")
              ui-button(v-on:buttonClicked="$emit('cancel')", v-bind:secondary="true")
                slot(name="cancel-button") {{ cancelButtonLabel }}
              div(class="dialog-footer-button-space")
              ui-button(v-on:buttonClicked="$emit('save')")
                slot(name="save-button") {{ saveButtonLabel }}
</template>

<script>
import UiClose from '../ui/UiClose'
import UiButton from '../ui/UiButton'
export default {
  name: 'AppDialog',
  components: {
    UiClose,
    UiButton
  },
  props: {
    isModal: { type: Boolean, default: false },
    saveButtonLabel: {
      type: String,
      default: 'Save'
    },
    cancelButtonLabel: {
      type: String,
      default: 'Cancel'
    },
    errorDirections: {
      type: String,
      default: 'Correct the following:'
    },
    errors: {
      type: Array,
      default: function() {
        return ['d']
      }
    }
  },
  computed: {
    saveEnabled() {
      return false
    },
    modalClass: function () {
      return {
        'modal-mask': this.isModal
      }
    }
  },
  data() {
    return {
      top: 100,
      left: 200,
      width: 900,
      height: 500,
      resizeDirection: '',
      moused: false
    }
  },
  methods: {
    onResize({ el, deltaX, deltaY, start, end, resizeDirection }) {
      if (start) {
        // console.log('start resize')
        this.moused = true
        this.resizeDirection = resizeDirection
        return
      }
      if (end) {
        // console.log('end resize')
        this.moused = false
        this.resizeDirection = ''
        return
      }
      // console.log('resizeDirection', this.resizeDirection)
      const MIN_WIDTH = 200
      const MIN_HEIGHT = 300
      const vm = this
      function north() {
        vm.height -= deltaY
        vm.height = Math.max(MIN_HEIGHT, vm.height)
        if (vm.height > MIN_HEIGHT) {
          vm.top += deltaY
        }
      }
      function south() {
        vm.height += deltaY
        vm.height = Math.max(MIN_HEIGHT, vm.height)
      }
      function east() {
        vm.width += deltaX
        vm.width = Math.max(MIN_WIDTH, vm.width)
      }
      function west() {
        vm.width -= deltaX
        vm.width = Math.max(MIN_WIDTH, vm.width)
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
        this.moused = first
        return
      }
      this.left += deltaX
      this.top += deltaY
    }
  }
}
</script>

<style lang="scss">

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
</style>
<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 990;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.dialog-wrapper {
  position: absolute;
  overflow: hidden;
  z-index: 999;
  background-color: #fff;
  border: solid 10px;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.dialog-wrapper.moused {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.dialog-container {
  padding: 20px 30px;
  overflow: auto;
}

.dialog-header {
  cursor: pointer;
  background-color: palegoldenrod;

  .dialog-header-content {
    margin-top: 15px;
    margin-left: 15px;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
    color: #383c45;
  }
  .dialog-header-menu {
    margin-top: 15px;
    margin-right: 15px;
  }
}

.dialog-body {
  /*margin: 20px 0;*/
  /*width: 100%;*/
}

.dialog-footer {
  align-items: flex-end;
  .dialog-footer-content {
    flex-grow: 1;
  }
  .dialog-footer-errors li {
    /*margin-left: 5px;*/
  }
  .dialog-footer-button-space {
    display: inline-block;
    width: 2rem;
  }
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
