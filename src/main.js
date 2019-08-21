import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

import { MdDrawer, MdButton } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton)
Vue.use(MdDrawer)


new Vue({
  render: h => h(App),
  store
}).$mount('#app')
