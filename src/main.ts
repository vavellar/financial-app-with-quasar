
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar, Notify } from 'quasar'
import 'quasar/src/css/index.sass'
import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import { key } from './types'

const myApp = createApp(App)
myApp.use(store, key)

myApp.use(Quasar, {
    plugins: {
      Notify
    },
    config: {
      notify: { /* look at QuasarConfOptions from the API card */ }
    }
  })

myApp.mount('#app')