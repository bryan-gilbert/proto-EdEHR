<template lang="pug">
  transition(name="modal")
    div(class="modal-mask")
      div(class="modal-wrapper")
        div(class="modal-container")
          div(class="modal-header columns")
            div(class="modal-header-content column is-11")
              h3
                slot(name="header") default header
            div(class="modal-header-menu  column is-1")
              button(class="modal-close-button", @click="$emit('cancel')") X
          div(class="modal-body")
            slot(name="body") default body
          div(class="modal-footer")
            div(class="modal-footer-errors", v-if="errors.length")
              p Please correct the following
              ul
                li(v-for="error in errors") {{error}}
            div(class="modal-footer-bar columns")
              div(class="modal-footer-content column")
              button(class="modal-default-button column", @click="$emit('save')")
                slot(name="button1") default close button
</template>

<script>
export default {
  name: 'Modal',
  props: {
    errors: Array
  },
  computed: {
    saveEnabled() {
      return false
    }
  },
  components: {}
}
</script>

<style lang="scss">
@import '../../scss/settings/color.scss';
@import '../../scss/styles.scss';

.modal-mask {
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

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 900px;
  margin: 0px auto;
  padding: 20px 30px;
  overflow: hidden;
  background-color: $white;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: $bodyFontFamily;
}

.modal-header h3 {
  margin-top: 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  color: $grey70;
}

.modal-body {
  margin: 20px 0;
  width: 100%;
}

.modal-footer {
  align-items: flex-end;
  padding: 0 25px;

  .modal-footer-content {
    flex-grow: 1;
  }

  .modal-footer-errors li {
    margin-left: 5px;
  }
}

.modal-default-button {
  background-color: $grey70;
  border-radius: 4px;
  border: none;
  box-shadow: inset 0 2px 0 0 $white, 0 1px 2px 0 rgba(21, 26, 36, 0.2);
  color: $white;
  text-align: center;
  text-shadow: 0 1px 0 0 $white;
  line-height: 19px;
  font-size: 15px;
}

.modal-close-button {
  border: none;
  background: $white;
  font-weight: 600;
  font-size: 1em;
  color: $black;
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
    border: 1px solid $grey20;
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
  * transition="modal" when their visibility is toggled
  * by Vue.js.
  *
  * You can easily play with the modal transition by editing
  * these styles.
  */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
