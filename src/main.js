import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/style.css'


import App from './App.vue'
import routes from '@/routes'

/* importar el core de fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'

/* importar el componente font-awesome-icon */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* importar iconos */
import { faUserSecret, faBars, faPlus, faChevronLeft, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

/* agregar los iconos */
library.add(faBars)
library.add(faPlus)
library.add(faUserSecret)
library.add(faChevronLeft)
library.add(faCircleQuestion)


const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
import 'bootstrap/dist/js/bootstrap.min'