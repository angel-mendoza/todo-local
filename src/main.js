import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App.vue'
import routes from '@/routes'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faBars } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faBars)


const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
