import { ipcRenderer } from 'electron'

export default () => {
  // menu-pannel
  window.onload = function () {
    function confirmEnding (str, target) {
      // 请把你的代码写在这里
      var start = str.length - target.length
      var arr = str.substr(start, target.length)
      if (arr === target) {
        return true
      }
      return false
    }

    let storage = window.localStorage
    for (var key in storage) {
      if (confirmEnding(key, '_loginEmail')) {
        ipcRenderer.send('localstore', storage.getItem(key))
      }
    }
  }
}
