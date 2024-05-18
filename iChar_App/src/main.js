
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.provide('cart', [])

app.use(router)

app.mount('#app')
