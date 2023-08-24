import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/style.css'


import App from './App.vue'
import routes from '@/routes'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faBars, faPlus, faChevronLeft, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
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