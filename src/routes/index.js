import HomeView from '@/views/HomeView'
import NotFoundView from '@/views/NotFoundView'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundView',
    component: NotFoundView
  }
]

export default routes