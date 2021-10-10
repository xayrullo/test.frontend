import Vue from 'vue'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import 'vue-snotify/styles/material.css'

const options = {
  toast: {
    position: SnotifyPosition.rightCenter,
    showProgressBar: false,
    timeout: 3000,
    titleMaxLength: 100
  }
}
Vue.use(Snotify, options)
