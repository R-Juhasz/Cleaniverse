import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'; // Import your router

createApp(App).use(router).mount('#app'); // Use the router in your app
