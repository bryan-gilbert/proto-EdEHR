
// const POINTER_START_EVENTS = ['mouseover']
// const POINTER_MOVE_EVENTS = ['mousemove', 'touchmove']
// const POINTER_END_EVENTS = ['mouseup', 'touchend']
// var draggedElem

var u = {
  addEventListeners (el, events, handler) {
    for (var i = 0, len = events.length; i < len; i++) {
      el.addEventListener(events[i], handler)
    }
  },

  removeEventListeners (el, events, handler) {
    for (var i = 0, len = events.length; i < len; i++) {
      el.removeEventListener(events[i], handler)
    }
  }
}

const POINTER_START_EVENTS = ['mousedown', 'touchstart']
const POINTER_MOVE_EVENTS = ['mousemove', 'touchmove']
const POINTER_END_EVENTS = ['mouseup', 'touchend']

const MOUSE_ENTER = ['mouseenter']
const MOUSE_OVER = ['mouseover']
const MOUSE_LEAVE = ['mouseleave']

export default {
  inserted (el, binding, vnode) {
    var mousedElem
    var container
    var delta // the thickness of the hovered border area
    var resizeDirection = null
    var overContainer = false;
    var mouseDownMove = false
    var resizingNow = false
    if (!document) {
      console.log('no root document for directive so return and do nothing')
      return
    }
    delta = window.getComputedStyle(el)['border-right-width'].slice(0, -2) || 10
    u.addEventListeners(el, MOUSE_ENTER, mouseEnterBorder)

    function mouseEnterBorder (evt) {
      evt.preventDefault()
      if (evt.target === evt.currentTarget) {
        mousedElem = el
        container = mousedElem
        resizeDirection = null
        overContainer = false
        console.log('ENTER BORDER')
        addOverListener(mousedElem)
      }
    }

    function mouseLeaveBorder (evt) {
      evt.preventDefault()
      console.log('LEAVE BORDER')
      overContainer = false
      resizeDirection = null
      removeOverListener(mousedElem)
      cleanUp()
    }

    function mouseMoveOnBorder (evt) {
      var currentDirection = overBorderCalc(evt)
      if (currentDirection) {
        // on top of the border
        if (!resizeDirection) {
          if (overContainer) {
            console.log('REENTER BORDER ', currentDirection)
            addOverListener(mousedElem)
          } else {
            console.log('ENTER BORDER ', currentDirection)
          }
          resizeDirection = currentDirection
          setContainerCursor(container, currentDirection)
          // addMouseDownListeners()
        } else if (resizeDirection !== currentDirection) {
          console.log('CHANGE direction', currentDirection)
          setContainerCursor(container, currentDirection)
          resizeDirection = currentDirection
        }
      } else {
        // else not on top of the border
        if (resizeDirection) {
          console.log('CENTER BORDER ')
          resizeDirection = null
          overContainer = true
          setContainerCursor(container, null)
          removeOverListener(mousedElem)
          // if (resizingNow) {
          //   console.log('LEAVE WHILE RESIZEING.  what to do here')
          // } else {
          // removeMouseDownListeners()
          // }
        }
      }
    }

    function mouseDownOnBorder (evt) {
      evt.preventDefault()
      console.log('MOUSE DOWN')
      resizingNow = true
      addTrackingListeners()
      removeOverListener(mousedElem)
    }

    function mouseMove (evt) {
      evt.preventDefault()
      console.log('mouse move while down')
    }

    function mouseUp (evt) {
      evt.preventDefault()
      console.log('MOUSE UP')
      resizingNow = false
      removeTrackingListeners()
    }

    function overBorderCalc (evt) {
      var rect = container.getBoundingClientRect()
      // console.log('delta', delta)
      var x = evt.clientX - rect.left // the relative mouse postion to the element
      var y = evt.clientY - rect.top // ...
      var w = rect.right - rect.left // width of the element
      var h = rect.bottom - rect.top // height of the element
      var directionStr = '' // which cursor to use
      if (y < delta) directionStr += 'n' // north
      else if (y > h - delta) directionStr += 's' // south
      if (x < delta) directionStr += 'w' // west
      else if (x > w - delta) directionStr += 'e' // east
      // console.log('over border calculation: ' + direction)
      var enableResize = directionStr.length > 0
      return enableResize ? directionStr : null
    }

    function setContainerCursor (container, directionStr) {
      var cursor = directionStr ? directionStr + '-resize' : null
      container.style.cursor = cursor
    }

    function cleanUp () {
      console.log('clean up all listeners')
      mouseDownMove = false
      if (container) {
        container.style.cursor = null
      }
      // removeTrackingListeners()
      // if (mousedElem) {
      //   u.removeEventListeners(mousedElem, MOUSE_LEAVE)
      // }
      mousedElem = null
    }

    var addRemoveCnt = 0
    function addTrackingListeners () {
      addRemoveCnt++
      console.log('add pointer', addRemoveCnt)
      u.addEventListeners(document.documentElement, POINTER_MOVE_EVENTS, mouseMove)
      u.addEventListeners(document.documentElement, POINTER_END_EVENTS, mouseUp)
    }

    function removeTrackingListeners () {
      addRemoveCnt--
      console.log('remove pointer', addRemoveCnt)
      u.removeEventListeners(document.documentElement, POINTER_MOVE_EVENTS)
      u.removeEventListeners(document.documentElement, POINTER_END_EVENTS)
    }

    var cntDownListener = 0
    function addMouseDownListeners () {
      cntDownListener++
      console.log('add down ', cntDownListener)
      u.addEventListeners(document.documentElement, POINTER_START_EVENTS, mouseDownOnBorder)
    }

    function removeMouseDownListeners () {
      cntDownListener--
      console.log('rem down ', cntDownListener)
      u.removeEventListeners(document.documentElement, POINTER_START_EVENTS)
    }

    var cntOverListener = 0
    function addOverListener (elem) {
      cntOverListener++
      console.log('add over ', cntOverListener)
      u.addEventListeners(elem, POINTER_MOVE_EVENTS, mouseMoveOnBorder)
      u.addEventListeners(elem, MOUSE_LEAVE, mouseLeaveBorder)
    }

    function removeOverListener (elem) {
      cntOverListener--
      console.log('rem over ', cntOverListener)
      u.removeEventListeners(elem, POINTER_MOVE_EVENTS)
      u.removeEventListeners(elem, MOUSE_LEAVE)
    }
  },
  unbind (el) {
    u.removeEventListeners(el, MOUSE_ENTER)
  }
}
