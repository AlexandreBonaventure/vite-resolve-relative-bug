import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { HELLO } from 'lib'

alert('Value', HELLO)

createApp(App).mount('#app')
