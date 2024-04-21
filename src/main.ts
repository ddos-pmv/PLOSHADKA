import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import HomeView from './views/HomeView.vue'
import PlayGroundsView from './views/PlayGroundsView.vue'

const router = createRouter({
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/playGrounds',
      component: PlayGroundsView
    }
  ],
  history: createWebHistory()
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
