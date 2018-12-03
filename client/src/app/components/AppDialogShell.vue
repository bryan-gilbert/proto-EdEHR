<template lang="pug">
  transition(name="dialog")
    div(class="dialog-container", v-dragged="onDragged")
      div(class="dialog-header columns")
        div(class="dialog-header-content column is-11")
          h3
            slot(name="header") default header
        div(class="dialog-header-menu  column is-1")
          button(class="dialog-close-button", @click="$emit('cancel')") X
      div(class="dialog-body")
        div deltaX: {{ deltaX }}
        div deltaY: {{ deltaY }}
        div offsetX: {{ offsetX }}
        div offsetY: {{ offsetY }}
        div clientX: {{ clientX }}
        div clientY: {{ clientY }}
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
export default {
  name: 'AppDialog',
  props: {
    errors: Array
  },
  computed: {
    saveEnabled() {
      return false
    }
  },
  data() {
    return {
      deltaX: 0,
      deltaY: 0,
      offsetX: 0,
      offsetY: 0,
      clientX: 0,
      clientY: 0,
      dragged: false
    }
  },
  methods: {
    onDragged({ el, deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last }) {
      if (first) {
        this.dragged = true
        return
      }
      if (last) {
        this.dragged = false
        return
      }
      var l = +window.getComputedStyle(el)['left'].slice(0, -2) || 0
      var t = +window.getComputedStyle(el)['top'].slice(0, -2) || 0
      el.style.left = l + deltaX + 'px'
      el.style.top = t + deltaY + 'px'
      this.deltaX = deltaX
      this.deltaY = deltaY
      this.offsetX = offsetX
      this.offsetY = offsetY
      this.clientX = clientX
      this.clientY = clientY
    }
  }

}
</script>

<style lang="scss">
.dialog-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.dialog-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.dialog-container {
  width: 900px;
  margin: 0px auto;
  padding: 20px 30px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
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
