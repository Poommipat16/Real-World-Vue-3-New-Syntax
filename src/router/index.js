import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', //URL
      name: 'event-list', //Route name
      component: EventListView //Which component to render
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    }
  ]
})

export default router
