import Vue from 'vue'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import 'vue-snotify/styles/material.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery/dist/jquery.min.js'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/jquery.dataTables.min.css'

const options = {
  toast: {
    position: SnotifyPosition.rightCenter,
    showProgressBar: false,
    timeout: 3000,
    titleMaxLength: 100
  }
}
Vue.use(Snotify, options)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.component('vuetable', Vuetable)
Vue.component('vuetable-pagination', VuetablePagination)
Vue.component('vuetable-pagination-info', VuetablePaginationInfo)
