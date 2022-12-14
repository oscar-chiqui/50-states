// The router 

import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from'@/services/stateService'
import router from '@/router'

// leaflet import 
import 'leaflet/dist/leaflet.css'

let app = createApp(App)

app.config.globalProperties.$stateService = StateAPIService

app.use(router)
app.mount('#app')
