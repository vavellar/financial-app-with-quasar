
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar, Notify } from 'quasar'
import 'quasar/src/css/index.sass'
import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import { key } from './types'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const app = createApp(App)
export const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(store, key)
app.use(router)
app.use(Quasar, {
    plugins: {
      Notify
    },
    config: {
      notify: { /* look at QuasarConfOptions from the API card */ }
    }
  })

app.mount('#app')