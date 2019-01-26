<template lang="pug">
  transition(name="modal")
    div(class="modal-mask")
      div(class="modal-wrapper")
        app-dialog-shell
</template>

<script>
import AppDialogShell from './AppDialogShell'
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
  components: {
    AppDialogShell
  }
}
</script>

<style lang="scss">
@import '../../scss/settings/color.scss';
@import '../../scss/settings/typography.scss';
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
  background: white;
  font-weight: 600;
  font-size: 16px;
  color: $black;
}

/* **********
  *
  * Styling generic input elements that appear in EdEHR dialogs
  *
  */
/* **********
* TODO  rename this class to something like dialog-row.
* TODO move css here into _form.scss and standardize or create a _dialog.scss file near the _form.scss and let these two files share stuff.
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
